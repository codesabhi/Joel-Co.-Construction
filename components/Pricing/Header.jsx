import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Easy Affordable Pricing</h1>
          <p className={styles.para1}>
            Plans to supercharge your audio strategy
          </p>
        </div>
        <div className={styles.right}>
          <h1 className={styles.head}>Billed</h1>
          <button className={styles.button}>Annually</button>
        </div>
      </div>
      <div className={styles.main}>
      <div className={styles.box1}>
        <h1 className={styles.heading}>Creater</h1>
        <p className={styles.para}>
          For influencers, podcasters & creative individuals
        </p>
        <h1 className={styles.price}>
          <span className={styles.dollar}>$</span>99
        </h1>
        <p className={styles.desc}>Per month. Billed Annually</p>
      </div>
      <div className={styles.box2}>
        <h1 className={styles.heading}>Teams</h1>
        <p className={styles.para}>For growing teams irrespective of size</p>
        <h1 className={styles.price}>
          <span className={styles.dollar}>$</span>399
        </h1>
        <p className={styles.desc}>Per month. Billed Annually</p>
      </div>
      <div className={styles.box3}>
        <h1 className={styles.heading}>Enterprise</h1>
        <p className={styles.para}>
          Have custom requirements for a larger organization?
        </p>
        <button className={styles.contact}>Contact Us</button>
      </div>
      </div>
    </div>
  );
};

export default Header;
