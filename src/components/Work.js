import classes from './Work.module.css';
import Education from './Education';
import Experience from './Experience';
import Hero from './Hero';

const Work = () => {
  return (
    <div className={classes.work}>
      <Hero />
      <Experience />
      <Education />
    </div>
  );
};

export default Work;
