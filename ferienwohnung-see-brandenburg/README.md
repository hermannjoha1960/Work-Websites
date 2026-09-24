# ferienwohnung-see-brandenburg.de — pachet de lucru pentru agentul AI

**Ce este acest folder.** Promptul-master complet (`MASTER-PROMPT.md`, în engleză, cu tot textul de site în germană) pe baza căruia un agent AI (Claude cu conectorul MCP Timbaly `Ferienwohung_brandenburg`) construiește de la zero site-ul de închirieri de vacanță pentru cele trei case de pe lacurile din Königs Wusterhausen. Documentul e auto-suficient: conține datele verificate, inventarul de imagini cu URL-uri, specificația fiecărei pagini, planul SEO/GEO, runbook-ul cu apelurile de tool în ordine, checklist-ul de acceptanță și lista de întrebări pentru proprietar.

**Cum îl folosești.**
1. Deschizi o sesiune cu agentul (Claude Code / Claude Desktop / Cowork) în care conectorul `Ferienwohung_brandenburg` este activ; ideal și conectorii site-urilor-satelit (`Seehaus-Berlin`, `Karlmarx_VierstegeHaus`, `seestrase_GaleriehausamSee`, `Fontanne_26A`) în modul citire.
2. Lipești `MASTER-PROMPT.md` integral (sau îl atașezi) și scrii: *„Execute this master prompt. Work phase by phase, verify every phase before moving on, and stop only for the questions in §12 that block you."*
3. Trimiți proprietarei (Marita Briese) lista de întrebări din §12 (este gata redactată în germană); agentul lucrează între timp la tot ce nu depinde de răspunsuri.

**Ce am verificat (24.09.2026).**
- Site-ul țintă este complet gol (0 pagini, 0 imagini, fără nav/footer, fără e-mail de contact, profil legal 0 %).
- Toate datele despre case, dotări, suprafețe, adrese, contact, firmă (Ausblicke Management GmbH, HRB 115701 B, USt-IdNr. DE262426225) provin din baza de cunoștințe și paginile site-urilor seehaus-berlin.de, vierstegehaus.de, galeriehausamsee.de, hausamseebiotop.de.
- Cele 4 linkuri Booking rezolvate: `traum-maisonette-direkt-am-see` (Maisonette, Villa am Krüpelsee, Zernsdorf), `leben-direkt-am-see` (Apartment, aceeași vilă), `gastehaus-am-grossen-zug-see` (Gästehaus, Seestraße 41, Niederlehme), `ferienhaus-am-see-in-der-natur` (cel mai probabil Haus am Biotop, Fontanestraße 26 A, Kablow — de confirmat).
- Circa 100 de fotografii reale (exterior + interior) sunt descărcabile public de pe domeniile-satelit (HTTP 200, testat); URL-urile, dimensiunile și textele alt propuse sunt în Anexa B. Există și un clip MP4 (magic hour) pentru hero-video.
- Fapte despre regiune (distanțe, S46, BER, Tropical Islands, Spreewald, Schloss, Funkerberg, Strandbad Neue Mühle etc.) cu surse, toate ca valori „ca.", în Anexa C.

**Ce NU s-a putut obține și de ce.**
- Conținutul anunțurilor Booking.com (descriere, dotări, reguli, prețuri, recenzii, pozele din anunț): Booking blochează orice acces automat (pagină de challenge anti-bot, cod 202/403) — încercat cu Chromium headless, curl și fetcher-ul web. Promptul instruiește agentul să ceară proprietarei un export din extranet și, până atunci, să publice cu „Preise & Verfügbarkeit auf Anfrage". Nicio valoare nu este inventată.
- Repartizarea pozelor de interior ale vilei pe Maisonette vs. Apartment, numărul de paturi, persoane maxime, check-in/out, animale, prețuri: necunoscute → marcate `[TO CONFIRM]` (circa 30 de locuri în document) și tratate ca „auf Anfrage".

**Decizii implicite luate (le poți schimba în §4/§7 înainte de a rula).**
- Nume afișat: „Ferienhaus am See Brandenburg", wordmark „FERIEN AM SEE", co-branding „Ein Angebot von Seehaus Berlin".
- Design: paletă „amurg pe lac" (night/lake/sand/gold), fonturi Cormorant Garamond + Inter (self-hosted de platformă), hero full-screen cu video/Ken-Burns, reveal la scroll, bară de rezervare sticky, galerii masonry, hartă OSM fără cookie-uri; mobile-first, `prefers-reduced-motion` respectat.
- Arhitectură: 19 pagini în faza 1 (home, overview, 4 unități, pagina vilei, buchen, 5 pagini de regiune, gastgeber, FAQ, kontakt, 3 legale), 12 articole de magazin în faza 2 (un articol/săptămână), engleză în faza 3.
- CTA principal: cerere directă (formular cu date, persoane, unitate) — Booking rămâne canal secundar cu linkuri „Auf Booking.com ansehen".
- Fără Google Analytics/Ads în faza 1 (analytics-ul platformei + Search Console); banner cookie activ, categorie analytics.
- Site-ul nu menționează nicăieri vânzarea caselor (public diferit).

**Următorii pași după livrarea site-ului (task-uri ale proprietarului, §11).** Conectare Google Search Console, export Booking + poze originale, confirmarea unității U4 și a accesului oaspeților la piscină/saună/pontoane, tarife și reguli, verificare juridică Datenschutz/AGB, Google Business Profile + listări la Tourismusverband Dahme-Seenland, decizie pentru domeniul secundar ferienwohnung-am-see.info (recomandare: redirect 301).

**Structura documentului MASTER-PROMPT.md.** §0 misiune și reguli absolute · §1 surse și ce e verificat · §2 fapte (firmă, case, unități) · §3 poziționare și voce · §4 brand & design system (culori, fonturi, componente, animații, head/footer scripts, formular, nav/footer) · §5 arhitectură și specificație pagină cu pagină · §6 plan SEO + local + GEO (keyword map, JSON-LD, llms.txt, calendar editorial, coexistență cu Booking, măsurare) · §7 setări platformă și variabile · §8 plan media · §9 runbook tool-cu-tool în 11 faze · §10 checklist acceptanță · §11 task-uri proprietar · §12 șablon de întrebări (germană) · Anexe A–E (date unități JSON, inventar imagini, fapte regiune, texte pentru knowledge base / AI instructions / llms.txt / robots.txt, SVG logo, schelet nav+footer).
