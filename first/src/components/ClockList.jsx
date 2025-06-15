import Clock from "./EventListener.jsx";

export default function ClockList({ quantities = [] }) {
  return (
    <div>
      {quantities.map((key) => (
        // <Clock key={key} />
        <Clock key={Math.random()} />
      ))}
    </div>
  );
}
