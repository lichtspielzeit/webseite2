# Lichtspielzeit - Achtsamkeit für Mütter und Kinder

Eine professionelle One-Page-Webseite für Achtsamkeits-Rituale und Produkte für Familien.

## 🚀 Live-Demo

Die Webseite ist live unter: **https://lichtspielzeit.de**

## 📋 Projektübersicht

### Zielgruppe
- Mütter von Kindern im Alter 2-12 Jahre
- Familien, die nach mehr Achtsamkeit im Alltag suchen
- Gestresste Eltern, die bewusste Momente mit ihren Kindern schaffen möchten

### Hauptfunktionen
- **Hero-Sektion** mit emotionaler Ansprache
- **E-Book Download** "10 Rituale für entspannte Mama-Kind-Momente"
- **Newsletter-Anmeldung** mit Mailchimp-Integration
- **Shop-Vorschau** für Achtsamkeits-Produkte
- **Responsive Design** für alle Geräte
- **DSGVO-konformer Cookie-Banner**

## 🛠 Technologie-Stack

- **Frontend:** React 18 + Vite
- **Styling:** CSS3 mit Custom Properties + Tailwind CSS
- **Animationen:** Framer Motion
- **Formulare:** React Hook Form
- **Hosting:** Netlify
- **Newsletter:** Mailchimp API
- **Analytics:** Google Analytics 4

## 📁 Projektstruktur

```
lichtspielzeit-website/
├── public/
│   └── images/                 # Optimierte Bilder
├── src/
│   ├── components/            # React-Komponenten
│   │   ├── Hero.jsx          # Hauptbereich
│   │   ├── Problem.jsx       # Problem-Sektion
│   │   ├── EbookSection.jsx  # E-Book Download
│   │   ├── EmailForm.jsx     # Newsletter-Formular
│   │   ├── Vision.jsx        # Über Lichtspielzeit
│   │   ├── Shop.jsx          # Shop-Vorschau
│   │   ├── Footer.jsx        # Footer
│   │   └── CookieBanner.jsx  # DSGVO Cookie-Banner
│   ├── App.jsx               # Haupt-App
│   ├── App.css               # Globale Styles
│   └── main.jsx              # Entry Point
├── netlify/
│   └── functions/
│       └── subscribe.js      # Mailchimp-Integration
├── netlify.toml              # Netlify-Konfiguration
└── package.json              # Dependencies
```

## 🚀 Deployment auf Netlify

### Automatisches Deployment (Empfohlen)

