import Header from "../components/Pricing/Header";
import Plans from "../components/Pricing/Plans";
import Prices from "../components/Pricing/Prices";
import Questionaire from "../components/Pricing/Questionaire";
const obj1 = [{}];
const obj2 = [{}];

const features = () => {
  return (
    <div>
      <Header />
      <Plans obj1={obj1} />
      <Prices />
      <Plans obj2={obj2} />
      <Questionaire />
    </div>
  );
};

export default features;
