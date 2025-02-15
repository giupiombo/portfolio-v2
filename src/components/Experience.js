import classes from './Experience.module.css';
import CustomizedTimeline from './CustomizedTimeline';

const Experience = () => {
  return (
    <div className={classes.experience}>
      <h2>Experience</h2>
      <h3>Things I worked on...</h3>
      <div className={classes.timeline}>
        <CustomizedTimeline />
      </div>
    </div>
  );
};

export default Experience;
