import { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };
    default:
      return state;
  }
};

export default function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count : {count.counter} </div>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment By +1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decriment By -1
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        Increment By +5
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        Decriment By -5
      </button>
    </div>
  );
}
