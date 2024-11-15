import React, { useState, useEffect } from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      const currentTheme = mediaQuery.matches ? 'dark' : 'light';
      setTheme(currentTheme);
    };

    mediaQuery.addEventListener('change', handleThemeChange);
    handleThemeChange();

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const iconColor = theme === 'dark' ? '#fff' : '#000'; // Set color based on the theme

  return (
    <footer className={classes.footer}>
      <p>© Copyright {new Date().getFullYear()}. Made by Giulia Piombo.</p>
      <div className={classes.socialIcons}>
        <a
          href="https://linkedin.com/in/giulia-piombo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" style={{ color: iconColor }}></i>
        </a>
        <a
          href="https://github.com/giupiombo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={{ color: iconColor }}></i>
        </a>
        <a
          href="mailto:giulia.piombo01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope" style={{ color: iconColor }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
