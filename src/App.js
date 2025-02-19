import Footer from './components/Footer';
import Work from './components/Work';
import ThemeButton from './components/ThemeButton';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <ThemeButton setTheme={setTheme} theme={theme} />
      <Work theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default App;
