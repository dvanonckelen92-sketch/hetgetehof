import { site } from './site';

/**
 * De B&B als één node met vaste @id, zodat pagina's, reviews en FAQ ernaar
 * kunnen verwijzen. Alles komt uit site.ts.
 */
export const bedrijfSchema = {
  '@type': 'BedAndBreakfast',
  '@id': `${site.url}/#bnb`,
  name: site.naam,
  url: site.url,
  description: `Vakantiewoning en B&B met ${site.kamers} gastenkamers voor maximaal ${site.maxPersonen} personen in ${site.dorp} (${site.gemeente}), in het ${site.streek}. Je hebt het huis voor jezelf, met keuken, zithoek, tuin en een terras aan de Kleine Gete.`,
  telephone: site.telefoonE164,
  email: site.email,
  foundingDate: String(site.geopendIn),
  numberOfRooms: site.kamers,
  priceRange: `vanaf €${site.prijsVanaf}`,
  currenciesAccepted: 'EUR',
  image: `${site.url}/og.jpg`,
  address: {
    '@type': 'PostalAddress',
    ...(site.straat ? { streetAddress: site.straat } : {}),
    addressLocality: `${site.dorp}, ${site.gemeente}`,
    postalCode: site.postcode,
    addressRegion: site.provincie,
    addressCountry: 'BE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapsUrl,
  containedInPlace: { '@type': 'Place', name: `${site.streek}, ${site.provincie}` },
  amenityFeature: [
    'Eigen keuken',
    'Zithoek met tv',
    'Badkamer met douche',
    'Tuin',
    'Terras aan de Kleine Gete',
    'Fietsenstalling',
    'Ontbijt',
  ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
  founder: { '@type': 'Person', name: site.eigenares },
  knowsLanguage: 'nl',
};
