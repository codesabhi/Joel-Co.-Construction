import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.square}></div>
      <div className={styles.squares}></div>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            className={styles.image}
            src="/images/Logo.png"
            alt=""
            width="180"
            height="30"
          />
        </div>
      </div>
      <div className={styles.center}>
        <ul className={styles.item}>
          {/* Link used for file based routing without reloading the pages */}
          <li className={styles.list}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/">
              <a>Features</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
