// import classes from './Skills.module.css';

// const Skills = () => {
//   const skills = [
//     {
//       category: 'Programming',
//       items: [
//         'Python',
//         'JavaScript',
//         'TypeScript',
//         'React.js',
//         'Next.js',
//         'React Native',
//         'HTML',
//         'CSS',
//         'Java',
//       ],
//     },
//     {
//       category: 'AWS',
//       items: [
//         'API Gateway',
//         'CloudWatch',
//         'DynamoDB',
//         'IAM',
//         'Lambda',
//         'RDS',
//         'Secrets Manager',
//         'S3',
//         'SNS',
//         'SQS',
//         'Step Functions',
//       ],
//     },
//     {
//       category: 'Database',
//       items: ['Snowflake', 'Firebase', 'MongoDB'],
//     },
//     {
//       category: 'Tools & Technologies',
//       items: ['Git', 'GitHub', 'Figma', 'SonarCloud', 'Vercel'],
//     },
//   ];

//   return (
//     <div className={classes.skills}>
//       <h2>Skills</h2>
//       <h3>Things I'm good at...</h3>
//       <div className={classes.skillGrid}>
//         {skills.map((skillCategory, index) => (
//           <div key={index} className={classes.skillCard}>
//             <h3>{skillCategory.category}</h3>
//             <ul>
//               {skillCategory.items.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaAws,
  FaGithub,
  FaGitSquare,
  FaJava,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSnowflake,
  SiFirebase,
  SiMongodb,
  SiFigma,
  SiSonarcloud,
  SiVercel,
} from 'react-icons/si';
import classes from './Skills.module.css';
import python from '../images/icons8-python.svg';
import javascript from '../images/icons8-javascript.svg';
import typescript from '../images/icons8-typescript.svg';
import react from '../images/icons8-react-native.svg';
import html from '../images/icons8-html5.svg';
import css from '../images/icons8-css.svg';
import java from '../images/icons8-java.svg';
import firebase from '../images/icons8-google-firebase-console.svg';
import mongodb from '../images/icons8-mongo-db-96.png';
import git from '../images/icons8-git.svg';
import figma from '../images/icons8-figma.svg';
import sonarcloud from '../images/sonarcloud-icon-512x449-31oqlodh.png';

const Skills = () => {
  const skills = [
    { name: 'Python', logo: python },
    { name: 'JavaScript', logo: javascript },
    { name: 'TypeScript', logo: typescript },
    { name: 'React.js', logo: react },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'React Native', logo: react },
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: css },
    { name: 'Java', logo: java },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Snowflake', icon: <SiSnowflake /> },
    { name: 'Firebase', logo: firebase },
    { name: 'MongoDB', logo: mongodb },
    { name: 'Git', logo: git },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Figma', logo: figma },
    { name: 'SonarCloud', logo: sonarcloud },
    { name: 'Vercel', icon: <SiVercel /> },
  ];

  return (
    <div className={classes.skills}>
      <h2>Skills</h2>
      <h3>Things I'm good at...</h3>
      <div className={classes.skillGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={classes.skillBox}>
            {skill.logo ? (
              <div className={classes.logoBox}>
                <img src={skill.logo} className={classes.logo} />
              </div>
            ) : (
              <div className={classes.iconBox}>{skill.icon}</div>
            )}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
