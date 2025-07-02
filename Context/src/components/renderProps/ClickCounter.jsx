export default function ClickCounter(props) {
  const { count, incrementCount } = props;

  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
}
