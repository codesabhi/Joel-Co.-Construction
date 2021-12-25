import styles from '../../styles/Pricing.module.css';

const Pricing = ({title, creator, teams, enterprise}) => {
    return (
            <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.header}>
                <h1 className={styles.subTitle}>{creator}</h1>
            </div>
            <div className={styles.header}>
                <h1 className={styles.subTitle}>{teams}</h1>
            </div>
            <div className={styles.header}>
                <h1 className={styles.subTitle}>{enterprise}</h1>
            </div>
        </div>
    )
}

export default Pricing
