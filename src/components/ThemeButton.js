import classes from './ThemeButton.module.css';

const ThemeButton = ({ setTheme, theme }) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      id="theme-toggle"
      className={classes.toggleButton}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeButton;
