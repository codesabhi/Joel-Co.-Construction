import styles from '../styles/Featured.module.css';


const Featured = () => {
    return (
        <div className={styles.container}>
        <div className={styles.square}></div>
        <div className={styles.squares}></div>
        <div className={styles.text}>
            <h1 className={styles.title}>Create. Engage. Grow</h1>
            <p className={styles.para}>
                Unlike long 30-40 minute podcasts that are created weekly or bi-weekly, short-form audio can be shared regularly such as an audio blog post or a daily cooking recipe which we help create without manual effort.
            </p>
            <button className={styles.button}>Get Started</button>
        </div>
            
        </div>
    )
}

export default Featured

