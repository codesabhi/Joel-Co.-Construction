import styles from '../styles/Demo.module.css'

const Demo = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.circle}></div> */}
            <h1 className={styles.title}>Create quality audio in any voice in minutes</h1>
            <p className={styles.para}>Create, Engage and Grow your listener base with the power of AI</p>
            <button className={styles.demo}>Get a Demo</button>
        </div>
    )
}

export default Demo
