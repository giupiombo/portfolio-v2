import { ReactTyped } from 'react-typed';
import classes from './Hero.module.css';
import dev from '../images/software-developer-illustration.png';
// import dev from '../images/dev.png';

const Hero = ({ scrollToExperience }) => {
  return (
    <div className={classes.hero}>
      <div className={classes.columns}>
        <div className={classes.imageContainer}>
          <img src={dev} className={classes.heroImage} />
        </div>
        <div className={classes.textContainer}>
          <h1>
            Hi, <br />
            <span className={classes.typedWrapper}>
              <ReactTyped
                strings={['my name is Giulia.']}
                typeSpeed={100}
                loop
              />
            </span>
          </h1>
          <h2>Software Developer | UI Enthusiast</h2>
        </div>
      </div>

      <button className={classes.heroButton} onClick={scrollToExperience}>
        View My Work ↓
      </button>
    </div>
  );
};

export default Hero;
