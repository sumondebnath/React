// import CreateContext from "../lib/Context";

// const ThemeContext = CreateContext({
//   theme: "light",
// });

import React from "react";

const ThemeContext = React.createContext({
  theme: "dark",
});

export default ThemeContext;
