import styles from '../../styles/Prices.module.css'
import Pricing from './Pricing'
import { data } from '../../Data';

const Prices = () => {
    return (
        <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Key Features</h1>
                <h2 className={styles.subTitle}>View all Features</h2>
            </div>
            <div className={styles.header}>
                <h1 className={styles.title}>Creator</h1>
                <h2 className={styles.subTitles}>$99 per month, billed annually</h2>
            </div>
            <div className={styles.header}>
                <h1 className={styles.title}>Teams</h1>
                <h2 className={styles.subTitles}>$399 per month, billed annually</h2>
            </div>
            <div className={styles.header}>
                <h1 className={styles.title}>Enterprise</h1>
                <h2 className={styles.subTitles}>Schedule a call with us here</h2>
            </div>
            
        </div>
        {data.map((item)=>(

        
        <Pricing key={item.id} title={item.title} creator={item.creator} teams={item.teams} enterprise={item.enterprise}/>
        ))}
        </div>
    )
}

export default Prices
