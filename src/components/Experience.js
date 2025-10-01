import classes from './Experience.module.css';
import CustomizedTimeline from './CustomizedTimeline';
import { forwardRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Experience = forwardRef((props, ref) => {
  const { lang } = useLanguage();
  const t = useTranslation(lang, 'experience');

  return (
    <div ref={ref} className={classes.experience}>
      <h2>{t.title}</h2>
      <h3>{t.subtitle}</h3>
      <div className={classes.timeline}>
        <CustomizedTimeline experience={t.experience} />
      </div>
    </div>
  );
});

export default Experience;
