import ProjectCard from './ProjectCard';
import classes from './Projects.module.css';
import recipeFinder from '../images/recipe-finder.png';
import photoAlbumDark from '../images/photo-album-dark.png';
import photoAlbumLight from '../images/photo-album-light.png';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Projects = ({ theme }) => {
  const { lang } = useLanguage();
  const t = useTranslation(lang, 'projects');

  const photoAlbum = theme === 'dark' ? photoAlbumDark : photoAlbumLight;

  const imageMap = {
    recipeFinder,
    photoAlbum,
  };

  return (
    <div className={classes.projects}>
      <h2>{t.title}</h2>
      <h3>{t.subtitle}</h3>
      {t.projects.map((item, idx) => (
        <ProjectCard
          key={idx}
          theme={theme}
          image={imageMap[item.image]}
          name={item.name}
          description={item.description}
          note={item.note}
          skills={item.skills}
          repository={item.repository}
          website={item.website}
          reverse={idx % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Projects;
