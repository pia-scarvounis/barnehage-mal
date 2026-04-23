import { useState } from 'react'
import type { Translation, Lang } from '../types'
import no from '../locales/no'
import en from '../locales/en'

interface UseLanguageReturn {
  lang: Lang
  t: Translation
  toggleLang: () => void
}

export function useLanguage(): UseLanguageReturn {
  const [lang, setLang] = useState<Lang>('no')
  const t = lang === 'no' ? no : en
  const toggleLang = () => setLang(l => (l === 'no' ? 'en' : 'no'))
  return { lang, t, toggleLang }
}
