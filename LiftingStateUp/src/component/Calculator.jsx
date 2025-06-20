import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import {convert, toCelsius, toFahrenheit} from "../lib/Converter"

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (event, scale) => {
    this.setState({
      temperature: event.target.value,
      scale: scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? convert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
