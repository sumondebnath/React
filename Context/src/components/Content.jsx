import Counter from "./renderProps/Counter";
import HoverCounter from "./renderProps/HoverCounter";
import ThemeContext from "../contexts/themeContext";
import { useContext } from "react";

export default function Content() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>This is a Content.</p>
      <Counter>
        {(count, incrementCount) => {
          return (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
              theme={theme}
              switchTheme={switchTheme}
            />
          );
        }}
      </Counter>
    </div>
  );
}
