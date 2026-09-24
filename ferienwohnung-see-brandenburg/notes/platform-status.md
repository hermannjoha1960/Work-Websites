# Platform status

Site id 51, ferienwohnung-see-brandenburg.de. Snapshot of the read-only platform status tools, taken 2026-09-24.

## get_search_visibility_status

```json
{
  "domain": "ferienwohnung-see-brandenburg.de",
  "servedWithNoindex": false,
  "declaredByUs": {
    "sitemap": "https://ferienwohnung-see-brandenburg.de/sitemap.xml",
    "robots": "https://ferienwohnung-see-brandenburg.de/robots.txt",
    "llmsTxt": "https://ferienwohnung-see-brandenburg.de/llms.txt"
  },
  "instantSubmission": {
    "enabled": true
  },
  "google": {
    "available": true,
    "connected": false,
    "propertyAdopted": false
  },
  "bing": {
    "connected": false
  },
  "indexing": {
    "measured": false,
    "note": "Search Console non è collegata (o non è verificata), quindi NON si sa quali pagine il motore abbia indicizzato. Non dedurne che non lo siano."
  },
  "searches": {
    "measured": false,
    "note": "Search Console non collegata: non si sa per quali parole il sito compare. Google NON mette la parola cercata nel referrer, quindi non c'è nessun altro modo."
  },
  "speed": {
    "measured": false,
    "note": "La misurazione della velocità non è attiva su questa installazione (manca la chiave di PageSpeed Insights). Non è una scelta del proprietario del sito."
  },
  "nextSteps": [
    "Search Console non è collegata: è il collegamento che sblocca indicizzazione e parole cercate. Lo fa il PROPRIETARIO con il proprio account Google, da /admin/settings/search-visibility — un agente non può farlo al posto suo."
  ]
}
```

## get_legal_status

```json
{
  "completenessPercent": 100,
  "isComplete": true,
  "missing": [],
  "filled": {
    "ragione_sociale": "Ausblicke Management GmbH",
    "tipo_soggetto": "company",
    "indirizzo": "Kuno-Fischer-Str. 14, 14057 Berlin, Deutschland",
    "email": "kontakt@seehaus-berlin.de",
    "partita_iva": "DE262426225",
    "telefono": "+49 163 5088945"
  },
  "pagesExist": false,
  "privacyUrl": "/privacy-policy",
  "cookieUrl": "/cookie-policy",
  "note": "Le due pagine legali non esistono su questo sito: si creano confermando la struttura in /admin/build, che le collega anche nel piè di pagina."
}
```

## get_site_settings

```json
{
  "identity": {
    "name": "Ferienhaus am See Brandenburg",
    "domain": "ferienwohnung-see-brandenburg.de",
    "plan": "pro",
    "contactEmail": "kontakt@seehaus-berlin.de",
    "defaultLanguage": "de",
    "availableLanguages": "[\"de\"]",
    "logoUrl": "/uploads/site-51/brand/logo-512.png",
    "faviconUrl": "/uploads/site-51/brand/favicon.svg",
    "hasCustomCss": false
  },
  "cookieConsent": {
    "enableCookieConsent": true,
    "cookieEnableAnalytics": true,
    "cookieEnableMarketing": false,
    "cookieBannerTitle": "Datenschutz-Einstellungen",
    "cookieBannerDescription": "Wir setzen technisch notwendige Cookies, damit diese Website funktioniert. Für die Reichweitenmessung benötigen wir Ihre Einwilligung – ohne sie wird nichts geladen. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen\" im Seitenfuß ändern oder widerrufen.",
    "cookiePrivacyPolicyUrl": "/datenschutz",
    "cookieBannerPosition": "bottom-bar"
  },
  "aiDisclosure": {
    "enableAiDisclosure": false,
    "aiDisclosureText": "(non configurato)",
    "aiDisclosurePosition": "(non configurato)",
    "note": "Trasparenza EU AI Act art. 50. Le pagine di questo sito sono marcate come generate dall'AI."
  },
  "searchEngines": {
    "indexNowEnabled": true,
    "hasRobotsTxt": true,
    "hasLlmsTxt": true
  },
  "aiConfiguration": {
    "preferredAiProvider": "openrouter",
    "defaultAiModel": "(non configurato)",
    "hasOwnOpenRouterKey": false,
    "hasOwnGeminiKey": false
  }
}
```
