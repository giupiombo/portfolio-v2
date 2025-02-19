import React, { useState, useEffect } from 'react';
import classes from './Footer.module.css';

const Footer = ({ theme }) => {
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
