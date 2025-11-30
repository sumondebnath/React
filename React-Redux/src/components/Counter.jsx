import Button from "./Button";

const Counter = ({ count, onIncrement, onDecrement }) => {
  // const [count, setCount] = useState(0);

  // const handlecount = (val) => {
  //     setCount((prev) => prev + val);
  // }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <Button handler={onIncrement}>Increment</Button>
        <Button handler={onDecrement}>Decrement</Button>
      </div>
    </>
  );
};

export default Counter;
