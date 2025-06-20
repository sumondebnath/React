import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  //   const { temperature, scale, onTemperatureChange } = props;

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}: </legend>
      <input
        type="text"
        value={temperature}
        onChange={(event) => onTemperatureChange(event, scale)}
      />
    </fieldset>
  );
}
