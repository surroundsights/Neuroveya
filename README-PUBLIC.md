# NeuroVeya – Public GitHub Pages Frontend

Dieser Ordner ist für `https://surroundsights.de/neuroveya/`.

## Darf öffentlich sein
- index.html
- styles.css
- app.js
- backend-config.js
- datenschutz.html

## Darf NICHT hier hinein
- Questions.html
- Questions.js / questions.json
- Catalog.gs
- vollständige Fragenlisten
- Gewichte / Richtungen / Scoring-Achsen
- PayPal Client Secret
- private Lizenzschlüssel
- Patientendaten oder Testantworten

## Backend verbinden
Nach Deployment von `NeuroVeya-GAS-v8-Private-Catalog.zip`:
1. Apps-Script `/exec`-URL kopieren.
2. `backend-config.js` öffnen.
3. `url: ""` durch die `/exec`-URL ersetzen.
4. Committen.

Die Seite öffnet anschließend die private GAS-Test-App und übergibt optional `?start=adhd`, `audhd`, `deep`, `depression`, `ptsd` oder `trauma`.
