import React from "react";

export default class ClickCounter extends React.Component {
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
        <button type="button" onClick={this.incrimentCount}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}
