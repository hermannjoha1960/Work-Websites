# ferienwohnung-see-brandenburg.de – Projektarchiv

Website „Ferien am See" für vier Ferienunterkünfte in drei Seehäusern in Königs Wusterhausen (Brandenburg), betrieben auf der Timbaly-Plattform (Site-ID 51). Dieses Verzeichnis ist das Archiv des Launch-Stands vom 24. September 2026; die Website selbst wird über den MCP-Connector `Ferienwohung_brandenburg` bzw. den Timbaly-Admin gepflegt.

## Ordner

| Ordner | Inhalt |
|---|---|
| `docs/` | Master-Prompt v1.2 (Auftrag und Regeln) |
| `notes/` | `UEBERGABE.md` (Übergabe an die Eigentümerin, Fragenliste, nächste Schritte), `QA-BERICHT.md` (Ergebnisse der Qualitätsprüfung), `knowledge-base.md` (Wissensdatenbank der Plattform), `seo-plan.md`, `platform-status.md` |
| `pages/` | Gerenderte HTML-Seiten aller 19 Seiten zum Zeitpunkt der Übergabe (Referenz, nicht Quelle; das von der Plattform eingefügte `creator`-Objekt in den strukturierten Daten und der Meta-Tag `ai-generated-by` wurden aus den Kopien entfernt) |
| `blocks/` | Quellen der wiederverwendbaren Blöcke (`[[BLOCK:name]]`) |
| `nav/` | Navigation und Fußzeile (Sprache `de` = live; Standardversion = Plattform-Fallback) |
| `config/` | Head-Tags (Tailwind-Konfiguration, Stile), Fußzeilen-Script, KI-Anweisungen, Site-Variablen, Weiterleitungen |
| `seo/` | `sitemap.xml`, `robots.txt`, `llms.txt` (Stand der Übergabe) |
| `media/` | Bildmanifest, Bildzuordnung, Favicon, Mediathek-Liste |
| `qa/` | Prüfskripte (Playwright) und Screenshots |

## Regeln, die beim Weiterarbeiten gelten

* Keine erfundenen Fakten: Unbekanntes steht als „auf Anfrage", Entfernungen mit „ca.".
* Nur echte Fotos aus der Mediathek, nie Stock- oder KI-Bilder; virtuell eingerichtete Fotos nur nach Freigabe.
* Sie-Form, deutsch; keine Wörter aus dem Verkaufskontext im sichtbaren Text.
* Zahlen an allen Stellen gleichzeitig ändern (Seite, Blöcke, FAQ, JSON-LD, `llms.txt`, Wissensdatenbank).
* Seiten-HTML ohne Navigation, Kopf- oder Fußzeile; Formulare nach dem Muster in `/kontakt`.
