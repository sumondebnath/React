// import Todo from "./components/classComponents/TodoClass";
import Todo from "./components/Todo";
import Todos from "./components/UseState";
import Counter from "./components/Counter";

function App() {
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
    </div>
  );
}

export default App;
