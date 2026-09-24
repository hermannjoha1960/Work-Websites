# Übergabe – ferienwohnung-see-brandenburg.de

Stand: 24. September 2026 · Plattform: Timbaly (Site-ID 51) · Sprache: Deutsch · Betreiber: Ausblicke Management GmbH

Dieses Dokument fasst zusammen, was live ist, was bewusst anders umgesetzt wurde als im Master-Prompt v1.2 vorgesehen, was auf Ihre Antworten wartet und wie es weitergeht. Die Fragenliste in Abschnitt 4 ist so formuliert, dass Sie sie direkt an Frau Briese weiterleiten können.

---

## 1. Was ist live

### 1.1 Seiten (alle veröffentlicht, Sprache `de`)

| Seite | URL | Seiten-ID | Status |
|---|---|---|---|
| Startseite (P1) | `/` | 1474 | indexierbar |
| Übersicht Unterkünfte (P0) | `/ferienhaeuser` | 1473 | indexierbar |
| Maisonette am Krüpelsee (P2) | `/ferienhaeuser/maisonette-am-kruepelsee` | 1469 | indexierbar |
| Apartment am Krüpelsee (P3) | `/ferienhaeuser/apartment-am-kruepelsee` | 1470 | indexierbar |
| Gästehaus am Großen Zug (P4) | `/ferienhaeuser/gaestehaus-am-grossen-zug` | 1471 | indexierbar |
| Ferienhaus am See in der Natur, Kablow (P5) | `/ferienhaeuser/ferienhaus-am-see-kablow` | 1472 | indexierbar, siehe 2.1 |
| Die Villa am Krüpelsee (P6) | `/ferienhaeuser/villa-am-kruepelsee-zernsdorf` | 1468 | indexierbar |
| Anfragen & Buchen (P7) | `/buchen` | 1466 | indexierbar |
| Region (P8) | `/region` | 1467 | indexierbar |
| Der Krüpelsee (P9) | `/region/kruepelsee` | 1463 | indexierbar |
| Ausflugsziele (P10) | `/region/ausflugsziele` | 1464 | indexierbar |
| Aktivitäten am See (P11) | `/region/aktivitaeten-am-see` | 1465 | indexierbar |
| Anreise (P12) | `/region/anreise` | 1462 | indexierbar |
| Ihre Gastgeberin (P13) | `/gastgeber` | 1460 | indexierbar |
| Häufige Fragen (P14) | `/faq` | 1461 | indexierbar |
| Kontakt (P15) | `/kontakt` | 1459 | indexierbar |
| Impressum (P16) | `/impressum` | 1456 | noindex |
| Datenschutzerklärung (P17) | `/datenschutz` | 1457 | noindex |
| AGB & Mietbedingungen (P18) | `/agb-mietbedingungen` | 1458 | noindex, Entwurf |

Alle 19 Zeilen des SEO-Plans „Ferien am See – Launch" sind geschlossen. Die Sitemap enthält die 16 indexierbaren URLs; `robots.txt` und `llms.txt` sind gesetzt; 16 URLs wurden per IndexNow übermittelt.

### 1.2 Wiederverwendbare Blöcke (`[[BLOCK:name]]`)

