# Ear We Go!

Englisch-Hörverstehen üben: Text anhören, Fragen beantworten, Sterne sammeln.
Gedacht für die 2. Bezirksschule (Kanton Aargau), also für Lernende zwischen 14 und 16 Jahren.

Online: <https://idev.ch/ear_we_go/>

## Was die App kann

- 45 vertonte Texte in drei Modulen mit je 15 Sessions:
  - Easy Listening (A2)
  - Turn It Up (A2+)
  - Full Volume (B1)
- Natürlich klingende britische Stimmen, in Dialogen mit verteilten Rollen
- Pro Session 7 bis 8 Fragen: Multiple Choice, True/False und Lückentext
- Player mit drei Geschwindigkeiten, «einen Satz zurück» und Sprung per Wellenform
- Key Words mit Übersetzung und Aussprache
- Nach dem Prüfen: Erklärung zu jeder Antwort und Transkript zum Mitlesen
- Fortschritt und Sterne bleiben im Browser gespeichert (localStorage), ohne Login
- Fürs Handy gebaut, läuft auch auf dem Desktop

## Technik

Reines HTML, CSS und JavaScript ohne Framework und ohne npm-Pakete.
Es gibt kein Backend: Die App besteht nur aus statischen Dateien.

| Pfad | Inhalt |
| --- | --- |
| `index.html`, `style.css`, `app.js` | Die App |
| `stories/` | Texte, Vokabeln und Fragen pro Modul |
| `audio/` | Fertige MP3s und `timings.js` mit den Satz-Zeitmarken |
| `tools/` | Node-Skripte für Audio, Prüfung und Build |

## Lokal starten

```sh
python3 -m http.server 8080
```

Danach <http://localhost:8080/> öffnen. Ein Build ist dafür nicht nötig.

## Deployment

```sh
node tools/build-dist.mjs
```

Das Skript erzeugt den Ordner `dist/` mit gebündeltem JavaScript, versionierten URLs
und einer `.htaccess`, die MP3, JS und CSS lange cachen lässt.
Den Inhalt von `dist/` auf einen beliebigen statischen Webserver kopieren,
die versteckte `.htaccess` eingeschlossen.

## Inhalte ändern oder ergänzen

Das Format der Sessions ist oben in `stories/base.js` beschrieben.

1. Session in `stories/m1.js`, `m2.js` oder `m3.js` anpassen oder hinzufügen.
2. Inhalt prüfen:
   ```sh
   node tools/validate.mjs
   ```
3. Audio erzeugen:
   ```sh
   node tools/generate-audio.mjs --only <session-id>
   ```
   Ohne `--only` werden alle Sessions verarbeitet. Bereits erzeugte Sätze kommen
   aus dem Cache in `.audio-cache/`.

Die Vertonung läuft über [Azure AI Speech](https://learn.microsoft.com/azure/ai-services/speech-service/)
und braucht Node.js ab Version 18 sowie eine Datei `.env` im Projektordner:

```
AZURE_SPEECH_KEY=...
AZURE_SPEECH_REGION=eastus
```

Die `.env` ist von Git ausgeschlossen und gehört weder ins Repository noch auf den Webserver.
Wer nur die App nutzen oder hosten will, braucht keinen Azure-Zugang: Die MP3s liegen fertig im Repository.

## Lizenz

[MIT](LICENSE)
