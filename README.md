# Garage Rolli - Redesign (Racing Theme)

Dies ist das moderne Redesign für die Webseite von **Garage Rolli**. Das Design fokussiert sich auf das Thema "Racing": Schnell, präzise und professionell, mit einem Hauch von Nostalgie und modernster Technik.

## 🚀 Wie man die Webseite anschaut

Da es sich um eine moderne Web-App handelt, müssen die Dateien "gebaut" oder über einen lokalen Server gestartet werden.

### 1. Entwicklungsserver starten (Empfohlen zum Anschauen)
Um die Webseite interaktiv mit allen Animationen zu sehen:

```bash
# 1. Abhängigkeiten installieren (nur beim ersten Mal)
npm install

# 2. Server starten
npm run dev
```
Nach dem Start wird eine URL wie `http://localhost:5173` angezeigt. Öffnen Sie diese im Browser.

### 2. Produktions-Dateien erstellen (Der "dist" Ordner)
Der `dist` Ordner enthält die fertige Webseite für den Webserver. Dieser Ordner wird aus Sicherheitsgründen und für eine saubere Code-Basis nicht im Repository gespeichert, kann aber jederzeit lokal erstellt werden:

```bash
npm run build
```
Nach diesem Befehl erscheint der `dist` Ordner in Ihrem Projektverzeichnis.

## 🛠 Technologien
- **React 19** & **Vite**
- **Tailwind CSS v4** (Styling)
- **Framer Motion** (Animationen)
- **Lucide React** (Icons)

## 🏁 Design-Konzept
- **Farben:** High-Contrast Schwarz & Weiss.
- **Typografie:** "Barlow Condensed" für einen sportlichen, technischen Look.
- **Inhalt:** Fokus auf Tradition (seit 1976) kombiniert mit moderner Diagnose-Technik.
