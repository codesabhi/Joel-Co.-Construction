import Image from "next/image";
import styles from "../styles/FeaturedContent.module.css";
const FeaturedContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Export your audio & share with over 10+ channel integrations
        </h1>
        <p className={styles.para}>
          Download your audio as beautiful Audioclips and share it with tons of
          channels with millions of listeners in one click so you are always on
          top of the (audio) world.
        </p>
      </div>
      <div className={styles.right}>
          <div className={styles.image}>
              <Image src="/images/Group5.png" alt="" width='650' height='562'/>
          </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
