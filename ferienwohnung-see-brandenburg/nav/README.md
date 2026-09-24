# Navigation and footer

Source: `get_site_config` for site id 51 (ferienwohnung-see-brandenburg.de), archived 2026-09-24. The HTML files in this folder contain exactly what the tool returned (no trailing newline added; the default versions keep their CRLF line endings).

| File | Field in `get_site_config` | Status |
|---|---|---|
| `nav-de.html` | `languageNavigations[language="de"].navMenuHtml` | **Live** navigation of the site |
| `footer-de.html` | `languageNavigations[language="de"].footerHtml` | **Live** footer of the site |
| `nav-default.html` | `navMenuHtml` (language-independent) | Platform fallback, not served while the `de` version exists |
| `footer-default.html` | `footerHtml` (language-independent) | Platform fallback, not served while the `de` version exists |

## Why the `de` versions are the live ones

The site has a single language, `de`, which is also its default language (see `notes/platform-status.md`, `get_site_settings`). The platform resolves navigation and footer per language: when a language-specific entry exists in `languageNavigations`, that HTML is served for pages of that language; the language-independent `navMenuHtml` / `footerHtml` are only the fallback for languages without their own entry. Since every page of this site is German, `nav-de.html` and `footer-de.html` are what visitors see.

The `de` versions were written by hand for this site: a fixed dark header with two dropdowns (Unterkünfte, Region), phone / WhatsApp icons and the "Verfügbarkeit anfragen" button, an off-canvas mobile menu, and inline `<style>` and `<script>` for the scroll and menu behaviour; the footer has four columns (brand and contact, Unterkünfte, Region, Service) plus the four Booking.com links and the cookie-settings button. Both use site variables (`{{phone_link}}`, `{{whatsapp_link}}`, `{{company_name}}`, `{{company_address}}`, `{{email}}`, `{{hours}}`, `{{booking_u1}}` … `{{booking_u4}}`, see `config/variables.md`), which the server resolves when the page is served. They also keep the `<!--tb-nav-insert-->` and `<!--tb-footer-insert-->` markers so the platform can append entries for pages published later.

## What the default versions are

`nav-default.html` and `footer-default.html` are the platform's automatically generated chrome (`data-tb-nav="auto"`, `data-tb-footer="auto"`): a plain white header with the site name, and a dark four-column footer with contact data, page links and a legal column. The links inside the `data-tb-nav-links` and `data-tb-footer-links` containers, just before the `<!--tb-nav-insert-->` / `<!--tb-footer-insert-->` markers, were **inserted by the server** when the pages of SEO plan 65 were generated: each plan item carries `publishActions` with `AddToNavigation` / `AddToFooter` and a `NavLabel` (see `notes/seo-plan.md`). That is why the labels look truncated ("Ferienhäuser &", "Anreise nach Königs", "Aktivitäten am See im", "Ferienhaus am See in der"): they are the stored `NavLabel` values, not typos. The `<!--tb-footer-legal-->` marker is where the platform would link its own privacy and cookie pages; on this site those default paths are redirected to `/datenschutz` (see `config/redirects.md`). The Italian comment inside the footer is part of the platform template.

These default files are kept for completeness only. Do not restore them over the `de` versions.

## Restoring

Restore the live chrome with `save_navigation` for language `de`, passing the contents of `nav-de.html` as the navigation HTML and `footer-de.html` as the footer HTML. Head tags and the footer script belong to `config/head-tags.html` and `config/footer-scripts.html` (`save_head_tags` / `save_footer_scripts`).
