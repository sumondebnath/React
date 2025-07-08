import React, { useReducer } from "react";
import ComponentA from "./ComponentA";

export const CounterContext = React.createContext();

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

export default function ComponentApp() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <div>Count : {count}</div>
      <CounterContext.Provider value={{ CountDispatch: dispatch }}>
        <ComponentA />
      </CounterContext.Provider>
    </div>
  );
}
