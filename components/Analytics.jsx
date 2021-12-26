import Image from "next/image";
import styles from "../styles/Analytics.module.css";

const Analytics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image}>
          <Image src="/images/Group6.png" alt="" width="588" height="562" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>
          Analyze and grow your listener base with Analytics & Expert Guides
        </h1>
        <p className={styles.para}>
          With our In-depth Analytics, you always see the front-view of how your
          audio is performing.
          <br />
          <br />
          We craft a ton of guides and lessons for the audio community to help
          you craft great content and grow your listeners.
        </p>

        <button className={styles.button}>Read More </button>
      </div>
    </div>
  );
};

export default Analytics;
