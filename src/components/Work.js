import classes from './Work.module.css';
import Education from './Education';
import Experience from './Experience';
import Hero from './Hero';
import Certification from './Certification';
import { useRef } from 'react';
import Skills from './Skills';

const Work = () => {
  const experienceRef = useRef(null);

  return (
    <div className={classes.work}>
      <Hero
        scrollToExperience={() =>
          experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <Experience ref={experienceRef} />
      <Skills />
      <Certification />
      <Education />
    </div>
  );
};

export default Work;
