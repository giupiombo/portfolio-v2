import enHero from '../resources/en/hero.json';
import enExperience from '../resources/en/experience.json';
import enProjects from '../resources/en/projects.json';
import enSkills from '../resources/en/skills.json';
import enEducationCertification from '../resources/en/education_certification.json';

import ptHero from '../resources/pt/hero.json';
import ptExperience from '../resources/pt/experience.json';
import ptProjects from '../resources/pt/projects.json';
import ptSkills from '../resources/pt/skills.json';
import ptEducationCertification from '../resources/pt/education_certification.json';

const translations = {
  en: {
    hero: enHero,
    experience: enExperience,
    projects: enProjects,
    skills: enSkills,
    educationCertification: enEducationCertification,
  },
  pt: {
    hero: ptHero,
    experience: ptExperience,
    projects: ptProjects,
    skills: ptSkills,
    educationCertification: ptEducationCertification,
  },
};

export function useTranslation(lang = 'en', namespace) {
  return translations[lang]?.[namespace] || {};
}
