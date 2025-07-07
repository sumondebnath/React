import { useState, useEffect, useRef } from "react";

function Timer() {
  const [date, setDate] = useState(new Date());
  const IntervalRef = useRef();

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    IntervalRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Time : {date.toLocaleTimeString()}</p>
      <p>
        <button
          type="button"
          onClick={() => clearInterval(IntervalRef.current)}
        >
          CleanUp
        </button>
      </p>
    </div>
  );
}

export default Timer;
