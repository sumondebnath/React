import { useState, useCallback, useMemo } from "react";
import Title from "./useCallback-useMemo/Title";
import ShowCount from "./useCallback-useMemo/ShowCount";
import Button from "./useCallback-useMemo/Button";

function FirstApp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <Title />
      <ShowCount count={count1} title={"Count 1"} />
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementByOne}>Incremant By One </Button>

      <hr />

      <ShowCount count={count2} title={"Count 2"} />
      <Button handleClick={incrementByFive}>Incremant By Five </Button>
    </div>
  );
}

export default FirstApp;
