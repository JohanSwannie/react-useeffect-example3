import React, { useEffect, useState } from "react";

const PropChangeWatch = ({ a, b }) => {
  useEffect(() => {
    console.log("Prop a has changed and was detected in the useEffect Hook");
  }, [a]);

  return (
    <div>
      <h4>
        2 props on display: a={a} and b={b}
      </h4>
      <h4>The useEffect Hook has detected that Prop "a" has changed to {a}</h4>
    </div>
  );
};

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <PropChangeWatch a={count1} b={count2} />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </div>
  );
};

export default App;
