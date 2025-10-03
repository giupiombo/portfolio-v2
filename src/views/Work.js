import classes from './Work.module.css';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import { useRef } from 'react';
import Skills from '../components/Skills';
import EducationCertification from '../components/EducationCertification';
import Projects from '../components/Projects';

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
      <Projects theme={theme} />
      <Skills theme={theme} />
      <EducationCertification theme={theme} />
    </div>
  );
};

export default Work;
