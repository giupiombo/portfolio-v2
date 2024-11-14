import classes from './Work.module.css';
import Education from './Education';
import Experience from './Experience';
import Hero from './Hero';
import Certification from './Certification';

const Work = () => {
  return (
    <div className={classes.work}>
      <Hero />
      <Experience />
      <Education />
      <Certification />
    </div>
  );
};

export default Work;
