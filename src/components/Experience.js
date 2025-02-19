import classes from './Experience.module.css';
import CustomizedTimeline from './CustomizedTimeline';
import { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.experience}>
      <h2>Experience</h2>
      <h3>Things I worked on...</h3>
      <div className={classes.timeline}>
        <CustomizedTimeline />
      </div>
    </div>
  );
});

export default Experience;
