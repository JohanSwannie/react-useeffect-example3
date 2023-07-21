import React, { useEffect, useState } from "react";

const PropChangeWatch = ({ x, y, z }) => {
  useEffect(() => {
    alert(
      `Prop 'x' has changed and was detected in the useEffect Hook - The value is now ${x}`
    );
  }, [x]);

  return (
    <div>
      <h4>
        3 props on display: x = {x} and y = {y} and z = {z}
      </h4>
      <h4>The useEffect Hook has detected that Prop "x" has changed to {x}</h4>
    </div>
  );
};

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <PropChangeWatch x={count1} y={count2} z={count3} />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
    </div>
  );
};

export default App;
