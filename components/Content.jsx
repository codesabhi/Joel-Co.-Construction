import Image from "next/image";
import styles from "../styles/Content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Augmented Recording</h1>
        <p className={styles.para}>
          Your synced voice records short-form content for you. By entering a
          script and editing in real-time, it works 10x faster than manual
          recording.
        </p>
        <div className={styles.image}>
          <Image src="/images/Group1.png" alt="" width="457" height="379" />
        </div>
        <h1 className={styles.title}>Augmented Recording</h1>
        <p className={styles.para}>
        Deepsync supports Heteronyms, Abbreviations,
Currencies, websites and tons of other modes.
In meantime, it keeps getting better.
        </p>
        <div className={styles.image}>
          <Image src="/images/Group3.png" alt="" width="457" height="379" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.titleRight}>Powerful Editing</h1>
        <p className={styles.paraRight}>
          The editor uses AI to automatically reduce friction. Mix and match
          audios, sounds, and music to build the best audio experience
        </p>
        <div className={styles.imageRight}>
          <Image src="/images/Group2.png" alt="" width="457" height="360.64" />
        </div>
        <h1 className={styles.titleRight}>Powerful Editing</h1>
        <p className={styles.paraRight}>
        Download your finished audio in HD .wav
file with professional ID3 Tags ready for
sharing on all major platforms and channels.
        </p>
        <div className={styles.imageRight}>
          <Image src="/images/Group4.png" alt="" width="457" height="360.64" />
        </div>
      </div>
    </div>
  );
};

export default Content;
