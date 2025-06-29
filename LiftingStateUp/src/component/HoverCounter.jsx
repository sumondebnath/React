import React from "react";

export default class HoverCounter extends React.Component {
  state = {
    count: 0,
  };

  incrimentCount = () => {
    this.setState((prevcount) => ({ count: prevcount.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1 onMouseOver={this.incrimentCount}>Hovered {count} times</h1>
      </div>
    );
  }
}