1. **GitHub Repository erstellen:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Lichtspielzeit website"
   git branch -M main
   git remote add origin https://github.com/IHR-USERNAME/lichtspielzeit-website.git
   git push -u origin main
   ```

2. **Netlify mit GitHub verbinden:**
   - Gehen Sie zu [netlify.com](https://netlify.com)
   - Klicken Sie auf "New site from Git"
   - Wählen Sie GitHub und autorisieren Sie Netlify
   - Wählen Sie das `lichtspielzeit-website` Repository
   - Build-Einstellungen:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Klicken Sie auf "Deploy site"

3. **Custom Domain konfigurieren:**
   - Gehen Sie zu Site Settings > Domain management
   - Klicken Sie auf "Add custom domain"
   - Geben Sie `lichtspielzeit.de` ein
   - Folgen Sie den DNS-Anweisungen Ihres Domain-Providers

### Umgebungsvariablen konfigurieren

In Netlify unter Site Settings > Environment variables:

```
MAILCHIMP_API_KEY=ihr-mailchimp-api-key
MAILCHIMP_LIST_ID=ihre-mailchimp-list-id
MAILCHIMP_SERVER_PREFIX=us1
```

## 📧 Mailchimp-Integration Setup

### 1. Mailchimp-Account vorbereiten

1. **Account erstellen:** [mailchimp.com](https://mailchimp.com)
2. **Audience erstellen:**
   - Gehen Sie zu Audience > All contacts
   - Klicken Sie auf "Create Audience"
   - Name: "Lichtspielzeit Newsletter"
   - Beschreibung: "E-Book Downloads und Newsletter-Abonnenten"

3. **API-Key generieren:**
   - Gehen Sie zu Account > Extras > API keys
   - Klicken Sie auf "Create A Key"
   - Kopieren Sie den API-Key

4. **List-ID finden:**
   - Gehen Sie zu Audience > All contacts
   - Klicken Sie auf Settings > Audience name and defaults
   - Kopieren Sie die "Audience ID"

### 2. Automatische E-Book-Zustellung einrichten

1. **Welcome E-Mail erstellen:**
   - Gehen Sie zu Automations > Welcome new subscribers
   - Erstellen Sie eine neue Automation
   - Trigger: "Subscriber joins audience"
   - E-Mail-Inhalt:
     - Betreff: "Deine 10 Rituale für entspannte Mama-Kind-Momente"
     - Anhang: E-Book PDF
     - Text: Willkommensnachricht

2. **Tags konfigurieren:**
   - Die Netlify Function fügt automatisch Tags hinzu:
     - "Lichtspielzeit"
     - "E-Book-Download"

## 🎨 Design-Anpassungen

### Farbpalette
```css
:root {
  --sage: #8B9A8B;      /* Beruhigendes Salbeigrün */
  --rose: #E8C5A0;      /* Warmes Roségold */
  --honey: #D4A574;     /* Honiggelb für CTAs */
  --anthracite: #2C3E2D; /* Dunkles Grün für Text */
  --cream: #FEFCF8;     /* Cremeweiß für Hintergründe */
  --white: #FFFFFF;     /* Reines Weiß */
}
```

### Typografie
- **Überschriften:** Playfair Display (Serif)
- **Fließtext:** Inter (Sans-Serif)
- **Responsive Größen:** Automatische Anpassung

### Bilder austauschen
Neue Bilder in `public/images/` ablegen und in den Komponenten referenzieren:
- `hintergrund_sonnenuntergang_see.jpeg` - Hero-Hintergrund
- `kinder_spielen_strand.jpg` - Problem-Sektion
- `kinder_spielen_wald.jpg` - Vision-Sektion
- `kinder_haende_ton.jpg` - Shop-Produkt 1
- `kinder_haende_teig.jpg` - Shop-Produkt 2

## 📊 Analytics & Tracking

### Google Analytics 4 Setup

1. **GA4-Property erstellen:**
   - Gehen Sie zu [analytics.google.com](https://analytics.google.com)
   - Erstellen Sie eine neue Property für "lichtspielzeit.de"
   - Kopieren Sie die Measurement ID (G-XXXXXXXXXX)

2. **Tracking-Code einbinden:**
   - Ersetzen Sie `GA_MEASUREMENT_ID` in `index.html`
   - Der Cookie-Banner aktiviert Analytics automatisch bei Zustimmung

### Wichtige Events
- `email_signup` - Newsletter-Anmeldung
- `page_view` - Seitenaufrufe
- `scroll` - Scroll-Verhalten

## 🔧 Lokale Entwicklung

### Voraussetzungen
- Node.js 18+
- npm oder yarn

### Installation
```bash
git clone https://github.com/IHR-USERNAME/lichtspielzeit-website.git
cd lichtspielzeit-website
npm install
```

### Development Server starten
```bash
npm run dev
```
Öffnen Sie http://localhost:5173

### Production Build testen
```bash
npm run build
npm run preview
```

## 🛡 Rechtliche Compliance

### DSGVO-Konformität
- ✅ Cookie-Banner mit Opt-in/Opt-out
- ✅ Datenschutzerklärung verlinkt
- ✅ Impressum vorhanden
- ✅ Double-Opt-In für Newsletter (Mailchimp)

### Erforderliche Seiten
Erstellen Sie diese Seiten separat oder als Unterseiten:
- `/impressum` - Vollständiges Impressum
- `/datenschutz` - DSGVO-konforme Datenschutzerklärung
- `/agb` - Allgemeine Geschäftsbedingungen

## 📈 Performance-Optimierung

### Bereits implementiert
- ✅ Bildoptimierung (WebP, Lazy Loading)
- ✅ CSS-Minifizierung
- ✅ JavaScript-Bundling
- ✅ Gzip-Kompression
- ✅ CDN über Netlify

### Lighthouse-Score Ziele
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 🔄 Wartung & Updates

### Regelmäßige Aufgaben
- **Wöchentlich:** Analytics überprüfen, Newsletter-Performance
- **Monatlich:** Content-Updates, A/B-Tests
- **Quartalsweise:** Dependency-Updates, Security-Patches

### Content-Updates
Texte können direkt in den React-Komponenten angepasst werden:
- `src/components/Hero.jsx` - Hauptüberschrift
- `src/components/EbookSection.jsx` - E-Book-Beschreibung
- `src/components/Vision.jsx` - Über-Text

## 🆘 Troubleshooting

### Häufige Probleme

**Newsletter-Anmeldung funktioniert nicht:**
- Überprüfen Sie die Mailchimp-Umgebungsvariablen
- Testen Sie die API-Verbindung in den Netlify Functions

**Bilder laden nicht:**
- Stellen Sie sicher, dass Bilder in `public/images/` liegen
- Überprüfen Sie die Dateipfade in den Komponenten

**Build-Fehler:**
- Löschen Sie `node_modules` und führen Sie `npm install` aus
- Überprüfen Sie die Node.js-Version (18+)

### Support-Kontakte
- **Netlify-Support:** [docs.netlify.com](https://docs.netlify.com)
- **Mailchimp-Support:** [mailchimp.com/help](https://mailchimp.com/help)
- **React-Dokumentation:** [react.dev](https://react.dev)

## 📞 Kontakt

Bei Fragen zur Webseite oder technischen Problemen:
- **E-Mail:** info@lichtspielzeit.de
- **Website:** https://lichtspielzeit.de

---

**Diese Webseite wurde mit ❤️ für bewusste Familien erstellt.**

