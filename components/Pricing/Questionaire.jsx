import Question from "./Question"
import styles from '../../styles/Question.module.css'

const Questionaire = () => {
    return (
        <div className={styles.container}>
            <Question/>
            <Question/>
            <Question/>
        </div>
    )
}

export default Questionaire
