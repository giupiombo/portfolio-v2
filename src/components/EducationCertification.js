import ttu from '../images/ttu.png';
import classes from './EducationCertification.module.css';
import CertificateItem from './CertificateItem';
import alura from '../images/alura.png';
import google from '../images/google.png';
import meta from '../images/meta.png';
import aws from '../images/aws.png';
import awsWhite from '../images/white-aws.png';
import udemy from '../images/udemy.png';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const EducationCertification = ({ theme }) => {
  const { lang } = useLanguage();
  const t = useTranslation(lang, 'educationCertification');

  const awsImage = theme === 'dark' ? awsWhite : aws;

  const imageMap = {
    alura,
    google,
    meta,
    awsImage,
    udemy,
  };

  return (
    <div className={classes.educationCertification}>
      <h2>{t.title}</h2>
      <div className={classes.column}>
        <div>
          <h3>{t.educationSubtitle}</h3>
          <div className={classes.itemColumn}>
            <div className={classes.one}>
              <img src={ttu} width={200} />
            </div>
            <div className={classes.two}>
              {t.education.map((item, idx) => (
                <>
                  <h4>{item.university}</h4>
                  <p>{item.term}</p>
                  <p>{item.degree}</p>
                  {item.notes.map((note, idx) => (
                    <>
                      <p>{note}</p>
                    </>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.certificates}>
          <h3>{t.certificationSubtitle}</h3>
          <div className={classes.certificatesList}>
            {t.certificates.map((item, idx) => (
              <CertificateItem
                key={idx}
                logo={imageMap[item.logo]}
                title={item.title}
                link={item.link}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertification;
