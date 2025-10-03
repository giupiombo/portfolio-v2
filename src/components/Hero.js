import { ReactTyped } from 'react-typed';
import classes from './Hero.module.css';
import ThemeButton from './ThemeButton';
import meWhite from '../images/me-white.png';
import meBlack from '../images/me-black.png';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ setTheme, theme, scrollToExperience }) => {
  const meImage = theme === 'dark' ? meWhite : meBlack;

  const { lang, toggleLang } = useLanguage();
  const t = useTranslation(lang, 'hero');

  return (
    <div className={classes.hero}>
      <ThemeButton setTheme={setTheme} theme={theme} />
      <div className={classes.langToggle} onClick={toggleLang}>
        <div
          className={`${classes.langIndicator} ${
            lang === 'pt' ? classes.pt : classes.en
          }`}
        >
          {lang === 'en' ? '🇺🇸' : '🇧🇷'}
        </div>
      </div>

      <div className={classes.columns}>
        <div className={classes.imageContainer}>
          <img
            src={meImage}
            className={classes.heroImage}
            alt="Portrait of Giulia"
          />
        </div>
        <div className={classes.textContainer}>
          <h1>
            {t.greeting} <br />
            <span className={classes.typedWrapper}>
              <ReactTyped strings={t.typed} typeSpeed={100} loop />
            </span>
          </h1>
          <h2>
            {t.subtitle[0]} <br />
            {t.subtitle[1]}
          </h2>
        </div>
      </div>
      <button className={classes.heroButton} onClick={scrollToExperience}>
        {t.button}
      </button>
    </div>
  );
};

export default Hero;
