// import Todo from "./components/classComponents/TodoClass";
import Todo from "./components/Todo";
import Todos from "./components/UseState";
import Counter from "./components/Counter";
import MyClassComponent from "./components/classComponents/MyClassComponent";
import MyComponent from "./components/MyComponent";
import LayoutComponentOne from "./components/customHook/LayoutComponentOne";
import LayoutComponentTwo from "./components/customHook/LayoutComponentTwo";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1 className="font-semibold text-4xl text-cyan-700 ">Sumon Debnath</h1>
      <Todo />
      <br />
      <br />
      <Todos />
      <br />
      <br />
      <Counter />

      <h1>Use Effect Class Component : </h1>
      {/* <MyClassComponent /> */}

      <h1>Use Effect Functional Component : </h1>
      <div>{show && <MyComponent />}</div>
      <p>
        <button
          className="border-2 shadow-xs"
          type="button"
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          {show ? "hide post" : "show post"}
        </button>
      </p>

      <h1>Learning abaout Custom Hook!</h1>
      <LayoutComponentOne />
      <LayoutComponentTwo />
    </div>
  );
}

export default App;
