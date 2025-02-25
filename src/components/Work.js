import classes from './Work.module.css';
import Education from './Education';
import Experience from './Experience';
import Hero from './Hero';
import Certification from './Certification';
import { useRef } from 'react';
import Skills from './Skills';
import EducationCertification from './EducationCertification';

const Work = ({ theme }) => {
  const experienceRef = useRef(null);

  return (
    <div className={classes.work}>
      <Hero
        theme={theme}
        scrollToExperience={() =>
          experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <Experience ref={experienceRef} />
      <Skills theme={theme} />
      {/* <Certification theme={theme} /> */}
      {/* <Education /> */}
      <EducationCertification theme={theme} />
    </div>
  );
};

export default Work;
