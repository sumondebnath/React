import { useState, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("UseEffect Call and Updating.");
    document.title = `Clicked ${count} Times.`;
  }, [count]);

  useEffect(() => {
    console.log("Starting timer ...");
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("Component Unmount...");
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    console.log("Clock Ticking...");
    setDate(new Date());
  };

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Time : {date.toLocaleTimeString()}</p>
      {/* <p>
        <input
          className="border-2"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </p> */}
      <p>
        <button className="border-2 shadow-xs" type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
