# Qiaben.com cutover runbook

This is the exact sequence to flip `qiaben.com` from WordPress (GoDaddy) to this Docusaurus site (GitHub Pages + Cloudflare).

**Pre-cutover state:** new site is live at `https://qiaben.github.io/qiaben-com-web/` for staging. WordPress still serves `qiaben.com` from GoDaddy via Cloudflare DNS.

**Post-cutover state:** `qiaben.com` apex serves the Docusaurus site; legacy WP retained at `legacy.qiaben.com` for 30 days as a safety net.

Estimated total downtime: **0** (if DNS is staged carefully).

---

## Stage 0 — Pre-flight (do before touching DNS)

- [ ] **Confirm tracking** — open the staging site in an incognito window, run [Tag Assistant](https://tagassistant.google.com/) and Facebook's [Pixel Helper](https://chromewebstore.google.com/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc). Both should fire on initial page view.
- [ ] **Eyeball each migrated page** — homepage + 12 service pages + about + blog index + 2 random blog posts. Check copy, images, layout.
- [ ] **Verify 178 blog posts indexed** — visit `https://qiaben.github.io/qiaben-com-web/blog/` and page through (15 pages, 10/page).
- [ ] **Run final build** locally with `DEPLOY_ENV=production npm run build` and confirm it succeeds.

If any of those have issues, fix and redeploy before proceeding.

---

## Stage 1 — Mark new site as production-ready

1. **Set repo variable.** GitHub → `qiaben/qiaben-com-web` → **Settings → Secrets and variables → Actions → Variables → New repository variable**:
   - Name: `DEPLOY_ENV`
   - Value: `production`
2. **Trigger a deploy.** Push any commit (or run **Actions → Deploy to GitHub Pages → Run workflow**). The build now uses `https://qiaben.com/` as the canonical URL and serves at root (no `/qiaben-com-web/` prefix).
3. The `static/CNAME` file (already in the repo) tells GitHub Pages to expect the custom domain.

---

## Stage 2 — Stage the new origin

Don't touch apex DNS yet.

1. In Cloudflare, **add a CNAME** for staging confirmation:
   - `Type`: CNAME
   - `Name`: `new` (creates `new.qiaben.com`)
   - `Target`: `qiaben.github.io`
   - `Proxy status`: **DNS only** (gray cloud) — important for the first cert issuance.
2. Wait 1–2 minutes for DNS to propagate.
3. Open `https://new.qiaben.com/`. **Without** Cloudflare proxy, GitHub will issue a Let's Encrypt cert for `new.qiaben.com` automatically and serve over HTTPS. Confirm the page loads with valid HTTPS.
4. Click around — a few service pages, blog posts, the Calendly link. This validates the new site fully on a real domain before flipping apex.

If anything fails at this stage, fix it. Don't proceed to Stage 3.

---

## Stage 3 — Apply the redirect rules in Cloudflare

Cloudflare needs to be ready to redirect WP-only URLs the moment the new site is live.

1. Cloudflare → **Rules → Redirect Rules → Create rule** → **"Bulk Redirects"** (under Single Redirects choose Bulk).
2. **Create a redirect list:**
   - Name: `qiaben-com-wp-migration`
   - Description: `WP root-slug posts and slug remaps from migration`
   - Click **Edit list → Upload from file**, upload `cloudflare-redirects.csv` (in the repo root).
   - Confirm 194 rules imported.
3. **Activate the list:**
   - Cloudflare → **Account → Bulk Redirects → Configurations → Create**
   - Source list: `qiaben-com-wp-migration`
   - Save.
4. **Don't** enable the rules yet on the qiaben.com zone — they'd hit the still-WP origin and create loops. We enable in Stage 4 right after the apex flip.

---

## Stage 4 — Flip the apex (this is the cutover)

Pick a low-traffic window.

1. **Reduce TTL** on existing apex records to 5 minutes (300s), 24 hours in advance. This minimises stale resolution after the flip.
2. **Backup current DNS** — screenshot the existing A/CNAME records for `qiaben.com` apex.
3. **Replace apex records** in Cloudflare with GitHub Pages IPs:
   ```
   A  qiaben.com  185.199.108.153   (DNS only — gray cloud)
   A  qiaben.com  185.199.109.153   (DNS only)
   A  qiaben.com  185.199.110.153   (DNS only)
   A  qiaben.com  185.199.111.153   (DNS only)
   ```
   Or, if Cloudflare's CNAME flattening is enabled (it is by default on the apex):
   ```
   CNAME  qiaben.com  qiaben.github.io   (DNS only)
   ```
4. **Update `www`** to also point at GitHub Pages:
   ```
   CNAME  www  qiaben.github.io   (DNS only)
   ```
5. **Wait** for HTTPS to provision. GitHub will detect the apex DNS and issue a cert (5–15 minutes). Watch `Settings → Pages → Custom domain` — it'll show the cert state.
6. **Once the cert is issued and HTTPS works**, enable Cloudflare proxy (orange cloud) on both `qiaben.com` and `www.qiaben.com`. Cloudflare's SSL/TLS mode must be **Full (strict)** — Pages serves a real cert, so this works.
7. **Activate the bulk redirect rule** (created in Stage 3) on the `qiaben.com` zone. WP root-slug URLs now 301 to `/blog/<slug>/`, slug remaps fire, etc.

---

## Stage 5 — Move WP to legacy

Old WP must remain reachable for 30 days as a safety net.

1. **Add a CNAME for legacy:**
   ```
   CNAME  legacy  <godaddy-host>   (proxied or DNS-only — your call)
   ```
   Where `<godaddy-host>` is whatever the GoDaddy hosting target is (or its IP).
2. **In WordPress**, update the site URL via WP-CLI or `wp-config.php`:
   ```
   define( 'WP_HOME',    'https://legacy.qiaben.com' );
   define( 'WP_SITEURL', 'https://legacy.qiaben.com' );
   ```
3. **Verify** `https://legacy.qiaben.com/wp-admin/` works. Old content is browsable as fallback.
4. **Disable login** on legacy if you want — it's read-only at this point.

---

## Stage 6 — Sanity checks (within 24 hours)

- [ ] `https://qiaben.com/` loads the new homepage.
- [ ] `https://qiaben.com/medical-billing-service/` loads.
- [ ] A WP-only blog URL like `https://qiaben.com/what-is-dental-billing/` 301s to `/blog/what-is-dental-billing/`.
- [ ] `https://qiaben.com/about-us/` 301s to `/about/`.
- [ ] Cloudflare Analytics shows traffic.
- [ ] Google Tag Manager → Tag Assistant on the live site shows tags firing.
- [ ] Search Console: submit the new sitemap (`https://qiaben.com/sitemap.xml` — Docusaurus generates this) and request reindex.
- [ ] Spot check `~5` blog post URLs, `~5` service pages.

If anything's broken, the rollback is fast: revert Stage 4 DNS to the screenshot from step 2.

---

## Stage 7 — Retire WP (after 30 days, no incidents)

- [ ] Cancel GoDaddy hosting subscription.
- [ ] Remove `legacy.qiaben.com` CNAME from Cloudflare.
- [ ] Archive the WXR export (`qiabenhealth.WordPress.2026-05-09.xml`) and the uploads tarball (`qiaben-uploads.tar.gz`) to long-term storage.
- [ ] Rotate the GoDaddy SSH password one last time before account closure.

---

## What's in this repo

- **[src/pages/](src/pages/)** — 32 marketing pages (MDX with hero + Reveal animations + CTA) plus custom homepage / contact / privacy.
- **[blog/](blog/)** — 178 posts converted from WP, slugs preserved.
- **[static/img/uploads/](static/img/uploads/)** — 271 referenced images extracted from the GoDaddy uploads (rest of the 9,795 files unused, archived in the tarball).
- **[cloudflare-redirects.csv](cloudflare-redirects.csv)** — 194 redirect rules (178 blog posts + 16 slug remaps and drop redirects).
- **[CNAME](static/CNAME)** — `qiaben.com`. GitHub Pages reads this on deploy.
- **[../MIGRATION-STATUS.md](../MIGRATION-STATUS.md)** — full URL-by-URL migration coverage, refreshed any time via `node /tmp/sitemap-coverage-v2.mjs`.
- **[.github/workflows/deploy.yml](.github/workflows/deploy.yml)** — GH Actions build + deploy. Reads `DEPLOY_ENV` repo variable to decide canonical URL.

## Tracking

Mirrors the live qiaben.com tag stack:
- GTM `GTM-PJJZ78Q3` (primary, via `preset.classic.googleTagManager`)
- GTM `GTM-P59P9PBR` (secondary, via `headTags` script)
- gtag IDs: `G-M2TQG7MBXB`, `G-DEQLSJEEPP`, `GT-KTRJXSJ4`, `AW-11217555008` (all in `preset.classic.gtag.trackingID` array)
- Facebook Pixel `829763808937153` (via `headTags`)

If a tag stops firing post-cutover, check `Settings → Secrets and variables → Actions → Variables → DEPLOY_ENV` is `production` and inspect `<head>` of the live site.
