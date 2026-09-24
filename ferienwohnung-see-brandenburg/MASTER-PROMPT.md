# MASTER PROMPT — Build **ferienwohnung-see-brandenburg.de**
### Cinematic holiday-rental website for three lakeside houses in Königs Wusterhausen (Brandenburg), on the Timbaly platform via MCP

> **Version:** 1.3 · **Date:** 2026-09-24 · **Prepared for:** the AI agent that will build the site (Claude or comparable, with the Timbaly MCP connector `Ferienwohung_brandenburg` = ferienwohnung-see-brandenburg.de) · **Owner:** Ausblicke Management GmbH / Seehaus Berlin (Marita Briese)
>
> **How to use this document:** paste it whole into the agent's first message (or attach it) and say: *"Execute this master prompt. Work phase by phase, verify every phase before moving on, and stop only for the questions listed in §12 that block you."* Everything the agent needs is in here: verified facts, image URLs, page-by-page specifications, the SEO/GEO plan, the tool-by-tool runbook and the acceptance checklist. Where a fact is **not** verified it is marked **[TO CONFIRM]** — the agent must not invent it.
>
> **Changelog 1.2 (same day):** the Booking.com listings of U3 and U4 were retrieved and transcribed (Appendix F) and merged into §2, §5, Appendix A/B/D; U4 was re-identified as the **villa Fontanestraße 35, Kablow** (§1.4) — every earlier mention of Sauna/Wintergarten/Steg/Grill for U4 was removed; the Haus am Biotop photo set moved to a reserve section (B.7); the owner question list (§12) was reduced to the open points; postal codes verified (Karl-Marx-Straße Zernsdorf 15712, Fontanestraße Kablow 15712).
>
> **Changelog 1.3 (same day):** the Booking listing of **U1 Maisonette** was retrieved after a cool-down (Appendix F.0) and merged into §2.2, §5.5, Appendix A, B.1 and D; the owner-site villa interiors were identified as mostly main-house photos, not the Maisonette (B.1 note); U2 Apartment is now the only unit without Booking data.

---

## 0. Mission, quality bar and non-negotiables

**Mission.** Turn the empty Timbaly site **ferienwohnung-see-brandenburg.de** into a premium, cinematic, conversion-oriented German-language website that rents out four holiday units in three lakeside houses in Königs Wusterhausen (Dahme-Seenland, Brandenburg, 35–40 km south-east of Berlin):

