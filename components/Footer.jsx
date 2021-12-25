import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image}>
          <Image src='/images/Logo.png' alt='' width='183' height='35'/>
        </div>
        <div className={styles.icons}>
          <div className={styles.socialIcon}>
            <Image className={styles.icon} src='/images/icon1.png' alt='' width='30' height='30' />
            <Image className={styles.icon} src='/images/icon2.png' alt='' width='30' height='30' />
            <Image className={styles.icon} src='/images/icon3.png' alt='' width='30' height='30' />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.main}>
        <div className={styles.footer}>
          <h1 className={styles.title}>Product</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>Features</li>
            <li className={styles.listItem}>Pricing</li>
            <li className={styles.listItem}>Login</li>
          </ul>
          </div>
          <div className={styles.footer}>
          <h1 className={styles.title}>Company</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>About</li>
            <li className={styles.listItem}>FAQs</li>
            <li className={styles.listItem}>Careers</li>
          </ul>
          </div>
          <div className={styles.footer}>
          <h1 className={styles.title}>Resources</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>Terms & Conditions</li>
            <li className={styles.listItem}>Privacy Policy</li>
            {/* <li className={styles.listItem}>Login</li> */}
          </ul>
          </div>
          <div className={styles.footer}>
          <h1 className={styles.title}>Contact Us</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>example@deepsync.co</li>
          </ul>
          </div>
        </div>
        <h1 className={styles.bottom}>© 2021 Deepsync Technologies. All Rights Reserved.</h1>
      </div>
    </div>
  )
};

export default Footer;
