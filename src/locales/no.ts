import type { Translation } from '../types'

const no: Translation = {
  nav: {
    home: 'Hjem',
    about: 'Om oss',
    departments: 'Avdelinger',
    forParents: 'For foreldre',
    pedagogy: 'Pedagogikk',
    staff: 'Ansatte',
    gallery: 'Galleri',
    contact: 'Kontakt',
    apply: 'Søk om plass',
    langToggle: 'EN',
    forParentsGroups: { practical: 'Praktisk', communication: 'Kommunikasjon og info' },
    forParentsLinks: {
      settling: 'Tilvenning', settlingDesc: 'Slik starter vi opp',
      hours: 'Åpningstider og levering', hoursDesc: 'Henting og levering',
      holiday: 'Ferie og planleggingsdager', sick: 'Sykdom',
      clothes: 'Klær og utstyr', food: 'Mat og måltider', pricing: 'Pris og betaling',
      platform: 'Foreldreplattform', platformDesc: 'MyKid og beskjeder',
      survey: 'Brukerundersøkelse', suFau: 'SU og FAU',
      news: 'Nyheter og oppdateringer', celebrations: 'Merkedager',
      celebrationsDesc: 'Jul, påske, eid og mer', statutes: 'Vedtekter og sikkerhet',
    },
    pedagogyLinks: {
      framework: 'Rammeplan og årsplan', focus: 'Satsningsområder',
      values: 'Verdier og filosofi', schedule: 'Dagsrytme',
    },
  },
  hero: {
    badge: 'Privat barnehage · Oslo · Siden 2003',
    title: 'Velkommen til',
    titleEm: 'og barn trives',
    subtitle: 'Dette er en eksempelnettside for barnehager. Den består av en fullstendig forside, navigasjon med dropdownmenyer, flerspråklig støtte (norsk/engelsk), undersider for avdelinger, for foreldre og pedagogikk – og er enkel å tilpasse med eget innhold.',
    applyBtn: 'Søk om plass',
    learnMore: 'Les mer om oss',
    stats: { children: 'Barn', departments: 'Avdelinger', score: 'Snitt score', years: 'År med erfaring' },
  },
  about: {
    tag: 'Om oss',
    title: 'En barnehage for alle',
    body1: 'Vi ønsker å gi barna en levende hverdag, inspirert av årstidene, naturen, mennesket og kultur. Gjennom kunnskap om kulturuttrykk og folkeslag kan vi bedre forstå oss selv og andre.',
    body2: 'Vi vil øke barnas bevissthet rundt egne holdninger, menneskeverd og inkludering gjennom sang, eventyr, musikk og teater. Åpenhet, undring og respekt er kjerneverdiene våre.',
  },
  home: {
    departmentsTitle: 'Bli kjent med avdelingene våre',
    valuesCards: [
      { title: 'Engasjerte ansatte', text: 'Dedikerte pedagoger med hjerte for hvert enkelt barn.' },
      { title: 'Mangfold i hverdagen', text: 'Barn fra mange kulturer beriker fellesskapet.' },
      { title: 'Barn sammen', text: 'Vennskap, lek og glede er kjernen i hverdagen vår.' },
      { title: 'Lek og læring ute', text: 'Vi er mye ute hele året og bruker naturen aktivt.' },
    ],
    aboutChips: ['Internasjonalt miljø', 'Friluftsliv og natur', 'Kreativitet og kultur', 'Inkludering og omsorg'],
    ctaTitle: 'Klar for å søke plass?',
    ctaBody: 'Søk gjennom kommunens opptakssystem. Vi tar gjerne en prat om du har spørsmål.',
    since: 'Siden',
  },
  departments: {
    tag: 'Våre avdelinger',
    title: 'To barnehager, én familie',
    lead: 'Vi har to flotte anlegg med hvert sitt særpreg og sine styrker.',
    children: 'barn', staff: 'ansatte', outings: 'Tur-dag ukentlig', ageUnit: 'år',
    readMore: 'Les mer om avdelingen',
    scheduleSmall: {
      tag: 'Dagsrytme', title: 'Dagsrytme for de minste (1–2 år)',
      note: 'Alle tider er veiledende. Barna sover ute i vogn med sovevakt tilstede.',
      items: [
        { time: '07:30', title: 'Barnehagen åpner', text: 'Vi starter dagen sammen.' },
        { time: '07:45–09:30', title: 'Frokost og frilek', text: 'Medbrakt frokost, etterfulgt av frilek.' },
        { time: '09:30–10:30', title: 'Kjernetid', text: 'Utetid og aktiviteter i små grupper.' },
        { time: '10:30–11:30', title: 'Rydding og lunsj', text: 'Ryddetid, bleieskift og håndvask. Barnehagen serverer lunsj.' },
        { time: '11:30–13:45', title: 'Sovetid', text: 'Barna sover ute i vogn under tak med sovevakt.' },
        { time: '13:45', title: 'Matboks', text: 'Bleieskift og håndvask. Barna spiser medbrakt matboks.' },
        { time: '16:45', title: 'Henting', text: 'Barna bør være hentet innen dette tidspunktet.' },
        { time: '17:00', title: 'Barnehagen låses', text: '' },
      ],
    },
    scheduleBig: {
      tag: 'Dagsrytme', title: 'Dagsrytme for de store (3–6 år)',
      note: 'Alle tider er veiledende. Barnehagen serverer 2 varmmåltid i uken. På turdager: ta med to matbokser.',
      items: [
        { time: '07:30', title: 'Barnehagen åpner', text: 'Vi starter dagen sammen.' },
        { time: '07:45–09:30', title: 'Frokost og frilek', text: 'Medbrakt frokost, etterfulgt av frilek.' },
        { time: '09:30–10:30', title: 'Kjernetid starter', text: 'Barna deles i grupper med ulike aktiviteter.' },
        { time: '10:30–11:30', title: 'Samlingsstund og lunsj', text: 'Ryddetid, samlingsstund og håndvask. Barnehagen serverer lunsj.' },
        { time: '11:30–13:45', title: 'Utetid', text: 'Barna er ute i hagen eller nærliggende parker.' },
        { time: '13:45', title: 'Matboks', text: 'Håndvask og medbrakt matboks.' },
        { time: '16:45', title: 'Henting', text: 'Barna bør være hentet innen dette tidspunktet.' },
        { time: '17:00', title: 'Barnehagen låses', text: '' },
      ],
    },
  },
  gallery: {
    tag: 'Hverdagen vår',
    title: 'Et glimt inn i barnehagen',
    lead: 'Bilder fra hverdagen.',
  },
  parents: {
    settling: {
      tag: 'Tilvenning', title: 'En trygg start for ditt barn',
      intro: 'Vi følger Oslostandard for tilvenning og jobber tett med foreldre for å gi hvert barn den beste starten.',
      steps: [
        { title: 'Besøksdag', text: 'Foreldre og barn besøker barnehagen før oppstart.' },
        { title: 'Informasjonsmøte', text: 'Vi holder informasjonsmøte med nye foreldre i forkant av oppstart.' },
        { title: 'Oppstartssamtale', text: 'Alle nye barn får en oppstartssamtale kort tid etter oppstart.' },
        { title: 'Tilvenningstid', text: 'Gjennom gode rutiner og høy voksentetthet gir vi barna tid til å bli trygge.' },
      ],
      link: 'Les Oslostandard for tilvenning',
    },
    hours: {
      tag: 'Åpningstider', title: 'Åpent hver dag',
      openText: 'Åpner', closeText: 'Stenger',
    },
    holiday: {
      tag: 'Ferie og fri', title: 'Ferie og planleggingsdager',
      body: 'Barnehagen holder stengt i romjulen og fire uker i juli. Vi har ca. fem planleggingsdager i året.',
    },
    sick: {
      tag: 'Sykdom', title: 'Når barnet er sykt',
      rules: [
        'Barnet skal holdes hjemme ved feber, oppkast eller diaré.',
        'Barnet kan komme tilbake når det har vært feberfritt i 24 timer.',
        'Ved smittsomme sykdommer gir barnehagen beskjed til foreldre.',
        'Gi alltid beskjed til barnehagen hvis barnet ikke kommer.',
      ],
      note: 'Ved tvil — ta kontakt med barnehagen eller fastlege.',
    },
    clothes: {
      tag: 'Klær og utstyr', title: 'Hva trenger barnet?',
      body: 'Vi er mye ute. Barna trenger klær som tåler lek i alle slags vær. Merk alle klær med navn.',
      list: ['Regntøy (bukse og jakke)', 'Gode tursko eller støvler', 'Varme klær og ullundertøy om vinteren', 'Skift i barnehagen (2–3 sett)', 'Solhatt og solkrem om sommeren', 'Innesko'],
    },
    food: {
      tag: 'Mat og måltider', title: 'Mat i barnehagen',
      body: 'Vi lager ett varmt måltid om dagen. Vi tilpasser barns behov og allergier.',
      hotDays: 'Varmmat 2 ganger i uken',
      cost: 'Kostpenger: 250 kr/mnd',
    },
    pricing: {
      tag: 'Pris og betaling', title: 'Betaling og moderasjon',
      body: 'Barnehagepris følger nasjonale satser. Det gis søskenmoderasjon og redusert betaling for familier med lav inntekt.',
      linkText: 'Se Oslo kommunes priser og betalingsordning',
    },
    platform: {
      tag: 'Foreldreplattform', title: 'Følg barnet ditt gjennom dagen',
      body: 'Vi bruker MyKid som foreldreplattform. Her får du bilder og oppdateringer, kan sende beskjeder og melde fravær.',
    },
    survey: {
      tag: 'Nasjonal foreldreundersøkelse', title: 'Foreldrene er fornøyde',
      responses: 'svar', avg: 'Snitt',
      source: 'Kilde: Utdanningsdirektoratets foreldreundersøkelse',
      categories: ['Barnet trives', 'Ansatte er engasjerte', 'Lek og læring', 'Informasjon og kommunikasjon', 'Medvirkning'],
    },
    celebrations: {
      tag: 'Merkedager', title: 'Vi feirer mangfoldet',
      body: 'Vi markerer høytider fra ulike kulturer gjennom året — jul, påske, eid, diwali og mer.',
    },
  },
  pedagogy: {
    framework: {
      tag: 'Rammeplan og årsplan', title: 'Pedagogisk grunnlag',
      body: 'Vi følger Kunnskapsdepartementets rammeplan for barnehager. Vår årsplan konkretiserer hvordan vi arbeider med rammeplanen i praksis.',
    },
    focus: {
      tag: 'Satsningsområder', title: 'Hva vi jobber med',
      areas: [
        { title: 'Språk og kommunikasjon', text: 'Vi jobber aktivt med språkutvikling fra barna er ett år.' },
        { title: 'Inkludering og mangfold', text: 'Gjennom Være Sammen-programmet jobber vi med inkludering og tidlig innsats.' },
        { title: 'Natur og friluftsliv', text: 'Alle avdelinger har fast tur-dag og vi bruker naturen aktivt.' },
        { title: 'Kreativitet og kultur', text: 'Kunst, musikk, drama og dans er en naturlig del av hverdagen.' },
      ],
    },
    values: {
      tag: 'Verdier og filosofi', title: 'Åpenhet, undring og respekt',
      body: 'Vi ønsker å gi barna en levende hverdag, inspirert av årstidene, naturen, mennesket og kultur.',
    },
  },
  staff: {
    tag: 'Våre ansatte', title: 'Engasjerte fagfolk',
    body: 'Vi er heldige å ha et engasjert personale som gir av seg selv og bidrar med kreativitet og innspill.',
    highlights: [
      { title: 'Videreutdanning', text: 'Vi legger til rette for at ansatte kan ta mer utdanning' },
      { title: 'Plandagstur', text: 'Årlige turer for å styrke samholdet' },
      { title: 'Felles kursing', text: 'Hele personalet kurses sammen' },
      { title: 'Gode vilkår', text: 'Kommunens lønnsskala + pensjonssparing' },
    ],
  },
  contact: {
    tag: 'Ta kontakt', title: 'Vi svarer deg raskt',
    lead: 'Har du spørsmål om plass, tilvenning eller hverdagen? Ta gjerne kontakt direkte.',
    director: 'Daglig leder', owner: 'Eier',
    practical: 'Praktisk informasjon', orgNo: 'Org.nr:',
  },
  footer: {
    tagline: 'En barnehage som gir barna en levende hverdag inspirert av årstider, natur og kultur.',
    departments: 'Avdelinger', info: 'Informasjon', contactHeading: 'Kontakt',
    links: { apply: 'Søk om plass', pricing: 'Pris og betaling', facts: 'Barnehagefakta', platform: 'Foreldreplattform' },
    copyright: 'Privat barnehage',
  },
}

export default no
