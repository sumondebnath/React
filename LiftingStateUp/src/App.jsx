// import Calculator from "./component/Calculator";

// import ClickCounter from "./component/ClickCounter";
// import HoverCounter from "./component/HoverCounter";

import ClickCounter from "./component/HOC/ClickCounter";
import HoverCounter from "./component/HOC/HoverCounter";

function App() {
  // return <Calculator />;

  return (
    <div className="App">
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}

      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
