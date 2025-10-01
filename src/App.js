import Footer from './components/Footer';
import Work from './components/Work';
import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <LanguageProvider>
      <Work setTheme={setTheme} theme={theme} />
      <Footer theme={theme} />
    </LanguageProvider>
  );
}

export default App;
