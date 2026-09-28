# Het Getehof

Nieuwe website voor B&B Het Getehof in Neerhespen (Linter), gebouwd met Astro. Vervangt de gehackte WordPress-site op hetgetehof.be.

## Werken aan de site

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # bouwt naar dist/
```

## Waar staat wat

- `src/data/site.ts`: alle harde feiten (contact, prijs, capaciteit). Pagina's, schema.org en `llms.txt` lezen hieruit.
- `src/data/gastenboek.ts`: de berichten van het gastenboek. Nieuwe berichten komen binnen via Netlify Forms en worden hier toegevoegd.
- `src/data/faq.ts`: veelgestelde vragen, ook gebruikt voor de FAQ-structured data.
- `src/pages/voorstel.astro`: werkpagina voor Greet en Jo (noindex). Verwijderen voor livegang.
- `netlify.toml`: build, 301's van de oude WordPress-adressen en 410's voor de spam-URL's van de hack.

## Voor livegang

- Straat en huisnummer invullen in `src/data/site.ts`.
- Prijs "vanaf €40" bevestigen (bron: oude prijspagina, mei 2022).
- In Netlify onder Forms een e-mailmelding voor het formulier `boeking` naar Greet instellen.
- `/voorstel` verwijderen.
