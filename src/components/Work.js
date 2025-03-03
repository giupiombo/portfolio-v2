import classes from './Work.module.css';
import Experience from './Experience';
import Hero from './Hero';
import { useRef } from 'react';
import Skills from './Skills';
import EducationCertification from './EducationCertification';

const Work = ({ setTheme, theme }) => {
  const experienceRef = useRef(null);

  return (
    <div className={classes.work}>
      <Hero
        setTheme={setTheme}
        theme={theme}
        scrollToExperience={() =>
          experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <Experience ref={experienceRef} />
      <Skills theme={theme} />
      <EducationCertification theme={theme} />
    </div>
  );
};

export default Work;
