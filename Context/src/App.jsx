import ClickCounter from "./components/renderProps/ClickCounter";
import HoverCounter from "./components/renderProps/HoverCounter";
import Counter from "./components/renderProps/Counter";
import Section from "./components/Section";
import ThemeContext from "./contexts/themeContext";
import React from "react";

class App extends React.Component {
  state = {
    theme: "light",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return {
            theme: "light",
          };
        }
        return { theme: "dark" };
      });
    },
  };

  // switchTheme = () => {
  //   this.setState(({ theme }) => {
  //     if (theme === "dark") {
  //       return {
  //         theme: "light",
  //       };
  //     }
  //     return { theme: "dark" };
  //   });
  // };

  render() {
    const { theme } = this.state;

    return (
      <div>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>

        {/* <ThemeContext.Provider
          value={{ theme: theme, switchTheme: this.switchTheme }}
        > */}
        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
