import styles from '../../styles/Plans.module.css'

const Plans = ({obj1, obj2}) => {
    return (
        <>
        {(obj1)? (<div className={styles.container}>
            <h2 className={styles.title}>What is included in each plan?</h2>
            <h1 className={styles.subTitle}>Compare Plans & Features</h1>
         </div>): (null)}
         {(obj2)? (<div className={styles.container}>
            <h2 className={styles.title}>Got Questions?</h2>
            <h1 className={styles.subTitle}>Frequently Asked Questions</h1>
         </div>):(null)}
         </>
        
    )
}

export default Plans
