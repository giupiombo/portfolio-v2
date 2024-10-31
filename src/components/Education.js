import ttu from '../images/ttu.png';
import classes from './Education.module.css';

const Education = () => {
  return (
    <>
      <h2>Education</h2>
      <h3>Things I learned...</h3>
      <div className={classes.itemColumn}>
        <div className={classes.one}>
          <img src={ttu} width={200} />
        </div>
        <div className={classes.two}>
          <h4>Texas Tech University</h4>
          <p>August 2019 - December 2022</p>
          <p>Bachelor's Degree in Computer Engineering</p>
          <p>Honors College</p>
          <p>Minors in Mathematics and Computer Science</p>
          <p>
            Founder and former president of BRASA at Tech Student Organization
          </p>
          <div className={classes.skills}>
            <p>Programming</p>
            <p>Leadership</p>
            <p>Design</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
