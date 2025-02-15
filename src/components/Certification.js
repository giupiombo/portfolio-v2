import CertificateItem from './CertificateItem';
import classes from './Certification.module.css';
import google from '../images/google.png';
import meta from '../images/meta.png';
import aws from '../images/aws.png';
import awsWhite from '../images/white-aws.png';
import udemy from '../images/udemy.png';
import React, { useState, useEffect } from 'react';

const Certification = () => {
  const [theme, setTheme] = useState('light'); // Default theme to 'light'
  const [awsImage, setAwsImage] = useState(aws);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      const currentTheme = mediaQuery.matches ? 'dark' : 'light';
      setTheme(currentTheme);
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    handleThemeChange();

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      setAwsImage(awsWhite);
    } else {
      setAwsImage(aws);
    }
  }, [theme]);

  const certificates = [
    {
      logo: google,
      title: 'Project Management',
      link: 'https://www.coursera.org/account/accomplishments/specialization/MCCKS3QR5QL7',
      date: 'Issued Oct 2024',
    },
    {
      logo: meta,
      title: 'Front-End Developer',
      link: 'https://coursera.org/verify/professional-cert/YIRPC57GWMSE',
      date: 'Issued Sep 2024',
    },
    {
      logo: awsImage,
      title: 'Certified Cloud Practitioner',
      link: 'https://www.credly.com/badges/47a25b5c-8e9e-4f5b-ba9b-e838f005c6cd/linked_in_profile',
      date: 'Issued Mar 2023',
    },
    {
      logo: udemy,
      title: 'React - The Complete Guide',
      link: 'https://www.udemy.com/certificate/UC-dedd07af-796f-408d-a379-4f9983e3945f/',
      date: 'Issued Mar 2023',
    },
    {
      logo: udemy,
      title: 'React Native',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a7187b09-d6c2-4a1b-8659-1feca2cd594b.pdf',
      date: 'Issued Mar 2023',
    },
  ];

  return (
    <div className={classes.certification}>
      <h2>Certification</h2>
      <h3>Things I earned...</h3>
      <div className={classes.column}>
        {certificates.map((item, idx) => (
          <CertificateItem
            key={idx}
            logo={item.logo}
            title={item.title}
            link={item.link}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Certification;
