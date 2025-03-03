import Footer from './components/Footer';
import Work from './components/Work';
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
      <Work setTheme={setTheme} theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default App;
