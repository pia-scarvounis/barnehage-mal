import type { Translation } from '../types'

const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About us',
    departments: 'Departments',
    forParents: 'For parents',
    pedagogy: 'Pedagogy',
    staff: 'Staff',
    gallery: 'Gallery',
    contact: 'Contact',
    apply: 'Apply for a place',
    langToggle: 'NO',
    forParentsGroups: { practical: 'Practical', communication: 'Communication & info' },
    forParentsLinks: {
      settling: 'Settling in', settlingDesc: 'How we start',
      hours: 'Opening hours & drop-off', hoursDesc: 'Drop-off and pick-up',
      holiday: 'Holiday & planning days', sick: 'Sickness',
      clothes: 'Clothes & equipment', food: 'Food & meals', pricing: 'Pricing',
      platform: 'Parent platform', platformDesc: 'MyKid and messages',
      survey: 'Parent survey', suFau: 'Parent council',
      news: 'News & updates', celebrations: 'Celebrations',
      celebrationsDesc: 'Christmas, Easter, Eid and more', statutes: 'Statutes & safety',
    },
    pedagogyLinks: {
      framework: 'Framework & annual plan', focus: 'Focus areas',
      values: 'Values & philosophy', schedule: 'Daily schedule',
    },
  },
  hero: {
    badge: 'Private kindergarten · Oslo · Since 2003',
    title: 'Welcome to',
    titleEm: 'and children thrive',
    subtitle: 'This is a demo website template for kindergartens. It includes a complete homepage, navigation with dropdown menus, multilingual support (Norwegian/English), and subpages for departments, parents and pedagogy – easy to customise with your own content.',
    applyBtn: 'Apply for a place',
    learnMore: 'Learn more about us',
    stats: { children: 'Children', departments: 'Departments', score: 'Avg. score', years: 'Years of experience' },
  },
  about: {
    tag: 'About us',
    title: 'A kindergarten for everyone',
    body1: 'We want to give children a vibrant everyday life, inspired by the seasons, nature, people and culture. Through knowledge of cultural expressions we can better understand ourselves and others.',
    body2: 'We aim to increase children\'s awareness of human dignity and inclusion through song, stories, music and theatre. Openness, curiosity and respect are our core values.',
  },
  home: {
    departmentsTitle: 'Get to know our departments',
    valuesCards: [
      { title: 'Dedicated staff', text: 'Passionate educators with heart for every individual child.' },
      { title: 'Diversity every day', text: 'Children from many cultures enrich the community.' },
      { title: 'Children together', text: 'Friendship, play and joy are at the heart of our everyday life.' },
      { title: 'Outdoor learning', text: 'We spend lots of time outside all year, using nature actively.' },
    ],
    aboutChips: ['International environment', 'Outdoor life & nature', 'Creativity & culture', 'Inclusion & care'],
    ctaTitle: 'Ready to apply for a place?',
    ctaBody: 'Apply through the municipal admissions system. Feel free to get in touch if you have any questions.',
  },
  departments: {
    tag: 'Our departments',
    title: 'Two kindergartens, one family',
    lead: 'We have two wonderful locations, each with its own character and strengths.',
    children: 'children', staff: 'staff', outings: 'Weekly outings', ageUnit: 'years',
    readMore: 'Read more about the department',
    scheduleSmall: {
      tag: 'Daily schedule', title: 'Daily schedule for the youngest (ages 1–2)',
      note: 'All times are approximate. Children sleep outside in prams with a staff member always present.',
      items: [
        { time: '07:30', title: 'Kindergarten opens', text: 'We start the day together.' },
        { time: '07:45–09:30', title: 'Breakfast and free play', text: 'Packed breakfast, followed by free play.' },
        { time: '09:30–10:30', title: 'Core hours', text: 'Outdoor time and activities in small groups.' },
        { time: '10:30–11:30', title: 'Tidying and lunch', text: 'Tidying up, nappy changes and handwashing. Kindergarten serves lunch.' },
        { time: '11:30–13:45', title: 'Nap time', text: 'Children sleep outside in prams under shelter with a staff member present.' },
        { time: '13:45', title: 'Packed lunch', text: 'Nappy changes and handwashing. Children eat packed lunchbox.' },
        { time: '16:45', title: 'Pick-up time', text: 'Children should be collected by this time.' },
        { time: '17:00', title: 'Kindergarten closes', text: '' },
      ],
    },
    scheduleBig: {
      tag: 'Daily schedule', title: 'Daily schedule for older children (ages 3–6)',
      note: 'All times are approximate. Hot lunch is served twice per week. On outing days: bring two lunchboxes.',
      items: [
        { time: '07:30', title: 'Kindergarten opens', text: 'We start the day together.' },
        { time: '07:45–09:30', title: 'Breakfast and free play', text: 'Packed breakfast, followed by free play.' },
        { time: '09:30–10:30', title: 'Core hours begin', text: 'Children split into groups with various activities.' },
        { time: '10:30–11:30', title: 'Circle time and lunch', text: 'Tidying up, circle time and handwashing. Kindergarten serves lunch.' },
        { time: '11:30–13:45', title: 'Outdoor time', text: 'Children go outside in the garden or nearby parks.' },
        { time: '13:45', title: 'Packed lunch', text: 'Handwashing and packed lunchbox.' },
        { time: '16:45', title: 'Pick-up time', text: 'Children should be collected by this time.' },
        { time: '17:00', title: 'Kindergarten closes', text: '' },
      ],
    },
  },
  gallery: {
    tag: 'Our everyday life',
    title: 'A glimpse into the kindergarten',
    lead: 'Photos from everyday life.',
  },
  parents: {
    settling: {
      tag: 'Settling in', title: 'A safe start for your child',
      intro: 'We follow Oslo\'s settling-in standard and work closely with parents to give every child the best start.',
      steps: [
        { title: 'Visit day', text: 'Parents and children visit the kindergarten before starting.' },
        { title: 'Information meeting', text: 'We hold an information meeting for new parents before the start date.' },
        { title: 'Start-up conversation', text: 'All new children receive a start-up conversation shortly after beginning.' },
        { title: 'Settling-in period', text: 'Through good routines and high adult-child ratio we give children time to feel safe.' },
      ],
      link: 'Read Oslo\'s settling-in standard',
    },
    hours: {
      tag: 'Opening hours', title: 'Open every day',
      openText: 'Opens', closeText: 'Closes',
    },
    holiday: {
      tag: 'Holiday & time off', title: 'Holiday and planning days',
      body: 'The kindergarten is closed during the Christmas holiday and for four weeks in July. We have approximately five planning days per year.',
    },
    sick: {
      tag: 'Sickness', title: 'When your child is ill',
      rules: [
        'Children should stay home when they have a fever, vomiting or diarrhoea.',
        'Children may return when they have been fever-free for 24 hours.',
        'For contagious illnesses, the kindergarten will notify parents.',
        'Always let the kindergarten know if your child will not be coming.',
      ],
      note: 'If in doubt — contact the kindergarten or your GP.',
    },
    clothes: {
      tag: 'Clothes & equipment', title: 'What does your child need?',
      body: 'We spend a lot of time outside. Children need clothes that can handle play in all kinds of weather. Label all clothing.',
      list: ['Waterproof clothing (trousers and jacket)', 'Good outdoor shoes or boots', 'Warm clothes and wool underlayers in winter', 'Spare clothes at kindergarten (2–3 sets)', 'Sun hat and sunscreen in summer', 'Indoor shoes'],
    },
    food: {
      tag: 'Food & meals', title: 'Food at the kindergarten',
      body: 'We cook one hot meal per day for all children. We adapt to children\'s needs and allergies.',
      hotDays: 'Hot food twice per week',
      cost: 'Food fee: 250 NOK/month',
    },
    pricing: {
      tag: 'Pricing', title: 'Payment and discounts',
      body: 'Kindergarten fees follow national rates. Sibling discounts and reduced fees for low-income families are available.',
      linkText: 'See Oslo municipality\'s prices and payment scheme',
    },
    platform: {
      tag: 'Parent platform', title: 'Follow your child through the day',
      body: 'We use MyKid as our parent platform. Here you receive photos and updates, can send messages and report absences.',
    },
    survey: {
      tag: 'National parent survey', title: 'Parents are satisfied',
      responses: 'responses', avg: 'Average',
      source: 'Source: Norwegian Directorate for Education',
      categories: ['Child thrives', 'Staff are engaged', 'Play and learning', 'Information & communication', 'Participation'],
    },
    celebrations: {
      tag: 'Celebrations', title: 'We celebrate diversity',
      body: 'We mark holidays and celebrations from different cultures — Christmas, Easter, Eid, Diwali and more.',
    },
  },
  pedagogy: {
    framework: {
      tag: 'Framework & annual plan', title: 'Pedagogical foundation',
      body: 'We follow the Ministry of Education\'s framework plan for kindergartens. Our annual plan sets out how we work with the framework in practice.',
    },
    focus: {
      tag: 'Focus areas', title: 'What we work on',
      areas: [
        { title: 'Language & communication', text: 'We actively work on language development from age one.' },
        { title: 'Inclusion & diversity', text: 'Through the Være Sammen programme we work on inclusion and early intervention.' },
        { title: 'Nature & outdoor life', text: 'All departments have a fixed outing day and we use nature actively.' },
        { title: 'Creativity & culture', text: 'Art, music, drama and dance are a natural part of everyday life.' },
      ],
    },
    values: {
      tag: 'Values & philosophy', title: 'Openness, curiosity and respect',
      body: 'We want to give children a vibrant everyday life, inspired by the seasons, nature, people and culture.',
    },
  },
  staff: {
    tag: 'Our staff', title: 'Dedicated professionals',
    body: 'We are fortunate to have dedicated staff who bring creativity and ideas.',
    highlights: [
      { title: 'Further education', text: 'We support staff in pursuing further education' },
      { title: 'Planning day trips', text: 'Annual trips to build team spirit' },
      { title: 'Joint training', text: 'All staff trained together' },
      { title: 'Good conditions', text: 'Municipal salary scale + pension savings' },
    ],
  },
  contact: {
    tag: 'Get in touch', title: 'We respond quickly',
    lead: 'Questions about a place, settling in or daily life? Please get in touch directly.',
    director: 'Director', owner: 'Owner',
    practical: 'Practical information', orgNo: 'Org.no:',
  },
  footer: {
    tagline: 'A kindergarten giving children a vibrant everyday life inspired by seasons, nature and culture.',
    departments: 'Departments', info: 'Information', contactHeading: 'Contact',
    links: { apply: 'Apply for a place', pricing: 'Pricing', facts: 'Barnehagefakta', platform: 'Parent platform' },
    copyright: 'Private kindergarten',
  },
}

export default en
