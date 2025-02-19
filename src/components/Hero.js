import { ReactTyped } from 'react-typed';
import classes from './Hero.module.css';

const Hero = ({ scrollToExperience }) => {
  return (
    <div className={classes.hero}>
      <h1>
        Hi, <ReactTyped strings={['my name is Giulia.']} typeSpeed={100} loop />
      </h1>
      {/* <h1>
        <ReactTyped
          strings={[
            "Hi, I'm Giulia!",
            'Passionate About Frontend Development.',
            'Building Beautiful & Interactive Experiences.',
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </h1> */}
      <h2>Software Developer | UI Enthusiast</h2>
      {/* <p className={classes.heroDescription}>
        I turn ideas into stunning, high-performing web applications. Obsessed
        with clean code, modern UI, and seamless user experiences.
      </p> */}
      <button className={classes.heroButton} onClick={scrollToExperience}>
        View My Work ↓
      </button>
    </div>
  );
};

export default Hero;
