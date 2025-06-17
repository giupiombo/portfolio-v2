import classes from './ProjectCard.module.css';

const ProjectCard = ({
  theme,
  image,
  name,
  description,
  note = '',
  skills,
  repository,
  website,
  reverse = false,
}) => {
  const iconColor = theme === 'dark' ? '#fff' : '#000'; // Set color based on the theme

  return (
    <div className={`${classes.card} ${reverse ? classes.reverse : ''}`}>
      <div className={classes.imageWrapper}>
        <img src={image} alt={name} />
        <div
          className={`${classes.overlay} ${
            theme === 'light' ? classes.overlayLight : ''
          }`}
        ></div>
      </div>
      <div className={classes.content}>
        <h3>{name}</h3>
        <div className={classes.description}>
          <p>{description}</p>
          {note && (
            <p className={classes.note}>
              <b>Note:</b> {note}
            </p>
          )}
        </div>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
        <div className={classes.links}>
          {repository && (
            <a href={repository} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ color: iconColor }}></i>
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i
                className="fas fa-arrow-up-right-from-square"
                style={{ color: iconColor }}
              ></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
