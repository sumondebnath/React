import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function CounterLocal() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Count : {count} </div>
        <button type="button" onClick={() => dispatch("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch("decrement")}>
          Decriment
        </button>
      </div>
      <div>
        <div>Count-2 : {count2} </div>
        <button type="button" onClick={() => dispatch2("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch2("decrement")}>
          Decriment
        </button>
      </div>
    </div>
  );
}
