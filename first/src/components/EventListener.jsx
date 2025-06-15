import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" }; // Constructor and this single line same.

  componentDidMount() {
    this.clearTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clearTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      // locale : "en-US",
      locale: locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    // let button;
    // if (locale === "bn-BD") {
    //   button = (
    //     <Button change={this.handleClick} locale="en-US">
    //       Click Here
    //     </Button>
    //   );
    // } else {
    //   button = (
    //     <Button change={this.handleClick} locale="bn-BD">
    //       Click Here
    //     </Button>
    //   );
    // }
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* <button type="button" onClick={this.handleClick}> */}
        {/* This line is the Event Handling OnClick function call */}
        {/* <button type="button" onClick={() => this.handleClick("en-US")}>
          It is function call with Parameter.
          Click Here
        </button> */}

        {/* {button} */}

        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" />
        )}
      </div>
    );
  }
}

export default Clock;
