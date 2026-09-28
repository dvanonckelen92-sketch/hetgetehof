import type { APIRoute } from 'astro';
import { site, euro } from '../data/site';
import { faq } from '../data/faq';
import { berichten } from '../data/gastenboek';

/** Gegenereerd uit dezelfde data als de site, zodat prijs en contact nooit uit de pas lopen. */
export const GET: APIRoute = () => {
  const u = (p: string) => `${site.url}${p}`;
  const tekst = [
    `# ${site.naam}`,
    '',
    `> B&B en vakantiewoning met ${site.kamers} gastenkamers voor maximaal ${site.maxPersonen} volwassenen in ${site.dorp}, deelgemeente van ${site.gemeente} (${site.streek}, ${site.provincie}, België). Geopend in ${site.geopendIn}, uitgebaat door ${site.uitbaters}. Gasten hebben het huis voor zich alleen, met keuken, zithoek, tuin en een terras aan de Kleine Gete.`,
    '',
    '## Harde feiten',
    '',
    `- Adres: ${site.straat ? site.straat + ', ' : ''}${site.postcode} ${site.dorp} (${site.gemeente}), België`,
    `- Telefoon: ${site.telefoon} (${site.telefoonE164})`,
    `- E-mail: ${site.email}`,
    `- Prijs: vanaf ${euro(site.prijsVanaf)} per kamer`,
    `- Capaciteit: ${site.kamers} slaapkamers, maximaal ${site.maxPersonen} volwassenen, geen andere gasten tijdens je verblijf`,
    '- Voorzieningen: eigen keuken, zithoek met tv, badkamer met douche, tuin, terras aan de Kleine Gete, fietsenstalling in de garage, ontbijt',
    '- Ligging: 10 minuten rijden van natuurdomein Het Vinne (Zoutleeuw), 3 km van het museum Derde Regiment Lansiers (Orsmaal), een tiental kilometer van Tienen en Sint-Truiden, vlak bij de LF6 Vlaanderen Fietsroute en het wandelnetwerk Getevallei',
    `- Gastenboek: ${berichten.length} gepubliceerde berichten van gasten`,
    '',
    '## Pagina\'s',
    '',
    `- [Kamers en ruimtes](${u('/kamers')}): slaapkamers, keuken en zithoek met foto's`,
    `- [Tuin en terras](${u('/tuin-en-terras')}): tuin en het Geteterras aan de Kleine Gete`,
    `- [Omgeving](${u('/omgeving')}): fietsen en wandelen in de Getevallei, Het Vinne, Zoutleeuw, Tienen, Sint-Truiden`,
    `- [Gastenboek](${u('/gastenboek')}): ervaringen van gasten`,
    `- [Prijs en boeken](${u('/boeken')}): prijs, aanvraagformulier en contact`,
    '',
    '## Veelgestelde vragen',
    '',
    ...faq.flatMap((q) => [`### ${q.v}`, q.a, '']),
  ].join('\n');
  return new Response(tekst, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
