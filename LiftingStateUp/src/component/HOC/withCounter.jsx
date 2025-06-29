import React from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    incrimentCount = () => {
      this.setState((prevcount) => ({ count: prevcount.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return (
        <OriginalComponent count={count} incrimentCount={this.incrimentCount} />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
