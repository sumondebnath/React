// import { useState } from 'react';
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux"; // React-Redux
import { decrement, increment } from "./features/counters/countersSlice"; // React-Redux

// const initialCounters = [
//   {
//     id: 1,
//     value: 0
//   },
//   {
//     id: 2,
//     value: 0
//   }
// ];

export default function App() {
  // const [counters, setCounters] = useState(initialCounters);

  const counters = useSelector((state) => state.counters); // React-Redux
  const dispatch = useDispatch(); // React-Redux

  const handleIncrement = (counterID) => {
    // const updatedCounter = counters.map((counter) => {
    //   if (counter.id === counterID) {
    //     return {
    //       ...counter,
    //       value: counter.value + 1,
    //     }
    //   }
    //   return counter;
    // });
    // setCounters(updatedCounter);

    dispatch(increment(counterID)); // React-Redux
  };

  const handleDecrement = (counterID) => {
    // const updatedCounter = counters.map((counter) => {
    //   if (counter.id === counterID) {
    //     return {
    //       ...counter,
    //       value: counter.value - 1,
    //     }
    //   }
    //   return counter;
    // });
    // setCounters(updatedCounter);

    dispatch(decrement(counterID)); // React-Redux
  };

  const total = counters.reduce((sum, curr) => sum + curr.value, 0);

  return (
    <>
      <div>
        {/* <Counter /> */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </div>
      <Stats total={total} />
    </>
  );
}
