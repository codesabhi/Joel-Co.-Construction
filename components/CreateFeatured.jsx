import Image from "next/image";
import styles from "../styles/CreateFeatured.module.css";

const CreateFeatured = ({ data, datas }) => {
  return (
    <div className={styles.container}>
      {data ? (
        <>
          <div className={styles.image}>
            <Image
              className={styles.frame}
              src="/images/Frame1.png"
              alt=""
              width="54"
              height="50"
            />
          </div>
          <h1 className={styles.title}>Create with Deepsync</h1>
          <p className={styles.para}>
            Deepsync syncs your voice and lets you create short form audio with
            just scripts saving not only time but also production costs.
          </p>
        </>
      ) : null}
      {datas ? (
        <>
          <div className={styles.images}>
            <Image
              className={styles.frame}
              src="/images/Frame2.png"
              alt=""
              width="66"
              height="57"
            />
          </div>
          <h1 className={styles.title}>Grow & Engage with Deepsync</h1>
          <p className={styles.paras}>
            Deepsync lets you share your voice across channels in high quality
            and helps you analyze and grow your listener base.
          </p>
        </>
      ) : null}
    </div>
  );
};

export default CreateFeatured;
