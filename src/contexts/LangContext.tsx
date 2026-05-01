import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

const LangContext = createContext<{
  lang: Lang;
  t: typeof translations.en;
  toggle: () => void;
}>({
  lang: 'en',
  t: translations.en,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'en';
  });

  const toggle = () => {
    const next = lang === 'en' ? 'id' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);