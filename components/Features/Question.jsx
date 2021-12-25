import Image from 'next/image';
import styles from '../../styles/Question.module.css';

const Question = () => {
    return (
        <div className={styles.containers}>
            <div className={styles.header}>
                <h1 className={styles.title}>Do you provide any ready-made voices like Google or Amazon?</h1>
                <div className={styles.images}>
                    <Image src='/images/Arrow.png' alt='' width='12' height='6' />
                </div>
            </div>
            <div className={styles.header}>
                <h1 className={styles.title}>Do you provide any ready-made voices like Google or Amazon?</h1>
                <div className={styles.images}>
                    <Image src='/images/Arrow.png' alt='' width='12' height='6' />
                </div>
            </div>
            <div className={styles.header}>
                <h1 className={styles.title}>Do you provide any ready-made voices like Google or Amazon?</h1>
                <div className={styles.images}>
                    <Image src='/images/Arrow.png' alt='' width='12' height='6' />
                </div>
            </div>
        </div>
    )
}

export default Question
