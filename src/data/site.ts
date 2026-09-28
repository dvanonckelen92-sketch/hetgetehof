/**
 * Alle harde feiten over Het Getehof staan hier één keer. Pagina's,
 * structured data en llms.txt lezen allemaal uit dit bestand, zodat een
 * gewijzigde prijs of telefoonnummer overal tegelijk meeverandert.
 *
 * Bron: hetgetehof.be (gecontroleerd 28 september 2026) en voor de pagina's
 * die intussen door de hack overschreven zijn, het Wayback-archief van mei 2022.
 */
export const site = {
  naam: 'Het Getehof',
  url: 'https://www.hetgetehof.be',
  uitbaters: 'Greet en Jo',
  eigenares: 'Greet Thijs',
  geopendIn: 2016,

  dorp: 'Neerhespen',
  gemeente: 'Linter',
  postcode: '3350',
  provincie: 'Vlaams-Brabant',
  streek: 'Hageland',
  // TODO: straat en huisnummer bevestigen bij Greet. Stond nergens op de oude site.
  straat: '',
  geo: { lat: 50.791842, lng: 5.045685 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Het+Getehof+Neerhespen',

  telefoon: '0497 36 38 40',
  telefoonE164: '+32497363840',
  email: 'thijs.greet@hotmail.com',

  kamers: 2,
  maxPersonen: 4,

  /**
   * Stond op /prijs in mei 2022 als "vanaf 40 €". Moet voor livegang bevestigd
   * worden; de rest van de site toont het bedrag uit deze ene plek.
   */
  prijsVanaf: 40,
  prijsGecontroleerd: 'mei 2022',

  pers: [
    { titel: 'Het Nieuwsblad', url: 'http://www.nieuwsblad.be/cnt/blppa_02431263' },
    { titel: 'Leuven Actueel: "Getehof is enige B&B in Neerhespen"', url: 'http://www.leuvenactueel.be/getehof-is-enige-bb-in-neerhespen/' },
  ],

  maker: { naam: 'Coop Consult', url: 'https://coopconsult.be' },
} as const;

export const euro = (n: number) =>
  new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

export const navigatie = [
  { href: '/kamers', label: 'Kamers' },
  { href: '/tuin-en-terras', label: 'Tuin & terras' },
  { href: '/omgeving', label: 'Omgeving' },
  { href: '/gastenboek', label: 'Gastenboek' },
] as const;
