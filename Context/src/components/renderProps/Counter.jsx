import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  incrementCount = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}

export default Counter;
