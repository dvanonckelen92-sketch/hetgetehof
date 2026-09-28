import { site, euro } from './site';

/**
 * Elk antwoord moet los te lezen zijn: het herhaalt kort de vraag, zodat een
 * zoekmachine of taalmodel de alinea kan uitknippen zonder context.
 */
export type Vraag = { v: string; a: string };

export const faq: Vraag[] = [
  {
    v: 'Heb je Het Getehof voor jezelf?',
    a: `Ja. In Het Getehof zijn er tijdens je verblijf geen andere gasten. Je deelt de keuken, de zithoek, de badkamer en de tuin alleen met je eigen gezelschap.`,
  },
  {
    v: 'Met hoeveel personen kan je overnachten in Het Getehof?',
    a: `Het Getehof heeft ${site.kamers} gastenkamers voor samen maximaal ${site.maxPersonen} volwassenen. Beide slaapkamers liggen op de bovenverdieping, samen met de badkamer. Beneden zijn de keuken en de zithoek.`,
  },
  {
    v: 'Wat kost een overnachting in Het Getehof?',
    a: `Een kamer in Het Getehof boeken kan vanaf ${euro(site.prijsVanaf)}. De exacte prijs hangt af van het aantal personen en nachten; Greet bezorgt je die bij je aanvraag.`,
  },
  {
    v: 'Is Het Getehof een goede B&B voor fietsers?',
    a: `Ja. Het Getehof ligt vlak bij de fietsknooppunten van Vlaams-Brabant en de LF6 Vlaanderen Fietsroute, en fietsen kunnen binnen in de garage. Verschillende gasten in het gastenboek logeerden er tijdens een meerdaagse fietstocht.`,
  },
  {
    v: 'Waar ligt Het Getehof precies?',
    a: `Het Getehof ligt in het centrum van ${site.dorp}, een dorp van 351 inwoners in de gemeente ${site.gemeente}, ten oosten van Leuven tegen de Limburgse grens. Tienen en Sint-Truiden liggen op een tiental kilometer, het natuurdomein Het Vinne op tien minuten rijden.`,
  },
  {
    v: 'Kan je ontbijten in Het Getehof?',
    a: `Ja, in Het Getehof kan je ontbijten; gasten noemen het ontbijt in het gastenboek "overvloedig" en "fantastisch". Wil je liever zelf koken, dan staat er een volledig ingerichte keuken ter beschikking. Geef bij je aanvraag mee wat je verkiest.`,
  },
];

export const faqSchema = (vragen: Vraag[]) => ({
  '@type': 'FAQPage',
  mainEntity: vragen.map((q) => ({
    '@type': 'Question',
    name: q.v,
    acceptedAnswer: { '@type': 'Answer', text: q.a },
  })),
});
