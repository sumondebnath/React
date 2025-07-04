import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        className="border-2 border-sky-600 rounded hover:bg-white bg-cyan-600 m-2 px-2 text-white hover:text-black"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Add +1
      </button>
      <button
        className="border-2 border-sky-600 rounded hover:bg-white bg-cyan-600 m-2 px-2 text-white hover:text-black"
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 5)}
      >
        Add +5
      </button>
    </div>
  );
}

export default Counter;
