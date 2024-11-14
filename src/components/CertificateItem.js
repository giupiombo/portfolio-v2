import classes from './CertificateItem.module.css';

const CertificateItem = ({ logo, title, link, date }) => {
  return (
    <div className={classes.column}>
      <div className={classes.imageFrame}>
        <img src={logo} className={classes.image} />
      </div>
      <div className={classes.details}>
        <a target="_blank" href={link}>
          {title}
        </a>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default CertificateItem;
