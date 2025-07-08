import { useContext } from "react";
import { CounterContext } from "./ComponentApp";

export default function ComponentB() {
  const countContext = useContext(CounterContext);

  return (
    <div>
      <p>Component - B </p>
      <button
        type="button"
        onClick={() => countContext.CountDispatch("increment")}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => countContext.CountDispatch("decrement")}
      >
        Decriment
      </button>
    </div>
  );
}
