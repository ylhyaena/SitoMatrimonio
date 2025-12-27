# Sito Matrimonio One-Page

Sito informativo per matrimonio civile autentico — informale, accogliente, ironico.

## Caratteristiche

- **One-page responsive**: scroll verticale, mobile-first
- **Design caldo e accogliente**: colori naturali (verde + terra)
- **Sezioni principali**:
  - Hero (benvenuto)
  - Il matrimonio
  - Location (con Google Maps)
  - Programma della giornata
  - Come arrivare
  - RSVP (con Google Form)
  - FAQ (accordion)
  - Condivisione foto
- **Senza framework**: HTML + CSS custom + JS leggero
- **Perfetto per GitHub Pages**: statico, no build, zero dipendenze

---

## Struttura

```
/
├── index.html           # Struttura HTML
├── css/
│   └── style.css        # Stili (variabili, mobile-first, animazioni)
├── js/
│   └── main.js          # Menu mobile, FAQ accordion, osservatore fade-in
├── assets/              # Cartella per immagini (futura)
└── README.md            # Questo file
```

---

## Setup locale (preview)

1. **Clona o scarica i file**
2. **Apri `index.html` in un browser** (doppio click o drag-drop)
3. **Modifica i contenuti** secondo le tue esigenze

### Con server locale (opzionale, per test più robusti)

Usa Python:
```bash
python -m http.server 8000
```

Poi apri http://localhost:8000

---

## Personalizzazione

### Colori

Nel file `css/style.css`, cerca `:root` per modificare:
- `--bg-main`: bianco caldo (sfondo principale)
- `--bg-alt`: grigio caldo (sezioni alternate)
- `--accent-primary`: verde naturale (titoli, link, bottoni)
- `--accent-secondary`: terra caldo (hover, dettagli)

### Font

Attualmente usa **DM Sans** da Google Fonts. Puoi cambiarla in `index.html` oppure scegliere un'altra font family.

### Contenuti

- **Nomi coppia**: cerca "Nome Cognome" (appears in header, hero, footer)
- **Data matrimonio**: aggiorna in hero e footer
- **Location**: sostituisci testo e embed Google Maps
- **Programma**: modifica orari e timeline
- **FAQ**: aggiungi/rimuovi domande duplicando un `div.faq-item`

### Google Maps

1. Vai su [Google My Maps](https://www.google.com/maps/d/)
2. Crea una mappa con la location
3. Clicca "Condividi" → copia il codice embed
4. Incolla in `index.html` dentro `<div class="map">`

Esempio:
```html
<div class="map">
  <iframe src="https://www.google.com/maps/embed?..." width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
```

### Google Form

1. Crea un Google Form con i campi che ti servono (nome, presenza, allergie, ecc.)
2. Clicca **"Condividi"** → **"<>"** (Embed)
3. Copia il codice `<iframe>`
4. Incolla in `index.html` dentro `<div class="form-wrapper">`

Esempio:
```html
<div class="form-wrapper">
  <iframe src="https://docs.google.com/forms/d/..." width="100%"></iframe>
</div>
```

---

## Deploy su GitHub Pages

### Metodo rapido (senza GitHub CLI)

1. **Crea un repo su GitHub** (nomina `nome-cognome-matrimonio` o simile)
2. **Upload i file** direttamente sul browser:
   - Clicca "Add file" → "Upload files"
   - Seleziona `index.html`, cartelle `css/`, `js/`, ecc.
3. **Abilita Pages**:
   - Vai su "Settings" → "Pages"
   - Seleziona branch `main` / `master`
   - Salva
4. **Il sito è online** a: `https://tuonome.github.io/nome-repo`

### Metodo git (da terminale)

```bash
# Inizializza repo locale
git init
git add .
git commit -m "Initial commit: wedding website"

# Connetti a GitHub
git remote add origin https://github.com/tuonome/nome-repo.git
git branch -M main
git push -u origin main
```

Poi segui i passi su GitHub Pages (Settings → Pages → main).

---

## Funzionalità JavaScript

- **Menu mobile**: hamburger su schermi < 768px, chiusura automatica al click su link
- **FAQ accordion**: una sola domanda aperta alla volta, smooth transition
- **Fade-in leggero**: sezioni appaiono con transizione dolce all'ingresso nel viewport
- **Smooth scroll**: link interni scorrono fluidi (CSS `scroll-behavior: smooth`)

---

## Note finali

- **Nessuna dipendenza esterna** (eccetto Google Fonts, Google Maps, Google Forms embed)
- **Performance**: carica velocemente, perfetto per mobile
- **Accessibilità**: semantic HTML, bottoni ben visibili, contrasto elevato
- **Manutenzione**: post-evento, potrai aggiungere galleria foto, ringraziamenti, senza stravolgere la struttura

---

## Supporto / Prossimi passi

Se vuoi:
- **Aggiungere logica invitati** (sezioni visibili solo per cerimonia/festa): possiamo usare un semplice URL parameter o sessionStorage
- **Integrare Instagram**, Drive per foto: embeddiamo il link
- **Cambiare colori/font**: basta editare CSS
- **Aggiungere animazioni più complesse**: usiamo GSAP o simile

---

**Fatto! Il sito è pronto.** Buon matrimonio! 💚
