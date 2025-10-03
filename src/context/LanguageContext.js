import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getDefaultLang = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang');
      if (saved) return saved;

      const userLang = navigator.language || navigator.userLanguage;
      return userLang.startsWith('pt') ? 'pt' : 'en';
    }
    return 'en';
  };

  const [lang, setLang] = useState(getDefaultLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
