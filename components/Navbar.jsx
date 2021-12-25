import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Image className={styles.image} src='/images/Logo.png' alt='' width='180' height='30' />
                </div>
                {/* <div className={styles.title}></div> */}
            </div>
            <div className={styles.center}>
                <ul className={styles.item}>
                    <li className={styles.list}>Home</li>
                    <li className={styles.list}>Features</li>
                    <li className={styles.list}>Pricing</li>
                    <li className={styles.list}>About</li>
                </ul>
            </div>
            <div className={styles.right}>
                <button className={styles.login}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar
