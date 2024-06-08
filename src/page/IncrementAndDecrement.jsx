import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const IncrementAndDecrement = () => {
  const [money, setMoney] = useState(0);
  const incrementMoney = () => {
    setMoney(money + 1000);
  };

  const decrementMoney = () => {
    setMoney(money - 500);
  };
  return (
    <div>
      <div>
        <h1>Money: ${money}</h1>
        <Child1 incrementMoney={incrementMoney} />
        <Child2 decrementMoney={decrementMoney} />
      </div>
    </div>
  );
};

export default IncrementAndDecrement;
