import ProjectCard from './ProjectCard';
import classes from './Projects.module.css';
import recipeFinder from '../images/recipe-finder.png';
import photoAlbumDark from '../images/photo-album-dark.png';
import photoAlbumLight from '../images/photo-album-light.png';

const Projects = ({ theme }) => {
  const photoAlbum = theme === 'dark' ? photoAlbumDark : photoAlbumLight;

  const projects = [
    {
      image: recipeFinder,
      name: 'Recipe Finder',
      description:
        'AI-powered recipe generator that lets users find meals based on selected ingredients, dietary restrictions, available tools, and cuisines. Also includes smart drink pairing suggestions.',
      note: 'The backend is hosted on a free-tier service and might take a moment to wake up — but it will run smoothly right after!',
      skills: [
        'React',
        'TypeScript',
        'TailwindCSS',
        'Python',
        'Google Gemini & ADK',
        'Vercel',
        'FastAPI',
      ],
      repository: 'https://github.com/giupiombo/recipe-finder-frontend',
      website: 'https://recipe-finder-genai.vercel.app/',
    },
    {
      image: photoAlbum,
      name: 'Photo Album',
      description:
        'A personal photo gallery app designed to showcase my original photography work in a clean, responsive layout.',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Vercel'],
      repository: 'https://github.com/giupiombo/photo-album',
      website: 'https://giupiombo-photo-album.vercel.app/',
    },
  ];
  return (
    <div className={classes.projects}>
      <h2>Projects</h2>
      <h3>Things I built...</h3>
      {projects.map((item, idx) => (
        <ProjectCard
          key={idx}
          theme={theme}
          image={item.image}
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
