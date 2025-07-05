import React from "react";

class MyClassComponent extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} Times.`;
    this.intervel = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervel);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} Times.`;
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  addClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { count, date } = this.state;

    return (
      <div>
        <p>Time : {date.toLocaleTimeString()}</p>
        <p>
          <button
            className="border-2 shadow-xs"
            type="button"
            onClick={this.addClick}
          >
            Click
          </button>
        </p>
      </div>
    );
  }
}

export default MyClassComponent;
