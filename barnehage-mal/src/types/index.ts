export type Lang = 'no' | 'en'

export interface ScheduleItem {
  time: string
  title: string
  text: string
}

export interface Translation {
  nav: {
    home: string
    about: string
    departments: string
    forParents: string
    pedagogy: string
    staff: string
    gallery: string
    contact: string
    apply: string
    langToggle: string
    forParentsGroups: { practical: string; communication: string }
    forParentsLinks: {
      settling: string; settlingDesc: string
      hours: string; hoursDesc: string
      holiday: string; sick: string; clothes: string
      food: string; pricing: string
      platform: string; platformDesc: string
      survey: string; suFau: string; news: string
      celebrations: string; celebrationsDesc: string; statutes: string
    }
    pedagogyLinks: { framework: string; focus: string; values: string; schedule: string }
  }
  hero: {
    badge: string; title: string; titleEm: string
    subtitle: string; applyBtn: string; learnMore: string
    stats: { children: string; departments: string; score: string; years: string }
  }
  about: { tag: string; title: string; body1: string; body2: string }
  home: {
    departmentsTitle: string
    valuesCards: { title: string; text: string }[]
    aboutChips: string[]
    ctaTitle: string
    ctaBody: string
  }
  departments: {
    tag: string; title: string; lead: string
    children: string; staff: string; outings: string; readMore: string; ageUnit: string
    scheduleSmall: { tag: string; title: string; note: string; items: ScheduleItem[] }
    scheduleBig: { tag: string; title: string; note: string; items: ScheduleItem[] }
  }
  gallery: { tag: string; title: string; lead: string }
  parents: {
    settling: { tag: string; title: string; intro: string; steps: { title: string; text: string }[]; link: string }
    hours: { tag: string; title: string; openText: string; closeText: string }
    holiday: { tag: string; title: string; body: string }
    sick: { tag: string; title: string; rules: string[]; note: string }
    clothes: { tag: string; title: string; body: string; list: string[] }
    food: { tag: string; title: string; body: string; hotDays: string; cost: string }
    pricing: { tag: string; title: string; body: string; linkText: string }
    platform: { tag: string; title: string; body: string }
    survey: { tag: string; title: string; responses: string; avg: string; source: string; categories: string[] }
    celebrations: { tag: string; title: string; body: string }
  }
  pedagogy: {
    framework: { tag: string; title: string; body: string }
    focus: { tag: string; title: string; areas: { title: string; text: string }[] }
    values: { tag: string; title: string; body: string }
  }
  staff: {
    tag: string; title: string; body: string
    highlights: { title: string; text: string }[]
  }
  contact: {
    tag: string; title: string; lead: string
    director: string; owner: string; practical: string; orgNo: string
  }
  footer: {
    tagline: string; departments: string; info: string; contactHeading: string
    links: { apply: string; pricing: string; facts: string; platform: string }
    copyright: string
  }
}
