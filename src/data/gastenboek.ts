/**
 * Berichten uit het oorspronkelijke gastenboek (gwolle-plugin), letterlijk
 * overgenomen uit het Wayback-archief van augustus 2022. Het gastenboek op de
 * live site is intussen vervangen door casinospam.
 *
 * Twee berichten zijn bewust weggelaten: één was een aankondiging vóór het
 * verblijf, één ging over de website en niet over de B&B.
 */
export type Bericht = {
  naam: string;
  woonplaats?: string;
  datum: string; // ISO
  tekst: string;
  uitgelicht?: string;
};

export const berichten: Bericht[] = [
  {
    naam: 'Gast',
    woonplaats: 'Leiden',
    datum: '2021-07-09',
    tekst:
      'Een eenvoudig maar leuk hotel. De gastvrouwen zijn zeer vriendelijk en doen alles om het de klanten naar hun zijn te maken. Het hotel zelf is heel proper met mooie grote en nette kamer. De badkamer is modern en ook heel net.',
  },
  {
    naam: 'Eliane & Evelien',
    woonplaats: 'Heule',
    datum: '2021-05-13',
    uitgelicht: 'Het Hageland heeft ons hart gestolen.',
    tekst:
      'Beste Greet & Jo, we zijn nog maar een paar uur terug thuis van ons heerlijke verblijf in jullie B&B en verlangen nu al om terug te komen! Alles was tot in de puntjes verzorgd, kraaknet, hartelijk onthaal, fijne attenties, aan alles was gedacht, gezellig terras, heerlijke stek aan de Kleine Gete... Het Hageland heeft ons hart gestolen, magnifieke wandelingen in de ontluikende natuur, gezellige dorpjes, charmant Zoutleeuw & sfeervol Diest, geslaagde combi natuur-cultuur-kunst. Geslaagde moeder-dochter tijd, we komen snel terug!',
  },
  {
    naam: 'Familie B',
    datum: '2021-02-23',
    tekst:
      'Het was een zeer aangenaam verblijf. We zijn super goed ontvangen, alles was tot in de puntjes verzorgd van het ontbijt tot het slapen gaan. Wij komen zeker nog eens terug.',
  },
  {
    naam: 'Els',
    woonplaats: 'Gent',
    datum: '2020-08-11',
    uitgelicht: 'Rustig gelegen, alle comfort, en super vriendelijke ontvangst.',
    tekst:
      'We verbleven in het Getehof op onze fietstocht langs de LF6 (Vlaanderenfietsroute). Deze B&B is zeker een aanrader! Rustig gelegen, alle comfort, en super vriendelijke ontvangst. Bedankt voor het aangenaam verblijf.',
  },
  {
    naam: 'Luc',
    woonplaats: 'Gent',
    datum: '2020-07-26',
    uitgelicht: 'Een ideale plaats voor fietsers.',
    tekst:
      'Een schitterende B&B waar je veel ruimte hebt. Een benedenverdieping met keuken en zithoek. Op de bovenverdieping mogelijkheid tot 2 slaapkamers en badkamer voor het ganse gezin. Een ideale plaats voor fietsers met een ruime fietsenstalling, vlakbij de fietsknooppunten en de LF6 Vlaanderen Fietsroute. Gastvrouw Greet ontvangt je hartelijk en bezorgt je een heerlijk ontbijt. De rustige omgeving krijg je er gratis bij.',
  },
  {
    naam: 'Flora Huybrechts',
    woonplaats: 'Korbeek-Lo',
    datum: '2020-02-12',
    tekst:
      'Onlangs bleven we overnachten in deze B&B. Het was een prettige ervaring. Mooie accommodatie, goede ontvangst, lieve en attente mensen, een overvloedig ontbijt... Alles prima. Een aanrader.',
  },
  {
    naam: 'Peter Vandevoort',
    woonplaats: 'Heusden-Zolder',
    datum: '2019-08-13',
    uitgelicht: 'Wij gaven een score van 15/10.',
    tekst:
      'Beste Greet en Jo, van 10 tot 12 augustus 2019 verbleven wij in jullie B&B. Het was een super verblijf in een werkelijk prachtige omgeving. Zowel de B&B als de streek zijn een aanbeveling waard. De B&B is zeer net en van alle luxe voorzien. De bedden zijn heerlijk en het ontbijt is fantastisch. Je wordt er helemaal in de watten gelegd door een zeer attente gastvrouw. Kortom, absolute top. Wij gaven een score van 15/10.',
  },
  {
    naam: 'Julia Hermans',
    woonplaats: 'Merchtem',
    datum: '2019-08-11',
    tekst:
      'Beste Greet, wij waren aangenaam verrast, super vriendelijk onthaal. Ontbijt pico bello top, we konden er tegen om onze fietstocht verder te zetten... De fietsen mochten in de garage. Zeer gezellige B&B... Eigenlijk allemaal top. Dikke proficiat voor de uitbaters!',
  },
  {
    naam: 'Marten van der Woude',
    woonplaats: 'Veldhoven',
    datum: '2019-07-07',
    tekst:
      'Wij (4 personen) werden op 3 juli gastvrij onthaald in Het Getehof. Het is ons uitstekend bevallen, alles werkte, het ontbijt was erg lekker, de bedden lagen lekker, gezellige gastvrouw, kortom: aanrader!',
  },
  {
    naam: 'Tineke Van Eycken',
    datum: '2016-12-25',
    tekst: 'Wat een super gezellige mensen, in een leuke omgeving, lekker ontbijt en zalige kamer. Kortom, super!',
  },
];

export const datumNL = (iso: string) =>
  new Intl.DateTimeFormat('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