| Block | Zweck | Verwendet auf |
|---|---|---|
| `fakten-leiste` | Faktenleiste mit bis zu sechs Kacheln (Parameter f1–f6; keine Kommas in Werten, „2½ Schlafzimmer") | Startseite, alle Unterkunftsseiten, Villa |
| `unterkuenfte-karten` | Die vier Unterkunftskarten (einzige Quelle für Zahlen und Fotos der Karten) | Startseite, Region, Krüpelsee, Aktivitäten |
| `unterkuenfte-vergleich` | Vergleichstabelle der vier Unterkünfte | `/ferienhaeuser` |
| `buchungsleiste` | Mobile Buchungsleiste (Parameter `unit`, `booking`; ohne `preis` steht „Preise & Verfügbarkeit auf Anfrage") | Unterkunftsseiten |
| `booking-links` | Die vier Booking.com-Schaltflächen | `/buchen` |
| `kontakt-karte` | Kontaktkarte mit Telefon, WhatsApp, E-Mail, Zeiten | `/kontakt` |
| `anreise-tabelle` | Entfernungstabelle | Startseite, `/region/anreise` |
| `vertrauensleiste` | Vertrauensleiste (direkt beim Gastgeber, Antwort in 24 h, Booking) | Startseite u. a. |
| `rechtshinweis` | Pflichthinweis „Alle Angaben ohne Gewähr … Preise inkl. gesetzlicher MwSt." | alle Unterkunftsseiten, Startseite |
| `cta-anfrage` | Dunkles Handlungsband „Verfügbarkeit für … anfragen" (Parameter `unit` im Dativ, `link` Ziel des Hauptbuttons) | Regions- und Unterkunftsseiten |

Die Blockquellen liegen im Ordner `blocks/`. Ein Block wird im Admin (oder per `save_block`) einmal geändert und gilt sofort auf allen Seiten.

### 1.3 Navigation, Fußzeile, Kopfbereich

* Navigation und Fußzeile sind für die Sprache `de` gespeichert (`nav/nav-de.html`, `nav/footer-de.html`). Die sprachlose Standardversion (`nav/nav-default.html`, `nav/footer-default.html`) ist die automatische Plattformvorlage und wird nicht angezeigt; bitte nicht löschen.
* Kopfbereich (`config/head-tags.html`): Tailwind-Konfiguration mit den Farbtokens, Schriften Cormorant Garamond und Inter (selbst gehostet), Basisstile, Mindestgröße 44 px für Schaltflächen, Reduced-Motion-Regeln.
* Fußzeilen-Script (`config/footer-scripts.html`): Einblend-Animationen, Zähler, mobile Buchungsleiste und eine Übersetzung der Plattform-Erfolgsmeldung des Formulars (siehe 2.7).

### 1.4 Medien

* Nur echte Fotos aus Anhang B des Master-Prompts, in Ordnern `villa-am-kruepelsee/…`, `galeriehaus/…`, `villa-fontanestrasse/…`, `region/kruepelsee`, `brand/`, `video/`.
* Virtuell eingerichtete Booking-Fotos liegen ungenutzt in `villa-am-kruepelsee/reserve`, `villa-fontanestrasse/reserve-staging`, `villa-am-kruepelsee/innen-unzugeordnet` (Freigabe siehe Frage 5 und 7).
* Für die Startseite wurden 23 verkleinerte Varianten (800 px und 1200 px, Dateiname mit `-800`/`-1200`) hochgeladen; die Seiten liefern sie per `picture`/`srcset` aus. Vollständige Liste: `media/media-library.tsv`.
* Hero-Video (`video/hero-see-loop.mp4`, ca. 2 MB) läuft nur auf Desktop, stumm und in Schleife; auf Telefonen wird nur das Foto geladen.

### 1.5 Strukturierte Daten, Wissensdatenbank, Variablen

* JSON-LD je Seite: Organization + LodgingBusiness und WebSite (Startseite), VacationRental (Unterkünfte, IDs `#unit`), LodgingBusiness (Villa), TouristDestination (Region), LakeBodyOfWater (Krüpelsee), ItemList aus TouristAttraction (Ausflugsziele), HowTo (Buchen), FAQPage und BreadcrumbList.
* Wissensdatenbank (Inhalte in `notes/knowledge-base.md`): Unternehmen und Kontakt, die drei Häuser, die vier Unterkünfte, Region und Anreise, Buchung und FAQ-Standardantworten, Tonalität und Regeln. Die Uferlagen wurden korrigiert (siehe 2.2).
* Site-Variablen (`config/variables.md`): Telefon, WhatsApp, E-Mail, Zeiten, Firmenanschrift, Booking-Links `booking_u1`–`booking_u4`. Ein Wechsel der Telefonnummer ist damit eine einzige Änderung.

---

## 2. Bewusste Abweichungen vom Master-Prompt

### 2.1 Ferienhaus Kablow (P5) ist veröffentlicht, nicht Entwurf
Der Prompt sah P5 als Entwurf vor, verlangte aber zugleich, dass alle Phase-1-Seiten veröffentlicht sind, alle Links auflösen und Navigation, Fußzeile und Unterkunftskarten auf P5 verweisen. Ein Entwurf hätte an fünf Stellen tote Links erzeugt. Die Seite ist daher live, enthält aber ausschließlich die auf Booking.com bestätigten Fakten (192 m², 2 Schlafzimmer, max. 4 Gäste, keine Haustiere, Check-in 15–18 Uhr, Check-out bis 11 Uhr, PLZ 15712). Nicht genannt werden Sauna, Wintergarten, eigener Steg, Grill oder direkter Seezugang; der Kamin steht als „Nutzung auf Anfrage"; virtuell eingerichtete Fotos sind nicht verwendet. Die einzige Erwähnung von „Seezugang" ist die im Prompt vorgeschriebene FAQ-Frage „Gibt es einen direkten Seezugang?" mit der Antwort „auf Anfrage". Sobald Frage 4 und 5 beantwortet sind, wird die Seite ergänzt.

### 2.2 Uferlagen korrigiert
Anhang C des Prompts nannte „Zernsdorf West, Senzig Ost, Kablow Nord". Die Geokoordinaten zeigen: Zernsdorf liegt am **Nordufer**, Senzig am **Südwestufer**, Kablow am **östlichen Ende** des Krüpelsees. So steht es jetzt auf `/region`, `/region/kruepelsee`, `/region/anreise`, `/kontakt`, in JSON-LD, `llms.txt` und der Wissensdatenbank.

### 2.3 Titel und Beschreibungen gekürzt
Der Prompt schrieb Titel ≤ 60 Zeichen vor, gab aber teils längere Titel vor. Acht Titel wurden auf höchstens 60 Zeichen gekürzt (Startseite, Buchen, die vier Unterkünfte, Villa, Region), vier Meta-Beschreibungen auf 140–160 Zeichen. H1 und Inhalte sind unverändert.

### 2.4 Rechtstexte
Impressum, Datenschutzerklärung und AGB/Mietbedingungen wurden selbst verfasst (Sie-Form, deutsch, Stand September 2026); die Plattform-URLs `/privacy-policy` und `/cookie-policy` leiten auf `/datenschutz` weiter. Beide Texte sind Entwürfe bis zur anwaltlichen Prüfung (Aufgabe 6). Die AGB enthalten „auf Anfrage" für Anzahlung, Kaution und Stornostaffel.

### 2.5 Verbotene Wörter
„Kaufpreis, Exposé, Courtage, Makler, Verkauf, Kapitalanlage, SEO, Google, Keyword, Landing Page, Conversion" kommen im sichtbaren Text nicht vor (geprüft mit der Volltextsuche der Plattform). Die Karten-Links auf `/kontakt` heißen „Route planen ↗" statt „In Google Maps öffnen"; das Wort erscheint nur in der Link-Adresse. Treffer gibt es nur in der internen Wissensdatenbank und den KI-Anweisungen, wo die Regel selbst steht.

### 2.6 Keine Seitenbriefings je Seite
Statt `get_page_brief` je Seite wurde einmalig die Site-Konfiguration gelesen und der Master-Prompt als Briefing verwendet; alle Bild-URLs stammen aus `list_media`.

### 2.7 Plattformtexte in Italienisch/Englisch
Die Erfolgsmeldung des Kontaktformulars kommt von der Plattform als „Messaggio ricevuto con successo". Das Fußzeilen-Script ersetzt sie live durch „Vielen Dank! Ihre Anfrage ist bei uns eingegangen – Sie erhalten innerhalb von 24 Stunden eine persönliche Antwort." Im Cookie-Banner stehen der Link „Privacy Policy" und die aria-labels „Consenso cookie" plattformseitig fest; dafür gibt es keine Einstellung. Bitte beim Timbaly-Support deutsche Texte anfragen.

### 2.8 Testanfragen im Posteingang
Für den Funktionstest wurden zwei Anfragen gesendet („Testanfrage QA … bitte ignorieren", u. a. Eingang Nr. 197). Bitte im Admin als gelesen markieren oder löschen.

### 2.9 Weitere kleine Abweichungen
* Wortmarke-Unterzeile 11 px (Prompt: 10–11 px), Eyebrow-Labels 12 px (Prompt: 11,5 px), damit keine Schrift unter 11 px bleibt.
* Fußzeilen-Links, FAQ-Aufklapper, Kontakt-Links und Cookie-Schaltflächen haben mindestens 44 px Höhe (Tipp-Ziele).
* Preise: überall „auf Anfrage", Check-in/-out der Zernsdorfer Wohnungen „laut Buchungsbestätigung"; `preis`-Parameter der Buchungsleiste bewusst weggelassen.
* KI-Kennzeichnung (EU AI Act) bleibt wie bei den Schwesterseiten deaktiviert – Ihre juristische Entscheidung. Unabhängig davon trägt die Plattform in den strukturierten Daten jeder Seite ein `creator`-Objekt (SoftwareApplication, Kategorie „Generative AI") ein; es ist für Besucher unsichtbar und lässt sich nur plattformseitig abschalten.
* Telefon: +49 163 5088945 als Telefonnummer, +49 172 8588588 als WhatsApp (Frage 9).
* Keine Analyse-Tools, keine Werbe-Tags (Phase 1).

---

## 3. Qualitätsprüfung (Kurzfassung, Details in `notes/QA-BERICHT.md`)

* Layout-Sonde auf allen 19 Seiten bei 390×844, 768×1024 und 1440×900: kein erzwungener Viewport, kein horizontaler Überlauf, keine Konsolenfehler (einmal HTTP 429 vom OpenStreetMap-Kachelserver bei sehr schnellen Wiederholungen, kein Seitenfehler).
* Seitengewicht Startseite: 1,38 MB mobil (ohne Video), 3,76 MB Desktop (mit Video) – innerhalb der Vorgaben 1,5 MB / 4 MB.
* Kontaktformular: genau ein `#contact-form` je Seite, Datenschutz-Checkbox vor dem Absenden, Testeinsendung ist im Posteingang angekommen.
* Alle internen Links antworten mit 200; Booking-Links öffnen in neuem Tab.
* Zahlen (m², Schlafzimmer, Gäste, Check-in/-out, Haustiere) sind auf Vergleichstabelle, Unterkunftsseiten, FAQ, JSON-LD und `llms.txt` identisch.
* Site-Audit der Plattform (Scan 8) abgeschlossen: 19 Seiten bewertet, Gesamtwert 86/100; die gefundenen Punkte (Titel, Beschreibungen, Seitengewicht) sind umgesetzt, die übrigen bewusst mit Begründung offen gelassen (Search Console, „auf Anfrage"-Fakten, Plattformtexte).

---

## 4. Fragen an Frau Briese (bitte einmal senden)

```
Guten Tag Frau Briese,

für die Website ferienwohnung-see-brandenburg.de habe ich die Booking-Anzeigen des Gästehauses (Niederlehme) und des Ferienhauses am See in der Natur (Fontanestraße 35, Kablow) bereits vollständig übernommen – Ausstattung, Belegung, Betten, Check-in/-out, Hausregeln und Fotos. Offen sind nur noch diese Punkte:

1. Maisonette und Apartment in Zernsdorf: Booking-Text, Ausstattungsliste, „Wichtige Informationen", Hausregeln, max. Personen, Betten (Anzahl/Art), Schlafzimmer, Bäder – am einfachsten als Kopie aus dem Booking-Extranet (die Seiten lassen sich nicht automatisch abrufen).
2. Gelten Check-in 15–18 Uhr und Check-out bis 11 Uhr sowie „Nichtraucher, keine Partys" auch für Maisonette und Apartment? Haustiere dort erlaubt?
3. Preise für alle vier Unterkünfte (Nebensaison/Hauptsaison/Feiertage), Mindestaufenthalt, Endreinigung, Kaution, Anzahlung, Zahlungsarten, Stornobedingungen, Kurtaxe (falls erhoben), Schlüsselübergabe (persönlich/Box).
4. Ferienhaus am See in der Natur: Bekommen Gäste das ganze Haus oder eine der beiden Wohneinheiten? Dürfen Gäste das Ufer vor dem Grundstück nutzen (Baden, Boot/Kajak)? Gibt es Wassersport-Ausrüstung? Darf der offene Kamin genutzt werden? Bitte auch die Postleitzahl bei Booking auf 15712 korrigieren (dort steht 15758).
5. Fünf Booking-Fotos des Ferienhauses zeigen digital eingerichtete Räume (Schlafzimmer, Wohnzimmer, Flur, Dachzimmer, Dachterrasse). Sind die Räume tatsächlich so möbliert? Falls nicht: Gibt es echte Innenfotos?
6. Dürfen Gäste der Villa am Krüpelsee Pool, Saunahaus, Stege, Boote/SUP nutzen? Dürfen Gäste des Gästehauses den Steg nutzen (die Booking-Bewertung erwähnt „private dock and lake access")?
7. Welche der vorhandenen Innenfotos der Villa gehören zur Maisonette, welche zum Apartment? (Liste anbei.) Gibt es weitere Fotos?
8. Dürfen wir die Booking-Bewertung des Gästehauses (10/10, August 2026) sinngemäß auf Deutsch zitieren („Gast aus Tschechien")?
9. Telefonnummer für die Website: +49 163 5088945 oder +49 172 8588588? E-Mail für Anfragen: kontakt@seehaus-berlin.de oder eine eigene Adresse?
10. Soll das Seehaus-Berlin-Logo im Footer erscheinen? Soll ein „Direktbucher-Vorteil" kommuniziert werden?

Vielen Dank – bis die Angaben vorliegen, stehen alle Seiten mit „Preise & Verfügbarkeit auf Anfrage" online. Das Ferienhaus in Kablow ist mit den Booking-Angaben online; die Punkte 4 und 5 ergänzen wir nach Ihrer Antwort.
```

Nach den Antworten sind jeweils gemeinsam zu ändern: Text der Unterkunftsseite, Faktenleiste, Vergleichstabelle (`unterkuenfte-vergleich`), Unterkunftskarten (`unterkuenfte-karten`), FAQ, JSON-LD, `llms.txt`, Wissensdatenbank.

---

## 5. Ihre nächsten Schritte

1. **Google Search Console** verbinden: im Admin unter Einstellungen → Suchsichtbarkeit die Domain bestätigen (DNS-Eintrag oder HTML-Tag), danach die Sitemap `https://ferienwohnung-see-brandenburg.de/sitemap.xml` einreichen. Erst dann sind Impressionen, Klicks und Indexierung messbar; bis dahin sind diese Werte unbekannt, nicht null.
2. **Bing Webmaster Tools**: Import aus der Search Console (ein Klick), Sitemap einreichen. IndexNow ist bereits aktiv.
3. **Booking-Daten und Preise** liefern (Fragen 1–3), **Fotos** freigeben (Fragen 5, 7). Die stärkste einzelne Verbesserung wäre ein professionelles Innen-Shooting der vier Wohnungen.
4. **Anwaltliche Prüfung** von Datenschutzerklärung und AGB/Mietbedingungen; danach Werte eintragen und das Stand-Datum aktualisieren. Entscheidung zur KI-Kennzeichnung und zum Streitbeilegungssatz im Impressum.
5. **Einträge**: Google Business Profile je Haus (nur wenn Gäste persönlich empfangen werden), Bing Places, Tourismusverband Dahme-Seenland, reiseland-brandenburg.de; Link „Ferien am See" in der Fußzeile von seehaus-berlin.de.
6. **Zweite Domain** ferienwohnung-am-see.info: Empfehlung 301-Weiterleitung auf die Hauptdomain.
7. **Posteingang** der Plattform regelmäßig prüfen; die zwei Testanfragen als gelesen markieren.

---

## 6. Plan für Phase 2 und 3

* **Phase 2 (nach Ihren Antworten):** Preistabellen mit Stand-Datum je Unterkunft, Check-in/-out und Hausregeln der Zernsdorfer Wohnungen, freigegebene Innenfotos in die Galerien, Gästestimmen mit Datum, ggf. „Direktbucher-Vorteil".
* **Phase 3 (Magazin, Phase 10 des Prompts):** vier bis sechs Artikel mit je einem eigenen Thema (Badestellen am Krüpelsee, Radrunde Dahme-Seenland, Winter am See, Tropical Islands mit Kindern, Angeln im Dahme-Seenland, Herbst im Spreewald), jeweils mit Verweis auf die passende Unterkunfts- oder Regionsseite.
* **Phase 4 (Englisch, Phase 11 des Prompts):** `create_page_translation` für die 16 indexierbaren Seiten mit hreflang, englische Navigation und `llms.txt`, erst nach Freigabe.
* Optional später: Channel-Manager-Widget für Live-Verfügbarkeit (nach Datenschutzprüfung), Analyse-Tool mit Einwilligung, Bewertungs-Schema erst ab mehreren Bewertungen.

---

## 7. Technische Hinweise für die Pflege

* **Seiten bearbeiten:** kleine Änderungen mit `edit_page_content` (exakter Textausschnitt aus `get_page_section`), nie Navigation oder Fußzeile in den Seiten-HTML aufnehmen.
* **Zahlen ändern:** immer an allen Stellen zugleich (siehe Abschnitt 4, letzter Absatz).
* **Bilder:** nur URLs aus der Mediathek; jede Datei mit `alt`, `width`, `height`; Hero eager, alles andere lazy; Bilder nie in Links einwickeln (die Plattform hängt die Lightbox selbst an). Für neue große Fotos am besten wieder 800/1200-px-Varianten hochladen und per `picture` einbinden (Muster in `blocks/unterkuenfte-karten.html`).
* **Blöcke:** Parameterwerte ohne Kommas (oder in Anführungszeichen), sonst wird der Wert am Komma abgeschnitten.
* **Formulare:** das Muster in `/kontakt` (id `contact-form`, Checkbox `privacy_consent` vor der Schaltfläche, ohne `action`/`method`) unverändert übernehmen; Klasse `convert` auf allen Handlungsaufrufen.
* **Quellen im Repository:** `pages/` (gerenderte Seiten, Stand der Übergabe), `blocks/`, `nav/`, `config/`, `seo/` (sitemap, robots, llms), `media/` (Manifest, Bildzuordnung, Mediathek), `qa/` (Prüfskripte und Screenshots), `notes/` (diese Übergabe, QA-Bericht, Wissensdatenbank, SEO-Plan, Plattformstatus), `docs/` (Master-Prompt v1.2).
