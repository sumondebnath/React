import withCounter from "./withCounter";

const HoverCounter = (props) => {
  const { count, incrimentCount } = props;

  return (
    <div>
      <h4 onMouseOver={incrimentCount}>Hovered {count} times</h4>
    </div>
  );
};

export default withCounter(HoverCounter);
