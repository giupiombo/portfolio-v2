import { ReactTyped } from 'react-typed';
import work from '../images/work.png';
import art from '../images/art.png';
import skills from '../images/skills.png';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>
        Hi, <ReactTyped strings={['my name is Giulia.']} typeSpeed={100} loop />
      </h1>
      <div className={classes.column}>
        <div className={classes.item}>
          <img src={art} alt="work" width={50} />
          <p>Creative</p>
        </div>
        <div className={classes.item}>
          <img src={work} alt="art" width={50} />
          <p>Software Developer</p>
        </div>
        <div className={classes.item}>
          <img src={skills} alt="skills" width={50} />
          <p>Organized</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
