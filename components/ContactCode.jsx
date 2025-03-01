import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'adelahmedsayed399@gmail.com',
  //   href: 'https://adelahmedsayed399.me',
  // },
  {
    social: 'email',
    link: 'adelahmedsayed399@gmail.com',
    href: 'https://adelahmedsayed399.me',
  },
  {
    social: 'github',
    link: 'AdelAhmed2000',
    href: 'https://github.com/AdelAhmed2000',
  },
  {
    social: 'linkedin',
    link: 'adel-ahmed',
    href: 'https://www.linkedin.com/in/adel-ahmed-373a33216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    social: 'instagram',
    link: 'a_d_e_l.20',
    href: 'https://www.instagram.com/a_d_e_l.20?igsh=MXNwamx6emFtdGo3cw==',
  },
  {
    social: 'telegram',
    link: 'AdelAhmed',
    href: 't.me/AdelAhmedAD',
  },
  {
    social: 'codepen',
    link: 'AdelAhmed',
    href: 'https://codepen.io/adelahmed2000',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
