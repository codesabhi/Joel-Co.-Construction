import Header from "../components/Features/Header"
import Plans from "../components/Features/Plans"
import Prices from "../components/Features/Prices"
import Question from "../components/Features/Question";
import Questionaire from "../components/Features/Questionaire";
const obj1 = [{}];
const obj2 = [{}]


const features = () => {
    return (
        <div>
            <Header/>
            <Plans obj1={obj1}/>
            <Prices/>
            <Plans obj2={obj2}/>
            <Questionaire/>
        </div>
    )
}

export default features
