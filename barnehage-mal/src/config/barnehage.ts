export const barnehage = {
  navn: 'Din Barnehage',
  kortNavn: 'DB',
  etablert: '2003',
  epost: 'post@barnehagen.no',
  telefon: '22 00 00 00',
  orgNr: '000 000 000',

  adresser: [
    { navn: 'Avdeling 1', gate: 'Gateveien 1', postnr: '0000', sted: 'Oslo' },
    { navn: 'Avdeling 2', gate: 'Gateveien 2', postnr: '0000', sted: 'Oslo' },
  ],

  aapningstider: {
    alle: '07:30–16:45',
  },

  avdelinger: [
    { id: 'avdeling-1', navn: 'Avdeling 1', alder: '1–2', beskrivelse: 'Beskrivelse av avdelingen.', antallBarn: 27, antallAnsatte: 6 },
    { id: 'avdeling-2', navn: 'Avdeling 2', alder: '3–6', beskrivelse: 'Beskrivelse av avdelingen.', antallBarn: 42, antallAnsatte: 7 },
  ],
}
