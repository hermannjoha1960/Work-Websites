# QA-Bericht – ferienwohnung-see-brandenburg.de

Stand: 24. September 2026 · Prüfung gegen die Abnahmekriterien in §10 des Master-Prompts v1.2. Skripte und Screenshots liegen in `qa/`.

## Ergebnis je Kriterium

| Kriterium | Ergebnis | Nachweis |
|---|---|---|
| Alle Phase-1-Seiten vorhanden, veröffentlicht, eigener Title/Description/OG, JSON-LD, BreadcrumbList (außer Startseite) | erfüllt | Site-Audit Scan 8 (19 Seiten, alle mit strukturierten Daten); Titel ≤ 60 Zeichen, Beschreibungen 140–160 Zeichen nach Kürzung |
| Layout-Sonde auf jeder Seite bei 390×844, 768×1024, 1440×900 | erfüllt | `qa/run-probe.js`/`qa/probe.js` auf 19 Seiten: kein erzwungener Viewport, kein horizontaler Überlauf, keine Seitenfehler. Tipp-Ziele nach Nachbesserung ≥ 44 px (Fußzeile, FAQ-Aufklapper, Kontakt-Links, Cookie-Schaltflächen, Menüpunkt „FAQ" 44×48). Ausnahme: die Checkbox `privacy_consent` misst 20 px, ihr Label ist mitklickbar. Schriften: keine unter 11 px (Wortmarke-Unterzeile 11 px laut Vorgabe 10–11 px, Eyebrow-Labels 12 px, Fließtext ≥ 14 px) |
| Hero auf Telefonen lesbar, Haus nicht abgeschnitten, Kontrast | erfüllt | `qa/screenshots/hero-390.jpg`, `home-1440.jpg` (Overlay-Verlauf, helle Schrift auf dunklem Grund) |
| Keine kaputten Bilder, alle mit alt/width/height, Hero eager, Rest lazy | erfüllt | Audit: 67 Bildverweise, 0 ohne alt; alle URLs aus der Mediathek; 23 Varianten (800/1200 px) ergänzt |
| Genau ein `#contact-form` je Seite, Checkbox vor Absenden, kein action/method, Testeinsendung angekommen | erfüllt | `qa/form-test.js`: POST `/api/contact` → success; Eingang Nr. 197 in `list_contact_submissions`; `qa/bar2.js`: forms=1, checkboxBeforeSubmit=true, action/method=null |
| Alle CTAs mit Klasse `convert` | erfüllt | Buttons und Buchungs-Links in Seiten, Blöcken, Navigation |
| Volltextsuche nach TODO, Lorem, [TO CONFIRM], Exposé, Courtage, Kaufpreis, Makler, placeholder, unsplash (plus Verkauf, Kapitalanlage, SEO, Google, Keyword, Landing Page, Conversion) | erfüllt | 0 Treffer im sichtbaren Text; Treffer nur in Wissensdatenbank/KI-Anweisungen (Regeltext) und in der Kartenlink-Adresse `google.com/maps` auf `/kontakt` (Linktext „Route planen ↗") |
| Navigation und Fußzeile auf jeder Seite, alle Links auflösbar, Booking-Links in neuem Tab | erfüllt | 51 interne Link-Ziele geprüft, alle HTTP 200; Booking-Links `target="_blank" rel="noopener"` |
| Rechtsseiten vorhanden, noindex, Impressum korrekt, Datenschutz nennt Formular, WhatsApp, OSM, Booking | erfüllt | `/impressum`, `/datenschutz`, `/agb-mietbedingungen` noindex und nicht in der Sitemap; Datenschutz nennt Kontaktformular, WhatsApp, OpenStreetMap, Booking, Timbaly, Meldeschein |
| Cookie-Banner einmal, deutsch, Link zu `/datenschutz` | erfüllt mit Einschränkung | Banner deutsch; der Link-Text „Privacy Policy" und aria-labels sind plattformseitig (keine Einstellung), Ziel ist `/datenschutz` |
| robots.txt, sitemap.xml, llms.txt erreichbar und konsistent | erfüllt | `seo/` im Repository; Sitemap = 16 indexierbare URLs |
| 800–1400 sichtbare Wörter auf Inhaltsseiten, kein Keyword-Stuffing | erfüllt | gerenderte Zählung ohne Navigation/Fußzeile: 853–1370 Wörter; `/region` 1453 inkl. Kartenblock und Anreisetabelle; Rechtsseiten ausgenommen (Impressum 411) |
| Zahlen überall identisch (m², Zimmer, Gäste, Zeiten, Haustiere) | erfüllt | Kreuzprüfung Vergleichstabelle, Unterkunftsseiten, FAQ, JSON-LD, `llms.txt` (Skript in `qa/`, Ergebnis im Sitzungsprotokoll) |
| Reduced Motion, Video stumm/autoplay nur Desktop, Seitengewicht Startseite < 4 MB Desktop, < 1,5 MB mobil | erfüllt | `qa/rm-bar.js`: bei reduced motion Video ausgeblendet, Bild sichtbar, keine Animation. `qa/weight.js`: mobil 1,38 MB (14 Anfragen, Video nicht geladen), Desktop 3,76 MB (Video 2,06 MB) |
| Mobile Buchungsleiste verdeckt den Absende-Button nicht | erfüllt | Formular-Abschnitt mit Klasse `bar-pad`; zusätzlich blendet das Fußzeilen-Script die Leiste aus, sobald der Abschnitt `#anfrage` im Bild ist (`qa/bar2.js`, Screenshot `form-bar-390.jpg`) |
| U3: max. 2 Gäste, Check-in 15–18 Uhr, Check-out bis 11 Uhr, Haustiere auf Anfrage | erfüllt | identisch in Text, FAQ, JSON-LD, `llms.txt` |
| U4: kein Sauna/Wintergarten/Steg/Grill/Seezugang/Kaufpreis; max. 4 Gäste, keine Haustiere, PLZ 15712; virtuell eingerichtete Fotos unveröffentlicht | erfüllt | Wortprüfung der gerenderten Seite: 0 Treffer außer der vorgeschriebenen FAQ-Frage „Gibt es einen direkten Seezugang?" (Antwort „auf Anfrage"); PLZ 15712 in JSON-LD; Reserve-Fotos ungenutzt |
| Site-Audit abgeschlossen, Befunde umgesetzt oder begründet zurückgestellt | erfüllt | Scan 8 abgeschlossen (SEO 91, GEO 80, gesamt 86); umgesetzt: Titel, Beschreibungen, Seitengewicht; zurückgestellt mit Begründung: Search-Console-Anbindung (Eigentümerin), „auf Anfrage"-Fakten, Plattformtexte |

## Messwerte

| Messung | Wert |
|---|---|
| Startseite mobil (iPhone 13, ohne Scrollen) | 1,38 MB gesamt, davon Bilder 0,75 MB, Tailwind-Laufzeit 0,41 MB, kein Video |
| Startseite Desktop 1440×900 | 3,76 MB gesamt, davon Video 2,06 MB, Bilder 1,06 MB |
| Bildwahl mobil (DPR 3) | Hero 1200-px-Variante, Karten 800-px-Varianten |
| Tipp-Ziele Fußzeile | 44 px (Kontaktzeilen, Listen, Cookie-Schaltfläche, Unterzeile) |
| FAQ-Aufklapper / Themen-Chips | 44 px |
| Menüpunkte Desktop | 44–119 × 48 px |
| Kontaktformular | Testeinsendung Nr. 197 angekommen, Erfolgsmeldung deutsch (per Script) |

## Bekannte Einschränkungen

* HTTP 429 vom OpenStreetMap-Kachelserver bei sehr schnellen Wiederholungsaufrufen der Kontaktseite (Testartefakt, kein Seitenfehler).
* Plattformtexte im Cookie-Banner („Privacy Policy", „Consenso cookie") und die italienische Formular-Erfolgsmeldung; letztere wird per Script übersetzt.
* Fakten, die nur die Eigentümerin bestätigen kann, stehen als „auf Anfrage" (siehe Übergabe, Abschnitt 4).
* Google Search Console und Bing sind nicht verbunden; Suchzahlen sind deshalb unbekannt, nicht null.
