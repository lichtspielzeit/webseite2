# Netlify-Deployment: Komplette Anleitung

Diese Anleitung führt Sie Schritt für Schritt durch das Deployment Ihrer Lichtspielzeit-Webseite auf Netlify mit der Domain lichtspielzeit.de.

## 🎯 Übersicht

Nach dieser Anleitung haben Sie:
- ✅ Eine live Webseite unter lichtspielzeit.de
- ✅ Automatisches Deployment bei Code-Änderungen
- ✅ SSL-Zertifikat (HTTPS)
- ✅ Funktionsfähige Mailchimp-Integration
- ✅ Optimierte Performance und SEO

## 📋 Voraussetzungen

- GitHub-Account
- Netlify-Account (kostenlos)
- Domain lichtspielzeit.de (bereits registriert)
- Mailchimp-Account mit API-Key und List-ID

## 🚀 Schritt 1: GitHub Repository erstellen

### 1.1 Repository initialisieren
```bash
# Im Projektverzeichnis
cd lichtspielzeit-website

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Lichtspielzeit website ready for deployment"

# Main Branch setzen
git branch -M main
```

### 1.2 GitHub Repository erstellen
1. Gehen Sie zu [github.com](https://github.com)
2. Klicken Sie auf das **"+"** Symbol > **"New repository"**
3. Repository-Name: `lichtspielzeit-website`
4. Beschreibung: `Professional website for Lichtspielzeit - mindfulness for families`
5. Wählen Sie **"Public"** (für kostenloses Netlify-Hosting)
6. **Nicht** "Initialize with README" ankreuzen
7. Klicken Sie auf **"Create repository"**

### 1.3 Lokales Repository mit GitHub verbinden
```bash
# Remote Repository hinzufügen (ersetzen Sie IHR-USERNAME)
git remote add origin https://github.com/IHR-USERNAME/lichtspielzeit-website.git

# Code zu GitHub pushen
git push -u origin main
```

## 🌐 Schritt 2: Netlify-Account einrichten

### 2.1 Account erstellen
1. Gehen Sie zu [netlify.com](https://netlify.com)
2. Klicken Sie auf **"Sign up"**
3. Wählen Sie **"GitHub"** für die Anmeldung
4. Autorisieren Sie Netlify für Ihren GitHub-Account

### 2.2 Site aus GitHub-Repository erstellen
1. Klicken Sie auf **"New site from Git"**
2. Wählen Sie **"GitHub"**
3. Suchen Sie nach `lichtspielzeit-website`
4. Klicken Sie auf das Repository

### 2.3 Build-Einstellungen konfigurieren
```
Branch to deploy: main
Build command: npm run build
Publish directory: dist
```

5. Klicken Sie auf **"Deploy site"**

### 2.4 Erste Deployment abwarten
- Das erste Deployment dauert 2-5 Minuten
- Sie erhalten eine temporäre URL wie `https://amazing-name-123456.netlify.app`
- Testen Sie diese URL, um sicherzustellen, dass alles funktioniert

## 🔧 Schritt 3: Umgebungsvariablen konfigurieren

### 3.1 Mailchimp-Variablen hinzufügen
1. Gehen Sie zu **Site settings** > **Environment variables**
2. Klicken Sie auf **"Add variable"**
3. Fügen Sie folgende Variablen hinzu:

```
Name: MAILCHIMP_API_KEY
Value: [Ihr Mailchimp API-Key]

Name: MAILCHIMP_LIST_ID  
Value: [Ihre Mailchimp Audience-ID]

Name: MAILCHIMP_SERVER_PREFIX
Value: [Ihr Server-Prefix, z.B. us1]
```

### 3.2 Deployment neu auslösen
1. Gehen Sie zu **Deploys**
2. Klicken Sie auf **"Trigger deploy"** > **"Deploy site"**
3. Warten Sie, bis das neue Deployment abgeschlossen ist

## 🌍 Schritt 4: Custom Domain konfigurieren

### 4.1 Domain zu Netlify hinzufügen
1. Gehen Sie zu **Site settings** > **Domain management**
2. Klicken Sie auf **"Add custom domain"**
3. Geben Sie `lichtspielzeit.de` ein
4. Klicken Sie auf **"Verify"**
5. Bestätigen Sie mit **"Yes, add domain"**

### 4.2 DNS-Einstellungen bei Ihrem Domain-Provider

**Option A: Netlify DNS (Empfohlen)**
1. Klicken Sie auf **"Set up Netlify DNS"**
2. Notieren Sie sich die 4 Nameserver (z.B.):
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
3. Gehen Sie zu Ihrem Domain-Provider (z.B. Strato, 1&1, GoDaddy)
4. Ändern Sie die Nameserver auf die Netlify-Nameserver
5. **Wichtig:** DNS-Änderungen können 24-48 Stunden dauern

**Option B: A-Record (Alternative)**
Falls Sie die Nameserver nicht ändern können:
1. Erstellen Sie einen A-Record:
   ```
   Type: A
   Name: @ (oder leer)
   Value: 75.2.60.5
   ```
2. Erstellen Sie einen CNAME-Record:
   ```
   Type: CNAME
   Name: www
   Value: lichtspielzeit.de
   ```

### 4.3 SSL-Zertifikat aktivieren
1. Nach erfolgreicher DNS-Konfiguration
2. Gehen Sie zu **Site settings** > **Domain management**
3. Klicken Sie auf **"Verify DNS configuration"**
4. Das SSL-Zertifikat wird automatisch erstellt (kann 1-2 Stunden dauern)
5. Aktivieren Sie **"Force HTTPS"**

## ⚡ Schritt 5: Performance-Optimierung

### 5.1 Build-Optimierungen
1. Gehen Sie zu **Site settings** > **Build & deploy**
2. Unter **Environment variables** fügen Sie hinzu:
   ```
   NODE_VERSION = 18
   NPM_FLAGS = --production
   ```

### 5.2 Caching-Headers überprüfen
Die `netlify.toml` Datei enthält bereits optimierte Caching-Einstellungen:
```toml
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

### 5.3 Performance testen
1. Öffnen Sie [PageSpeed Insights](https://pagespeed.web.dev/)
2. Testen Sie `https://lichtspielzeit.de`
3. Ziel-Scores:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

## 🔍 Schritt 6: SEO und Analytics

### 6.1 Google Search Console einrichten
1. Gehen Sie zu [search.google.com/search-console](https://search.google.com/search-console)
2. Klicken Sie auf **"Add property"**
3. Wählen Sie **"URL prefix"**
4. Geben Sie `https://lichtspielzeit.de` ein
5. Verifizierung über HTML-Tag (bereits in index.html enthalten)

### 6.2 Google Analytics konfigurieren
1. Erstellen Sie eine GA4-Property für lichtspielzeit.de
2. Kopieren Sie die Measurement-ID (G-XXXXXXXXXX)
3. Ersetzen Sie `GA_MEASUREMENT_ID` in der `index.html`
4. Deployen Sie die Änderung

### 6.3 Sitemap einreichen
1. Die Sitemap wird automatisch generiert: `https://lichtspielzeit.de/sitemap.xml`
2. Reichen Sie diese in der Google Search Console ein

## 🧪 Schritt 7: Funktionalitätstests

### 7.1 Newsletter-Anmeldung testen
1. Öffnen Sie `https://lichtspielzeit.de`
2. Scrollen Sie zur E-Book-Sektion
3. Geben Sie eine Test-E-Mail ein
4. Überprüfen Sie in Mailchimp, ob die Anmeldung funktioniert

### 7.2 Mobile Responsiveness
Testen Sie die Website auf verschiedenen Geräten:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Firefox, Safari, Edge)

### 7.3 Cross-Browser-Kompatibilität
- ✅ Chrome (neueste Version)
- ✅ Firefox (neueste Version)
- ✅ Safari (neueste Version)
- ✅ Edge (neueste Version)

## 🔄 Schritt 8: Automatisches Deployment einrichten

### 8.1 Branch-Protection (Optional)
1. Gehen Sie zu GitHub > Settings > Branches
2. Klicken Sie auf **"Add rule"**
3. Branch name pattern: `main`
4. Aktivieren Sie:
   - "Require pull request reviews before merging"
   - "Require status checks to pass before merging"

### 8.2 Deploy-Hooks konfigurieren
1. In Netlify: **Site settings** > **Build & deploy** > **Build hooks**
2. Klicken Sie auf **"Add build hook"**
3. Name: "Manual Deploy"
4. Branch: main
5. Kopieren Sie die Hook-URL für manuelle Deployments

### 8.3 Deploy-Notifications
1. **Site settings** > **Build & deploy** > **Deploy notifications**
2. Fügen Sie E-Mail-Benachrichtigungen hinzu:
   - Deploy started
   - Deploy succeeded
   - Deploy failed

## 📊 Schritt 9: Monitoring und Wartung

### 9.1 Netlify Analytics aktivieren
1. Gehen Sie zu **Analytics** (kostenpflichtig, aber detailliert)
2. Oder nutzen Sie die kostenlosen **Site analytics**
3. Überwachen Sie:
   - Unique visitors
   - Page views
   - Top pages
   - Bandwidth usage

### 9.2 Uptime-Monitoring
Kostenlose Tools:
- [UptimeRobot](https://uptimerobot.com)
- [StatusCake](https://www.statuscake.com)
- [Pingdom](https://www.pingdom.com)

### 9.3 Regelmäßige Updates
**Wöchentlich:**
- Analytics überprüfen
- Newsletter-Performance checken
- Broken Links testen

**Monatlich:**
- Dependencies updaten
- Performance-Tests durchführen
- Content-Updates

## 🛡 Schritt 10: Sicherheit und Backup

### 10.1 Security Headers
Die `netlify.toml` enthält bereits wichtige Security Headers:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### 10.2 Backup-Strategie
- **Code:** Automatisch in GitHub gesichert
- **Mailchimp-Daten:** Regelmäßige Exports
- **Analytics:** Monatliche Reports speichern

### 10.3 Incident Response Plan
1. **Website down:** Netlify Status überprüfen
2. **Newsletter-Probleme:** Mailchimp-Status checken
3. **DNS-Probleme:** Domain-Provider kontaktieren

## 🆘 Troubleshooting

### Häufige Deployment-Probleme

**Problem:** Build fails with "npm install" error
**Lösung:**
```bash
# Lokale node_modules löschen
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push
```

**Problem:** "Function not found" für Mailchimp
**Lösung:**
- Überprüfen Sie `netlify/functions/subscribe.js`
- Stellen Sie sicher, dass `netlify.toml` korrekt ist
- Checken Sie die Umgebungsvariablen

**Problem:** Domain zeigt nicht auf Netlify
**Lösung:**
- DNS-Propagation überprüfen: [whatsmydns.net](https://whatsmydns.net)
- Nameserver beim Domain-Provider kontrollieren
- 24-48 Stunden warten

**Problem:** SSL-Zertifikat wird nicht erstellt
**Lösung:**
- DNS-Konfiguration überprüfen
- "Renew certificate" in Netlify versuchen
- Support kontaktieren falls Problem persistiert

### Performance-Probleme

**Problem:** Langsame Ladezeiten
**Lösung:**
- Bilder komprimieren (< 100KB)
- Unused CSS entfernen
- JavaScript-Bundle analysieren

**Problem:** Schlechte Lighthouse-Scores
**Lösung:**
- Alt-Texte für alle Bilder hinzufügen
- Kontrast-Verhältnisse überprüfen
- Meta-Descriptions optimieren

## 📞 Support-Ressourcen

- **Netlify-Dokumentation:** [docs.netlify.com](https://docs.netlify.com)
- **Netlify-Support:** [support.netlify.com](https://support.netlify.com)
- **GitHub-Hilfe:** [docs.github.com](https://docs.github.com)
- **DNS-Tools:** [mxtoolbox.com](https://mxtoolbox.com)

## ✅ Deployment-Checkliste

### Pre-Deployment
- [ ] Code getestet und funktionsfähig
- [ ] Alle Bilder optimiert
- [ ] Mailchimp-Integration konfiguriert
- [ ] SEO-Meta-Tags vollständig
- [ ] Rechtliche Seiten vorbereitet

### Deployment
- [ ] GitHub Repository erstellt
- [ ] Netlify-Site konfiguriert
- [ ] Umgebungsvariablen gesetzt
- [ ] Custom Domain hinzugefügt
- [ ] SSL-Zertifikat aktiviert

### Post-Deployment
- [ ] Funktionalitätstests durchgeführt
- [ ] Google Analytics eingerichtet
- [ ] Search Console konfiguriert
- [ ] Performance-Tests bestanden
- [ ] Mobile Responsiveness überprüft

---

**Herzlichen Glückwunsch! Ihre Lichtspielzeit-Webseite ist jetzt live unter https://lichtspielzeit.de** 🎉

Bei Fragen oder Problemen können Sie sich jederzeit an den Support wenden oder die bereitgestellten Ressourcen nutzen.

