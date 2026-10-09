# Newsletter signup: Mailchimp setup

The site's quarterly newsletter signup posts straight to a Mailchimp audience. Nothing is hosted on our server: Mailchimp stores subscribers, sends the confirmation email, and handles unsubscribes.

Until Mailchimp is configured, the build leaves every signup form out, so the code is safe to merge and deploy before the account exists.

## Where the signup appears

| Placement | Fields | `SOURCE` value |
|---|---|---|
| Footer band on every page (except the two below) | Email | `footer` |
| Homepage, above the closing call to action | Email, first/last name, organization, country | `home` |
| Community > Get Involved | Same as homepage | `get-involved` |

Pages that carry the full card set `"newsletterFooter": false` in their meta comment so visitors never see two forms on one page. To add the card to another page, drop this in the page fragment:

```html
<!--nl:start-->
<section class="section">
  <div class="wrap">
{{NEWSLETTER:my-page}}
  </div>
</section>
<!--nl:end-->
```

The card markup lives in `site/_layout/newsletter-signup.html`; styles are under "Newsletter signup" in `site/_assets/site.css`.

## Current configuration (October 2026)

- Account data center `us6`, audience **OpenELIS Global** (audience ID `b7e36f0257`), embedded form "openelis-global.org website".
- From name "OpenELIS Global", from/reply-to `digit@uw.edu`. uw.edu's DMARC policy is `p=none`, so Mailchimp can send as uw.edu; moving to an authenticated `openelis-global.org` sender later would improve deliverability.
- Double opt-in on; reCAPTCHA on for double opt-in forms (subscribers may see a Mailchimp captcha page after submitting).
- Fields: the default Company field was renamed to Organization with merge tag `ORG`; `COUNTRY` and `SOURCE` added.
- Hosted signup page for emails and slides: https://openelis-global.us6.list-manage.com/subscribe?u=e066b7de317f420568896d196&id=b7e36f0257

## One-time Mailchimp setup

Mailchimp moves menu items around now and then, so treat the paths below as a guide.

1. **Create the account and audience.** Use a shared DIGI login rather than a personal one. In the audience defaults, set:
   - **From name:** OpenELIS Global
   - **From email:** an address on a domain we control (for example `newsletter@openelis-global.org`). Sending "from" a `uw.edu` address through Mailchimp tends to land in spam because we can't authenticate uw.edu for Mailchimp.
   - **Physical address:** DIGI's UW office address (required by anti-spam law; shown in every email footer).
2. **Turn on double opt-in.** Audience > Settings > Audience name and defaults > enable double opt-in. Subscribers confirm by email before they're added, which keeps the list clean and supports consent requirements for international subscribers.
3. **Add the audience fields.** Audience > Settings > Audience fields and \*|MERGE|\* tags. `EMAIL`, `FNAME`, and `LNAME` exist by default. Add three text fields with exactly these tags, none required:

   | Label | Merge tag | Visible on Mailchimp's own form? |
   |---|---|---|
   | Organization | `ORG` | Yes |
   | Country | `COUNTRY` | Yes |
   | Signup source | `SOURCE` | No (hidden) |

4. **Copy two values from the embedded form.** Audience > Signup forms > Embedded forms. In the generated code, find:
   - the form's `action="https://....list-manage.com/subscribe/post?u=...&id=...&f_id=..."` URL
   - the hidden bot-trap input, whose name looks like `b_<long id>_<long id>`
5. **Paste them into `site/build.mjs`** in the `NEWSLETTER` block near the top:

   ```js
   const NEWSLETTER = {
     action: 'https://xxxx.us21.list-manage.com/subscribe/post?u=...&id=...&f_id=...',
     honeypot: 'b_..._...',
     archive: '',  // optional, see below
   };
   ```

   Paste the URL as-is (with plain `&`); the build escapes it.
6. **Rebuild and deploy.** `node site/build.mjs`, then `node site/smoke-test.mjs`, then deploy as usual. The "Mailchimp not configured" warning in the build output goes away once the values are valid.
7. **Test it.** Subscribe from the footer and from the homepage with a test address, confirm via the email, and check the contact in Mailchimp shows the right `SOURCE`.

## Optional extras

- **Past issues link.** Mailchimp provides a public campaign archive page for each audience. Put its URL in `archive` and the cards show "Read past issues".
- **Hosted signup page.** Signup forms > Form builder gives a Mailchimp-hosted signup URL. Use it in emails, slide decks, conference handouts, and social posts where the website form isn't handy.
- **Signup source report.** Segment the audience by `SOURCE` to see which placement brings in subscribers.

## Plan limits (checked October 2026)

Mailchimp's free plan covers up to 250 contacts and 500 sends a month, with Mailchimp branding and no scheduling. A quarterly send fits the send limit easily; the contact cap is the constraint. Past 250 subscribers, the Essentials plan (from about $13/month for 500 contacts) is the next step. Switching plans needs no website change.

## How it works

Each form is a plain HTML `POST` to Mailchimp with `target="_blank"`, so no JavaScript is involved and nothing touches our server. Mailchimp opens its own "almost finished, check your email" page in a new tab. A hidden off-screen field traps bots, as in Mailchimp's own embed code.
