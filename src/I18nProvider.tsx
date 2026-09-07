import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Copy, type Lang } from './i18n'

type I18nContextValue = {
  lang: Lang
  t: Copy
  toggle: () => void
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'site-lang'

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'zh') return saved
  } catch {
    /* ignore */
  }
  const nav = navigator.language.toLowerCase()
  return nav.startsWith('zh') ? 'zh' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window === 'undefined' ? 'en' : detectInitialLang(),
  )

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'en' ? 'zh' : 'en')
  }, [lang, setLang])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = copy[lang].metaTitle
  }, [lang])

  const value = useMemo(
    () => ({ lang, t: copy[lang], toggle, setLang }),
    [lang, toggle, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