| # | Unit (working name) | House / address | Booking.com listing |
|---|---|---|---|
| U1 | **Maisonette am Krüpelsee** | Villa am Krüpelsee, Karl-Marx-Straße 8, 15712 Königs Wusterhausen OT Zernsdorf | https://www.booking.com/hotel/de/traum-maisonette-direkt-am-see.de.html (share: https://www.booking.com/Share-5C0nOc) |
| U2 | **Apartment am Krüpelsee** | same villa | https://www.booking.com/hotel/de/leben-direkt-am-see.de.html (share: https://www.booking.com/Share-bpaoCA) |
| U3 | **Gästehaus am Großen Zug** | Galeriehaus am See (Designvilla), Seestraße 41, 15713 Königs Wusterhausen OT Niederlehme | https://www.booking.com/hotel/de/gastehaus-am-grossen-zug-see.de.html (share: https://www.booking.com/Share-oF7mmA) |
| U4 | **Ferienhaus am See in der Natur** (owner's word „Seebiotophaus") | Villa Fontanestraße 35, 15712 Königs Wusterhausen OT Kablow — identified via the Booking listing (§1.4); Booking shows PLZ 15758 | https://www.booking.com/hotel/de/ferienhaus-am-see-in-der-natur.de.html (share: https://www.booking.com/Share-Hh37cg) |

**Quality bar.** "Maximum quality, not speed." Every page must look like a boutique-hotel launch site: full-bleed photography, cinematic light, large serif headlines, calm whitespace, precise micro-typography, zero broken images, zero placeholder text, zero invented facts. Mobile is half the audience: every page passes the mobile layout probe (§10) at 390 px.

**Non-negotiables (violating any of these = failed delivery):**
1. **No invented facts.** Prices, bed counts, max guests, check-in times, pets policy, distances and times come only from this document, from the owner, or from the sources listed in §1. Anything unknown is written as "auf Anfrage" or left out. Approximate values carry "ca.".
2. **Only real photos of the real houses.** Use exclusively the image URLs in Appendix B (they are the owner's own photos, already published on the owner's sister sites). Never use stock, never use AI-generated imagery for the properties, never hot-link: every image is downloaded and re-uploaded into this site's media library (§8). The AI-looking illustrative renders listed in Appendix B.6 must **not** be used for property depiction; the virtually staged Booking photos flagged in Appendix B.3 only after the owner confirms them.
3. **German first, flawless German.** Site language `de`. Sie-form, warm but precise, no marketing shouting, no SEO jargon visible ("Keyword", "Landing Page", "Google" must never appear in visible copy). English (`en`) is Phase 3.
4. **Platform rules from `get_page_brief.systemPrompt` win** on markup mechanics (no `<nav>`/`<footer>`/`<header>` in page HTML, only listed image URLs, contact form contract, `convert` class on CTAs, 800–1400 visible words per content page, grids start at one column, no fixed widths > 375 px, tables wrapped in `overflow-x-auto`, `[[GALLERY:…]]` shortcode for galleries, images auto-lightboxed so never wrap them in `<a>`).
5. **Every visible number is consistent** across text, tables, FAQ, JSON-LD, `llms.txt` and the knowledge base. Update all of them together.
6. **Legal safety:** consumer prices always "inkl. gesetzlicher MwSt." (PAngV); no "Bestpreis"-claims unless the owner confirms; the mandatory disclaimer line (§5.13) on every property page; privacy consent checkbox before every form's submit button.
7. **Never reveal the sale context.** The three houses are simultaneously marketed for sale on seehaus-berlin.de. Holiday guests must not read about purchase prices, "Exposé", "Courtage" or brokerage anywhere on this site. This site is *only* about staying there.

---

## 1. Context, sources and what is (not) verified

### 1.1 The platform and the connector
- The site runs on **Timbaly**. You edit it through the MCP server **`Ferienwohung_brandenburg`** (domain `ferienwohnung-see-brandenburg.de`, plan `pro`, default language `de`; 0 pages, 0 media, no nav/footer, no logo — but the identity, legal profile, cookie banner, fonts, footer scripts, AI instructions, variables and one knowledge item are already set, see §1.5).
- Sitemap, robots.txt and llms.txt are auto-declared by the platform; IndexNow is enabled; Google Search Console is **not** connected (owner task, §11).
- A second, equally empty domain exists in the same account: **ferienwohnung-am-see.info** (connector `ferienwohnung_info`). Do **not** build a duplicate site there. Recommendation for the owner: 301-redirect it to the main domain at DNS/plan level (or leave unused).
- Sister sites of the same owner, all on Timbaly, readable through their own connectors if you have them (read-only — never edit them): `Seehaus-Berlin` (seehaus-berlin.de, the sales portal), `Karlmarx_VierstegeHaus` (vierstegehaus.de), `seestrase_GaleriehausamSee` (galeriehausamsee.de), `Fontanne_26A` (hausamseebiotop.de), `Fontanne35` (seebiotophaus.de), `Krupelsee_5` (seehaus-kablow.de), `Senzig` (seetraumhaus-senzig.de). All facts and photos in this document were extracted from them on 2026-09-24.

### 1.2 Verified sources (already mined — you may re-read them, you need not)
| Source | What it gave us | Status |
|---|---|---|
| seehaus-berlin.de knowledge base + pages `/angebote/*`, `/kruepelsee-region`, `/anbindung-berlin-zernsdorf-senzig`, `/ueber-uns`, `/impressum` | company data, unit sizes, features, region copy, distances, editorial rules | verified |
| vierstegehaus.de (`/`, `/lage-anbindung`, `/kruepelsee-zernsdorf-see`) + its media library | Villa am Krüpelsee facts, 39 photos | verified |
| galeriehausamsee.de (`/`, `/gaestehaus`, `/lage-und-anbindung`) + media library | Gästehaus facts, 54 media incl. one MP4 | verified |
| hausamseebiotop.de (`/`) + media library | Haus am Biotop (Fontanestraße 26 A) facts, 25 photos — **not the Booking unit**, kept in reserve (B.7) | verified |
| seebiotophaus.de (`/`, `/das-objekt`) + media library (connector `Fontanne35`) | Villa Fontanestraße 35 facts (= U4), 19 media of which 11 originals are usable (B.3) | verified |
| Official/tourism web sources (reiseland-brandenburg.de, dahme-seenland.de, komoot, outdooractive, rome2rio, Wikipedia) | attractions, distances, travel times | verified as "ca." values, see Appendix C |
| **Booking.com listings (4 URLs above)** | U1 + U3 + U4: complete listing content, house rules, coordinates, 46 photos (Appendix F); U2: blocked by Booking's bot protection (403) in every attempt; prices: not rendered for any unit | **3 of 4 retrieved — §1.3 / Appendix F** |

### 1.3 Booking.com data — what was obtained, what is still missing
1. **Obtained (2026-09-24, from the owner's own session links, real Chromium render):** the complete listing content of **U1 Traum-Maisonette direkt am See**, **U3 Gästehaus am großen Zug-See** and **U4 Ferienhaus am See in der Natur** — unit type, size, occupancy, beds, facilities, house rules (check-in/out, children, pets, smoking, parties), languages, the single U3 review, coordinates, Booking's distances and all listing photos with download URLs. It is transcribed in **Appendix F** and merged into §2, §5, Appendix A and B. Treat Appendix F as verified facts (the owner declared them on Booking herself).
2. **Still missing:** (a) the listing content of **U2 Apartment „Leben direkt am See"** (Booking answered every automated request for that page with its 403 bot-protection page, even after the cool-down that let U1 through); (b) **prices** for all four units — Booking's availability block never rendered a rate for the requested dates; (c) cancellation terms, minimum stay, cleaning fee, deposit, Kurtaxe. → Ask the owner for a copy-paste from the Booking extranet using the template in §12 (it is already reduced to the open points).
3. Do **not** try again to evade Booking's bot protection. If you have the owner's session links you may render a page once; a 403/202 challenge means stop.
4. Until the rate table arrives, every page writes prices as „Preise & Verfügbarkeit auf Anfrage" and links to the Booking listing with the button „Auf Booking.com ansehen". Once values exist, add „Stand: MM/JJJJ, inkl. gesetzlicher MwSt.".
5. Reviews: you may state the U3 score exactly as in Appendix F.1 („10 von 10 auf Booking.com, 1 Bewertung, Stand 09/2026"); quote the guest only as a short German paraphrase with „Gast aus Tschechien, August 2026" and only after the owner agrees (§12). U4 has no reviews yet — say nothing. No `aggregateRating` in JSON-LD with a single review.

### 1.5 What is ALREADY configured on the target site (done by the author of this prompt on 2026-09-24 — verify, do not redo)
The site is no longer 100 % empty. These Phase-1 settings were applied and must be **checked, not recreated** (a second `save_knowledge_item` or a duplicate variable would leave two contradicting entries):
- `update_site_settings`: name `Ferienhaus am See Brandenburg`, contactEmail `kontakt@seehaus-berlin.de`, languages `de`.
- `update_legal_profile`: complete (100 %). The platform rewrote its two legal pages; **their URLs are the platform defaults `/privacy-policy` and `/cookie-policy`** (they do not appear in `list_pages`). Decide in Phase 1: either set the cookie banner's `cookiePrivacyPolicyUrl` to `/privacy-policy` and link `/privacy-policy` in the footer, or create redirects `/datenschutz → /privacy-policy` and `/cookie-richtlinie → /cookie-policy` with `create_url_redirects`. The banner currently points to `/datenschutz` — fix this first.
- `update_cookie_consent`: enabled, analytics category on, marketing off, German title/description per §7.7.
- `set_site_fonts`: Cormorant Garamond [500,600,700] + Inter [400,500,600]; head tags now contain only the two font preloads and `<link rel="stylesheet" href="/fonts/sets/cormorant-garamond-66ff5f5b.css">`. `save_head_tags` (§4.7) must **keep that link and the preloads** and add the Tailwind CDN + config + styles after them.
- `save_footer_scripts`: the §4.8 script is saved (reveal, count-up, sticky bar).
- `save_ai_instructions`: Appendix D.2 is saved **in its v1.1 wording — re-save it with the v1.2 text below (rule for U4 added)**.
- Variables saved (`get_variables` to confirm): business_name, brand_short, company_name, company_address, contact_name, phone, phone_link, whatsapp, whatsapp_link, email, hours, portal_url, booking_u1…booking_u4, checkin, checkout, min_stay, hrb, ustid.
- Knowledge base: item **id 261 „Unternehmen, Gastgeberin & Kontakt"** exists. Items 2–8 of Appendix D.1 are still missing — create only those; correct 261 with `update_knowledge_item` if needed.
- Nothing else exists: no pages, no media, no blocks, no navigation, no SEO plan, no logo/favicon.

### 1.4 U4 identification — resolved by the Booking listing (two residual confirmations)
The Booking listing „Ferienhaus am See in der Natur" carries the address **Fontanestraße 35, Königs Wusterhausen** (coordinates 52.2958647, 13.7128285 = Kablow), a size of **192 m²** and kitchen/bathroom photos identical to the „original" photos on **seebiotophaus.de** (the 1940 villa, ca. 193 m², Zweifamilienhaus). **U4 is therefore the villa Fontanestraße 35, Kablow — not Haus am Biotop (Fontanestraße 26 A).** All U4 facts, photos and copy in this document follow that (§2.4, §5.8, Appendix A, B.3, D.1, F.2). Haus am Biotop (26 A) is **not** on Booking and is not built as a unit; its photo set is kept in reserve (Appendix B.7) in case the owner says it is rented too.
Residual points for the owner (§12): (1) whether guests get the whole house or one of the two units (Booking: „Apartment mit 2 Schlafzimmern, 192 m², max. 4 Gäste"); (2) whether the five virtually staged Booking photos show the real furnishing (B.3); (3) the postal code (official 15712 for Fontanestraße/Kablow; Booking shows 15758 — ask her to correct Booking, use 15712 here); (4) whether guests may use the shore in front of the plot (the sales site says: seenahe Lage without direct lake access; Booking says „Seeblick" and lists water sports on site). Draft P5 now; publish it after (1) and (2) are answered.

---

## 2. Verified facts (single source of truth for copy, JSON-LD and knowledge base)

### 2.1 Operator (used in Impressum, footer, JSON-LD `Organization`, legal profile)
- Legal name: **Ausblicke Management GmbH**
- Address: **Kuno-Fischer-Str. 14, 14057 Berlin, Deutschland**
- Register: Amtsgericht Charlottenburg, **HRB 115701 B**
- VAT ID (USt-IdNr.): **DE262426225**
- Managing director / host: **Marita Briese** (Geschäftsführerin; sie ist die persönliche Gastgeberin und Ansprechpartnerin)
- Phone: **+49 163 5088945** (tel link `+491635088945`)
- WhatsApp: **+49 172 8588588** (link `https://wa.me/491728588588`) **[TO CONFIRM which number the owner wants shown as phone; the portal uses 163…, vierstegehaus.de uses 172…]**
- E-mail: **kontakt@seehaus-berlin.de** (also the contact-form notification address; the owner may prefer a dedicated `ferien@…` — ask, default to this one)
- Availability: Mo–Fr 9:00–18:00 Uhr, Sa nach Vereinbarung
- Umbrella brand: **Seehaus Berlin** (https://seehaus-berlin.de). Footer line: „Ein Angebot der Ausblicke Management GmbH · Seehaus Berlin".
- Real-estate licence data (§ 34c GewO, Bezirksamt Charlottenburg-Wilmersdorf) exists for the brokerage business; **not needed** on a rental site — omit unless the owner insists.

### 2.2 House A — Villa am Krüpelsee (Zernsdorf) → units U1 + U2
- Address: Karl-Marx-Straße 8, 15712 Königs Wusterhausen OT Zernsdorf. Quiet cul-de-sac (Stichstraße, no through traffic), south-facing, directly on the **Krüpelsee** (west shore, Zernsdorf side), Dahme-Seenland.
- The estate: renovated historic villa (Altbau, half-timbered gable, terracotta floors, wooden beam ceilings, brick arches, spiral staircases), plot ca. 1.749 m², ca. 30 m private shoreline, **4 private jetties (Stege)**, heated **salt-water pool**, **sauna house ca. 40 m²** (recently renovated), winter garden, covered wooden pavilion, lakeside terrace, old weeping willow, lawn to the water, a houseboat moored at the jetty (appears in photos), workshop/outbuilding with office loft, photovoltaics, 5 parking spaces, 3 wood-burning stoves in total, 6 bathrooms in total, 5 balconies/terraces in total. Three separate living units: ca. 185 m² (owner/main), ca. 125 m² (U1), ca. 60–63 m² (U2).
- **Guest use of pool, sauna house, jetties, boat, SUP/kayaks: [TO CONFIRM].** Until confirmed write "Seezugang über das Grundstück" and nothing about pool/sauna use.
- **U1 Maisonette am Krüpelsee** (Booking facts, Appendix F.0, verified): Apartment in der Villa auf zwei Ebenen, **125 m²**, **eigener Eingang**, Obergeschoss über Treppe, **max. 5 Gäste**, **2 Schlafzimmer** (Schlafzimmer 1: großes Doppelbett mit eigenem Bad; Schlafzimmer 2: Doppelbett mit eigenem Bad) **+ Schlafsofa im Wohnzimmer**, **2 Bäder**, Küche (Kühlschrank, Mikrowelle, Kaffeemaschine, Wasserkocher, Kochgeschirr), Wohnzimmer mit Sofa, Flachbild-TV, **Kaminofen** (owner site + photo), Bettwäsche & Handtücher inklusive, **Balkon mit Seeblick + Terrasse**, See- und Gartenblick, Garten, Sitzbereich im Freien, Fahrradabstellplatz, kostenloses WLAN, kostenloser Parkplatz (1 Stellplatz laut Eigentümerseite). **Check-in 15:00–18:00 Uhr (Ankunftszeit vorab), Check-out bis 11:00 Uhr. Kinder willkommen (0–17 in vorhandenen Betten kostenlos), keine Babybetten/Zustellbetten. Keine Haustiere. Nichtraucher. Keine Partys.** Sprachen Deutsch/Englisch. No reviews yet. Owner-site wording „2,5 Schlafzimmer" is replaced by „2 Schlafzimmer + Schlafsofa". Washing machine: visible on a Booking photo, not in the facility list → **[TO CONFIRM]**.
- **U2 Apartment am Krüpelsee**: ca. 63 m², 1 Bad, Kaminofen, Seeblick, 1 Stellplatz, ruhige Lage direkt am Wasser. Beds/max guests etc. **[TO CONFIRM]**.
- Interior photos: the **Maisonette interiors are the 23 Booking photos** (Appendix B.1, Booking table). The owner-site interiors on vierstegehaus.de (terracotta floors, brick pillars, winter garden with lake view, tiled Kachelofen, country kitchen with spiral stair) are **not** the Maisonette — they show the main house; only the two bay-window photos (`08-…esszimmer-im-erker-01.jpg`, `09-…erker-sitzbank-am-fenster-01.jpg`) show the Maisonette's Erker in an older furnishing. Whether any owner-site interior belongs to **U2** is **[TO CONFIRM]**; until then the U2 page shows only exterior/lake/shared-grounds photos.

### 2.3 House B — Galeriehaus am See / Designvilla (Niederlehme) → unit U3
- Address: Seestraße 41, 15713 Königs Wusterhausen OT Niederlehme. On a **peninsula (Landzunge) in the Großer Zug**, a long lake of the Dahme chain between Niederlehme and Ziegenhals; water on two/three sides; private jetty; garden with lake view; 5 parking spaces incl. carport for 3; fibre-optic internet (Glasfaser).
- **U3 Gästehaus am Großen Zug**: separate guest house, **ca. 57 m²**, one-room apartment (living/sleeping area), Küchenzeile, Duschbad mit bodengleicher Dusche, **own entrance**, **own terrace with lake view, not visible from the main house**, **barrier-free / wheelchair-accessible (ebenerdig, Türen in Rollstuhlbreite)**, parquet floor, built-in wardrobes, high-quality furnishing, WLAN via Glasfaser. Floor plan image available. Beds/max guests/parking spot assignment/jetty use **[TO CONFIRM]**.
- The main villa (ca. 244 m², gallery level, fireplace, sauna in basement) is **not** part of the rental: never show its interiors on the U3 page.
- A short **MP4 video** (magic-hour footage, 8.3 MB) exists — the hero-video candidate (§4.6).
- **Booking facts (Appendix F.1, verified):** Ferienhaus mit 1 Schlafzimmer, 57 m², **max. 2 Gäste**, 1 Doppelbett + Schlafsofa, 1 Bad mit bodengleicher Dusche, Küchenzeile (Kühlschrank, Kaffeemaschine, Wasserkocher, Kochgeschirr), Flachbild-TV, Kleiderschrank, Bettwäsche & Handtücher inklusive, Parkett, Heizung, eigener Eingang, ganze Einheit ebenerdig, Terrasse mit Gartenmöbeln und Essplatz, See- und Gartenblick, Picknickbereich, Fahrradabstellplatz, kostenlose Privatparkplätze, kostenloses WLAN. **Check-in 15:00–18:00 Uhr (Ankunftszeit vorab mitteilen), Check-out bis 11:00 Uhr.** Kinder jeden Alters willkommen, keine Babybetten/Zustellbetten. **Haustiere auf Anfrage (ggf. Gebühr). Nichtraucher. Keine Partys.** Sprachen: Deutsch, Englisch. Booking-Score **10/10 (1 Bewertung, Stand 09/2026)**; the guest praised the private garden, „private dock and lake access", the modern, clean, new apartment, very comfortable beds, the terrace and the parking. Jetty use by guests: plausible per that review, still **[TO CONFIRM]** with the owner.

### 2.4 House C — Villa Fontanestraße 35 (Kablow) → unit U4 „Ferienhaus am See in der Natur" (identified via Booking, §1.4)
- Address: **Fontanestraße 35, 15712 Königs Wusterhausen OT Kablow** (Booking shows PLZ 15758 — use 15712, see §1.4). Coordinates 52.2958647, 13.7128285. Kablow lies at the north-eastern end of the Krüpelsee, ca. 6 km from the centre of Königs Wusterhausen, ca. 17 km from BER (Booking values), outside the BER flight-noise zones, with the Regionalbahn stop Kablow nearby.
- The house (owner's own facts on seebiotophaus.de): charaktervolle Villa von 1940, Zweifamilienhaus mit zwei separaten Wohneinheiten und eigenen Eingängen, **ca. 193 m² Wohnfläche**, Grundstück **ca. 1.868 m²** mit altem Baumbestand (Kiefern, Birken), ein bewusst naturbelassener Gartenteil Richtung See („Biotop"), **2 Terrassen (Naturstein) + 2 Dachterrassen**, **offener Kamin**, **Einbauküche mit Kochinsel, Natursteinarbeitsplatte und Einbaugeräten**, renovierte Bäder (bodengleiche Dusche; Badewanne laut Booking), Gaszentralheizung, **Carport (Holz)**, laut Grundriss ca. 3 Schlafzimmer + 1 Kinderzimmer und ca. 3 Bäder im ganzen Haus. **Seenahe Lage: no direct lake access and no jetty in the current state** (a separate parcel lies between plot and lake) — write „wenige Schritte zum Ufer, Seeblick von Terrasse und Garten" and nothing more until the owner answers §12.
- **Booking facts for the rented unit (Appendix F.2, verified):** Apartment mit **2 Schlafzimmern**, **192 m²**, **max. 4 Gäste**, je Schlafzimmer **1 großes Doppelbett**, **Badewanne + Dusche** (Booking's summary: two bathrooms), **Küche** (voll ausgestattet), **Waschmaschine**, Flachbild-TV, Heizung, **Terrasse mit See- und Gartenblick**, Garten, Picknickbereich, Fahrradabstellplatz, Obergeschoss nur über Treppe, kostenlose Privatparkplätze, kostenloses WLAN. **Check-in 15:00–18:00 Uhr, Check-out bis 11:00 Uhr. Kinder jeden Alters willkommen (0–17 in vorhandenen Betten kostenlos, ab 18 Erwachsenentarif), keine Babybetten/Zustellbetten. Haustiere nicht erlaubt. Nichtraucher. Keine Partys.** Sprachen: Deutsch, Englisch. Aktivitäten laut Booking: Radfahren, Wandern, Angeln, Kanu/Kajak, Wassersport vor Ort. No reviews yet.
- **Never write for U4:** Sauna, Wintergarten, eigener Steg, Grillplatz, Sonnendeck, Gästehaus/Homeoffice-Raum — these are Haus am Biotop (26 A) features and were wrongly attributed in v1.0/v1.1 of this document. Never mention Kaufpreis, Exposé, geplante Steganlage, Ausbauprojekt (§0.7).
- Photos: Booking set (14, five virtually staged — B.3) + the „original" photos on seebiotophaus.de (B.3). The „edited" PNG visualisations of a future redesign on seebiotophaus.de are **not** allowed on this site (they show a state that does not exist).

### 2.5 Booking-relevant facts still missing (ask once, §12)
Known for U1/U3/U4 (Appendix F): check-in/out, max. guests, beds, pets, smoking, parties, children, languages, WLAN, parking. Still missing for **all** units: seasonal rate table · minimum stay · final cleaning fee · deposit · payment methods · cancellation terms · Kurtaxe/tourist tax (verify with Stadt Königs Wusterhausen) · key handover (self check-in?) · quiet hours · WLAN speed · accessibility measurements · sustainability features. Missing for **U2 only** (Apartment): everything Booking lists (description, facilities, house rules, max. guests, beds) — assume nothing; write „laut Buchungsbestätigung" until the owner answers.

### 2.6 Region facts (short; the full, sourced list with "ca." values is Appendix C)
Königs Wusterhausen ("KW") is the largest town of Landkreis Dahme-Spreewald, south-east of Berlin, at the northern edge of the Dahme-Seenland / Naturpark Dahme-Heideseen. Lakes: Krüpelsee (Zernsdorf/Senzig/Kablow), Großer Zug (Niederlehme/Ziegenhals), Krimnicksee (Strandbad Neue Mühle), Zernsdorfer Lanke, Krossinsee. Berlin-Mitte ca. 35–40 km by road; S-Bahn S46 from KW to Berlin-Ostkreuz ca. 30 min, to Alexanderplatz ca. 40 min, regional trains RE2/RE7 faster; BER airport ca. 15–25 min by car, regional train from KW ca. 15 min; A10/A13 motorway; Tropical Islands ca. 40 km / 30–35 min; Spreewald (Lübben) ca. 45 km / 40 min; Potsdam ca. 45 km. Sights: Schloss Königs Wusterhausen (Soldatenkönig), Funkerberg with Sender- und Funktechnikmuseum (birthplace of German radio, 22.12.1920), Dahmelandmuseum, Schleuse Neue Mühle (1868), Strandbad Neue Mühle, Rundwanderweg Krüpelsee (ca. 23 km), Rundweg Tiergarten (7 km), DahmeRadweg, canoe route "Märkische Umfahrt", SUP rental in Zernsdorf, houseboat charter in Zernsdorf.

---

## 3. Positioning, audience, voice

- **Positioning:** "Seehaus Berlin — Ferien am See": handpicked private lakeside houses of one host family, 40 minutes from Berlin, where the water is not the view but the daily rhythm. Not a portal, not a hotel: a host with three houses on two lakes.
- **Audience (priority order):** (1) Berlin couples & families for weekends and short breaks; (2) remote workers / "Workation" (fibre internet, quiet, lake); (3) international visitors flying into BER (English Phase 3); (4) small groups celebrating quietly (no party houses); (5) nature lovers: swimming, SUP, canoe, fishing, cycling, winter fireplace stays.
- **Promise:** direct lake access, real privacy, private jetties, fireplaces and saunas, Berlin within reach — and a personal host (Marita Briese) instead of an anonymous check-in machine.
- **Voice:** premium, calm, concrete, sensory. Short sentences. Sie-form. No exclamation marks in body copy. No "Traum-", "Luxus-", "einzigartig" inflation: show, don't shout. Numbers precise or "ca.". Synonyms: Ferienhaus, Ferienwohnung, Unterkunft, Domizil, Refugium, Seehaus.
- **Forbidden in visible copy:** Kaufpreis, Exposé, Courtage, Makler, Verkauf, Kapitalanlage, SEO, Google, Keyword, Landing Page, Conversion.
- **Tagline (H1 candidates, pick per page):** „Ferien direkt am See – 40 Minuten von Berlin." · „Wo das Wasser die Zeit verlangsamt." (borrowed from the portal, use sparingly) · „Drei Häuser. Zwei Seen. Ein Gastgeber."

---

## 4. Brand & design system ("modern, cinematic, wow")

### 4.1 Site identity
- Display name (`update_site_settings.name`): **Ferienhaus am See Brandenburg** (keyword-aligned with the domain; the wordmark reads "FERIEN AM SEE").
- Wordmark (inline SVG in the nav, no image request): line 1 "FERIEN AM SEE" (Cormorant Garamond 600, letter-spacing 0.18em), line 2 "Königs Wusterhausen · Brandenburg" (Inter 500, 10–11 px, uppercase, tracking 0.22em, gold).
- Favicon + logo mark: monogram SVG (Appendix E.1) — upload as `brand/favicon.svg`/`brand/favicon-512.png` and set `faviconUrl`/`logoUrl`.
- Optional co-branding: the Seehaus Berlin logo (`https://seehaus-berlin.de/uploads/site-15/logo-seehausberlin.jpg`, 384 px) in the footer next to „Ein Angebot von Seehaus Berlin" — **ask the owner**.

### 4.2 Colour tokens (Tailwind `theme.extend.colors`)
```js
night: { 950:'#07141E', 900:'#0B1F2E', 800:'#0F2C40', 700:'#164058' },   // dusk over the lake — hero overlays, dark sections, footer
lake:  { 100:'#E6F3F7', 200:'#BFE3EC', 400:'#5FB0C8', 500:'#2A88A6', 600:'#1E6A85', 700:'#175570' }, // links, icons, accents
sand:  { 50:'#FBF8F3', 100:'#F4EEE4', 200:'#E8DCCB', 300:'#D6C3A8' },   // page backgrounds, cards
gold:  { 300:'#E3CFA2', 500:'#C9A86A', 600:'#B08D4F', 700:'#8F7038' },  // eyebrows, dividers, primary button
reed:  { 500:'#6B8F71', 700:'#4F6E55' },                                  // nature badges
ink:   { DEFAULT:'#1A1A1A', soft:'#3D3D3D', mute:'#6B6B6B' }
```
Contrast rules: body text `ink` on `sand-50/white` (≥ 12:1); on `night-900` use `sand-100` text; gold only for text ≥ 18 px semibold or on `night` backgrounds (gold-300 on night-900 = ≥ 7:1). Never gold on white for small text.

### 4.3 Typography (`set_site_fonts`, self-hosted by the platform — never link Google Fonts)
- Display/serif: **Cormorant Garamond** weights 500, 600, 700 (headlines ≥ 28 px only).
- Body/sans: **Inter** weights 400, 500, 600.
- Scale: H1 `clamp(2.6rem, 6vw, 5rem)` line-height 1.05, letter-spacing −0.01em; H2 `clamp(2rem, 3.6vw, 3.25rem)`; H3 1.5–1.75 rem; body 1.0625 rem / 1.7; eyebrow labels Inter 600 0.72 rem uppercase tracking 0.2em in gold-600; captions 0.875 rem `ink-mute`.

### 4.4 Layout grammar
- Container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`; content column for long copy `max-w-3xl`.
- Section rhythm: `py-20 md:py-28`; alternate `bg-sand-50` / `bg-white` / `bg-night-900 text-sand-100` (one dark "cinematic" section per page, never two in a row).
- Radius `rounded-2xl` on cards and images, `rounded-full` on pills; shadows `shadow-[0_20px_60px_-20px_rgba(11,31,46,0.35)]` on hover only.
- Grids always `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
- Image treatment: `object-cover`, `aspect-[4/3]` cards, `aspect-[3/2]` strips, `aspect-[16/9]` cinematic; hero `min-h-[92svh]`; add `loading="lazy" decoding="async"` to all images except the hero (`fetchpriority="high"`), always `width`/`height` attributes (Appendix B lists dimensions).

### 4.5 Signature components (build once as blocks, §8.5)
1. **Cinematic hero**: full-bleed photo (or video) + layered gradient `from-night-950/80 via-night-900/30 to-transparent` + eyebrow + serif H1 + one-sentence sub + two CTAs (`Verfügbarkeit anfragen` gold-500 → anchor `#anfrage`; `Unterkünfte entdecken` ghost) + a "scroll" chevron. Ken-Burns 24 s slow zoom on the photo (CSS), disabled under `prefers-reduced-motion`.
2. **Facts ribbon** (`fakten-leiste`): 4–6 tiles (m², Gäste, Schlafzimmer, Seeblick, Kamin, Sauna…) with inline SVG icons; numbers count up on reveal.
3. **Sticky booking bar** (`buchungsleiste`, property pages only): appears after the hero; unit name · "Preise auf Anfrage" (or "ab X € / Nacht" once rates exist) · `Verfügbarkeit anfragen` · `Auf Booking.com ansehen` (`target="_blank" rel="noopener"`). Mobile: bottom bar with the two buttons.
4. **Story strip**: alternating 60/40 image-text rows; the image bleeds to the viewport edge on desktop.
5. **Gallery**: masonry-like grid (`grid-cols-2 md:grid-cols-3` with `row-span-2` on portrait shots) using `[[GALLERY:folder=<folder>,columns=3]]` where a whole folder fits, or explicit `<img>` grids where curation matters. Never wrap images in `<a>`.
6. **Vier Jahreszeiten**: 4 photos (spring/summer/autumn/winter) with a one-line poetic caption each — the sites have autumn, winter, sunset and morning-mist material.
7. **Lage-Karte**: static map image is not available and Google Maps needs consent → use an **OpenStreetMap embed** `<iframe class="w-full aspect-video" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=…&layer=mapnik&marker=…">` plus an "In Google Maps öffnen" link (`https://www.google.com/maps/search/?api=1&query=<lat>,<lng>`). No API keys, no cookies.
8. **Distances table** (`anreise-tabelle`): Ziel · Entfernung · Fahrzeit · Verkehrsmittel (values in Appendix C, all "ca.").
9. **Trust bar** (`vertrauensleiste`): „Persönliche Gastgeberin" · „Direkt am See" · „Direktanfrage ohne Portalgebühr" (only if owner agrees) · „Auch auf Booking.com".
10. **Inquiry form** (`anfrage-formular`): see §4.8.
11. **FAQ accordion** (native `<details>/<summary>`, styled) — also emitted as `FAQPage` JSON-LD.
12. **Legal line** (`rechtshinweis`): „Alle Angaben ohne Gewähr. Preise inkl. gesetzlicher MwSt. Verfügbarkeit und Konditionen werden mit der Buchungsbestätigung verbindlich."

### 4.6 Motion & "wow" (all CSS + ≤ 60 lines vanilla JS in footer scripts; respect `prefers-reduced-motion`)
- `.reveal` → IntersectionObserver adds `.is-visible` (opacity 0→1, translateY 24 px→0, 700 ms cubic-bezier(.2,.7,.2,1)); children stagger via `--i` custom property (`transition-delay: calc(var(--i) * 90ms)`).
- Hero Ken-Burns keyframes; parallax-lite on story images (`transform: translateY(calc(var(--scroll) * -0.06px))`, JS writes `--scroll`), capped and disabled on touch devices.
- Count-up for facts (only on first reveal).
- Hero video (home + U3 page): `<video class="absolute inset-0 h-full w-full object-cover hidden md:block" autoplay muted loop playsinline preload="metadata" poster="/uploads/…/poster.jpg"><source src="/uploads/…/hermann-website-video-warm-magic-hour-web.mp4" type="video/mp4"></video>` with the poster image shown on mobile. Preview the clip first (download it, check duration/first frame with ffmpeg at `/opt/pw-browsers/ffmpeg-1011` or any ffmpeg); if it shows the main villa interiors rather than lake/exterior, use it only on the home page.
- No carousels that auto-rotate text; no scroll-jacking; no cursor effects.

### 4.7 Head tags (`save_head_tags`) — after `set_site_fonts`, read `get_site_config` and merge; keep exactly one Tailwind CDN include
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = { theme: { extend: {
  colors: { /* tokens from §4.2 */ },
  fontFamily: { serif: ['Cormorant Garamond','Georgia','serif'], sans: ['Inter','system-ui','sans-serif'] },
  boxShadow: { card: '0 2px 16px rgba(11,31,46,.08)', float: '0 20px 60px -20px rgba(11,31,46,.35)' },
  keyframes: { kenburns: { '0%': { transform:'scale(1)' }, '100%': { transform:'scale(1.08)' } } },
  animation: { kenburns: 'kenburns 24s ease-out forwards' }
} } };
</script>
<style>
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', system-ui, sans-serif; color: #1A1A1A; background: #FBF8F3; }
  h1,h2,h3,.font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
  .eyebrow { font: 600 .72rem/1 'Inter', sans-serif; letter-spacing: .2em; text-transform: uppercase; color: #B08D4F; }
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1); transition-delay: calc(var(--i, 0) * 90ms); }
  .reveal.is-visible { opacity: 1; transform: none; }
  .hero-media { animation: kenburns 24s ease-out forwards; }
  details > summary { list-style: none; cursor: pointer; } details > summary::-webkit-details-marker { display: none; }
  details[open] .chev { transform: rotate(180deg); }
  .btn-gold { background:#C9A86A; color:#07141E; } .btn-gold:hover { background:#B08D4F; }
  .btn-ghost { border:1px solid rgba(251,248,243,.6); color:#FBF8F3; } .btn-ghost:hover { background: rgba(251,248,243,.12); }
  @media (prefers-reduced-motion: reduce) { .reveal { opacity:1; transform:none; transition:none } .hero-media { animation:none } html { scroll-behavior:auto } }
</style>
```

### 4.8 Footer scripts (`save_footer_scripts`)
```html
<script>
(function(){
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (rm || !('IntersectionObserver' in window)) { els.forEach(function(e){ e.classList.add('is-visible'); }); }
  else { var io = new IntersectionObserver(function(en){ en.forEach(function(x){ if (x.isIntersecting){ x.target.classList.add('is-visible'); io.unobserve(x.target);} }); }, { rootMargin:'0px 0px -10% 0px', threshold:.12 }); els.forEach(function(e){ io.observe(e); }); }
  // count-up
  document.querySelectorAll('[data-count]').forEach(function(el){
    var target = parseFloat(el.getAttribute('data-count')), suffix = el.getAttribute('data-suffix') || '';
    var done = false; var o = new IntersectionObserver(function(en){ if (en[0].isIntersecting && !done){ done = true; var t0 = performance.now();
      (function step(t){ var p = Math.min(1,(t-t0)/1200); el.textContent = Math.round(target*(1-Math.pow(1-p,3))) + suffix; if (p<1) requestAnimationFrame(step); })(t0); } }); o.observe(el);
  });
  // sticky booking bar
  var bar = document.getElementById('buchungsleiste'); var hero = document.querySelector('[data-hero]');
  if (bar && hero) { new IntersectionObserver(function(en){ bar.classList.toggle('translate-y-full', en[0].isIntersecting); bar.classList.toggle('opacity-0', en[0].isIntersecting); }).observe(hero); }
})();
</script>
```
Do **not** add Google Analytics / Ads tags in Phase 1 (see §7.7). If the owner later wants GA4, load it only through the consent categories.

### 4.9 Inquiry form contract (platform intercepts `#contact-form`)
```html
<form id="contact-form" class="grid grid-cols-1 md:grid-cols-2 gap-5">
  <div><label for="name" class="block text-sm font-medium mb-1">Name *</label><input id="name" name="name" type="text" required class="w-full rounded-xl border border-sand-300 bg-white px-4 py-3"></div>
  <div><label for="email" class="block text-sm font-medium mb-1">E-Mail *</label><input id="email" name="email" type="email" required class="…"></div>
  <div><label for="phone" class="block text-sm font-medium mb-1">Telefon</label><input id="phone" name="phone" type="tel" class="…"></div>
  <div><label for="unterkunft" class="block text-sm font-medium mb-1">Unterkunft *</label>
    <select id="unterkunft" name="unterkunft" required class="…">
      <option value="">Bitte wählen</option>
      <option>Maisonette am Krüpelsee (Zernsdorf)</option><option>Apartment am Krüpelsee (Zernsdorf)</option>
      <option>Gästehaus am Großen Zug (Niederlehme)</option><option>Ferienhaus am See in der Natur (Kablow)</option>
      <option>Noch unentschieden – bitte beraten</option>
    </select></div>
  <div><label for="anreise" class="block text-sm font-medium mb-1">Anreise *</label><input id="anreise" name="anreise" type="date" required class="…"></div>
  <div><label for="abreise" class="block text-sm font-medium mb-1">Abreise *</label><input id="abreise" name="abreise" type="date" required class="…"></div>
  <div><label for="personen" class="block text-sm font-medium mb-1">Personen *</label><input id="personen" name="personen" type="number" min="1" max="12" required class="…"></div>
  <div class="md:col-span-2"><label for="message" class="block text-sm font-medium mb-1">Ihre Nachricht</label><textarea id="message" name="message" rows="4" class="…"></textarea></div>
  <div class="md:col-span-2 flex items-start gap-2 my-2"><input type="checkbox" id="privacy_consent" name="privacy_consent" value="1" required class="mt-1"><label for="privacy_consent" class="text-sm">Ich habe die <a href="/datenschutz" class="underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu. *</label></div>
  <div class="md:col-span-2"><button type="submit" class="convert btn-gold px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">Unverbindlich anfragen</button>
  <p class="text-sm text-ink-mute mt-3">Sie erhalten innerhalb von 24 Stunden eine persönliche Antwort von Marita Briese. Keine Vorauszahlung, keine Portalgebühr.</p></div>
</form>
```
On unit pages pre-select the unit (`selected`). Exactly one `#contact-form` per page. No `action`/`method` attributes.

### 4.10 Navigation & footer (`save_navigation`, language `de`) — build once, complete, then never rewrite for single links (use `add_page_to_navigation`)
Structure (desktop row + slide-over mobile panel + backdrop + tiny script; include the comment markers `<!--tb-nav-insert-->` and `<!--tb-footer-insert-->` at the end of **each** link list so the platform can append future pages):
- Logo (wordmark SVG) → `/`
- **Unterkünfte** ▾ → `/ferienhaeuser` (Alle Unterkünfte), `/ferienhaeuser/maisonette-am-kruepelsee`, `/ferienhaeuser/apartment-am-kruepelsee`, `/ferienhaeuser/gaestehaus-am-grossen-zug`, `/ferienhaeuser/ferienhaus-am-see-kablow`, `/ferienhaeuser/villa-am-kruepelsee-zernsdorf` (Das Anwesen)
- **Region** ▾ → `/region` (Königs Wusterhausen & Dahme-Seenland), `/region/kruepelsee`, `/region/ausflugsziele`, `/region/aktivitaeten-am-see`, `/region/anreise`
- **Gastgeber** → `/gastgeber`
- **Magazin** → `/magazin` (Phase 2; add the link when the first article exists)
- **FAQ** → `/faq`
- **Kontakt** → `/kontakt`
- CTA button (gold): **Verfügbarkeit anfragen** → `/buchen`
- Utility (desktop, right): phone icon `tel:{{phone_link}}`, WhatsApp icon `{{whatsapp_link}}`
Nav behaviour: transparent over the hero with a dark gradient veil (`nav::before`), turns `bg-night-950/95 backdrop-blur` after 60 px scroll (`.nav-scrolled`); mobile panel slides from the right, traps scroll, closes on backdrop click / Esc. Reference implementation: the Seehaus Berlin nav (readable via `Seehaus-Berlin.get_site_config`) — copy its mechanics, not its content.
Footer (4 columns on desktop, stacked on mobile, `bg-night-950 text-sand-100`): (1) wordmark + 2-line claim + „Ein Angebot der Ausblicke Management GmbH · Seehaus Berlin" + address + phone + WhatsApp + e-mail + hours; (2) Unterkünfte links; (3) Region + Magazin links; (4) Service: Buchen, FAQ, Kontakt, Gastgeber, „Auf Booking.com" (4 listing links), Impressum, Datenschutz, AGB / Mietbedingungen, Cookie-Einstellungen (`#cookie-settings` if the platform exposes it; otherwise omit). Bottom line: © {{current year}} Ausblicke Management GmbH · „Alle Preise inkl. MwSt." · language switch placeholder (Phase 3).


---

## 5. Information architecture and page-by-page specifications

### 5.1 URL map (all lowercase, a–z 0–9 and hyphens only; `ae/oe/ue/ss` for umlauts)
| # | URL | Type (SEO-plan `pageType`) | Primary keyword | Phase |
|---|---|---|---|---|
| P0 | `/` | home (`isHomePage`) | Ferienhaus am See Brandenburg / Ferienwohnung am See nahe Berlin | 1 |
| P1 | `/ferienhaeuser` | services (section) | Ferienhäuser & Ferienwohnungen Königs Wusterhausen | 1 |
| P2 | `/ferienhaeuser/maisonette-am-kruepelsee` | other | Ferienwohnung Krüpelsee Zernsdorf (Maisonette) | 1 |
| P3 | `/ferienhaeuser/apartment-am-kruepelsee` | other | Ferienwohnung Zernsdorf am See (Apartment) | 1 |
| P4 | `/ferienhaeuser/gaestehaus-am-grossen-zug` | other | Ferienwohnung Niederlehme am See / barrierefreie Ferienwohnung Brandenburg | 1 |
| P5 | `/ferienhaeuser/ferienhaus-am-see-kablow` | other | Ferienhaus Kablow Krüpelsee / Ferienhaus für 4 Personen am See Brandenburg | 1 (draft now; publish after the §1.4 residual points) |
| P6 | `/ferienhaeuser/villa-am-kruepelsee-zernsdorf` | other | Villa am Krüpelsee Ferienwohnung / Urlaub am Krüpelsee | 1 |
| P7 | `/buchen` | other | Ferienwohnung Königs Wusterhausen buchen / Verfügbarkeit | 1 |
| P8 | `/region` | other | Urlaub Dahme-Seenland / Königs Wusterhausen Urlaub | 1 |
| P9 | `/region/kruepelsee` | other | Krüpelsee Urlaub / Krüpelsee baden | 1 |
| P10 | `/region/ausflugsziele` | other | Ausflugsziele Königs Wusterhausen / Tropical Islands Unterkunft Nähe | 1 |
| P11 | `/region/aktivitaeten-am-see` | other | Wassersport Dahme-Seenland / SUP Krüpelsee / Radfahren Dahme-Radweg | 1 |
| P12 | `/region/anreise` | other | Anreise Königs Wusterhausen S-Bahn / Ferienwohnung nahe Flughafen BER | 1 |
| P13 | `/gastgeber` | about | Gastgeber Seehaus Berlin Marita Briese | 1 |
| P14 | `/faq` | other | Ferienwohnung Brandenburg FAQ (Hausregeln, Check-in, Haustiere) | 1 |
| P15 | `/kontakt` | contact | Kontakt Ferienwohnung Königs Wusterhausen | 1 |
| P16 | `/impressum` | other (noindex) | — | 1 |
| P17 | `/datenschutz` | other (noindex) | — | 1 (platform template via `update_legal_profile`) |
| P18 | `/agb-mietbedingungen` | other (noindex) | — | 1 |
| P19 | `/magazin` | blog (section) | Magazin: Urlaub am See bei Berlin | 2 |
| P20–P31 | `/magazin/<slug>` | other | 12 articles (§6.6) | 2 (weekly) |
| — | `/en/…` | translations of P0–P15 | English | 3 |

### 5.2 Shared rules for every content page
- Length 800–1400 visible words (platform requirement) — reach it with substance: what the unit includes, for whom, how a stay works, what it costs or what the price depends on, real FAQs.
- Structure: hero → "answer capsule" (2–3 factual sentences answering who/what/where/for whom/how to book) → facts ribbon → story sections → gallery → location → FAQ (4–6) → inquiry/CTA → legal line.
- Internal links: ≥ 3 contextual links per page (unit ↔ region ↔ FAQ ↔ buchen), breadcrumbs in JSON-LD, one link to the Booking listing on each unit page, one outbound link to `https://seehaus-berlin.de` only in the footer/Gastgeber page (rel default).
- Headings: one H1; H2 for sections; H3 inside; never skip levels.
- Every image: German `alt` from Appendix B, `width`/`height`, lazy except hero.
- JSON-LD per page (templates in §6.4) passed as `structuredData` in `create_page_from_html`.
- Meta title ≤ 60 chars incl. brand suffix "| Ferien am See Brandenburg" where it fits; meta description 140–160 chars with a benefit and a location; OG title ≤ 70, OG description ≤ 200, `ogImage` = the page hero (absolute URL on this domain after upload), `ogType` `website` for home, `article` for magazine, `website` elsewhere.

### 5.3 P0 — Home `/`
- **Title:** `Ferienhaus & Ferienwohnung am See bei Berlin – Königs Wusterhausen`
- **Meta:** `Vier private Unterkünfte direkt am Krüpelsee und Großen Zug in Königs Wusterhausen – Stege, Kamin, Seeblick, 40 Minuten von Berlin. Jetzt Verfügbarkeit anfragen.`
- **H1:** `Ferien direkt am See – 40 Minuten von Berlin`
- **Sub:** `Drei Häuser, zwei Seen, ein Gastgeber: Maisonette, Apartment, Gästehaus und Ferienhaus direkt am Wasser oder wenige Schritte davon – in Königs Wusterhausen, Dahme-Seenland.`
- Hero media: video (§4.6) with poster `hauptbild-villa-am-kruepelsee-steg-hausboot.jpg` (object-position 62 % — otherwise the house is cropped on phones); mobile shows the poster.
- Sections: (1) answer capsule; (2) facts ribbon: `4 Unterkünfte · 2 Seen · ca. 40 Min. nach Berlin-Mitte · ca. 20 Min. zum BER · Kamin & Seeblick · Private Stege`; (3) **Unterkünfte** — 4 cards (photo, name, place, 3 icons, "ab … €" only when known, buttons `Details` + `Anfragen`); (4) **Warum hier** — 6 reasons (Seezugang, Ruhe/Stichstraße/Landzunge, Kamin & Terrassen am Wasser, Berlin & BER nah, persönliche Gastgeberin, Natur: Naturpark Dahme-Heideseen); (5) dark cinematic section "Der Tag am See" (morning mist → afternoon on the jetty → evening fire) with three `umgebung-*` photos; (6) **Vier Jahreszeiten** strip; (7) **Region teaser** with distances table block; (8) **Gastgeberin** teaser (Marita Briese quote: „Eine Seeimmobilie ist mehr als ein Ort – es ist ein Lebensgefühl." adapted to guests); (9) trust bar + Booking mention; (10) FAQ (6: Wie weit ist es nach Berlin? Kann man im Krüpelsee baden? Gibt es WLAN? Sind Hunde erlaubt? [Gästehaus: auf Anfrage · Maisonette und Ferienhaus Kablow: nein · Apartment: auf Anfrage] Wie buche ich? Wo parke ich?); (11) inquiry form; (12) legal line.
- JSON-LD: `WebSite` + `Organization` (§6.4.1) + `ItemList` of the 4 `VacationRental` URLs + `FAQPage`.

### 5.4 P1 — `/ferienhaeuser` (overview)
- **Title:** `Ferienhäuser & Ferienwohnungen am See in Königs Wusterhausen`
- **Meta:** `Maisonette, Apartment, Gästehaus oder Ferienhaus – vergleichen Sie unsere vier Unterkünfte am Krüpelsee und Großen Zug: Größe, Ausstattung, Seeblick, Lage.`
- **H1:** `Unsere Unterkünfte am See`
- Sections: intro capsule; 4 large cards (alternating story-strip layout); **comparison table** (`unterkuenfte-vergleich` block): Größe · Schlafzimmer · Bäder · max. Gäste (U1: 5 · U3: 2 · U4: 4 · U2 TO CONFIRM) · Kamin · Steg/Seezugang · Terrasse · barrierefrei · Parkplatz · WLAN · Lage · Booking-Link; "Welche Unterkunft passt zu wem" (Paar/Familie/Workation/barrierefrei/Gruppe); FAQ (4); CTA.
- JSON-LD: `ItemList` + `BreadcrumbList` + `FAQPage`.

### 5.5 P2 — `/ferienhaeuser/maisonette-am-kruepelsee` (U1)
- **Title:** `Maisonette am Krüpelsee – Ferienwohnung mit Seeblick & Kamin für bis zu 5, Zernsdorf`
- **Meta:** `125 m² auf zwei Ebenen: 2 Schlafzimmer mit eigenem Bad, Schlafsofa, Küche, Kaminofen, Balkon mit Seeblick und Terrasse – direkt am Krüpelsee in Zernsdorf, 40 Minuten von Berlin, bis zu 5 Gäste.`
- **H1:** `Maisonette am Krüpelsee` · eyebrow `Zernsdorf · Villa am Krüpelsee · direkt am See · bis 5 Gäste`
- Hero: Booking photo `921170271` (villa from the lake with willow, jetties and boats) or `01-seite-startseite-abschnitt-titelbild-villa-vom-steg-01.jpg`.
- Answer capsule: „Die Maisonette am Krüpelsee ist eine Ferienwohnung auf zwei Ebenen (125 m²) mit eigenem Eingang in einer renovierten Altbauvilla direkt am Krüpelsee in Königs Wusterhausen-Zernsdorf. Für bis zu 5 Gäste: zwei Schlafzimmer mit jeweils eigenem Bad, Schlafsofa im Wohnzimmer, Küche mit Kochinsel, Kaminofen, Balkon mit Seeblick und Terrasse. Kostenloses WLAN und Parkplatz; Berlin-Mitte in ca. 40 Minuten. Check-in 15–18 Uhr, Check-out bis 11 Uhr."
- Facts ribbon: `125 m² · 2 Ebenen · max. 5 Gäste · 2 Schlafzimmer + Schlafsofa · 2 Bäder · Kaminofen · Balkon mit Seeblick · Terrasse · WLAN · Parkplatz`.
- Sections: Wohnen (offener Wohn-/Essbereich mit Küchenzeile und Kochinsel, Essplatz im Erker mit hölzerner Wendeltreppe, Wohnzimmer mit Kaminofen und Sofas — all confirmed by the Booking photos); Schlafen (Schlafzimmer 1 mit großem Doppelbett und eigenem Bad; Schlafzimmer 2 unter dem Dach mit Doppelbett und eigenem Bad; Schlafsofa im Wohnzimmer); Küche (Kühlschrank, Mikrowelle, Kaffeemaschine, Wasserkocher, Kochgeschirr); Bäder (Eckdusche + Badewanne unter der Dachschräge; zweites Bad mit WC — Waschmaschine only after confirmation); Draußen (Balkon mit Seeblick, Terrasse, Garten, Uferwiese, Stege — guest use TO CONFIRM; Fahrradabstellplatz); Das Anwesen (link P6); Gallery (folder `villa-am-kruepelsee/maisonette` = the Booking set, plus `villa-am-kruepelsee/aussen`); Lage & Anreise (Zernsdorf, Bahnhof Zernsdorf/Königs Wusterhausen ca. 5 km, BER ca. 15 km); **Gut zu wissen** (Hausregeln from Appendix F.0: Check-in 15:00–18:00 Uhr mit Ankunftszeit vorab, Check-out bis 11:00 Uhr, Kinder willkommen — bis 17 Jahre in vorhandenen Betten kostenlos, keine Babybetten/Zustellbetten, keine Haustiere, Nichtraucher, keine Partys, Deutsch/Englisch); Preise & Buchung (rate table placeholder → „auf Anfrage"); FAQ (5: „Für wie viele Personen?", „Gibt es Seeblick?", „Sind Haustiere erlaubt?" → nein, „Wie komme ich hin?", „Kann man im See baden?"); sticky bar + form (unit pre-selected); legal line.
- JSON-LD: `VacationRental` (§6.4.2) with `occupancy 5`, `numberOfBedrooms 2`, `numberOfBathroomsTotal 2`, `floorSize 125`, `checkinTime "15:00"`, `checkoutTime "11:00"`, `petsAllowed false`, `latitude 52.2978596`, `longitude 13.6971580` + `BreadcrumbList` + `FAQPage`.
### 5.6 P3 — `/ferienhaeuser/apartment-am-kruepelsee` (U2)
- **Title:** `Apartment am Krüpelsee – Ferienwohnung mit Kamin direkt am See, Zernsdorf`
- **Meta:** `Ca. 63 m² mit Kaminofen, Seeblick und eigenem Stellplatz in der Villa am Krüpelsee, Zernsdorf. Ruhige Lage am Wasser, S-Bahn nach Berlin, BER in ca. 20 Minuten.`
- **H1:** `Apartment am Krüpelsee` · eyebrow `Zernsdorf · für zwei · Kamin & Seeblick`
- Same skeleton as P2; positioning: das Domizil für zwei (Paare, Workation, Kurzurlaub), "kompakt, stilvoll, das Wasser vor der Tür". Facts: `ca. 63 m² · 1 Schlafbereich [TO CONFIRM] · 1 Bad · Kaminofen · Seeblick · 1 Stellplatz`.

### 5.7 P4 — `/ferienhaeuser/gaestehaus-am-grossen-zug` (U3)
- **Title:** `Gästehaus am Großen Zug – barrierefreie Ferienwohnung am See für 2, Niederlehme`
- **Meta:** `57 m² für zwei: eigener Eingang, Küchenzeile, bodengleiche Dusche, Terrasse mit Seeblick auf einer Landzunge im Großen Zug. Ebenerdig, kostenloses WLAN und Parkplatz, 10 von 10 auf Booking.com.`
- **H1:** `Gästehaus am Großen Zug` · eyebrow `Niederlehme · Landzunge · barrierefrei · für 2 Personen`
- Hero: `17-gaestehaus.jpg` (exterior) or Booking photo `906477802` (exterior with terrace) or the video (if it shows the lake/villa exterior); poster = `01-ensemble-hero.jpg`.
- Answer capsule: „Das Gästehaus am Großen Zug ist ein eigenständiges, ebenerdiges Ferienhaus mit einem Schlafzimmer (57 m²) für bis zu 2 Personen – mit eigenem Eingang, Küchenzeile, Duschbad mit bodengleicher Dusche und eigener Terrasse mit Seeblick auf einer Landzunge im Großen Zug in Königs Wusterhausen-Niederlehme. Es ist rollstuhlgerecht ausgebaut, hat kostenloses WLAN (Glasfaser) und einen kostenlosen Parkplatz. Check-in 15–18 Uhr, Check-out bis 11 Uhr."
- Facts ribbon: `57 m² · max. 2 Gäste · 1 Doppelbett + Schlafsofa · Duschbad · eigene Terrasse · eigener Eingang · barrierefrei · WLAN · Parkplatz`.
- Sections: Wohnen (Parkett, Einbauschränke, Wohn-/Schlafbereich mit Doppelbett und Schlafsofa, Flachbild-TV, Terrassenzugang); Küchenzeile (Kühlschrank, Kaffeemaschine, Wasserkocher, Kochgeschirr); Barrierefreiheit (ebenerdig, Türbreiten, bodengleiche Dusche — no measurements unless confirmed); Draußen (Terrasse mit Gartenmöbeln und Essplatz, Garten, Picknickplatz, Wasser auf zwei Seiten, Fahrradabstellplatz, Steg [use TO CONFIRM]); Workation (Glasfaser, Ruhe, eigener Eingang); Grundriss (image `23-grundriss-gaestehaus.jpg`); Gallery (folder `galeriehaus/gaestehaus` + `galeriehaus/innen` Booking set + a few `galeriehaus/aussen`); Lage (Niederlehme, Naturbadestelle Am Großen Zug, Zum Wasserfreund, Bahnhof Königs Wusterhausen/Niederlehme, BER ca. 16 km); **Gut zu wissen** (Hausregeln from Appendix F.1: Check-in 15:00–18:00 Uhr mit Ankunftszeit vorab, Check-out bis 11:00 Uhr, Nichtraucher, keine Partys, Haustiere auf Anfrage, keine Babybetten, Bettwäsche/Handtücher inklusive, Deutsch/Englisch); Preise & Buchung (auf Anfrage + Booking button); Gästestimme (only after owner OK, §12); FAQ (5 incl. „Ist das Gästehaus rollstuhlgerecht?", „Für wie viele Personen?", „Sind Haustiere erlaubt?"); form; legal line.
- JSON-LD: `VacationRental` with `containsPlace.occupancy.value: 2`, `numberOfBedrooms: 1`, `numberOfBathroomsTotal: 1`, `floorSize 57`, `checkinTime "15:00"`, `checkoutTime "11:00"`, `petsAllowed: "auf Anfrage"` → omit `petsAllowed` (schema expects boolean/text; use `additionalProperty` „Haustiere: auf Anfrage"), `latitude 52.3470162`, `longitude 13.6601598`, `amenityFeature` (Barrierefrei, Ebenerdig, Eigener Eingang, Terrasse, Seeblick, WLAN, Parkplatz) + breadcrumbs + FAQ. No `aggregateRating`.

### 5.8 P5 — `/ferienhaeuser/ferienhaus-am-see-kablow` (U4) — draft now, publish after §1.4 residual points (1)–(2) are answered
- **Title:** `Ferienhaus am See in der Natur – Villa von 1940 mit 2 Schlafzimmern am Krüpelsee, Kablow`
- **Meta:** `192 m², zwei Schlafzimmer, Küche mit Kochinsel, Terrassen mit Seeblick und ein naturbelassener Garten am Krüpelsee in Königs Wusterhausen-Kablow. Für bis zu 4 Gäste, kostenloses WLAN und Parkplatz, ohne Fluglärm.`
- **H1:** `Ferienhaus am See in der Natur` · eyebrow `Kablow · Krüpelsee · Villa von 1940 · bis 4 Gäste`
- Hero: Booking photo `920339326` (garden with old trees in evening light) or `920352556` (sunset over the lake) — never a staged interior; Ken-Burns.
- Answer capsule: „Das Ferienhaus am See in der Natur ist eine Wohnung mit zwei Schlafzimmern (192 m²) in einer charaktervollen Villa von 1940 in Königs Wusterhausen-Kablow, wenige Schritte vom Krüpelsee. Für bis zu 4 Gäste: zwei große Doppelbetten, Küche mit Kochinsel, Waschmaschine, Badewanne und Dusche, Terrassen mit See- und Gartenblick und ein naturbelassener Garten mit Kiefern und Birken. Kostenloses WLAN und Parkplatz, keine Haustiere, Nichtraucher."
- Facts ribbon: `192 m² · max. 4 Gäste · 2 Schlafzimmer · Badewanne & Dusche · Küche mit Kochinsel · Terrassen mit Seeblick · Garten 1.868 m² · Carport/Parkplatz · WLAN`.
- Sections: Das Haus (Villa von 1940, massive Bausubstanz, zwei Terrassen aus Naturstein und zwei Dachterrassen, offener Kamin — mention the fireplace only as part of the house, not as guest-usable, until §12 answers); Wohnen & Schlafen (2 Schlafzimmer mit großen Doppelbetten, Wohnzimmer mit Holzvertäfelung und Panoramafenster, Obergeschoss über Treppe); Küche (Kochinsel, Natursteinarbeitsplatte, Einbaugeräte, Waschmaschine); Bäder (Badewanne unter der Dachschräge, bodengleiche Dusche); Draußen (Terrassen mit Seeblick, naturbelassener Garten Richtung See als bewusstes Biotop, Picknickplatz, Fahrradabstellplatz — **no jetty, no direct lake access claim**); Aktiv (Radfahren, Wandern, Angeln, Kanu/Kajak per Booking — „in der Umgebung, Ausrüstung auf Anfrage"); Gallery (folder `villa-fontanestrasse/aussen` + `/innen` — staged photos only after confirmation); Lage (Kablow, Naturpark Dahme-Heideseen, Regionalbahn Kablow, BER ca. 17 km, kein Fluglärm); **Gut zu wissen** (Hausregeln from Appendix F.2: Check-in 15:00–18:00 Uhr, Check-out bis 11:00 Uhr, Kinder willkommen — bis 17 Jahre in vorhandenen Betten kostenlos, keine Babybetten/Zustellbetten, keine Haustiere, Nichtraucher, keine Partys, Deutsch/Englisch); Preise & Buchung; FAQ (5: „Wie viele Personen?", „Gibt es einen direkten Seezugang?" → „Das Ufer liegt wenige Schritte entfernt; Details zur Nutzung erhalten Sie mit der Buchungsbestätigung." until confirmed, „Sind Haustiere erlaubt?" → nein, „Ist das Haus ruhig?" → kein Fluglärm, ruhiger Ortsteil, „Wie komme ich hin?"); form; legal line.
- JSON-LD as P2 with `occupancy 4`, `numberOfBedrooms 2`, `floorSize 192`, `checkinTime "15:00"`, `checkoutTime "11:00"`, `petsAllowed false`, `latitude 52.2958647`, `longitude 13.7128285`, `postalCode "15712"`.

### 5.9 P6 — `/ferienhaeuser/villa-am-kruepelsee-zernsdorf` (the estate hosting U1 + U2)
- **Title:** `Villa am Krüpelsee – Urlaub in einer Altbauvilla direkt am See, Zernsdorf`
- **Meta:** `Zwei Ferienwohnungen in einer renovierten Altbauvilla mit 30 m Seeufer, privaten Stegen und Garten am Krüpelsee in Zernsdorf. Ruhige Stichstraße, Südlage, Berlin in 40 Minuten.`
- **H1:** `Die Villa am Krüpelsee`
- Content: history/character of the house (no dates unless confirmed), the grounds (30 m shore, 4 jetties, lawn, willow, pavilion, terrace), what guests may use [TO CONFIRM list], the two units (cards → P2/P3), Zernsdorf & the lake (link P9), seasons, gallery (`villa-am-kruepelsee/aussen` + `region/kruepelsee`), FAQ, CTA. JSON-LD `LodgingBusiness` (name „Villa am Krüpelsee – Ferienwohnungen") + breadcrumbs.

### 5.10 P7 — `/buchen`
- **Title:** `Verfügbarkeit anfragen & buchen – Ferienwohnungen am See Königs Wusterhausen`
- **Meta:** `So einfach buchen Sie: Anfrage senden, persönliche Bestätigung innerhalb von 24 Stunden, Anreise-Infos per E-Mail. Alternativ direkt auf Booking.com buchen.`
- **H1:** `Anfragen & Buchen`
- Sections: 3-step process (Anfrage → Bestätigung & Zahlung → Anreise-Infos & Schlüsselübergabe); the inquiry form (all units selectable); **Booking.com** panel with the four listing buttons; **Preise & Konditionen** (table per unit: Nebensaison/Hauptsaison/Feiertage, Mindestaufenthalt, Endreinigung, Kaution, Zahlungsweise, Stornobedingungen — every cell "auf Anfrage" until the owner supplies values; when values exist, add „Stand: MM/JJJJ, inkl. MwSt."); Check-in/Check-out; Gutschein/Geschenkidee (optional); FAQ (5); legal line.
- JSON-LD: `WebPage` + `HowTo` (3 steps) + `FAQPage` + breadcrumbs.

### 5.11 P8–P12 — Region cluster (local SEO backbone)
- **P8 `/region`** — Title `Urlaub in Königs Wusterhausen & Dahme-Seenland – Seen, Natur, Berlin-Nähe` · H1 `Königs Wusterhausen und das Dahme-Seenland` · content: the town (largest town of Dahme-Spreewald, Schloss, Funkerberg, Altstadt, Wochenmarkt Di/Fr), the districts (Zernsdorf, Kablow, Niederlehme, Senzig, Neue Mühle, Wernsdorf, Zeesen, Ziegenhals — one paragraph each with what guests find there), the lakes, the seasons, hub links to P9–P12 and the unit pages, distances block, FAQ. JSON-LD `TouristDestination` + breadcrumbs.
- **P9 `/region/kruepelsee`** — Title `Der Krüpelsee – Baden, Paddeln, Angeln und Ferien am Ufer` · H1 `Der Krüpelsee` · content: geography (natural lake of the Dahme chain, Zernsdorf west shore, Senzig east, Kablow north; quiet, reed belts, swans, herons, fish: Hecht, Barsch, Karpfen, Schleie — say „gilt als fischreich"), swimming (from the jetties, water quality "gilt als gut" — no official grade unless verified), SUP/canoe (Einsetzstelle Zernsdorf Fährweg, Märkische Umfahrt), houseboat/boat rentals (BunBo Zernsdorf — no prices), Rundwanderweg Krüpelsee (ca. 23 km), winter (ice, mist, fireplace), our three units on/near the lake, gallery `region/kruepelsee`, FAQ (Darf man im Krüpelsee baden? Gibt es Motorboote? Kann man angeln? — with „Angelkarte erforderlich, Auskunft beim Angelverband" phrasing). JSON-LD `LakeBodyOfWater` + breadcrumbs + FAQ.
- **P10 `/region/ausflugsziele`** — Title `Ausflugsziele rund um Königs Wusterhausen – Tropical Islands, Spreewald, Berlin` · H1 `Ausflugsziele von der Haustür aus` · content: 12 cards with distance/time (Appendix C): Tropical Islands, Spreewald (Lübben/Lübbenau Kahnfahrt), Berlin-Mitte, Köpenick Altstadt & Schloss, Schloss Königs Wusterhausen, Funkerberg & Sendermuseum, Strandbad Neue Mühle & Schleuse, Naturbadestelle Am Großen Zug, Naturpark Dahme-Heideseen, Wildau (TH, Wildau A10 Center for shopping — optional), Potsdam, Müggelsee; plus „Regenwetter-Ideen" and „Mit Kindern". JSON-LD `ItemList` of `TouristAttraction` + breadcrumbs.
- **P11 `/region/aktivitaeten-am-see`** — Title `Aktivitäten am See: SUP, Kanu, Radfahren, Angeln, Wandern im Dahme-Seenland` · H1 `Aktiv am Wasser und im Wald` · content by activity with practical pointers (where to rent, which route, season), DahmeRadweg, „Pack die Badehose ein" tour (35 km, 10 swimming spots), Rundweg Tiergarten (7 km), Funkerberg (6 km), winter activities, wellness (own saunas), FAQ. JSON-LD `Article`/`WebPage` + breadcrumbs.
- **P12 `/region/anreise`** — Title `Anreise nach Königs Wusterhausen – S-Bahn, Auto, Flughafen BER` · H1 `Anreise: mit Bahn, Auto oder vom BER` · content: by car (A10 AS Königs Wusterhausen, A13, B179/B246; parking at each house), by train (S46 to KW; RE2/RE7; from KW to Zernsdorf station / by bus/taxi/bike to the houses — give the last-mile per unit: Bahnhof Zernsdorf (Regionalbahn, not S-Bahn) → Karl-Marx-Straße [distance TO CONFIRM], Bahnhof Niederlehme (Regionalbahn) → Seestraße [TO CONFIRM], Kablow → Regionalbahn-Halt Kablow or bus/taxi from KW [TO CONFIRM]), from BER (train ca. 15 min to KW, taxi ca. 20–25 min), by bike (DahmeRadweg), e-car charging [TO CONFIRM], the distances table block, FAQ. JSON-LD `WebPage` + breadcrumbs + FAQ.

### 5.12 P13–P15
- **P13 `/gastgeber`** — Title `Ihre Gastgeberin: Marita Briese & Seehaus Berlin` · H1 `Persönlich vermietet, persönlich betreut` · content: who hosts (Marita Briese, Ausblicke Management GmbH, based in Berlin, rooted in the Krüpelsee region), the philosophy (few houses, real lake access, discretion, 24-h personal answer), how a stay works, sustainability & house care, the sister brand Seehaus Berlin (one sentence, link), contact card, FAQ. JSON-LD `AboutPage` + `Organization`/`Person`.
- **P14 `/faq`** — Title `Häufige Fragen – Ferienwohnungen am See Königs Wusterhausen` · H1 `Gut zu wissen` · 18–24 Q&As grouped: Buchung & Preise · Anreise & Schlüssel · Ausstattung · Haus & See · Region · Storno. Answers 40–80 words, factual, „auf Anfrage" where unknown. JSON-LD `FAQPage` (all Q&As).
- **P15 `/kontakt`** — Title `Kontakt – Ferien am See Brandenburg` · H1 `Sprechen Sie mit uns` · contact card (phone, WhatsApp, e-mail, hours, postal address of the operator), the inquiry form, „Sie erreichen uns auch über Booking.com", map of the three locations (OSM embed centred on KW with a note), FAQ (3). JSON-LD `ContactPage` + `Organization` `contactPoint`.

### 5.13 Legal pages
- **P16 `/impressum`**: § 5 DDG data from §2.1 (company, address, Geschäftsführerin, phone, e-mail, register, USt-IdNr.), § 18 Abs. 2 MStV responsible person, EU-ODR/VSBG sentence („Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit." — [TO CONFIRM with owner]), Haftung für Inhalte/Links, Urheberrecht, Bildnachweis („Alle Fotos: Ausblicke Management GmbH"). `noIndex: true`.
- **P17 `/datenschutz`**: created by the platform from `update_legal_profile` (ragione_sociale `Ausblicke Management GmbH`, tipo_soggetto `company`, indirizzo `Kuno-Fischer-Str. 14, 14057 Berlin`, email `kontakt@seehaus-berlin.de`, partita_iva `DE262426225`, codice_fiscale `HRB 115701 B (Amtsgericht Charlottenburg)`, telefono `+49 163 5088945`). Then read it and add German sections the template may lack: contact-form processing (Art. 6 Abs. 1 lit. b DSGVO), WhatsApp contact notice, Booking.com as separate controller, OpenStreetMap embed notice, hosting (Timbaly) processor note [TO CONFIRM provider details], guest registration data (§ 29/30 BMG). Have the owner's lawyer review — say so in the handover.
- **P18 `/agb-mietbedingungen`**: draft outline (owner + lawyer to finalise): Vertragspartner; Vertragsschluss (Anfrage → schriftliche Bestätigung); Preise (inkl. MwSt.), Nebenkosten (Endreinigung, Kaution), Zahlung (Anzahlung x %, Rest bis y Tage vor Anreise); Stornierung (staffel); An-/Abreise (Zeiten, Schlüssel); Personenzahl; Haustiere; Rauchen; Ruhezeiten & Feiern; Nutzung von Steg/See/Sauna auf eigene Gefahr, Kinder beaufsichtigen; Haftung; Meldeschein (§ 29 BMG); kein Widerrufsrecht bei Beherbergungsleistungen (§ 312g Abs. 2 Nr. 9 BGB); Gerichtsstand. Every numeric value "[vom Eigentümer festzulegen]" until supplied. `noIndex: true`.
- The disclaimer block on property pages (`rechtshinweis`): „Alle Angaben ohne Gewähr; Ausstattung und Verfügbarkeit können sich ändern. Preise inkl. gesetzlicher MwSt. Maßgeblich ist die schriftliche Buchungsbestätigung."

### 5.14 Copy bank (German, ready to use; adapt, do not repeat verbatim on more than one page)
- Eyebrows: „Direkt am See" · „Zernsdorf · Krüpelsee" · „Niederlehme · Großer Zug" · „Kablow · Naturlage" · „40 Minuten von Berlin" · „Persönlich vermietet".
- H2 candidates: „Der See beginnt am Ende des Gartens." · „Morgens Nebel, abends Feuer." · „Zwei Ebenen, zwei Terrassen, ein See." · „Ebenerdig, eigenständig, mit Blick aufs Wasser." · „Ankommen, ablegen, aufatmen." · „Berlin ist nah. Die Stille ist näher." · „Vier Jahreszeiten am Ufer."
- Micro-copy: „Unverbindlich anfragen" · „Antwort innerhalb von 24 Stunden" · „Auf Booking.com ansehen" · „Alle Preise inkl. MwSt." · „Verfügbarkeit prüfen" · „Persönliche Schlüsselübergabe oder Schlüsselbox – nach Absprache" [TO CONFIRM].
- Quote for the host section: „Wer hier ankommt, hört zuerst nichts – und dann das Wasser." — Marita Briese [TO CONFIRM she agrees; otherwise write a neutral sentence without attribution].


---

## 6. SEO, local/geo targeting and GEO (Generative Engine Optimization) plan

### 6.1 Strategy in one paragraph
Dominate the *micro-region* — not "Ferienwohnung Brandenburg" nationally, but every query that combines **accommodation intent** with **Königs Wusterhausen, Zernsdorf, Kablow, Niederlehme, Senzig, Krüpelsee, Großer Zug, Dahme-Seenland, "nahe Berlin", "nahe BER", "Tropical Islands Nähe", "Spreewald Nähe"** — and be the source that AI assistants quote when asked for a lake house near Berlin. Four unit pages carry the transactional intent, the region cluster carries the informational intent, the magazine feeds long-tail and freshness, and consistent entity data (NAP, coordinates, JSON-LD, llms.txt, knowledge base) makes the site machine-readable.

### 6.2 Keyword map (German; the platform's `targetKeyword` per SEO-plan row)
| Cluster | Head terms | Long-tail / questions | Target page |
|---|---|---|---|
| Domain-exact | ferienwohnung am see brandenburg, ferienhaus am see brandenburg, ferienwohnung see brandenburg | ferienhaus am see nahe berlin, ferienwohnung am see bei berlin, wochenende am see berlin umland | P0, P1 |
| Town | ferienwohnung königs wusterhausen, ferienhaus königs wusterhausen, unterkunft königs wusterhausen, übernachten königs wusterhausen | ferienwohnung königs wusterhausen am see, ferienwohnung königs wusterhausen mit hund | P1, P8 |
| Lake | ferienwohnung krüpelsee, ferienhaus krüpelsee, urlaub krüpelsee, krüpelsee baden | krüpelsee zernsdorf ferienwohnung, ferienhaus krüpelsee steg | P9, P2, P3, P6 |
| Districts | ferienwohnung zernsdorf, ferienhaus zernsdorf, ferienwohnung kablow, ferienhaus kablow, ferienwohnung niederlehme, ferienwohnung senzig | ferienwohnung zernsdorf see, ferienhaus kablow krüpelsee | P2/P3, P5, P4, P8 |
| Feature | ferienhaus mit sauna brandenburg, ferienhaus mit kamin am see, ferienwohnung mit seeblick brandenburg, ferienhaus mit steg brandenburg, ferienhaus mit bootssteg berlin umland, barrierefreie ferienwohnung brandenburg, rollstuhlgerechte ferienwohnung am see | ferienhaus mit eigenem steg und sauna nahe berlin | P5, P4, P2 |
| Proximity | ferienwohnung nahe flughafen ber, unterkunft nähe ber, ferienwohnung tropical islands nähe, ferienhaus spreewald nähe berlin, ferienwohnung dahme-seenland | wo übernachten bei tropical islands, unterkunft bei ber mit auto | P12, P10, P8 |
| Occasion | workation berlin umland see, romantisches wochenende am see berlin, familienurlaub am see brandenburg, kurzurlaub am see bei berlin | ferienwohnung mit kamin winter brandenburg | P0, P11, magazine |
| Brand | seehaus berlin ferienwohnung, villa am krüpelsee ferienwohnung | — | P6, P13 |

Rules: one primary keyword per page (in title, H1, first 100 words, one H2, image alt, URL), 2–4 secondaries in H2/H3 and body, never stuffed; place names as natural entities (Zernsdorf, Kablow, Niederlehme, Königs Wusterhausen, Krüpelsee, Großer Zug, Dahme-Seenland, Landkreis Dahme-Spreewald, Brandenburg, Berlin, BER).

### 6.3 Technical SEO on this platform
- Titles ≤ 60, descriptions 140–160, unique per page; canonical auto; `noIndex` on legal pages via `update_page_seo`.
- URLs from §5.1; no trailing slashes; no umlauts.
- `robots.txt` (via `save_seo_files`): allow all, `Sitemap: https://ferienwohnung-see-brandenburg.de/sitemap.xml`, optionally allow AI crawlers explicitly (`User-agent: GPTBot` / `ClaudeBot` / `PerplexityBot` / `Google-Extended` → `Allow: /`) — this is a marketing site that *wants* to be cited.
- `llms.txt` (Appendix D.3): the canonical machine-readable summary — facts, units, addresses (locality level), distances, booking channels, contact, links.
- Images: descriptive German file names (Appendix B already are), `alt` per image, ≤ 300 KB each where possible (resize to max 2000 px on the long edge before upload; keep originals), `width`/`height` set, hero `fetchpriority="high"`.
- Page speed: one Tailwind CDN script (platform pattern), fonts self-hosted by `set_site_fonts`, no Lucide/other CDNs (inline SVG icons), video only with `preload="metadata"` and desktop-only autoplay.
- Internal links: each page ≥ 3 in-content links; every unit page linked from home, overview, region hub, and the two sibling units ("Weitere Unterkünfte").
- Breadcrumbs JSON-LD on all pages except home.
- Hreflang: automatic when EN translations exist (Phase 3) — verify in `get_page_translations`.
- IndexNow is automatic on publish; Google needs Search Console (owner task) + sitemap submission there.

### 6.4 Structured data templates (fill from §2 — never leave placeholders)
**6.4.1 Home — `Organization` + `WebSite`**
```json
{"@context":"https://schema.org","@graph":[
 {"@type":["Organization","LodgingBusiness"],"@id":"https://ferienwohnung-see-brandenburg.de/#org",
  "name":"Ferienhaus am See Brandenburg – Seehaus Berlin Ferien","legalName":"Ausblicke Management GmbH",
  "url":"https://ferienwohnung-see-brandenburg.de/","logo":"https://ferienwohnung-see-brandenburg.de/uploads/…/brand/logo-512.png",
  "telephone":"+49 163 5088945","email":"kontakt@seehaus-berlin.de",
  "address":{"@type":"PostalAddress","streetAddress":"Kuno-Fischer-Str. 14","postalCode":"14057","addressLocality":"Berlin","addressCountry":"DE"},
  "areaServed":["Königs Wusterhausen","Zernsdorf","Kablow","Niederlehme","Dahme-Seenland","Brandenburg"],
  "founder":{"@type":"Person","name":"Marita Briese"},
  "sameAs":["https://seehaus-berlin.de","https://www.booking.com/hotel/de/traum-maisonette-direkt-am-see.de.html","https://www.booking.com/hotel/de/leben-direkt-am-see.de.html","https://www.booking.com/hotel/de/gastehaus-am-grossen-zug-see.de.html","https://www.booking.com/hotel/de/ferienhaus-am-see-in-der-natur.de.html"]},
 {"@type":"WebSite","@id":"https://ferienwohnung-see-brandenburg.de/#website","url":"https://ferienwohnung-see-brandenburg.de/","name":"Ferienhaus am See Brandenburg","inLanguage":"de-DE","publisher":{"@id":"https://ferienwohnung-see-brandenburg.de/#org"}}
]}
```
**6.4.2 Unit page — `VacationRental` (Google's vacation-rental vocabulary)**
```json
{"@context":"https://schema.org","@type":"VacationRental",
 "@id":"https://ferienwohnung-see-brandenburg.de/ferienhaeuser/maisonette-am-kruepelsee#unit",
 "name":"Maisonette am Krüpelsee","identifier":"U1",
 "brand":{"@id":"https://ferienwohnung-see-brandenburg.de/#org"},
 "url":"https://ferienwohnung-see-brandenburg.de/ferienhaeuser/maisonette-am-kruepelsee",
 "image":["<absolute upload URLs, 3–8 images>"],
 "description":"<answer capsule>",
 "address":{"@type":"PostalAddress","streetAddress":"Karl-Marx-Straße 8","postalCode":"15712","addressLocality":"Königs Wusterhausen","addressRegion":"Brandenburg","addressCountry":"DE"},
 "latitude":52.2978596,"longitude":13.6971580,
 "containsPlace":{"@type":"Accommodation","occupancy":{"@type":"QuantitativeValue","value":5},
   "floorSize":{"@type":"QuantitativeValue","value":125,"unitCode":"MTK"},
   "numberOfBedrooms":2,"numberOfBathroomsTotal":2,
   "amenityFeature":[{"@type":"LocationFeatureSpecification","name":"Kaminofen","value":true},{"@type":"LocationFeatureSpecification","name":"Seeblick","value":true},{"@type":"LocationFeatureSpecification","name":"Terrasse","value":true},{"@type":"LocationFeatureSpecification","name":"Parkplatz","value":true}]},
 "checkinTime":"15:00","checkoutTime":"11:00","petsAllowed":false,
 "knowsLanguage":["de","en"],
 "additionalProperty":[{"@type":"PropertyValue","name":"Gewässer","value":"Krüpelsee"}]}
```
For U1/U3/U4 use the Booking coordinates from Appendix F (no geocoding); U2 shares U1's coordinates (same building). Otherwise geocode with OpenStreetMap Nominatim (`https://nominatim.openstreetmap.org/search?q=…&format=json`, one request per second, custom User-Agent) and paste real `latitude`/`longitude`; drop the keys rather than leave zeros. `occupancy` only when max guests is confirmed (U1: 5, U3: 2, U4: 4 — confirmed). Add `aggregateRating` only with owner-confirmed Booking score and count. No `offers` until a rate table exists (then `priceRange` on the `LodgingBusiness`).
**6.4.3 Every subpage — `BreadcrumbList`** (Startseite › Unterkünfte › Maisonette am Krüpelsee).
**6.4.4 FAQ — `FAQPage`** with the exact visible Q&As.
**6.4.5 Region — `TouristDestination` (P8), `LakeBodyOfWater` (P9), `ItemList` of `TouristAttraction` (P10), `Article` (magazine) with `author` = Organization and `datePublished`.**

### 6.5 GEO — being the answer in AI assistants
- **Answer capsule** at the top of every page: 2–3 declarative sentences with entity + place + key facts + how to book, in the same order everywhere. Assistants lift these.
- **FAQ answers** 40–80 words, self-contained, each repeats the entity name once ("Die Maisonette am Krüpelsee …").
- **Consistency:** the same numbers in text, table, FAQ, JSON-LD, llms.txt, knowledge base. Use "ca." for every distance/time; add „Stand: MM/JJJJ" to price tables.
- **Entity density without stuffing:** each page names its lake, district, town, region, county, state and Berlin/BER once each in natural sentences.
- **Quotable sentences:** one factual blockquote per page („Der Krüpelsee liegt ca. 35 km südöstlich von Berlin-Mitte im Dahme-Seenland; die S-Bahn S46 verbindet Königs Wusterhausen in ca. 30 Minuten mit Berlin-Ostkreuz.").
- **Comparison table** on P1 (assistants love tables), **distances table** on P8/P12, **step list** on P7.
- **llms.txt** maintained with every change (Appendix D.3); `robots.txt` allows AI crawlers.
- **About/Gastgeber page** with a named human, address, register data (E-E-A-T).
- **Off-site entity signals** (owner tasks, §11): Google Business Profile per house (category „Ferienwohnung"/„Ferienhaus" — only if guests are met in person or a legitimate address is served), Bing Places, Apple Business Connect, OpenStreetMap tags for the houses (tourism=apartment/chalet), Tourismusverband Dahme-Seenland host listing (dahme-seenland.de), reiseland-brandenburg.de (TMB), Stadt Königs Wusterhausen accommodation list, kulturfeste.de, plus consistent NAP everywhere and links from seehaus-berlin.de (footer „Ferien am See") to this site.

### 6.6 Content calendar — Magazin (Phase 2, one article per week, 900–1300 words, 1 hero + 3 images, `Article` JSON-LD, 4 internal links)
| Week | Slug | Working title | Primary keyword |
|---|---|---|---|
| 1 | `/magazin/tropical-islands-uebernachten-am-see` | Tropical Islands besuchen und am See übernachten – 30 Minuten entfernt | tropical islands unterkunft nähe |
| 2 | `/magazin/spreewald-tagesausflug-vom-kruepelsee` | Spreewald-Tagesausflug: Kahnfahrt in Lübbenau, abends zurück an den Krüpelsee | spreewald ausflug unterkunft berlin nähe |
| 3 | `/magazin/berlin-entdecken-am-see-wohnen` | Berlin entdecken, am See wohnen: So klappt der Städtetrip mit S-Bahn | berlin städtetrip unterkunft umland see |
| 4 | `/magazin/workation-am-see-bei-berlin` | Workation am See: Arbeiten mit Glasfaser und Seeblick bei Berlin | workation berlin umland |
| 5 | `/magazin/kruepelsee-baden-sup-kanu` | Baden, SUP und Kanu auf dem Krüpelsee – Einstiegsstellen, Regeln, Tipps | krüpelsee baden |
| 6 | `/magazin/dahme-radweg-tour-ab-koenigs-wusterhausen` | DahmeRadweg ab Königs Wusterhausen: Tour-Ideen mit Badestopps | dahme radweg königs wusterhausen |
| 7 | `/magazin/schloss-koenigs-wusterhausen-funkerberg` | Schloss und Funkerberg: Ein Kulturtag in Königs Wusterhausen | schloss königs wusterhausen besuch |
| 8 | `/magazin/winter-am-see-kamin-sauna` | Winter am See: Kamin, Sauna und Morgennebel – warum die kalte Saison lohnt | ferienhaus winter kamin sauna brandenburg |
| 9 | `/magazin/anreise-ohne-auto-koenigs-wusterhausen` | Ohne Auto an den See: Anreise mit S46, RE und Fahrrad | anreise königs wusterhausen s-bahn |
| 10 | `/magazin/familienurlaub-am-see-brandenburg` | Familienurlaub am See: Strandbad, Wasserspielplatz, Tropical Islands | familienurlaub am see brandenburg |
| 11 | `/magazin/barrierefrei-urlaub-am-see` | Barrierefrei am See: Was das Gästehaus am Großen Zug bietet | barrierefreie ferienwohnung brandenburg |
| 12 | `/magazin/naturpark-dahme-heideseen-wandern` | Naturpark Dahme-Heideseen: Rundwanderweg Krüpelsee und Tiergarten | wandern dahme-seenland |
Create these as approved rows in the SEO plan with `scheduledPublishAt` dates one week apart **only if** the owner wants the platform's nightly generator to write them (costs platform credits); otherwise leave unscheduled and write them yourself with `create_page_from_html` + `seoPlanItemId`. `/magazin` index uses `[[PAGE_LIST:prefix=/magazin,layout=cards,limit=12,sort=newest,columns=3]]`.

### 6.7 Booking.com co-existence
- Booking stays the distribution channel; this site is the **direct** channel. Primary CTA everywhere: direct inquiry. Secondary: „Auf Booking.com ansehen" (`target="_blank" rel="noopener"`).
- Rate parity: since the BGH ruling (2021) narrow parity clauses are void in Germany; the owner *may* offer better direct terms, but this site claims nothing about prices until the owner decides. Allowed neutral wording: „Direkt beim Gastgeber anfragen – persönlich und ohne Umwege."
- Keep unit names identical on both channels for entity matching (Booking title ↔ page H1/JSON-LD `name`); if the Booking titles differ (exact Booking spellings: „Traum-Maisonette direkt am See", „Leben direkt am See", „Gästehaus am großen Zug-See", „Ferienhaus am See in der Natur"), mention the Booking title once on each unit page („bei Booking.com als ‚Traum Maisonette direkt am See' gelistet").
- Availability: no calendar integration exists on Timbaly; the form asks for dates; Phase 4 option: embed a channel-manager widget (e.g. Smoobu/Lodgify) via `save_footer_scripts` after consent review.

### 6.8 Measurement
- Platform analytics: `get_analytics_overview`, `get_top_pages`, `get_conversions` (every CTA/button carries the `convert` class).
- Google Search Console: owner connects at `/admin/settings/search-visibility`; after that use `get_search_performance` and `get_indexing_status` monthly; re-check `get_search_visibility_status`.
- Monthly review loop: top queries → strengthen the matching page; zero-click pages → sharpen title/description; new questions from guests → FAQ + llms.txt.


---

## 7. Site configuration decisions (defaults — the owner may override)

| Setting | Tool | Value |
|---|---|---|
| Display name | `update_site_settings.name` | `Ferienhaus am See Brandenburg` |
| Contact e-mail (form notifications — without it leads are silently dropped) | `update_site_settings.contactEmail` | `kontakt@seehaus-berlin.de` |
| Languages | `update_site_settings.availableLanguages` | `de` now; `de,en` in Phase 3 |
| Logo / favicon | `update_site_settings.logoUrl/faviconUrl` | uploaded `brand/logo-512.png`, `brand/favicon.svg` (Appendix E.1) |
| Fonts | `set_site_fonts` | display `Cormorant Garamond` [500,600,700], body `Inter` [400,500,600] |
| Head tags | `save_head_tags` | §4.7 |
| Footer scripts | `save_footer_scripts` | §4.8 |
| Legal profile | `update_legal_profile` | §5.13 values |
| 7.7 Cookie banner | `update_cookie_consent` | `enableCookieConsent: true`, `cookieEnableAnalytics: true`, `cookieEnableMarketing: false`, `cookiePrivacyPolicyUrl: /datenschutz`, position `bottom-bar`, title `Datenschutz-Einstellungen`, description: „Wir setzen technisch notwendige Cookies, damit diese Website funktioniert. Für die Reichweitenmessung benötigen wir Ihre Einwilligung – ohne sie wird nichts geladen. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen" im Seitenfuß ändern." (No Google Ads/Analytics in Phase 1; if the owner adds them later, enable the marketing category and extend the text.) |
| AI disclosure (EU AI Act Art. 50) | `update_ai_disclosure` | leave as is (disabled, like the sister sites) — owner's legal call; mention it in the handover |
| AI instructions | `save_ai_instructions` | Appendix D.2 |
| Knowledge base | `save_knowledge_item` × 8 | Appendix D.1 |
| Variables | `save_variable` | §7.1 |
| SEO files | `save_seo_files` | robots §6.3, llms.txt Appendix D.3 |

### 7.1 Variables (`{{key}}` in pages, nav, footer, blocks)
`business_name`=`Ferienhaus am See Brandenburg` · `brand_short`=`Ferien am See` · `company_name`=`Ausblicke Management GmbH` · `company_address`=`Kuno-Fischer-Str. 14, 14057 Berlin` · `contact_name`=`Marita Briese` · `phone`=`+49 163 5088945` · `phone_link`=`+491635088945` · `whatsapp`=`+49 172 8588588` · `whatsapp_link`=`https://wa.me/491728588588` · `email`=`kontakt@seehaus-berlin.de` · `hours`=`Mo–Fr 9:00–18:00 Uhr, Sa nach Vereinbarung` · `portal_url`=`https://seehaus-berlin.de` · `booking_u1`…`booking_u4` = the four Booking URLs · `place_u1`=`Zernsdorf, Königs Wusterhausen` · `place_u3`=`Niederlehme, Königs Wusterhausen` · `place_u4`=`Kablow, Königs Wusterhausen` · `checkin`=`auf Anfrage` · `checkout`=`auf Anfrage` · `min_stay`=`auf Anfrage` (replace when confirmed) · `hrb`=`HRB 115701 B` · `ustid`=`DE262426225`.
Confirmed values for the existing variables `checkin` = `15:00–18:00 Uhr (Ankunftszeit bitte vorab mitteilen)` and `checkout` = `bis 11:00 Uhr` (Appendix F, U3/U4). Because the variables are site-wide, use them on the U3/U4 pages and in the FAQ; on the U2 page write „laut Buchungsbestätigung" until §12 item 2 confirms the same times for the Apartment (U1 confirmed: identical times). `booking_u1` = `https://www.booking.com/hotel/de/traum-maisonette-direkt-am-see.de.html`, `booking_u3` = `https://www.booking.com/hotel/de/gastehaus-am-grossen-zug-see.de.html`, `booking_u4` = `https://www.booking.com/hotel/de/ferienhaus-am-see-in-der-natur.de.html`.

---

## 8. Media plan

### 8.1 Folder structure in the target media library (`create_media_folder`; the platform normalises names — always use the returned path)
`brand` · `villa-am-kruepelsee/aussen` · `villa-am-kruepelsee/maisonette` · `villa-am-kruepelsee/apartment` · `villa-am-kruepelsee/innen-unzugeordnet` (interiors until the owner assigns them) · `galeriehaus/gaestehaus` · `galeriehaus/aussen` · `villa-fontanestrasse/innen` · `villa-fontanestrasse/aussen` (Booking + seebiotophaus.de originals for U4) · `region/kruepelsee` · `region/karten` · `video`.

### 8.2 Transfer procedure (shell available)
1. For each row in Appendix B: `curl -fsSL -o <local> "<source URL>"` (all sources answer HTTP 200 without auth; the `-de.timbaly.site` mirrors work too).
2. Normalise: convert PNG photos to JPEG q85; resize long edge to 2000 px (`convert in.png -resize 2000x2000\> -quality 85 out.jpg` if ImageMagick exists; otherwise upload as is); keep the SEO file names (lowercase, hyphens); portrait phone shots (852×1846) stay portrait.
3. `request_media_upload(folder)` → run the returned `curlCommand` **one file per call**; the link expires — request a fresh one per batch.
4. `list_media` → collect the real URLs; **only these** go into HTML.
5. `update_media(id, altText, description)` for every file with the German alt from Appendix B (description = where it should be used).
6. Hero/OG: crop `hauptbild-villa-am-kruepelsee-steg-hausboot.jpg` to 1200×630 (`brand/og-default.jpg`) with the house kept right of centre; use it as fallback `ogImage`.
7. Video: download `hermann-website-video-warm-magic-hour-web.mp4`, inspect (duration, first frames), upload to `video/`, extract a poster frame (`ffmpeg -ss 2 -i in.mp4 -frames:v 1 poster.jpg`).
If you have **no shell**: hand the owner the `dropPageUrl` per folder and the Appendix B list; do not claim uploads you cannot perform.

### 8.3 Curation rules
- Unit pages: only photos of that unit or of the shared grounds it can use; never interiors of other units/houses. Villa interiors (Appendix B.1 "innen") are shown on U1/U2 only after the owner's assignment; until then on P6 as „Wohnräume der Villa" is also **not** allowed (guests would assume they get them) → keep them in `innen-unzugeordnet`, unused.
- Home: exterior + lake + one interior per house (assigned ones only).
- Always both exterior and interior on every unit page once assignments exist; minimum 8 images per unit page, 12 on P0.
- Never use B.6 renders for anything except, optionally, the water texture as a decorative background.
- No AI image generation for properties. `generate_images` may be used only for an abstract OG banner if the owner wants one — default: don't.

---

## 9. Execution runbook (tool by tool, in order; verify after each phase)

**Phase 0 — Read & confirm (no writes).** `get_site_settings`, `get_site_config`, `list_pages`, `list_media`, `get_knowledge_items`, `get_variables`, `list_blocks`, `get_search_visibility_status`, `get_legal_status`, `get_page_brief` (to load the current `systemPrompt`). Read Appendix F before writing any unit page. Compare with §1.5: the settings listed there must be present; pages, media, blocks, nav and SEO plan must be absent. If anything else exists, stop and reconcile. Send the owner the question list (§12) and continue with everything that does not depend on the answers.

**Phase 1 — Identity & legal.** Most of this is already done (§1.5) — verify each item and only fill the gaps: `get_site_settings` / `get_legal_status` (expect 100 %) / `get_variables` / `get_knowledge_items` → fix the cookie-banner privacy URL (§1.5) → `get_site_config` → `save_head_tags` (§4.7, keeping the font preloads and the `/fonts/sets/…css` link) → `save_knowledge_item` for Appendix D.1 items 2–8 only → re-read `get_ai_instructions` (already saved).

**Phase 2 — Media.** §8.1–8.2 completely, then `list_media` and keep the URL map in your notes. Upload the SVG/PNG brand files; set logo/favicon.

**Phase 3 — Blocks (`save_block`, language `de`).** `cta-anfrage` (band with two buttons; params `unit` default „unsere Unterkünfte"), `vertrauensleiste`, `anreise-tabelle`, `unterkuenfte-vergleich`, `booking-links` (4 buttons), `kontakt-karte` (phone/WhatsApp/e-mail/hours from variables), `rechtshinweis`, `fakten-leiste` (params `f1`…`f6`), `unterkuenfte-karten` (the 4 cards; single source for home, region and sibling-unit sections). Reference them as `[[BLOCK:name]]` / `[[BLOCK:name,unit=…]]`.

**Phase 4 — SEO plan.** `create_seo_plan` (name „Ferien am See – Launch", language `de`, targetCountry `DE`, targetLocations „Königs Wusterhausen, Zernsdorf, Kablow, Niederlehme, Senzig, Dahme-Seenland, Brandenburg, Berlin", targetKeywords from §6.2) → `add_seo_plan_items` for P0–P18 (proposedUrl, proposedTitle, proposedDescription, targetKeyword, targetLocation, pageType from §5.1, `notes` = the page spec from §5 incl. the exact upload URLs of its photos, `isApproved: true`, no `scheduledPublishAt`) → `get_seo_plan_details` → note each row id.

**Phase 5 — Navigation.** `save_navigation(navMenuHtml, footerHtml, language:'de')` per §4.10 with all Phase-1 URLs already in place (`/magazin` added later with `add_page_to_navigation`).

**Phase 6 — Pages.** For each row, in this order P16 → P17 (verify the platform page, then edit if needed with `edit_page_content`) → P18 → P15 → P13 → P14 → P12 → P9 → P10 → P11 → P8 → P7 → P6 → P2 → P3 → P4 → P5 (draft; publish after the §1.4 residual points) → P1 → P0:
`get_page_brief(seoPlanItemId=<id>, language:'de')` → write the HTML yourself following its `systemPrompt` + §4/§5 → `create_page_from_html({ title, url, htmlContent, metaDescription, metaKeywords, ogTitle, ogDescription, ogImage, ogType, structuredData, language:'de', seoPlanItemId, isHomePage (P0 only), generationModel:'<your model id>' })` → open the returned public URL → `get_page_content(format:'markdown')` to check words, headings, links, form and images → `update_page_seo({ noIndex:true })` for P16–P18.
Word count: count visible words; if < 800 add substance (never filler).

**Phase 7 — SEO files & indexing.** `save_seo_files(robotsTxt, llmsTxt)` → `submit_urls_to_search_engines` → `get_search_visibility_status` (expect Search Console still unconnected → owner task).

**Phase 8 — QA (§10).** Fix everything found, re-verify, then `start_site_audit(auditModel)` → loop `get_site_audit_batch` → `submit_site_audit_findings` → `complete_site_audit`; apply the actionable findings with `apply_site_audit_action` where sensible.

**Phase 9 — Handover.** Write the owner a short German summary: what is live, what waits on their input (§12), how to connect Search Console, how to send Booking data/photos, the Phase 2/3 plan.

**Phase 10 (later) — Magazin** per §6.6; **Phase 11 — English**: `create_page_translation(page_id, language:'en', url:'/en/…')` for P0–P15, then rewrite each EN page with `update_page_content`, add `en` to `availableLanguages`, save an EN nav/footer with `save_navigation(language:'en')`.

---

## 10. QA checklist (acceptance criteria — all must pass)

- [ ] Every page in §5.1 Phase 1 exists, is published, has unique title/description/OG, correct JSON-LD (validate mentally against schema.org; no empty/zero fields), and a `BreadcrumbList` (except home).
- [ ] `get_layout_probe` executed on every page at 390×844, 768×1024, 1440×900: no forced viewport, no horizontal overflow, tap targets ≥ 44 px, text ≥ 16 px on mobile.
- [ ] Hero readable on phones (house not cropped away; overlay contrast ≥ 4.5:1 for text).
- [ ] No broken images (`list_media` URLs only), all with `alt`, `width`, `height`; hero eager, rest lazy.
- [ ] Exactly one `#contact-form` per page, with the privacy checkbox before the submit button, no `action`/`method`, and a successful test submission that arrives at the contact e-mail (`list_contact_submissions`).
- [ ] All CTAs carry class `convert`.
- [ ] `find_in_site_content` for `TODO`, `Lorem`, `[TO CONFIRM]`, `Exposé`, `Courtage`, `Kaufpreis`, `Makler`, `placeholder`, `unsplash` → zero hits.
- [ ] Nav and footer show on every page, all links resolve (no 404), Booking links open in a new tab.
- [ ] Legal pages present, `noindex`, Impressum data correct, Datenschutz mentions the contact form, WhatsApp, OSM embed and Booking.
- [ ] Cookie banner appears once, in German, links to `/datenschutz`.
- [ ] `robots.txt`, `sitemap.xml`, `llms.txt` reachable and consistent with the live pages.
- [ ] Word counts 800–1400 on content pages; no keyword stuffing; no forbidden words (§3).
- [ ] Numbers cross-checked: every m², room count, distance appears identically on P1 table, unit page, FAQ, JSON-LD, llms.txt, knowledge base.
- [ ] Reduced-motion respected; video muted/autoplay only on desktop; page weight of home < 4 MB on desktop, < 1.5 MB on mobile (video excluded on mobile).
- [ ] Mobile sticky booking bar does not cover the form's submit button (add bottom padding on the form section).
- [ ] U1 page: 125 m², 2 Schlafzimmer + Schlafsofa, 2 Bäder, max. 5 Gäste, keine Haustiere, Check-in 15–18 Uhr, Check-out bis 11 Uhr; „2,5 Schlafzimmer" appears nowhere (Appendix F.0).
- [ ] U3 page: max. 2 Gäste, Check-in 15–18 Uhr, Check-out bis 11 Uhr, Haustiere auf Anfrage — identical in text, FAQ, JSON-LD and llms.txt (Appendix F.1).
- [ ] U4 page: no „Sauna", „Wintergarten", „Steg", „Grill", „Seezugang", „Kaufpreis"; max. 4 Gäste, keine Haustiere, PLZ 15712; virtually staged photos unpublished unless confirmed (Appendix F.2, B.3).
- [ ] Site audit completed and closed; findings applied or consciously deferred with a note.

---

## 11. Owner tasks (cannot be done by the agent)
1. Connect **Google Search Console** for ferienwohnung-see-brandenburg.de in `/admin/settings/search-visibility`; submit the sitemap; also Bing Webmaster Tools.
2. Provide the **Booking listing content of U2 (Apartment)**, the **rate table** for all four units and **original photos** (§1.3, §12).
3. Answer the two U4 residual points (whole house or one unit; virtually staged photos) and **correct the postal code on the Booking listing (15758 → 15712)** (§1.4).
4. Confirm guest access to **pool / sauna house / jetties / boats** at the villa and the jetty at the Gästehaus.
5. Decide prices, minimum stay, fees, cancellation terms, pets, check-in/out, key handover; confirm Kurtaxe/tourist-tax status with Stadt Königs Wusterhausen.
6. Lawyer review of Datenschutz + AGB/Mietbedingungen; decide on the AI-disclosure banner and on the Streitbeilegung sentence in the Impressum.
7. Create/claim Google Business Profiles (if eligible), Bing Places, list the houses with Tourismusverband Dahme-Seenland and reiseland-brandenburg.de; add a „Ferien am See" link in the seehaus-berlin.de footer.
8. Decide on the second domain ferienwohnung-am-see.info (301 redirect recommended).
9. Optional: GA4/Ads (then §7.7 changes), channel-manager widget, English translation go-ahead, professional photo shoot of unit interiors (the strongest single upgrade available).

---

## 12. Question template for the owner (send in German, once)
```
Guten Tag Frau Briese,
für die Website ferienwohnung-see-brandenburg.de habe ich die Booking-Anzeigen der Maisonette (Zernsdorf), des Gästehauses (Niederlehme) und des Ferienhauses am See in der Natur (Fontanestraße 35, Kablow) bereits vollständig übernommen – Ausstattung, Belegung, Betten, Check-in/-out, Hausregeln und Fotos. Offen sind nur noch diese Punkte:
1. Apartment „Leben direkt am See" (Zernsdorf): Booking-Text, Ausstattungsliste, „Wichtige Informationen", Hausregeln, max. Personen, Betten (Anzahl/Art), Bäder – am einfachsten als Kopie aus dem Booking-Extranet (die Seite lässt sich nicht automatisch abrufen; die Maisonette habe ich bereits vollständig).
2. Gelten für das Apartment dieselben Regeln wie für die Maisonette (Check-in 15–18 Uhr, Check-out bis 11 Uhr, Nichtraucher, keine Partys, keine Haustiere)? Hat die Maisonette eine Waschmaschine (auf einem Booking-Foto steht eine im zweiten Bad)?
3. Preise für alle vier Unterkünfte (Nebensaison/Hauptsaison/Feiertage), Mindestaufenthalt, Endreinigung, Kaution, Anzahlung, Zahlungsarten, Stornobedingungen, Kurtaxe (falls erhoben), Schlüsselübergabe (persönlich/Box).
4. Ferienhaus am See in der Natur: Bekommen Gäste das ganze Haus oder eine der beiden Wohneinheiten? Dürfen Gäste das Ufer vor dem Grundstück nutzen (Baden, Boot/Kajak)? Gibt es Wassersport-Ausrüstung? Darf der offene Kamin genutzt werden? Bitte auch die Postleitzahl bei Booking auf 15712 korrigieren (dort steht 15758).
5. Fünf Booking-Fotos des Ferienhauses zeigen digital eingerichtete Räume (Schlafzimmer, Wohnzimmer, Flur, Dachzimmer, Dachterrasse). Sind die Räume tatsächlich so möbliert? Falls nicht: Gibt es echte Innenfotos?
6. Dürfen Gäste der Villa am Krüpelsee Pool, Saunahaus, Stege, Boote/SUP nutzen? Dürfen Gäste des Gästehauses den Steg nutzen (die Booking-Bewertung erwähnt „private dock and lake access")?
7. Die Innenfotos der Maisonette habe ich aus Booking. Welche der Innenfotos auf vierstegehaus.de (Wintergarten, Terrakotta, Kachelofen, Landhausküche) gehören zum Apartment – oder zum Haupthaus? Gibt es Innenfotos des Apartments?
8. Dürfen wir die Booking-Bewertung des Gästehauses (10/10, August 2026) sinngemäß auf Deutsch zitieren („Gast aus Tschechien")?
9. Telefonnummer für die Website: +49 163 5088945 oder +49 172 8588588? E-Mail für Anfragen: kontakt@seehaus-berlin.de oder eine eigene Adresse?
10. Soll das Seehaus-Berlin-Logo im Footer erscheinen? Soll ein „Direktbucher-Vorteil" kommuniziert werden?
Vielen Dank – bis die Angaben vorliegen, veröffentliche ich alle Seiten mit „Preise & Verfügbarkeit auf Anfrage"; das Ferienhaus in Kablow geht erst online, wenn Punkt 4 und 5 geklärt sind.
```


---

# Appendices

## Appendix A — Unit data sheets (machine-readable; `null` = unknown → write "auf Anfrage")
```json
{
  "operator": {"legalName":"Ausblicke Management GmbH","brand":"Seehaus Berlin","siteName":"Ferienhaus am See Brandenburg","host":"Marita Briese","street":"Kuno-Fischer-Str. 14","postalCode":"14057","city":"Berlin","country":"DE","register":"Amtsgericht Charlottenburg HRB 115701 B","vatId":"DE262426225","phone":"+49 163 5088945","whatsapp":"+49 172 8588588","email":"kontakt@seehaus-berlin.de","hours":"Mo–Fr 9:00–18:00 Uhr, Sa nach Vereinbarung","portal":"https://seehaus-berlin.de"},
  "units": [
    {"id":"U1","name":"Maisonette am Krüpelsee","bookingTitle":"Traum-Maisonette direkt am See","bookingHotelId":17316488,"booking":"https://www.booking.com/hotel/de/traum-maisonette-direkt-am-see.de.html","house":"Villa am Krüpelsee","street":"Karl-Marx-Straße 8","postalCode":"15712","district":"Zernsdorf","city":"Königs Wusterhausen","lake":"Krüpelsee","geo":{"lat":52.2978596,"lng":13.6971580},"type":"Ferienwohnung (Maisonette, 2 Ebenen, Apartment in Villa, eigener Eingang, Obergeschoss über Treppe)","sizeSqm":125,"bedrooms":2,"beds":"Schlafzimmer 1: 1 großes Doppelbett (en suite) · Schlafzimmer 2: 1 Doppelbett (en suite) · Wohnzimmer: 1 Schlafsofa","bathrooms":2,"maxGuests":5,"terraces":"Balkon mit Seeblick + Terrasse","fireplace":true,"lakeView":true,"gardenView":true,"kitchen":"Küche: Kühlschrank, Mikrowelle, Kaffeemaschine, Wasserkocher, Kochgeschirr","tv":"Flachbild-TV","linenTowels":true,"washingMachine":"TO CONFIRM (visible on photo 921169011, not in Booking's facility list)","internet":"kostenloses WLAN","parking":"kostenloser Parkplatz am Haus (1 Stellplatz laut Eigentümerseite)","outdoor":["Sonnenterrasse","Garten","Sitzbereich im Freien","Fahrradabstellplatz"],"checkin":"15:00–18:00","checkout":"08:00–11:00","minStay":null,"pets":false,"smoking":false,"parties":false,"children":"willkommen; 0–17 in vorhandenen Betten kostenlos; keine Babybetten/Zustellbetten","languages":["de","en"],"bookingScore":null,"sharedGrounds":["ca. 30 m Seeufer","4 private Stege (Nutzung TO CONFIRM)","Salzwasserpool (Nutzung TO CONFIRM)","Saunahaus (Nutzung TO CONFIRM)","Garten mit Trauerweide, Pavillon, Uferterrasse"],"confirmed":["sizeSqm","bedrooms","beds","bathrooms","maxGuests","terraces","fireplace","lakeView","kitchen","internet","parking","checkin","checkout","pets","smoking","parties","children","languages","address","geo"]},
    {"id":"U2","name":"Apartment am Krüpelsee","bookingTitle":"Leben direkt am See","booking":"https://www.booking.com/hotel/de/leben-direkt-am-see.de.html","house":"Villa am Krüpelsee","street":"Karl-Marx-Straße 8","postalCode":"15712","district":"Zernsdorf","city":"Königs Wusterhausen","lake":"Krüpelsee","type":"Ferienwohnung (Apartment)","sizeSqm":63,"bedrooms":null,"bathrooms":1,"terraces":null,"fireplace":true,"lakeView":true,"parking":1,"maxGuests":null,"beds":null,"wifi":null,"checkin":null,"checkout":null,"minStay":null,"pets":null,"smoking":false,"sharedGrounds":"as U1","confirmed":["sizeSqm","bathrooms","fireplace","lakeView","parking","address"]},
    {"id":"U3","name":"Gästehaus am Großen Zug","bookingTitle":"Gästehaus am großen Zug-See","bookingHotelId":17067855,"booking":"https://www.booking.com/hotel/de/gastehaus-am-grossen-zug-see.de.html","house":"Galeriehaus am See (Designvilla)","street":"Seestraße 41","postalCode":"15713","district":"Niederlehme","city":"Königs Wusterhausen","lake":"Großer Zug","geo":{"lat":52.3470162,"lng":13.6601598},"type":"Ferienhaus mit 1 Schlafzimmer (separates Gästehaus, ebenerdig)","sizeSqm":57,"bedrooms":1,"bathrooms":1,"terraces":1,"ownEntrance":true,"accessible":true,"groundFloor":true,"kitchen":"Küchenzeile (Kühlschrank, Kaffeemaschine, Wasserkocher, Kochgeschirr)","shower":"bodengleich","floor":"Parkett","internet":"kostenloses WLAN (Glasfaser)","lakeView":true,"gardenView":true,"parking":"kostenlose Privatparkplätze","fireplace":false,"maxGuests":2,"beds":"1 Doppelbett + 1 Schlafsofa","tv":"Flachbild-TV","linenTowels":true,"outdoor":["Terrasse mit Gartenmöbeln","Essplatz im Freien","Garten","Picknickbereich","Fahrradabstellplatz"],"checkin":"15:00–18:00","checkout":"08:00–11:00","minStay":null,"pets":"auf Anfrage (ggf. Gebühr)","smoking":false,"parties":false,"children":"willkommen, keine Babybetten/Zustellbetten","languages":["de","en"],"bookingScore":{"value":10,"count":1,"asOf":"2026-09"},"jettyUse":"TO CONFIRM (Gast-Bewertung nennt privaten Steg)","floorPlanImage":"23-grundriss-gaestehaus.jpg","confirmed":["sizeSqm","bedrooms","bathrooms","maxGuests","beds","ownEntrance","accessible","groundFloor","kitchen","shower","floor","internet","lakeView","terraces","parking","checkin","checkout","pets","smoking","parties","children","languages","address","geo"]},
    {"id":"U4","name":"Ferienhaus am See in der Natur","bookingTitle":"Ferienhaus am See in der Natur","bookingHotelId":17300141,"booking":"https://www.booking.com/hotel/de/ferienhaus-am-see-in-der-natur.de.html","house":"Villa Fontanestraße 35 (Baujahr 1940, Zweifamilienhaus)","street":"Fontanestraße 35","postalCode":"15712","postalCodeOnBooking":"15758 (owner to correct)","district":"Kablow","city":"Königs Wusterhausen","lake":"Krüpelsee (seenahe Lage, kein direkter Seezugang bestätigt)","geo":{"lat":52.2958647,"lng":13.7128285},"type":"Wohnung mit 2 Schlafzimmern in Villa (ganzes Haus oder eine Einheit – TO CONFIRM)","identificationConfirmed":"via Booking address + photos; residual points §1.4","sizeSqm":192,"houseSqm":193,"plotSqm":1868,"bedrooms":2,"beds":"2 × großes Doppelbett","bathrooms":"2 laut Booking-Zusammenfassung (Badewanne + Dusche)","kitchen":"Küche mit Kochinsel, Natursteinarbeitsplatte, Einbaugeräte","washingMachine":true,"tv":"Flachbild-TV","terraces":"2 Naturstein-Terrassen + 2 Dachterrassen (Haus); Terrasse mit See- und Gartenblick (Booking)","fireplace":"offener Kamin im Haus (Gästenutzung TO CONFIRM)","upperFloorStairsOnly":true,"carport":true,"parking":"kostenlose Privatparkplätze","internet":"kostenloses WLAN","outdoor":["Garten mit Kiefern und Birken","naturbelassener Gartenteil Richtung See","Picknickbereich","Fahrradabstellplatz"],"activities":["Radfahren","Wandern","Angeln","Kanu/Kajak","Wassersport vor Ort (Details TO CONFIRM)"],"maxGuests":4,"checkin":"15:00–18:00","checkout":"08:00–11:00","minStay":null,"pets":false,"smoking":false,"parties":false,"children":"willkommen; 0–17 in vorhandenen Betten kostenlos; keine Babybetten/Zustellbetten","languages":["de","en"],"bookingScore":null,"jetty":false,"sauna":false,"winterGarden":false,"grill":null,"noFlightNoise":true,"confirmed":["sizeSqm","houseSqm","plotSqm","bedrooms","beds","maxGuests","kitchen","washingMachine","terraces","carport","parking","internet","checkin","checkout","pets","smoking","parties","children","languages","address","geo"]}
  ]
}
```

## Appendix B — Image inventory (source URL → target folder, alt text in German). All sources return HTTP 200 without authentication (verified 2026-09-24). Dimensions are w×h px.

### B.1 Villa am Krüpelsee (U1/U2) — base `https://vierstegehaus.de` (mirror of every file: `https://seehaus-berlin.de/uploads/site-15/<same path after /uploads/site-17/>`)
**Exterior & grounds → `villa-am-kruepelsee/aussen`**
| Source | px | Alt (de) | Use |
|---|---|---|---|
| /uploads/site-17/vierstegehaus_website_upload/hauptbild-villa-am-kruepelsee-steg-hausboot.jpg | 1600×1200 | Villa am Krüpelsee in Zernsdorf vom privaten Steg aus, Hausboot am Ufer im Abendlicht | Home hero poster, OG default; `object-position: 62% 50%` |
| /uploads/site-17/vierstegehaus_website_upload/01-seite-startseite-abschnitt-titelbild-villa-vom-steg-01.jpg | 1600×1200 | Holzsteg führt über den Krüpelsee direkt auf die Villa in Zernsdorf zu | Hero P2/P6 |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_006.jpg | 1920×1282 | Altbauvilla am Krüpelsee, Gartenseite mit Terrasse und Trauerweide | Card image villa/U1 |
| /uploads/site-17/umgebung_alle_objekte/03-seite-aussenbereich-abschnitt-terrasse-am-wasser-01.jpg | 1600×1200 | Holzterrasse am Wasser mit Blick auf Steg und Krüpelsee | P2/P3/P6 |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_001.jpg | 1920×1440 | Doppelter Regenbogen über dem Krüpelsee, vom Ufer der Villa in Zernsdorf | P6, P9 |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_010.png | 1216×933 | Überdachter Holzpavillon im Garten der Villa am Krüpelsee | P6 |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_011.png | 1076×934 | Sonnenuntergang über dem Krüpelsee vom Ufergrundstück der Villa | P6, home |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_007.jpg | 1920×1282 | Saunahaus und Wintergarten unter der großen Trauerweide am Krüpelsee | only if sauna use is confirmed |
| /uploads/site-17/vierstegehaus_website_upload/02-seite-aussenbereich-abschnitt-salzwasserpool-gartenansicht-01.jpg | 1600×1200 | Beheizter Salzwasserpool mit Holzdeck im Garten der Villa am Krüpelsee | only if pool use is confirmed |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_002.jpg | 1920×1440 | Salzwasserpool im Sommer, dahinter Garten und Altbauvilla am Krüpelsee | only if pool use is confirmed |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_005.jpg | 1920×1282 | Saunahaus von innen: Glassauna mit Holzverkleidung und Ruhesessel | only if sauna use is confirmed |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_003.jpg | 1920×3413 | Vertikales Panorama von Villa, Garten und Krüpelsee in Zernsdorf | portrait tile only |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_009.png | 1125×603 | (motif not documented — view before use) | check |
| /uploads/site-17/poza-principalaa.jpg | 1672×941 | (motif not documented — view before use; "poza principala" = main photo) | check |

**Booking.com listing photos U1 Maisonette (23, real photos, originals up to 6720 px; download pattern Appendix F.4) — these are the authoritative Maisonette interiors**
| Source (max2048x1536) | px (original) | Alt (de) | Folder | Use |
|---|---|---|---|---|
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921167662.jpg?k=d936a32c654e50fb01ba8bd399feef98f156f4d5c219b9278f635f4c89da54ff&o=` | 2016×1512 (served ≤ 2048 px) | Trauerweide vor der Villa am Krüpelsee, Balkon und Dachterrasse im Herbstlicht | `villa-am-kruepelsee/aussen` | P2/P6 exterior |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921172761.jpg?k=69976ab9abebf2b7b58ca0ef288b764988a2af13185466fd635e420414c655f1&o=` | 6720×4480 (served ≤ 2048 px) | Herbstlicher Blick über den Krüpelsee mit goldgelbem Laub am Ufer | `region/kruepelsee` | P2 lake, P9 |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168199.jpg?k=3cd4c1860fb6e6fe5bb56500473131e314d7f594c454f20889a5b8fc9f3347a9&o=` | 6168×4252 (served ≤ 2048 px) | Bad der Maisonette unter der Dachschräge mit Eckdusche und Badewanne | `villa-am-kruepelsee/maisonette` | P2 Bäder |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168203.jpg?k=006f2b6b82a7830f0ade58ed29692e092190b654828591967c004320ad9128d3&o=` | 6234×4156 (served ≤ 2048 px) | Offener Wohn- und Essbereich der Maisonette mit Küchenzeile, Esstisch, Sofa und roter Akzentwand | `villa-am-kruepelsee/maisonette` | P2 interior lead |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168207.jpg?k=5acf1231af2c63eab40a55a32c423e869861546adbdd55878a747822bb1ec4c8&o=` | 1944×1494 (served ≤ 2048 px) | Villa am Krüpelsee von der Gartenseite mit Wintergarten und äußerer Wendeltreppe | `villa-am-kruepelsee/aussen` | P2/P6 exterior |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168212.jpg?k=2d5d6618d3413965a381887dba8e3aaffc268f3f7eedc8d2d099840dddc1a9eb&o=` | 6288×4060 (served ≤ 2048 px) | Schlafzimmer der Maisonette mit Doppelbett, Kleiderschrank und Regal | `villa-am-kruepelsee/maisonette` | P2 Schlafen |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168216.jpg?k=a22945a63aa3c97d30e85dbe97e51f89b6d1327654b03fdf2f6fc2d5dde0e455&o=` | 6219×4378 (served ≤ 2048 px) | Essplatz im Erker der Maisonette mit roter Wand und hölzerner Wendeltreppe ins Obergeschoss | `villa-am-kruepelsee/maisonette` | P2 Wohnen (signature motif) |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168220.jpg?k=fd67887ec93525f28a0441bf8c38ed3ae6eef9eb3584a598c5535b680d8c9ba4&o=` | 6720×4480 (served ≤ 2048 px) | Küche der Maisonette mit Kochinsel, Dunstabzug und Fenstertür zur Terrasse | `villa-am-kruepelsee/maisonette` | P2 Küche |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168232.jpg?k=267b558c3b6c26f433d20e48a9d7da3cdb4cca60d2a15e50b6d620e9911d12d7&o=` | 6300×3976 (served ≤ 2048 px) | Wohnzimmer der Maisonette mit Kaminofen, Fernseher und weißen Sofas | `villa-am-kruepelsee/maisonette` | P2 Wohnen |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168243.jpg?k=330b2fa02d3a69029ee15fffadccda64917002828199cf916658f80c088a123b&o=` | 2016×1512 (served ≤ 2048 px) | Bad mit Waschtisch, Spiegelschrank und Handtuchheizkörper | `villa-am-kruepelsee/maisonette` | P2 Bäder |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168257.jpg?k=0343356f8beb5877d8c2d9fb388bbbbe4c04e1fab51ae8d4367ddf09d1ee5b9c&o=` | 4480×6416 (served ≤ 2048 px) | Schlafzimmer der Maisonette mit Doppelbett und Nachttischleuchte (portrait) | `villa-am-kruepelsee/maisonette` | portrait tile |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168264.jpg?k=edbc08581b26f332ce56c5b09bc60f52b23df405d03e2d3e35eaa583f5b89deb&o=` | 6125×4387 (served ≤ 2048 px) | Zweites Schlafzimmer unter dem Dach mit Doppelbett und Gaube | `villa-am-kruepelsee/maisonette` | P2 Schlafen |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168269.jpg?k=86356c0d1fefabd99e50bfaec146fcbdb2494007a6efc5bf56459464da2ac61d&o=` | 6216×4192 (served ≤ 2048 px) | Blick vom Esstisch in den offenen Wohnbereich der Maisonette mit Kaminofen | `villa-am-kruepelsee/maisonette` | P2 Wohnen |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168279.jpg?k=d16e122f9be85ca4bbedf2634c1d6d1a696d4e16a6c85fd64159edd8183e92b5&o=` | 6204×4228 (served ≤ 2048 px) | Abendstimmung am Steg der Villa mit Blick über den Krüpelsee | `villa-am-kruepelsee/aussen` | P2/P6 lake, home mood |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168295.jpg?k=40dd1254f73e8ba0eec0cec17c52096c6ba2c2fd420a5f71f3ab4790a470b1af&o=` | 6276×4264 (served ≤ 2048 px) | Essplatz im Erker mit Wendeltreppe, zweite Ansicht | `villa-am-kruepelsee/maisonette` | near-duplicate of 921168216 — use one |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921168306.jpg?k=f8f72e0c9fe16359d83c09c73c4b92e01972edfeb30ecd7a0770d1df2a7d76f1&o=` | 6517×4345 (served ≤ 2048 px) | Küche der Maisonette mit weißen Fronten, Kochinsel und Essplatz im Erker | `villa-am-kruepelsee/maisonette` | P2 Küche |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921169010.jpg?k=3d9b446378dce862c992d51c860bccf365d35d0ee422d5013edb73a64200c189&o=` | 4336×5232 (served ≤ 2048 px) | Sitzecke der Maisonette mit weißem Sofa und Truhen-Couchtisch (portrait) | `villa-am-kruepelsee/maisonette` | portrait tile |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921169011.jpg?k=2c03bd51ba2bfbf01756baa9edc24e75cc43fefcfa0c39d2d9511749ae125400&o=` | 4480×5744 (served ≤ 2048 px) | Zweites Bad der Maisonette mit blauen Fliesen, WC und Waschmaschine (portrait) | `villa-am-kruepelsee/maisonette` | P2 Bäder; shows a washing machine — facility TO CONFIRM |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921169012.jpg?k=953ec04071a94c85169427f2237fb215bd53325b991012594a6a712b3dbc7012&o=` | 5880×4168 (served ≤ 2048 px) | Offener Wohn- und Essbereich mit Küchenzeile und Pendelleuchten | `villa-am-kruepelsee/maisonette` | P2 Wohnen |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921169008.jpg?k=bbd3f44f687f28550429467a8c4eb367529f9fad2a0450121bdb0b08dc821947&o=` | 4480×6016 (served ≤ 2048 px) | Bad mit Waschtisch, Handtuchheizkörper und Badewanne (portrait) | `villa-am-kruepelsee/maisonette` | portrait tile |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921169009.jpg?k=d99727b8c7ff1fe62690b0d2573f163e4fffef7cb07acf43d3f0e57176f7bb04&o=` | 4480×5776 (served ≤ 2048 px) | Bad mit Eckdusche und Badewanne unter der Dachschräge (portrait) | `villa-am-kruepelsee/maisonette` | portrait tile |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921169941.jpg?k=8ea152cd6d4a89b8d1dfa7729546edfef3b5891eb762877176c16e8995627793&o=` | 6266×4037 (served ≤ 2048 px) | Sonnenuntergang über dem Krüpelsee mit herbstlichen Birken am Ufer | `region/kruepelsee` | P9, home seasons |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/921170271.jpg?k=97f3547dca3245cb6c67fe730bfcb4a61af011c6566d410376388650ec9908ac&o=` | 6356×4237 (served ≤ 2048 px) | Villa am Krüpelsee vom Wasser aus: Trauerweide, Garten, Stege und Boote | `villa-am-kruepelsee/aussen` | P2/P6 hero candidate |
**Owner-site interiors — mostly the MAIN HOUSE, not the Maisonette (compared with the Booking set); assignment to U2 TO CONFIRM → `villa-am-kruepelsee/innen-unzugeordnet`, later move with `relocate_media` to `/apartment` or leave unused**
| Source | px | Alt (de) |
|---|---|---|
| /uploads/site-17/vierstegehaus_website_upload/04-seite-innenraeume-abschnitt-wohnbereich-mit-seeblick-bereinigt-ohne-mop-und-eimer-02.jpg | 1448×1086 | Wohn- und Essbereich mit Fensterfront zum Krüpelsee, langer Holztisch und Backsteinpfeiler |
| /uploads/site-17/vierstegehaus_website_upload/05-seite-innenraeume-abschnitt-wohnzimmer-panoramafenster-zum-see-bereinigt-ohne-mop-und-eimer-02.jpg | 1448×1086 | Wohnzimmer mit bodentiefem Panoramafenster zum Krüpelsee |
| /uploads/site-17/vierstegehaus_website_upload/06-seite-innenraeume-abschnitt-wintergarten-mit-esstisch-bereinigt-ohne-mop-und-eimer-02.jpg | 1448×1086 | Wintergarten mit massivem Esstisch und Lederstühlen, Blick auf Uferwiese und Steg |
| /uploads/site-17/vierstegehaus_website_upload/07-seite-innenraeume-abschnitt-essbereich-mit-backsteinbogen-01.jpg | 1600×1200 | Essbereich mit Backsteinbogen zur Küche und Industrieleuchten |
| /uploads/site-17/vierstegehaus_website_upload/08-seite-innenraeume-abschnitt-esszimmer-im-erker-01.jpg | 1600×1200 | Esszimmer im Erker mit Eichentisch, Treibholz-Raumteiler und Wendeltreppe — same room as Booking 921168216 (Maisonette), older furnishing; prefer the Booking photo |
| /uploads/site-17/vierstegehaus_website_upload/09-seite-innenraeume-abschnitt-erker-sitzbank-am-fenster-01.jpg | 1600×1200 | Gepolsterte Sitzbank im Erker mit Messingleuchte und Fensterfront zum Garten — Maisonette Erker, older furnishing |
| /uploads/site-17/vierstegehaus_website_upload/10-seite-innenraeume-abschnitt-kueche-mit-wendeltreppe-01.jpg | 1600×1200 | Küche mit hölzerner Wendeltreppe, Landhausfronten und Balkendecke |
| /uploads/site-17/vierstegehaus_website_upload/11-seite-innenraeume-abschnitt-wohnzimmer-mit-kaminofen-01.jpg | 1600×1200 | Wohnzimmer mit gekacheltem Kaminofen, Holzbalkendecke und Terrakottaboden |
| /uploads/site-17/vierstegehaus_website_upload/12-seite-innenraeume-abschnitt-kaminecke-mit-sitzbank-01.jpg | 1600×1200 | Kaminecke mit gemauerter Sitzbank neben dem gekachelten Kaminofen |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_004.jpg | 1920×1080 | Arbeitsplatz am Panoramafenster mit Blick auf den Krüpelsee |
| /uploads/site-17/karl-markx-strasse/karl-markx-strasse_008.png | 1307×937 | Blick aus dem Wohnbereich über die Uferwiese auf Steg und Krüpelsee |
(The `-01` originals of files 04/05/06 contain a mop and bucket — use only the `bereinigt … -02` versions.)

**Lake & seasons → `region/kruepelsee`** (base `https://vierstegehaus.de/uploads/site-17/umgebung_alle_objekte/`)
| File | px | Alt (de) |
|---|---|---|
| umgebung-01-seite-lage-und-anbindung-abschnitt-sonnenaufgang-lichtreflexion-01.jpg | 1600×1200 | Sonnenaufgang über dem Krüpelsee, Lichtreflexion auf dem Wasser |
| umgebung-02-seite-lage-und-anbindung-abschnitt-abenddaemmerung-am-wasser-01.jpg | 1600×1200 | Abenddämmerung am Krüpelsee bei Zernsdorf |
| umgebung-03-seite-lage-und-anbindung-abschnitt-steg-im-morgennebel-01.jpg | 1600×1200 | Steg im Morgennebel auf dem Krüpelsee |
| umgebung-04-seite-lage-und-anbindung-abschnitt-schwaene-im-morgennebel-01.jpg | 1600×1200 | Zwei Schwäne im Morgennebel auf dem Krüpelsee |
| umgebung-05-seite-lage-und-anbindung-abschnitt-sonnenuntergang-ueber-dem-see-01.jpg | 1600×1200 | Sonnenuntergang über dem Krüpelsee im Dahme-Seenland |
| umgebung-06-seite-lage-und-anbindung-abschnitt-uferwiese-unter-der-weide-01.jpg | 1600×1200 | Uferwiese unter der Trauerweide mit Blick auf Stege und Wasser |
| umgebung-07-seite-lage-und-anbindung-abschnitt-morgennebel-ueber-dem-wasser-01.jpg | 1600×1200 | Morgennebel über dem Krüpelsee |
| umgebung-08-seite-lage-und-anbindung-abschnitt-winterlicher-see-vogelschwarm-01.jpg | 1600×1200 | Winterlicher Krüpelsee mit Vogelschwarm über dem verschneiten Ufer |
| umgebung-09-seite-lage-und-anbindung-abschnitt-winterabend-am-steg-01.jpg | 1200×1600 | Winterabend am Steg – der Krüpelsee im Schnee |
| umgebung-10-seite-lage-und-anbindung-abschnitt-mond-ueber-verschneitem-steg-01.jpg | 1200×1600 | Mond über dem verschneiten Steg am Krüpelsee |
| umgebung-11-seite-lage-und-anbindung-abschnitt-schilf-im-abendrot-panorama-01.jpg | 1600×736 | Schilfgürtel am Krüpelsee im Abendrot, Panorama (section divider) |

### B.2 Galeriehaus am See / Gästehaus (U3) — base `https://galeriehausamsee.de`
**Gästehaus → `galeriehaus/gaestehaus`**
| Source | px | Alt (de) | Use |
|---|---|---|---|
| /uploads/site-16/02-designvilla-niederlehme-1.85m/17-gaestehaus.jpg | 1920×1440 | Gästehaus am Großen Zug in Niederlehme, Außenansicht mit Terrasse | Hero P4, card |
| /uploads/site-16/01_gaestehaus_terrasse_mit_seeblick.png | 853×1844 | Terrasse des Gästehauses mit Blick auf den Großen Zug | portrait tile |
| /uploads/site-16/02_gaestehaus_wohn_und_schlafbereich.png | 1846×852 | Wohn- und Schlafbereich des Gästehauses mit Parkettboden | wide strip |
| /uploads/site-16/03_gaestehaus_wohnbereich_mit_terrassenzugang.png | 1844×853 | Wohnbereich des Gästehauses mit Zugang zur Terrasse | wide strip |
| /uploads/site-16/04_gaestehaus_schlafbereich.png | 852×1846 | Schlafbereich im Gästehaus am Großen Zug | portrait |
| /uploads/site-16/05_gaestehaus_kuechenzeile.png | 852×1847 | Küchenzeile im Gästehaus | portrait |
| /uploads/site-16/06_gaestehaus_badezimmer.png | 852×1847 | Badezimmer des Gästehauses | portrait |
| /uploads/site-16/07_gaestehaus_bodengleiche_dusche.png | 853×1844 | Bodengleiche Dusche im barrierefreien Bad des Gästehauses | portrait |
| /uploads/site-16/02-designvilla-niederlehme-1.85m/12-ausblick-aus-wohnung.jpg | 1920×1440 | Ausblick aus dem Gästehaus auf den Großen Zug | P4 |
| /uploads/site-16/02-designvilla-niederlehme-1.85m/23-grundriss-gaestehaus.jpg | 856×1808 | Grundriss des Gästehauses am Großen Zug, ca. 57 m² | P4 floor plan |
**Booking.com listing photos U3 (9, real photos; download pattern Appendix F.4) → folders as noted**
| Source (max2048x1536) | px | Alt (de) | Folder | Use |
|---|---|---|---|---|
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477692.jpg?k=24212f4ed88c32dcef7320ae5c1ae8869355434c0abef53d77fc00d51a8ebfc5&o=` | 853×1397 | Kleine Terrasse des Gästehauses mit Bistrotisch und Stühlen, Blick durch Bäume auf den Großen Zug (portrait) | `galeriehaus/gaestehaus` | P4 portrait tile |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477755.jpg?k=7a6648142ab52fadb3b9f2cc70a505a35d6e1acf5b0c99aa0edf4c0cd887a781&o=` | 1460×922 | Wohn- und Schlafraum des Gästehauses: Doppelbett, Schlafsofa, Sessel, Parkett, Terrassentür in den Garten | `galeriehaus/gaestehaus` | P4 interior lead |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477766.jpg?k=43ffa8fc4e69c6a59dd51b26ece45d7f2e76ecb87df5d6c5796fe83bcd775551&o=` | 1617×844 | Wohnbereich des Gästehauses mit Schlafsofa, zwei Sesseln und Stehleuchte auf Parkett (wide) | `galeriehaus/gaestehaus` | wide strip |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477771.jpg?k=9b2680957a5ef965e57051da6eda9cf96b164208efe26b5f2261fbaf995651e4&o=` | 4032×3024 | Bad des Gästehauses mit Waschtisch, WC und Handtuchheizkörper, beige Fliesen | `galeriehaus/gaestehaus` | P4 |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477782.jpg?k=612e48becbfa5ec9dbcb2b8093a26d148409300e735b82142841fee2f69fee73&o=` | 4032×3024 | Steg am Großen Zug mit Motorboot und zwei blauen Stühlen, Blick über den See | `galeriehaus/aussen` | P4 lake section; jetty use TO CONFIRM |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477794.jpg?k=8b3cdb958ae7c885c376c6e86e5d04f2604af9dbe7c90fef62d63af0a1603690&o=` | 922×1313 | Doppelbett im Gästehaus am Großen Zug (portrait) | `galeriehaus/gaestehaus` | portrait |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477802.jpg?k=eed3efacf176a89b04a6661e6ff9ad4792b278f7357369211ce1f412bf4ca027&o=` | 4032×3024 | Gästehaus am Großen Zug von außen: weißer Flachdachbau mit Terrasse und weißen Stühlen im Garten | `galeriehaus/aussen` | alternative hero P4, card |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477805.jpg?k=89d473b90282219d8fd6f025ef2602bf6072fceae5a2b3dcb5ac5131e6181376&o=` | 922×1374 | Küchenzeile des Gästehauses mit Fenster und weißen Fronten (portrait) | `galeriehaus/gaestehaus` | portrait |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/906477812.jpg?k=3b927f602630119ec4e06141fc3396d394d7f07935c9eaeea636ac9571b711c6&o=` | 4032×3024 | Rasen mit altem Baumbestand hinunter zum Großen Zug, Sonnenschirm am Ufer | `galeriehaus/aussen` | P4 garden, home mood |
**Exterior, garden, lake → `galeriehaus/aussen`** (base `/uploads/site-16/02-designvilla-niederlehme-1.85m/` unless noted)
| File | px | Alt (de) |
|---|---|---|
| 01-ensemble-hero.jpg | 1919×1323 | Villa und Gästehaus am Großen Zug bei Tageslicht, Blick vom Wasser (video poster) |
| 02-ensemble-nacht.jpg | 1925×1059 | Ensemble aus Villa und Gästehaus bei Nacht am Großen Zug |
| 03-haus-nacht.jpg | 1290×731 | Beleuchtetes Seehaus bei Nacht in Niederlehme |
| 04-herbst-atmosphaere.jpg | 1920×1440 | Herbstatmosphäre am Ufer des Großen Zugs |
| 05-herbstmorgen-see.jpg | 1920×1440 | Herbstmorgen am Großen Zug, Blick aufs Wasser |
| 06-sonnenuntergang-see.jpg | 1920×2862 | Sonnenuntergang über dem Großen Zug (portrait) |
| 07-steg-bei-nacht.jpg | 1920×1440 | Privater Steg bei Nacht am Großen Zug |
| 08-garten-seeblick.jpg | 1920×1440 | Garten mit Seeblick auf den Großen Zug |
| 18-herbst-garten.jpg | 1920×1440 | Herbstgarten am See in Niederlehme |
| 19-herbst-uferblick.jpg | 1920×1440 | Herbstlicher Uferblick am Großen Zug |
| 20-villa-detail.jpg | 1920×1440 | Architekturdetail der Villa am Großen Zug |
| 21-villa-architektur.jpg | 1920×1440 | Villa am Großen Zug, Außenansicht |
| /uploads/site-16/23_garten_mit_privatsteg_und_seeblick.jpg | 1920×1282 | Garten mit privatem Steg und Seeblick auf den Großen Zug |
| /uploads/site-16/seestrasse-41_009.jpg | 1920×1282 | Seehaus am Großen Zug bei Sonnenuntergang |
| /uploads/site-16/seestrasse-41_005.jpg | 1024×1024 | Herbstatmosphäre am See (square) |
| /uploads/site-16/seestrasse-41_017.jpg · _008.jpg | 1920×1282 | near-duplicates of 07/08 — dedupe visually |
**Video → `video/`**: `/uploads/site-16/hermann-website-video-warm-magic-hour-web.mp4` (8.3 MB, magic-hour footage; preview before use).
**Do NOT use on U3 (main-house interiors, not rented):** `seestrasse-41_010…016, _018, _019, _020`, `10_panoramablick_aus_dem_haus_zum_see.jpg`, `13_essbereich_mit_gartenzugang.jpg`, `14_wohnbereich_mit_seeblick.jpg`, `15_loungebereich_mit_panoramafenstern.jpg`, `18_blick_durch_panoramafenster_zum_see.jpg`, `09-essplatz-seeblick.jpg`, `10-kueche-essbereich.jpg`, `11-wohnen-salon.jpg`, `13-schlafzimmer-seeblick.jpg`, `14-designerbad.jpg`, `15-dachzimmer-galerie.jpg`, `16-dachgeschoss.jpg`, `22-grundriss-haupthaus.jpg`, `seestrasse-41_006.png`.

### B.3 Villa Fontanestraße 35, Kablow (U4) — Booking listing photos + the „original" photos on seebiotophaus.de (connector `Fontanne35`, base `https://seebiotophaus.de/uploads/site-19/`)
**Booking.com listing photos U4 (14; download pattern Appendix F.4)** — the five rows marked *VIRTUAL STAGING suspected* show digitally furnished rooms (identical framed botanical print in four rooms, showroom furniture); upload them, but publish them only after the owner confirms in §12 that the rooms are furnished like this, otherwise use them nowhere.
| Source (max2048x1536) | px | Alt (de) | Folder | Use |
|---|---|---|---|---|
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339316.jpg?k=e8611c202fe5d45c85849a281811d955c3b9ebefe4945d9c4be900c71067abab&o=` | 1600×900 | Dachterrasse mit rundem Tisch und zwei Sesseln, Blick über Bäume zum Krüpelsee | `villa-fontanestrasse/aussen` | VIRTUAL STAGING suspected (furniture) — confirm |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920352556.jpg?k=65c0f99f6a980ed8a4d4c4a0728b32561a7b80f2a380e99c27986a587c114aba&o=` | 1600×900 | Sonnenuntergang über dem Krüpelsee mit Schilf und Steg-Silhouette, Kablow | `villa-fontanestrasse/aussen` | real; mood, P5 hero candidate B |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339357.jpg?k=cb00dc013a21537e69a0a9cbed189b68b811efcf6fae08032186922a3e7d348a&o=` | 1600×900 | Schlafzimmer 1 mit Doppelbett, Dielenboden und Fenster zum Garten | `villa-fontanestrasse/innen` | VIRTUAL STAGING suspected — confirm |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920338874.jpg?k=9ff059829aae3728bb652e2458560cc4f45764fbba7f48f7dd185f953d5c4f06&o=` | 1086×1448 | Naturbelassene Wiese mit Birken und Kiefern, Blick zum Wasser (portrait) | `villa-fontanestrasse/aussen` | real |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339309.jpg?k=e176955e571d5f0032c5ae941af4790610f6615d9f16780db183dbfe4db6047b&o=` | 1600×900 | Bad mit Dusche, Wand-WC, grauen Fliesen und sichtbarem Holzbalken | `villa-fontanestrasse/innen` | real (= seebiotophaus.de original) |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339320.jpg?k=e88ce1c672e13a9403478903e65fed660620e09f2ddc0203f921484f8d3bb6a1&o=` | 1600×900 | Eingangsflur mit Fischgrätparkett, Sitzbank und Glastür zum Garten | `villa-fontanestrasse/innen` | VIRTUAL STAGING suspected — confirm |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339326.jpg?k=aa6cfaecf261a5e7ffea0d4fc8f18279492d54cd0cebb42e72712d59df51b393&o=` | 1600×900 | Garten mit altem Baumbestand im Abendlicht, Blick zum Krüpelsee | `villa-fontanestrasse/aussen` | real |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339331.jpg?k=338c46d7bc804d399ab8546475b6c2d56f1d0022d03bfdb7d016a659f019308b&o=` | 1600×900 | Schlafzimmer 2 mit Doppelbett und Blick ins Grüne | `villa-fontanestrasse/innen` | VIRTUAL STAGING suspected — confirm |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339338.jpg?k=462c625620f3563a7786c79c0d556edb6519477546910338fafda2e1fb230fb6&o=` | 1600×900 | Wohnzimmer mit Holzvertäfelung, Panoramafenster zum Garten, Sofa und Couchtisch | `villa-fontanestrasse/innen` | VIRTUAL STAGING suspected — confirm |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339346.jpg?k=ea3a6f77c43e87ace0cfce8f9d39128749f37720a255d13de5cb9059dea4f847&o=` | 1600×900 | Einbauküche mit Kochinsel und Natursteinarbeitsplatte, Fenster zum Garten | `villa-fontanestrasse/innen` | real (= seebiotophaus.de original) |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339354.jpg?k=9c82a1904abe37bb254090fa17002f86a10894490ae1363c5c1c4f661df67313&o=` | 1600×900 | Bad mit Badewanne unter der Dachschräge, Holzbalken und Fenster | `villa-fontanestrasse/innen` | real (= seebiotophaus.de original) |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339364.jpg?k=e4862e04e5c456d9096c9e6e170e98e42790ceb3358bb5aedf975fb363589f80&o=` | 1600×900 | Holzstühle und Tisch am sandigen Seeufer bei Sonnenuntergang, Krüpelsee | `villa-fontanestrasse/aussen` | possibly a visualisation (compare seebiotophaus.de `*_edited.png`) — confirm; shore use TO CONFIRM |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339370.jpg?k=f0adaa9e839afbde09117823def4ca0086e2ee6d917e8f7612e78d0947ed8cb1&o=` | 1600×900 | Zimmer unter dem Dach mit Balken, Sofa und Fenstern zur Dachterrasse | `villa-fontanestrasse/innen` | VIRTUAL STAGING suspected — confirm |
| `https://cf.bstatic.com/xdata/images/hotel/max2048x1536/920339379.jpg?k=458ef6eaf1b6d5bdd7df9353ee0c25a2b9f1a3cf0fbe27ad09ab44ade21d01b6&o=` | 1600×900 | Küche mit Kochfeld auf der Insel, Dunstabzug und Fenster mit Seeblick | `villa-fontanestrasse/innen` | real (= seebiotophaus.de original) |
**seebiotophaus.de originals (real photos; the `*_edited.png` visualisations in the same folders are forbidden, see B.6)**
| Source (relative to base) | px | Alt (de) | Folder | Use |
|---|---|---|---|---|
| foto-interni/interior_kitchen_window_lake_garden_view_original.jpeg | 1600×900 | Küche mit Kochfeld auf der Insel und Fenster zum Garten und See | `villa-fontanestrasse/innen` | P5 Küche (same motif as Booking 920339379 — use one) |
| foto-interni/interior_kitchen_dining_area_garden_view_original.jpeg | 1600×900 | Küche mit Essbereich und Blick in den Garten | `villa-fontanestrasse/innen` | P5 Küche |
| foto-interni/interior_bathroom_vanity_bathtub_wood_beam_original.jpeg | 1600×900 | Bad mit Waschtisch, Badewanne und Holzbalken | `villa-fontanestrasse/innen` | P5 Bäder |
| foto-interni/interior_bathroom_shower_bathtub_gray_tiles_original.jpeg | 1600×900 | Bad mit bodengleicher Dusche, Badewanne und grauen Fliesen | `villa-fontanestrasse/innen` | P5 Bäder |
| foto-interni/interior_bathroom_bathtub_lake_window_view_original.jpeg | 1600×900 | Badewanne mit Fenster und Blick Richtung See | `villa-fontanestrasse/innen` | P5 Bäder |
| foto-esterno/exterior_lake_sunset_panorama_original.jpeg | 1600×1200 | Seepanorama bei Sonnenuntergang am Krüpelsee, Kablow | `villa-fontanestrasse/aussen` | P5 hero candidate C, region mood |
| foto-esterno/exterior_lake_sunset_garden_trees_original.jpeg | 1600×900 | Garten mit altem Baumbestand und Seeblick in der Abenddämmerung | `villa-fontanestrasse/aussen` | P5 Draußen |
| foto-esterno/exterior_lake_sunset_dock_reeds_original.jpeg | 1600×900 | Steg im Schilf bei Abenddämmerung am Krüpelsee | `villa-fontanestrasse/aussen` | **only as lake mood without any „eigener Steg" wording** — the plot has no confirmed jetty |
| foto-esterno/exterior_lakeside_wild_reeds_shrubs_reference.jpeg | 1600×900 | Schilf und Sträucher am naturbelassenen Ufer | `villa-fontanestrasse/aussen` | Natur/Biotop section |
| foto-esterno/exterior_lakeside_wild_grass_under_trees_reference.jpeg | 1600×900 | Wildwiese unter Kiefern und Birken | `villa-fontanestrasse/aussen` | Natur/Biotop section |
| foto-esterno/exterior_lakeside_wild_meadow_path_natural_reference.png | 1086×1448 | Naturbelassener Weg durch die Wildwiese zum See (portrait) | `villa-fontanestrasse/aussen` | portrait tile |
**Portal set on seehaus-berlin.de for Fontanestraße 35:** check `list_media` of connector `Seehaus-Berlin` for a folder named after Fontanestraße 35 / „Bestandsvilla" before uploading; if it only mirrors the files above, skip it.

### B.4 Optional region mood (another owner property in Senzig — neutral captions only, no implication they belong to our houses) — base `https://seetraumhaus-senzig.de/uploads/site-21/website_upload_senzig_kruepelsee/`
`senzig-kruepelsee-18-sonnenuntergang-ueber-dem-see.jpg` (1600×1200, „Abendrot über dem Krüpelsee bei Senzig"), `senzig-kruepelsee-20-abendrot-ueber-dem-wasser.jpg` (1600×1200), `senzig-kruepelsee-21-sonnenuntergang-mit-steg-silhouette.jpg` (1600×1200).

### B.5 Brand assets (owner approval needed): Seehaus Berlin logo `https://seehaus-berlin.de/uploads/site-15/logo-seehausberlin.jpg` (384×384), large version `https://seehaus-berlin.de/uploads/site-15/exec-224ec351-e0c2-40d9-930a-3e67ab4aecf1.png` (1254×1254).

### B.6 Illustrative AI renders on seehaus-berlin.de — **do not use for property depiction**: `luxusvilla-mit-privatem-bootssteg-am-see-nahe-berlin--seehau.jpg`, `privater-bootssteg-am-krpelsee--exklusive-seeimmobilien-zern.jpg`, `lifestyle-am-see--exklusives-wohnen-mit-seeblick-nahe-berlin.jpg`, `krpelsee-brandenburg-bei-sonnenuntergang--seeimmobilien-dahm.jpg`, `seewasser-am-krpelsee--seeimmobilien-brandenburg-nahe-berlin.jpg` (water texture — decorative use tolerated), `moderne-villa-mit-seezugang-und-glasfront-am-see-nahe-berlin.jpg`, `villa-mit-pool-und-seezugang-kaufen-nahe-berlin--seehaus-ber.jpg`, `krpelsee-region-aus-der-vogelperspektive--kablow-zernsdorf-s.jpg`, `01-editorial-vector.png … 05-glass-map.png`, and, on seebiotophaus.de, every `*_edited.png` in `foto-esterno/` and `foto-interni/` (designer visualisations of a future redesign of Fontanestraße 35 — they show a state that does not exist; the `*_original.jpeg` files there are real and listed in B.3).

### B.7 Reserve — Haus am Biotop, Fontanestraße 26 A (NOT the Booking unit; do not upload unless the owner states it is rented as well) — base `https://hausamseebiotop.de/uploads/site-18/website_upload_haus_am_biotop/`
These photos were assigned to U4 in v1.0/v1.1 of this document by mistake (§1.4). They show a different house (Wintergarten, Sauna, Grillplatz, Steg). If the owner confirms that 26 A is rented too, build it as a fifth unit page with its own facts; otherwise ignore this section.
**Exterior → `haus-am-biotop/aussen`**
| File | px | Alt (de) |
|---|---|---|
| 01_haus_am_biotop_gartenansicht_mit_wintergarten.jpg | 2560×1437 | Gartenansicht des Hauses am Biotop in Kablow mit Wintergarten und Holzterrasse (hero if ever built) |
| 02_haus_am_biotop_aussenansicht_vom_hof.jpg | 1086×1448 | Hauseingang mit Vordach, Laterne und Kiesvorplatz (portrait) |
| 03_haus_am_biotop_strassenansicht_mit_einfriedung.jpg | 1448×1086 | Straßenansicht mit schmiedeeisernem Zaun und Tor |
| 06_haus_am_biotop_gartenweg_und_terrassenbereich.jpg | 1440×1920 | Gartenweg und Holzterrasse mit Kiesbeet (portrait) |
| 10_haus_am_biotop_gartenlounge_mit_blick_ins_gruene.jpg | 1673×940 | Holzterrasse mit Tisch und Stühlen, Blick über den Rasen zum Krüpelsee |
| 11_haus_am_biotop_grosser_garten_mit_rasenflaeche.jpg | 2560×1437 | Großer Garten mit altem Baumbestand und Blick zum Krüpelsee |
| 12_haus_am_biotop_gartenhaus_im_gruenen.jpg | 2560×1437 | Dunkelgrünes Gartenhaus mit Sitzbank unter Bäumen |
| 13_gartenweg_und_terrassenbereich_natuerlich_optimiert.jpg | 3072×4096 (6.3 MB — resize) | Holzweg zwischen Terrassen und Kiesbeeten im Garten |
| 14_grillplatz_realistisch_aufbereitet.png | 1086×1448 | Überdachter Gasgrill auf der Holzterrasse neben dem Wintergarten (retouched — confirm it shows the real state) |
| 16_sonnendeck_realistisch_aufbereitet.png | 1448×1086 | Sonnendeck mit zwei Holzliegen und Sonnenschirm im Garten (retouched — confirm) |
| 24_haus_am_biotop_waldweg_zum_see.jpg | 2560×1437 | Holzplankenweg durch Farn und Bäume zum Ufer des Krüpelsees |
| 25_haus_am_biotop_holzsteg_durch_das_biotop.jpg | 1674×940 | Holzsteg durch das Schilf am Seeufer |
| 26_haus_am_biotop_naturpfad_im_biotop.jpg | 1673×940 | Naturpfad aus Holzplanken durch das Biotop zum Haus |
| 27_haus_am_biotop_privater_steg_am_see.jpg | 1674×940 | Privater Holzsteg mit Plattform auf dem Krüpelsee |
| 28_haus_am_biotop_seeblick_durch_alten_baumbestand.jpg | 2560×1438 | Blick durch alte Bäume vom Garten auf den Krüpelsee |
**Interior → `haus-am-biotop/innen`**
| File | px | Alt (de) |
|---|---|---|
| 02_offener_wohn_und_essbereich_natuerlich_optimiert.jpg | 4096×3072 (resize) | Offener Essbereich mit Holztisch, Polsterstühlen und Hängeleuchten |
| 03_wohnzimmer_mit_kaminofen_und_tv_natuerlich_optimiert.jpg | 4096×3072 (resize) | Wohnzimmer mit Ecksofa, Parkett, gemauertem Kaminofen und Wandfernseher |
| 04_treppe_zum_dachgeschoss_natuerlich_optimiert.jpg | 3072×4096 (resize) | Dunkle Holztreppe mit Stufenmatten zum Dachgeschoss |
| 05_offene_kueche_mit_kochinsel_natuerlich_optimiert.jpg | 4096×3072 (resize) | Offene Küche mit weißen Fronten, schwarzer Arbeitsplatte und Kochinsel |
| 13_haus_am_biotop_wohnbereich_uebersicht.jpg | 2560×1437 | Heller Wohnbereich mit blauem Ecksofa, Parkett und Treppe |
| 14_haus_am_biotop_wohnbereich_mit_homeoffice_und_gartenblick.jpg | 2560×1920 | Zimmer mit Schreibtisch am Fenster, Sofa und Tagesbett |
| 15_haus_am_biotop_offener_wohn_und_essbereich.jpg | 2560×1920 | Blick vom Essbereich in den Wohnbereich |
| 16_haus_am_biotop_wohnzimmer_mit_kaminofen.jpg | 2560×1920 | Wohnzimmer mit beigem Ecksofa vor dem Eckkamin |
| 17_haus_am_biotop_offene_kueche_mit_kochinsel.jpg | 2560×1920 | Offene Einbauküche mit mosaikverkleideter Kochinsel |
| 23_haus_am_biotop_wintergarten_mit_gartenblick.jpg | 1673×940 | Wintergarten mit Glasfront zur Holzterrasse und zum Garten |
**Portal set (base `https://seehaus-berlin.de/uploads/site-15/fontanne-strasse-26/`; portal captions are inconsistent — view each file before writing alt):** `fontanne-strasse-26a-biotop_001.jpg` (2560×1437), `_002.jpg` (1673×940), `_004.jpg`, `_005.jpg`, `_006.jpg` (Sonnenuntergang am See), `_007.jpg` (Abendstimmung), `_008.jpg` (Herbstufer), `_009.jpg` (Winterstille), `_011.jpg` (Steg), `_017.jpg` (Herbst), `_019.jpg` (Haus bei Nacht), `_020.jpg` (Garten/Biotop) — all 1920×1078 unless noted.

## Appendix C — Region facts (all values "ca."; verify timetable-dependent values on vbb.de before publishing)
| Ziel / Fakt | Wert | Quelle |
|---|---|---|
| Königs Wusterhausen → Berlin-Mitte | ca. 35–40 km Straße (ca. 29 km Luftlinie); Auto ca. 40–55 Min. | luftlinie.org, seehaus-berlin.de |
| S-Bahn S46 Königs Wusterhausen → Berlin-Ostkreuz / Alexanderplatz | ca. 30 Min. / ca. 40 Min.; Takt tagsüber ca. 10–20 Min.; RE2/RE7 ab KW schneller | VBB via seehaus-berlin.de (verify) |
| Königs Wusterhausen → Flughafen BER | Auto ca. 15–25 Min.; Regionalzug ab KW ca. 15 Min. | seehaus-berlin.de (verify) |
| Zernsdorf → Bf. Königs Wusterhausen | Auto ca. 5–8 Min., Rad ca. 15–20 Min.; Senzig ca. 8–12 Min.; Kablow ca. 10–15 Min. | seehaus-berlin.de |
| Regionalbahn-Halte Zernsdorf / Kablow / Niederlehme | vorhanden (Linie Königs Wusterhausen–Beeskow); genaue Linie & Takt **[verify on vbb.de]** — never call them "S-Bahn" | Wikipedia (stations) |
| Autobahn | A10 (Berliner Ring) AS Königs Wusterhausen; A13 Richtung Dresden; B179/B246 | general |
| Tropical Islands (Krausnick) | ca. 40 km, Auto ca. 30–35 Min.; Zug ab KW ca. 25 Min. bis Brand Tropical Islands (+ Shuttle) | rome2rio, reiseland-brandenburg.de |
| Spreewald: Lübben / Lübbenau | ca. 45 km / ca. 55 km; Auto ca. 40 / 45 Min.; RE2 ab KW | spreewald-info.de, i2030.de |
| Potsdam | ca. 45 km, ca. 50–60 Min. | luftlinie.org |
| Köpenick (Altstadt, Schloss) | ca. 20 km, ca. 25–30 Min. | general |
| Wildau (A10 Center) | ca. 8 km, ca. 10 Min. | general |
| Cottbus | ca. 90 km, ca. 60 Min. | general |
| Schloss Königs Wusterhausen | Residenz des „Soldatenkönigs" Friedrich Wilhelm I. (ab 1698), Barockgarten, Tabakskollegium | reiseland-brandenburg.de |
| Funkerberg / Sender- und Funktechnikmuseum | Geburtsort des deutschen Rundfunks: erstes Konzert am 22.12.1920; Rundweg Funkerberg 6 km | reiseland-brandenburg.de, kulturfeste.de |
| Dahmelandmuseum | Regionalgeschichte Dahme-Seenland | dahme-seenland.de |
| Schleuse Neue Mühle | in Betrieb seit 1868, historische Zugbrücke; Strandbad Neue Mühle am Krimnicksee (Rutsche, Volleyball, Bootsverleih) | reiseland-brandenburg.de, dahme-seenland.de |
| Wasserspielplatz Mühleninsel, Königsboot (Bootsverleih Nottekanal) | Stadtzentrum KW | dahme-seenland.de |
| Naturbadestelle „Am Großen Zug" (Ziegenhals) | Badestelle mit Restaurant (kroatische Küche) direkt am Wasser | reiseland-brandenburg.de |
| „Zum Wasserfreund" Niederlehme | Gaststätte mit Steganlage, über 80 Jahre Familientradition, an der L30 zwischen KW und Wernsdorf, am Großen Zug | zumwasserfreund.de |
| Rundwanderweg Krüpelsee | ca. 23 km, 6–8 h, Start Bf. Königs Wusterhausen | reiseland-brandenburg.de, ich-geh-wandern.de |
| Rundweg Tiergarten | 7 km, Naturschutzgebiet mit alten Eichen/Buchen, seit 1725 königliches Jagdrevier, am Krimnicksee | reiseland-brandenburg.de |
| DahmeRadweg; „Pack die Badehose ein" | Radweg entlang der Dahme; Tour ca. 35 km zu 10 Badestellen; > 250 km Radwege, > 100 km Wanderwege | dahme-seenland.de |
| Kanu: Dahme-Spree-Rundtour („Märkische Umfahrt") | Einsetzstelle Zernsdorf, Fährweg am Krüpelsee | flussinfo.net |
| SUP-Verleih Zernsdorf | ab ca. 15 € (heiuki) — say „SUP-Verleih vor Ort" without price | heiuki.com |
| Hausboot-Charter Zernsdorf | BunBo (Bungalowboote) | bunbo.de |
| Naturpark Dahme-Heideseen | umgibt die Region; Wälder, Seen, Schutzgebiete | outdooractive |
| Krüpelsee | natürlicher Flachsee der Dahme-Kette, Schilfgürtel, gilt als fischreich (Hecht, Barsch, Karpfen, Schleie), kaum Motorbootverkehr, Ortsteile Zernsdorf (West), Senzig (Ost), Kablow (Nord) | vierstegehaus.de, seehaus-berlin.de |
| Großer Zug | langgestreckter See zwischen Niederlehme und Ziegenhals, Teil der Dahme-Gewässer | galeriehausamsee.de, reiseland-brandenburg.de |
| Wochenmarkt Königs Wusterhausen | dienstags und freitags | dahme-seenland.de |
| Restaurants in KW (Auswahl, Öffnung prüfen) | Jagdschloss 1896, Schmitz Katze, Villa Romana, Osteria Forio, Mr. Singh, Kaffeehaus54, Mühlencafé am Schloss | reiseland-brandenburg.de |

## Appendix D — Texts to store on the platform

### D.1 Knowledge base items (`save_knowledge_item`, German)
1. **„Unternehmen, Gastgeberin & Kontakt"** (business_info): Betreiber: Ausblicke Management GmbH, Kuno-Fischer-Str. 14, 14057 Berlin; Amtsgericht Charlottenburg HRB 115701 B; USt-IdNr. DE262426225; Geschäftsführerin und persönliche Gastgeberin: Marita Briese. Telefon +49 163 5088945, WhatsApp +49 172 8588588, E-Mail kontakt@seehaus-berlin.de, erreichbar Mo–Fr 9–18 Uhr, Sa nach Vereinbarung. Marke: „Ferienhaus am See Brandenburg" / „Ferien am See", ein Angebot von Seehaus Berlin (seehaus-berlin.de). Alle Häuser liegen in Königs Wusterhausen (Landkreis Dahme-Spreewald, Brandenburg), südöstlich von Berlin, im Dahme-Seenland.
2. **„Die vier Unterkünfte – Eckdaten"** (products): U1 Maisonette am Krüpelsee, Zernsdorf: 125 m², 2 Ebenen, eigener Eingang, 2 Schlafzimmer (großes Doppelbett + Doppelbett, je mit eigenem Bad) + Schlafsofa im Wohnzimmer, max. 5 Gäste, 2 Bäder, Küche (Kühlschrank, Mikrowelle, Kaffeemaschine, Wasserkocher), Kaminofen, Balkon mit Seeblick + Terrasse, kostenloses WLAN, kostenloser Parkplatz, keine Haustiere. U2 Apartment am Krüpelsee, Zernsdorf: ca. 63 m², 1 Bad, Kaminofen, Seeblick, 1 Stellplatz. U3 Gästehaus am Großen Zug, Niederlehme: 57 m², 1 Schlafzimmer, max. 2 Gäste, 1 Doppelbett + Schlafsofa, Küchenzeile, Duschbad mit bodengleicher Dusche, eigener Eingang, eigene Terrasse mit Seeblick, barrierefrei/ebenerdig, Parkett, kostenloses WLAN (Glasfaser), kostenloser Parkplatz, Haustiere auf Anfrage, Booking 10/10 (1 Bewertung, 09/2026). U4 Ferienhaus am See in der Natur, Fontanestraße 35, Kablow: Villa von 1940, Wohnung mit 2 Schlafzimmern, 192 m², max. 4 Gäste, 2 große Doppelbetten, Badewanne + Dusche, Küche mit Kochinsel, Waschmaschine, Terrassen mit Seeblick, naturbelassener Garten, kostenloses WLAN, Parkplatz/Carport, keine Haustiere. Check-in 15–18 Uhr, Check-out bis 11 Uhr, Nichtraucher, keine Partys (U1/U3/U4 bestätigt; U2 laut Buchungsbestätigung). Unbekannt (immer „auf Anfrage"): Preise, Mindestaufenthalt, Endreinigung, Kaution, Betten/Personen U2. Booking.com-Titel: „Traum-Maisonette direkt am See", „Leben direkt am See", „Gästehaus am großen Zug-See", „Ferienhaus am See in der Natur".
3. **„Villa am Krüpelsee – das Anwesen"** (products): renovierte Altbauvilla, Karl-Marx-Straße 8, Zernsdorf, Südlage, ruhige Stichstraße, Grundstück ca. 1.749 m², ca. 30 m Seeufer, 4 private Stege, Uferterrasse, Garten mit Trauerweide und Holzpavillon, Saunahaus ca. 40 m² und beheizter Salzwasserpool vorhanden (Mitbenutzung durch Gäste nur nennen, wenn vom Eigentümer bestätigt). Altbau-Details: Balkendecken, Terrakotta, Backsteinbogen, Wendeltreppen, Wintergarten.
4. **„Gästehaus am Großen Zug – Details"** (products): eigenständiges Gästehaus auf einer Landzunge im Großen Zug, Seestraße 41, Niederlehme; Wasser auf zwei Seiten; Terrasse vom Haupthaus nicht einsehbar; ebenerdig, Türen in Rollstuhlbreite, bodengleiche Dusche; Einbauschränke, Parkett; Glasfaser; 5 Stellplätze auf dem Grundstück, davon Carport für 3 (Zuordnung auf Anfrage); Grundriss vorhanden. Das Haupthaus gehört nicht zur Vermietung.
5. **„Ferienhaus am See in der Natur (Kablow) – Details"** (products): Fontanestraße 35, 15712 Königs Wusterhausen OT Kablow, nordöstliches Ende des Krüpelsees, ruhiger Ortsteil ohne Fluglärm, Regionalbahn-Halt Kablow, BER ca. 17 km. Villa von 1940 (Zweifamilienhaus), ca. 193 m² Wohnfläche, Grundstück ca. 1.868 m² mit Kiefern und Birken und einem bewusst naturbelassenen Gartenteil Richtung See; 2 Naturstein-Terrassen + 2 Dachterrassen; offener Kamin; Einbauküche mit Kochinsel und Natursteinarbeitsplatte; renovierte Bäder (Badewanne, bodengleiche Dusche); Gaszentralheizung; Carport. Vermietet laut Booking: Wohnung mit 2 Schlafzimmern (192 m²) für max. 4 Gäste, 2 große Doppelbetten, Küche, Waschmaschine, Flachbild-TV, Terrasse mit See- und Gartenblick, Obergeschoss über Treppe, kostenloses WLAN, Privatparkplatz, Picknickplatz, Fahrradabstellplatz; Check-in 15–18 Uhr, Check-out bis 11 Uhr; Kinder willkommen (0–17 in vorhandenen Betten kostenlos), keine Babybetten; keine Haustiere; Nichtraucher; keine Partys; Deutsch/Englisch. Seenahe Lage: kein eigener Steg, kein direkter Seezugang, keine Sauna, kein Wintergarten – nie behaupten. Ob das ganze Haus oder eine Wohneinheit vermietet wird und ob das Ufer genutzt werden darf: vom Eigentümer bestätigen lassen.
6. **„Region & Anreise – verifizierte ca.-Werte"** (geo_targeting): the whole Appendix C table in prose, each value with „ca.", plus the rule „Bahnhalte in Zernsdorf/Kablow/Niederlehme sind Regionalbahn, nicht S-Bahn; S46 endet in Königs Wusterhausen".
7. **„Tonalität & Regeln"** (about): Sie-Form, ruhig, konkret, sinnlich; keine Superlative; verbotene Wörter im sichtbaren Text: Kaufpreis, Exposé, Courtage, Makler, Verkauf, Kapitalanlage, SEO, Google, Keyword, Landing Page, Conversion; Preise immer „inkl. gesetzlicher MwSt."; jede Objektseite endet mit dem Rechtshinweis; keine Aussagen zu Pool/Sauna/Steg-Nutzung ohne Bestätigung; keine erfundenen Zahlen; Entfernungen mit „ca."; CTA einheitlich „Verfügbarkeit anfragen" und „Auf Booking.com ansehen".
8. **„Buchung & FAQ-Standardantworten"** (faq): Ablauf: Anfrage per Formular/WhatsApp/Telefon → persönliche Antwort von Marita Briese innerhalb von 24 Stunden → schriftliche Bestätigung und Zahlung → Anreise-Infos und Schlüsselübergabe nach Absprache. Alternativ Buchung über Booking.com. Standardantworten: Berlin-Mitte ca. 40 Min. mit der S46 ab Königs Wusterhausen; BER ca. 20 Min. (Booking: 16–17 km); Check-in 15–18 Uhr mit Ankunftszeit vorab, Check-out bis 11 Uhr (Maisonette, Gästehaus und Ferienhaus Kablow bestätigt; Apartment laut Buchungsbestätigung); Baden im Krüpelsee vom Grundstück der Villa in Zernsdorf aus möglich (auf eigene Gefahr, Kinder beaufsichtigen); Haustiere: Gästehaus auf Anfrage, Maisonette nein, Ferienhaus Kablow nein, Apartment auf Anfrage; Rauchen nein; Feiern nein; Babybetten/Zustellbetten: nicht vorhanden (Gästehaus, Kablow); kostenlose Parkplätze am Haus; kostenloses WLAN (Gästehaus: Glasfaser); Bettwäsche und Handtücher inklusive (Gästehaus bestätigt).

### D.2 AI instructions (`save_ai_instructions`, German markdown)
```
# Redaktionsregeln ferienwohnung-see-brandenburg.de
## Tonalität
- Deutsch, Sie-Form, ruhig, konkret, sinnlich. Kurze Sätze. Keine Ausrufezeichen im Fließtext. Keine Superlative ohne Beleg.
- Synonyme: Ferienhaus, Ferienwohnung, Unterkunft, Domizil, Refugium, Seehaus. Keine Keyword-Wiederholungen.
## Fakten
- Nur Angaben aus der Wissensbasis. Unbekanntes = „auf Anfrage". Entfernungen/Zeiten immer „ca.". Preise immer „inkl. gesetzlicher MwSt." und mit „Stand: MM/JJJJ".
- Verboten im sichtbaren Text: Kaufpreis, Exposé, Courtage, Makler, Verkauf, Kapitalanlage, SEO, Google, Keyword, Landing Page, Conversion.
- Pool, Saunahaus, Stege, Boote: nur erwähnen, wenn die Gästenutzung bestätigt ist.
- Ferienhaus am See in der Natur (Fontanestraße 35, Kablow): keine Sauna, kein Wintergarten, kein eigener Steg, kein direkter Seezugang, kein Grillplatz – nie behaupten. Max. 4 Gäste, 2 Schlafzimmer, keine Haustiere. Gästehaus am Großen Zug: max. 2 Gäste, Haustiere auf Anfrage. Maisonette am Krüpelsee: 125 m², 2 Schlafzimmer + Schlafsofa, 2 Bäder, max. 5 Gäste, keine Haustiere. Check-in 15–18 Uhr, Check-out bis 11 Uhr (Maisonette, Gästehaus, Kablow).
## Struktur jeder Inhaltsseite
Hero → Antwortkapsel (2–3 Sätze: was, wo, für wen, wie buchen) → Faktenleiste → Story-Abschnitte → Galerie → Lage & Anreise → FAQ (4–6, je 40–80 Wörter) → Anfrageformular → Rechtshinweis. 800–1400 sichtbare Wörter.
## SEO/GEO
- Ein Hauptkeyword pro Seite (Title, H1, erste 100 Wörter, eine H2, Alt-Text, URL). Orte als natürliche Entitäten: Königs Wusterhausen, Zernsdorf, Kablow, Niederlehme, Krüpelsee, Großer Zug, Dahme-Seenland, Brandenburg, Berlin, BER.
- Zahlen in Text, Tabelle, FAQ, JSON-LD und llms.txt identisch halten.
- CTAs: „Verfügbarkeit anfragen" (Klasse convert) und „Auf Booking.com ansehen".
## Formulare
- Formular id="contact-form", Felder mit name, Datenschutz-Checkbox vor dem Absenden-Button, genau ein Formular pro Seite.
## Bilder
- Nur Bilder aus der Mediathek; jedes Bild mit deutschem Alt-Text; nie Innenräume einer anderen Einheit zeigen.
```

### D.3 `llms.txt` (`save_seo_files.llmsTxt`)
```
# Ferienhaus am See Brandenburg – Ferienwohnungen und Ferienhäuser in Königs Wusterhausen (Dahme-Seenland), ca. 40 Minuten von Berlin
> Vier private Unterkünfte direkt am Krüpelsee und am Großen Zug, vermietet von Marita Briese (Ausblicke Management GmbH / Seehaus Berlin). Direktanfrage über die Website oder Buchung über Booking.com.

## Unterkünfte
- Maisonette am Krüpelsee (Zernsdorf): 125 m², 2 Ebenen, eigener Eingang, 2 Schlafzimmer mit je eigenem Bad + Schlafsofa, max. 5 Gäste, Küche, Kaminofen, Balkon mit Seeblick, Terrasse, kostenloses WLAN, Parkplatz, keine Haustiere. Check-in 15–18 Uhr, Check-out bis 11 Uhr. https://ferienwohnung-see-brandenburg.de/ferienhaeuser/maisonette-am-kruepelsee
- Apartment am Krüpelsee (Zernsdorf): ca. 63 m², 1 Bad, Kaminofen, Seeblick, Stellplatz. https://ferienwohnung-see-brandenburg.de/ferienhaeuser/apartment-am-kruepelsee
- Gästehaus am Großen Zug (Niederlehme): 57 m², 1 Schlafzimmer, max. 2 Gäste, Doppelbett + Schlafsofa, eigener Eingang, Küchenzeile, bodengleiche Dusche, eigene Terrasse mit Seeblick, barrierefrei, kostenloses WLAN (Glasfaser), Parkplatz, Haustiere auf Anfrage. Check-in 15–18 Uhr, Check-out bis 11 Uhr. https://ferienwohnung-see-brandenburg.de/ferienhaeuser/gaestehaus-am-grossen-zug
- Ferienhaus am See in der Natur (Fontanestraße 35, Kablow): Villa von 1940, Wohnung mit 2 Schlafzimmern, 192 m², max. 4 Gäste, 2 große Doppelbetten, Küche mit Kochinsel, Waschmaschine, Badewanne und Dusche, Terrassen mit Seeblick, naturbelassener Garten, kostenloses WLAN, Parkplatz, keine Haustiere, Nichtraucher. Check-in 15–18 Uhr, Check-out bis 11 Uhr. https://ferienwohnung-see-brandenburg.de/ferienhaeuser/ferienhaus-am-see-kablow
- Übersicht & Vergleich: https://ferienwohnung-see-brandenburg.de/ferienhaeuser · Anfragen & Buchen: https://ferienwohnung-see-brandenburg.de/buchen

## Lage & Anreise (ca.-Werte)
- Königs Wusterhausen, Landkreis Dahme-Spreewald, Brandenburg; Ortsteile Zernsdorf, Niederlehme, Kablow.
- Berlin-Mitte ca. 35–40 km; S-Bahn S46 ab Königs Wusterhausen ca. 30 Min. nach Berlin-Ostkreuz, ca. 40 Min. nach Alexanderplatz; Flughafen BER ca. 15–25 Min. mit dem Auto; A10/A13.
- Ausflüge: Tropical Islands ca. 40 km, Spreewald (Lübben) ca. 45 km, Schloss Königs Wusterhausen, Funkerberg, Strandbad Neue Mühle, Naturpark Dahme-Heideseen.
- Region: https://ferienwohnung-see-brandenburg.de/region · Anreise: https://ferienwohnung-see-brandenburg.de/region/anreise

## Kontakt
- Marita Briese, Ausblicke Management GmbH, Kuno-Fischer-Str. 14, 14057 Berlin · +49 163 5088945 · WhatsApp +49 172 8588588 · kontakt@seehaus-berlin.de
- Preise: auf Anfrage. Check-in 15–18 Uhr, Check-out bis 11 Uhr (Maisonette, Gästehaus und Ferienhaus Kablow bestätigt; Apartment laut Buchungsbestätigung). Nichtraucher, keine Partys. Alle Preise inkl. gesetzlicher MwSt.
- FAQ: https://ferienwohnung-see-brandenburg.de/faq · Gastgeber: https://ferienwohnung-see-brandenburg.de/gastgeber
```
(Update the Apartment line the moment beds/max guests are confirmed; add prices when the rate table arrives.)

### D.4 `robots.txt`
```
User-agent: *
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
Sitemap: https://ferienwohnung-see-brandenburg.de/sitemap.xml
```

## Appendix E — Code assets

### E.1 Favicon / logo mark (SVG; upload as `brand/favicon.svg`, and a 512 px PNG export as `brand/logo-512.png`)
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Ferien am See">
  <rect width="64" height="64" rx="14" fill="#0B1F2E"/>
  <circle cx="32" cy="23" r="8" fill="#C9A86A"/>
  <path d="M8 40c6 0 6-4 12-4s6 4 12 4 6-4 12-4 6 4 12 4" fill="none" stroke="#5FB0C8" stroke-width="3" stroke-linecap="round"/>
  <path d="M8 50c6 0 6-4 12-4s6 4 12 4 6-4 12-4 6 4 12 4" fill="none" stroke="#2A88A6" stroke-width="3" stroke-linecap="round"/>
</svg>
```
Wordmark for the nav (inline, next to the mark): `<span class="font-serif text-2xl tracking-[0.18em] font-semibold text-sand-50">FERIEN AM SEE</span><span class="block text-[10px] tracking-[0.22em] uppercase text-gold-300 font-sans">Königs Wusterhausen · Brandenburg</span>`.

### E.2 Navigation + footer skeleton for `save_navigation` (fill links per §4.10; keep the markers)
```html
<style>
#main-nav::before{content:"";position:absolute;inset:0 0 auto 0;height:160px;pointer-events:none;z-index:-1;background:linear-gradient(to bottom,rgba(7,20,30,.85),rgba(7,20,30,.55) 50%,rgba(7,20,30,0));transition:opacity .3s}
#main-nav.nav-scrolled::before{opacity:0}
#main-nav.nav-scrolled{background:rgba(7,20,30,.94);backdrop-filter:blur(10px)}
#main-nav .group:hover>.submenu{opacity:1;visibility:visible;transform:translateY(0)}
</style>
<nav id="main-nav" class="fixed top-0 inset-x-0 z-50 transition-all duration-300" aria-label="Hauptnavigation">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
    <a href="/" class="flex items-center gap-3" aria-label="Ferien am See – Startseite"><!-- E.1 mark + wordmark --></a>
    <ul class="hidden lg:flex items-center gap-8 text-sand-50 text-sm font-medium">
      <li class="relative group"><a href="/ferienhaeuser" class="nav-link">Unterkünfte</a>
        <ul class="submenu absolute top-full left-0 mt-3 w-72 rounded-2xl bg-night-950/95 backdrop-blur p-3 opacity-0 invisible translate-y-2 transition">
          <li><a href="/ferienhaeuser" class="block px-4 py-2 rounded-lg hover:bg-white/10">Alle Unterkünfte</a></li>
          <li><a href="/ferienhaeuser/maisonette-am-kruepelsee" class="block px-4 py-2 rounded-lg hover:bg-white/10">Maisonette am Krüpelsee</a></li>
          <li><a href="/ferienhaeuser/apartment-am-kruepelsee" class="block px-4 py-2 rounded-lg hover:bg-white/10">Apartment am Krüpelsee</a></li>
          <li><a href="/ferienhaeuser/gaestehaus-am-grossen-zug" class="block px-4 py-2 rounded-lg hover:bg-white/10">Gästehaus am Großen Zug</a></li>
          <li><a href="/ferienhaeuser/ferienhaus-am-see-kablow" class="block px-4 py-2 rounded-lg hover:bg-white/10">Ferienhaus am See, Kablow</a></li>
          <li><a href="/ferienhaeuser/villa-am-kruepelsee-zernsdorf" class="block px-4 py-2 rounded-lg hover:bg-white/10">Die Villa am Krüpelsee</a></li>
        </ul></li>
      <li class="relative group"><a href="/region" class="nav-link">Region</a>
        <ul class="submenu …"> <!-- /region, /region/kruepelsee, /region/ausflugsziele, /region/aktivitaeten-am-see, /region/anreise --> </ul></li>
      <li><a href="/gastgeber" class="nav-link">Gastgeber</a></li>
      <li><a href="/faq" class="nav-link">FAQ</a></li>
      <li><a href="/kontakt" class="nav-link">Kontakt</a></li>
      <!--tb-nav-insert-->
    </ul>
    <div class="flex items-center gap-3">
      <a href="https://wa.me/491728588588" class="hidden md:inline-flex text-sand-50/80 hover:text-sand-50" aria-label="WhatsApp"><!-- inline svg --></a>
      <a href="/buchen" class="convert btn-gold hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold">Verfügbarkeit anfragen</a>
      <button id="mobile-menu-btn" class="lg:hidden text-sand-50 p-2" aria-label="Menü öffnen" aria-controls="mobile-menu" aria-expanded="false"><!-- burger svg --></button>
    </div>
  </div>
</nav>
<div id="mobile-backdrop" class="fixed inset-0 bg-night-950/70 z-40 hidden"></div>
<aside id="mobile-menu" class="fixed top-0 right-0 h-full w-[86%] max-w-sm bg-night-950 text-sand-50 z-50 p-6 overflow-y-auto transition-transform duration-300" style="transform:translateX(100%)" aria-label="Mobiles Menü">
  <button id="mobile-menu-close" class="p-2" aria-label="Menü schließen">✕</button>
  <ul class="mt-6 space-y-1 text-lg">
    <!-- same links as desktop, flat, with the sub-items indented -->
    <!--tb-nav-insert-->
  </ul>
  <a href="/buchen" class="convert btn-gold mt-8 block text-center px-5 py-3 rounded-full font-semibold">Verfügbarkeit anfragen</a>
  <p class="mt-6 text-sm text-sand-100/70">{{phone}} · <a href="{{whatsapp_link}}">WhatsApp</a></p>
</aside>
<script>
document.addEventListener('DOMContentLoaded',function(){var n=document.getElementById('main-nav');function s(){n.classList.toggle('nav-scrolled',window.scrollY>60)}window.addEventListener('scroll',s,{passive:true});s();
var b=document.getElementById('mobile-menu-btn'),c=document.getElementById('mobile-menu-close'),m=document.getElementById('mobile-menu'),k=document.getElementById('mobile-backdrop');
function o(){m.style.transform='translateX(0)';k.classList.remove('hidden');document.body.style.overflow='hidden';b.setAttribute('aria-expanded','true')}
function x(){m.style.transform='translateX(100%)';k.classList.add('hidden');document.body.style.overflow='';b.setAttribute('aria-expanded','false')}
b&&b.addEventListener('click',o);c&&c.addEventListener('click',x);k&&k.addEventListener('click',x);document.addEventListener('keydown',function(e){if(e.key==='Escape')x()});});
</script>
```
Footer (`footerHtml`): `<footer class="bg-night-950 text-sand-100">` → 4 columns per §4.10, each link list ending with `<!--tb-footer-insert-->`, bottom bar `© {{current_year}} {{company_name}} · Alle Preise inkl. MwSt.` (if the platform has no year variable, write the year). Do **not** output a `<nav>`/`<footer>` inside any page HTML — only here.

---
*End of master prompt. Everything marked [TO CONFIRM] is a real gap, not a formality — write "auf Anfrage" rather than guess.*

## Appendix F — Booking.com listing data (retrieved 2026-09-24 from the owner's own session links; verbatim facts, single source for house rules until the owner's rate table arrives)

**Retrieval status.** With the owner's session-bearing links the listing pages of **U1**, **U3** and **U4** rendered completely in a real Chromium session (page content, structured data, room data, house rules, review, photo set). The page of **U1 (traum-maisonette-direkt-am-see)** rendered after a 40-minute cool-down with a single attempt (F.0). The page of **U2 (leben-direkt-am-see)** was answered with Booking's "403 Access Forbidden" bot-protection page in every attempt — its listing content must come from the owner (§12 items 1–2). **Prices did not render for any listing** (Booking's availability block answered "S-a produs o eroare" / an error for the requested dates, so no rate was ever displayed) — the seasonal rate table remains an owner deliverable. Do not try to evade the bot protection; do not scrape reviews beyond what is documented here.

**How to use this appendix.** Every fact below may be used on the site as a verified fact (it is what the owner herself declares on Booking). Booking's descriptive paragraphs are auto-generated in Booking's template voice — **never copy them verbatim**; write our own German copy from the facts. Where Booking and the owner's sales sites disagree, the difference is flagged; ask the owner (§12) and until then use the Booking value for rental facts and the sales-site value for building facts.

### F.0 U1 — „Traum-Maisonette direkt am See" (Booking hotel id 17316488, type: Apartment) — retrieved 2026-09-24 after a cool-down, one render
| Field | Value on Booking (2026-09-24) |
|---|---|
| Listing URL (canonical, German) | `https://www.booking.com/hotel/de/traum-maisonette-direkt-am-see.de.html` (share link `https://www.booking.com/Share-5C0nOc`) — note Booking's spelling **„Traum-Maisonette"** with hyphen |
| Address shown | „Karl-Marx-Straße 8, 15712 Königs Wusterhausen" · coordinates **52.2978596, 13.6971580** (use in JSON-LD) |
| Unit | „Apartament cu 2 dormitoare" = **Apartment mit 2 Schlafzimmern**, **125 m²**, entire place is yours; flags: **„Apartment privat im Gebäude"**, **„Obergeschoss nur über Treppe erreichbar"**, **eigener Eingang** (`private_entrance`) |
| Occupancy | **max. 5 Gäste** (maxPersons 5, maxChildren 0) |
| Beds | **Schlafzimmer 1: 1 großes Doppelbett (mit eigenem Bad)** · **Schlafzimmer 2: 1 Doppelbett (mit eigenem Bad)** · **Wohnzimmer: 1 Schlafsofa** — Booking's room text: „The unit offers 3 beds" |
| Bathrooms | **2 Bäder** (`bathroomCount: 2`, both en suite per the room data), „Baie privată" ×2; photos show one bath with corner shower + tub under the roof slope and a second blue-tiled bath with WC and a washing machine |
| Kitchen | **Küche** (voll ausgestattet): **Kühlschrank, Mikrowelle, Kaffeemaschine, Wasserkocher/Tee- und Kaffeezubereiter, Kochgeschirr**; photos show a white kitchen with island and extractor |
| Living | **Wohnzimmer mit Sofa**, **Flachbild-TV**, Heizung, Bettwäsche & Handtücher inklusive; photos show a black wood-burning stove (Kaminofen — matches the owner site) and parquet |
| Outside | **Balkon mit Seeblick**, **Terrasse**, Sonnenterrasse, Garten, Sitzbereich im Freien, **Fahrradabstellplatz**; views: **Seeblick + Gartenblick**; Booking's summary: „Boating is available in the surrounding area" |
| Parking / internet | **kostenlose Privatparkplätze** (property level; the room-level flag says no parking is attached to the unit itself — write „kostenloser Parkplatz am Haus") · **kostenloses WLAN** in allen Bereichen |
| Languages | Deutsch, Englisch |
| Check-in / check-out | **Check-in 15:00–18:00 Uhr** (arrival time to be announced in advance) · **Check-out 08:00–11:00 Uhr** |
| Children | Kinder jeden Alters willkommen; **0–17 Jahre in vorhandenen Betten kostenlos**, **ab 18 Erwachsenentarif**; **keine Babybetten / Zustellbetten** |
| Pets | **nicht erlaubt** (`petsAllowed: NO`) |
| Smoking / parties | **Nichtraucher**; **keine Partys/Veranstaltungen**; no stag/hen parties |
| Reviews | **none yet** (0 reviews) → no score, no `aggregateRating` |
| Distances Booking states | Bahnhof Königs Wusterhausen 5 km · Flughafen BER 15 km · U-Bahn Rudow 23 km · U-Bahn Zwickauer Damm 25 km · Schloss Köpenick 25 km · U-Bahn Wutzkyallee 26 km |
| Booking's summary (EN, auto-generated — paraphrase only) | „…spacious apartment with two bedrooms and two bathrooms. The living room features a sofa and a TV… sun terrace and a garden… outdoor seating area and bicycle parking… free WiFi, a fully equipped kitchen with a coffee machine, refrigerator, microwave, and kitchenware… a balcony with lake views and a private entrance… 5 km from Königs Wusterhausen Train Station and 15 km from Berlin Brandenburg Airport… Boating is available in the surrounding area." (its sentence „oferă un bancomat" / ATM is a template artefact — ignore) |
| Photos on the listing (23, all real, originals up to 6720×4480) | see the Booking table in Appendix B.1 — they are the **only verified Maisonette interiors**: open-plan living/dining with white kitchen island and red accent wall, bay-window dining spot with wooden spiral staircase, living room with black stove and white sofas, two bedrooms (one under the roof with dormer), two bathrooms, plus exteriors (villa from the lake with weeping willow, jetties and boats; garden side with winter garden and outer spiral stair; lake sunsets) |

**Consistency notes U1.** Owner site: „2,5 Schlafzimmer, 2 Bäder, 2 Balkone/Terrassen mit Seeblick, Kaminofen, 1 Stellplatz" ↔ Booking: 2 Schlafzimmer + Schlafsofa im Wohnzimmer, 2 Bäder, Balkon + Terrasse, max. 5 Gäste. Write **„2 Schlafzimmer + Schlafsofa, 2 Bäder, bis zu 5 Gäste"** (drop „2,5 Schlafzimmer"). Booking's facility list does not contain a washing machine although photo 921169011 shows one in the second bathroom → „Waschmaschine" only after the owner confirms (§12). The pool/sauna/jetty question (§12 item 6) is unchanged — Booking mentions neither. The bay-window room with the wooden spiral staircase and red wall in the owner-site photos `08-…esszimmer-im-erker-01.jpg` and `09-…erker-sitzbank-am-fenster-01.jpg` is the same room as Booking photos 921168216/921168306 (older furnishing) — those two owner-site photos may be treated as Maisonette; all other owner-site interiors (terracotta floors, brick pillars, winter garden, tiled Kachelofen, country kitchen with spiral stair) are **not** the Maisonette (they show the main house) and stay unassigned.
### F.1 U3 — „Gästehaus am großen Zug-See" (Booking hotel id 17067855, type: Ferienhaus/holiday home)
| Field | Value on Booking (2026-09-24) |
|---|---|
| Listing URL (canonical, German) | `https://www.booking.com/hotel/de/gastehaus-am-grossen-zug-see.de.html` (share link `https://www.booking.com/Share-oF7mmA`) |
| Address shown | „Seestraße 41 Gästehaus, 15713 Königs Wusterhausen" · coordinates **52.3470162, 13.6601598** (use these in JSON-LD, no geocoding needed) |
| Unit | „Casă cu 1 dormitor" = **Ferienhaus mit 1 Schlafzimmer**, **57 m²**, entire place is yours, privacy level: separate house (`detached`, „Locuință individuală"), **whole unit on the ground floor** (`entire_property_on_ground_floor`) |
| Occupancy | **max. 2 Gäste** (maxPersons 2, maxChildren 0 in the room card) |
| Beds | bedroom: **1 Doppelbett**; living area: **1 Schlafsofa** (`sofa_bed`) — Booking's room text: „The unit offers 1 bed" |
| Bathroom | **1 Bad**, privat, **bodengleiche Dusche** (walk-in shower), WC, Handtücher, Toilettenpapier |
| Kitchen | **Küchenzeile** (`kitchenette`) mit **Kühlschrank, Kaffeemaschine, Wasserkocher/Tee- und Kaffeezubereiter, Kochgeschirr** |
| Living | Sitzecke, Sofa, **Flachbild-TV**, Kleiderschrank, Bettwäsche, **Parkett/Holzboden**, Heizung, **eigener Eingang** |
| Outside | **Terrasse** mit **Gartenmöbeln** und **Essplatz im Freien**; Ausblick: **Seeblick + Gartenblick**; Garten; **Picknickbereich**; **Fahrradabstellplatz** (Booking summary) |
| Parking / internet | **kostenlose Privatparkplätze** vor Ort · **kostenloses WLAN** in allen Bereichen |
| Languages | Deutsch, Englisch |
| Check-in / check-out | **Check-in 15:00–18:00 Uhr** („Sie müssen der Unterkunft Ihre Ankunftszeit im Voraus mitteilen") · **Check-out 08:00–11:00 Uhr** |
| Children | Kinder jeden Alters willkommen; **keine Babybetten / Zustellbetten** verfügbar; no minimum age |
| Pets | **auf Anfrage**, ggf. gegen Gebühr (`UPON_REQUEST`, `CHARGES_MAY_APPLY`) |
| Smoking / parties | **Nichtraucher**; **keine Partys/Veranstaltungen**; no stag/hen parties |
| Cancellation / prepayment | „varies per option — enter dates" (not retrievable) |
| Host classification | Booking labels the host as a private host („administrată de o persoană privată"). **Note:** our site's operator is Ausblicke Management GmbH — keep the Impressum as in §2.1; the Booking label is Booking's own classification and is not repeated on the site. |
| Reviews | **10 / 10** (Booking score) from **1 review** (as of 2026-09-24); category scores all 10.0 (Personal, Ausstattung, Sauberkeit, Komfort, Preis-Leistung, Lage). Booking "quality rating" 3 tiles. Only review: guest „Ruzickova" (CZ), solo leisure traveller, stay reviewed 2026-08-31, positive text (EN): *„Private garden with a private dock and lake access. Modernly equipped, clean, new apartment; very comfortable mattresses and bedding. Beautiful terrace. Parking available on the property."*, negative: *„Everything OK. Nothing to claim."* → you may write „10 von 10 Punkten auf Booking.com (1 Bewertung, Stand 09/2026)" and, with the owner's OK (§12), quote a short German paraphrase with „Gast aus Tschechien, August 2026". Do **not** add `aggregateRating` with a single review. |
| Distances Booking states | Zentrum Königs Wusterhausen 6 km · Flughafen BER 16 km · Schloss Köpenick 19 km · Stadttheater Cöpenick 20 km · Stadion An der Alten Försterei 21 km · U-Bahn Rudow 24 km · U-Bahn Zwickauer Damm 25 km |
| Booking's summary (EN, auto-generated — paraphrase only) | „…recently renovated holiday home with one bedroom and a bathroom… sun terrace, garden, free WiFi… outdoor seating area, picnic spot, and bicycle parking. The ground-floor unit includes a terrace with lake and garden views… kitchenette with a coffee machine, refrigerator, and kitchenware… sofa bed, walk-in shower, TV, and private entrance." |
| Photos on the listing (9, all real photos) | see the Booking table in Appendix B.2 |

**Consistency notes U3.** Booking's „recently renovated", „new apartment" (guest) and the owner's „hochwertig ausgebaut" agree. Booking does not mention the barrier-free fit-out (owner site does) — keep it, it is the owner's own claim, but no measurements. The guest review mentions **a private dock and lake access** → jetty use by guests is now *plausible*; still mark „Steg (Nutzung vom Gastgeber bestätigen lassen)" until §12 item 6 is answered. Max. 2 guests + sofa bed: write „für 2 Personen (Schlafsofa vorhanden)"; do not promise a third guest.

### F.2 U4 — „Ferienhaus am See in der Natur" (Booking hotel id 17300141, type: Apartment)
| Field | Value on Booking (2026-09-24) |
|---|---|
| Listing URL (canonical, German) | `https://www.booking.com/hotel/de/ferienhaus-am-see-in-der-natur.de.html` (share link `https://www.booking.com/Share-Hh37cg`) |
| Address shown | **„Fontanestraße 35, 15758 Königs Wusterhausen"** · coordinates **52.2958647, 13.7128285** (= Kablow, north-east end of the Krüpelsee). The official postal code of Fontanestraße, OT Kablow, is **15712** (strassenkatalog.de); Booking's 15758 is the neighbouring Zernsdorf code — most likely a typo by the host. **Use 15712 on the site** and ask the owner to correct the listing (§11). |
| Unit | „Apartament cu 2 dormitoare" = **Apartment mit 2 Schlafzimmern**, **192 m²**, entire place is yours; Booking facility flags: **„Apartment privat im Gebäude"** (`private_flat_in_block_of_flats`) and **„Obergeschoss nur über Treppe erreichbar"** (`upper_floor_reachable_by_stairs_only`) |
| Occupancy | **max. 4 Gäste** (maxPersons 4, maxChildren 0) |
| Beds | **Schlafzimmer 1: 1 großes Doppelbett · Schlafzimmer 2: 1 großes Doppelbett** (`LARGE_DOUBLE_BED` ×1 each) |
| Bathrooms | Booking's English summary says **two bathrooms**; room facilities list **Badewanne + Dusche**, Toilettenpapier |
| Kitchen | **Küche** (full kitchen, „complet utilată"), **Waschmaschine** |
| Living | **Flachbild-TV**, Heizung |
| Outside | **Terrasse** mit **Seeblick und Gartenblick**; Garten; **Picknickbereich**; **Fahrradabstellplatz**; „Wassersporteinrichtungen vor Ort" listed under activities |
| Activities Booking lists (may cost extra) | Radfahren, Wandern, Angeln, Kanu/Kajak, Wassersport vor Ort |
| Parking / internet | **kostenlose Privatparkplätze** · **kostenloses WLAN** in allen Bereichen |
| Languages | Deutsch, Englisch |
| Check-in / check-out | **Check-in 15:00–18:00 Uhr** (arrival time to be announced in advance) · **Check-out 08:00–11:00 Uhr** |
| Children | Kinder jeden Alters willkommen; **Kinder 0–17 Jahre in vorhandenen Betten kostenlos** (child policy rule „EXISTING_BED, € 0"); **ab 18 Jahren Erwachsenentarif**; **keine Babybetten / Zustellbetten** |
| Pets | **nicht erlaubt** (`petsAllowed: NO`) |
| Smoking / parties | **Nichtraucher**; **keine Partys/Veranstaltungen**; no stag/hen parties |
| Reviews | **none yet** (0 reviews) → no score, no `aggregateRating` |
| Distances Booking states | Zentrum Königs Wusterhausen 6 km · Flughafen BER 17 km |
| Booking's summary (EN, auto-generated — paraphrase only) | „…spacious apartment… two bedrooms and two bathrooms… sun terrace or garden, enjoying scenic lake and garden views… outdoor seating and picnic areas… fully equipped kitchen, washing machine, and TV. Free WiFi… 17 km from Berlin Brandenburg Airport… bicycle parking available on-site." |
| Photos on the listing (14) | see Appendix B.3 — **five of them are virtually staged** (furniture added digitally; the same framed botanical print appears in four different rooms). Flagged in B.3; use only with the owner's confirmation and never as the sole depiction of a room. |

**Consistency notes U4 (important — they change §1.4, §2.4, §5.8, Appendix A/B/D).**
- The address, the size (192 m² vs. „ca. 193 m² Wohnfläche") and the kitchen/bathroom photos (identical to the „original" photos on seebiotophaus.de) identify the listing as the **1940 villa Fontanestraße 35** — *not* Haus am Biotop (Fontanestraße 26 A). §2.4 is therefore written for Fontanestraße 35.
- The sales site states: seenahe Lage, **no direct lake access in the current state** (a separate parcel lies between plot and lake), **no jetty** (a private jetty is only *planned* in a future development stage). Booking states „Seeblick", „Wassersporteinrichtungen vor Ort", and the guest photo 12 shows chairs on a sandy shore. → On our site: **„seenahe Lage, wenige Schritte zum Ufer, Seeblick von Terrasse und Garten"**; never „eigener Steg", never „direkter Seezugang", never „Sauna", never „Wintergarten", never „Grillplatz" (those belong to 26 A). Ask the owner (§12) whether guests may use the shore in front of the plot and whether any water-sport equipment exists.
- Two units exist in the building (Zweifamilienhaus with separate entrances). Booking rents „an apartment in a building" of 192 m² with 2 bedrooms — i.e. practically the whole house. Ask the owner what exactly guests get (§12); until answered write „das ganze Haus für bis zu 4 Gäste" only if she confirms, otherwise „Ferienwohnung mit 2 Schlafzimmern (192 m²)".
- Building facts from seebiotophaus.de that may be used because they are the owner's own: Baujahr 1940, Zweifamilienhaus, ca. 193 m² Wohnfläche, Grundstück ca. 1.868 m², **2 Terrassen (Naturstein) + 2 Dachterrassen**, **offener Kamin**, **Einbauküche mit Kochinsel und Natursteinarbeitsplatte, Einbaugeräte**, **renovierte Bäder mit bodengleicher Dusche** (plus Badewanne per Booking), **Gaszentralheizung**, **Carport (Holz)**, naturbelassener Gartenteil zum See mit Kiefern und Birken, ruhiger Ortsteil Kablow, **kein Fluglärm** (outside the BER noise zones, ca. 20 Autominuten zum BER), Regionalbahn-Haltepunkt Kablow. Never mention Kaufpreis/Exposé/Steganlage-Planung (§0.7).

### F.3 U2 — „Leben direkt am See" — not retrieved
Booking blocked every automated attempt for this page (HTTP 202 challenge or 403, also after the cool-down that let U1 through). Its facts must come from the owner (§12 items 1–2). Until then the U2 page uses only the §2.2 facts, writes „Check-in/Check-out laut Buchungsbestätigung" and „Haustiere auf Anfrage", and shows no interiors. Do not copy U1's Booking facts onto U2 — the units differ (63 m² vs 125 m²).
### F.4 Photo download pattern
Every listing photo is a public CDN file: `https://cf.bstatic.com/xdata/images/hotel/<size>/<photoId>.jpg?k=<key>&o=` with `<size>` = `max2048x1536` (returns the original resolution up to 2048 px — verified: 906477771 → 2048×1536, 920339316 → 1600×900) or `max1024x768` for previews. The `<key>` values are in Appendix B.1/B.2/B.3. Download with curl, then upload via `request_media_upload` into the folders named there. Booking's own alt texts are generic („Un pat sau paturi…") — use the German alt texts given in Appendix B.
