import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { count, incrimentCount } = props;

  return (
    <div>
      <button type="button" onClick={incrimentCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
