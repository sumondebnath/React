import FirstApp from "./components/firstApp";
import UseRefApp from "./components/UseRefApp";
import UseReduceApp from "./components/UseReducerApp";

function App() {
  return (
    <div>
      <FirstApp />
      <hr />
      <h1>useRef Hook Learning...</h1>
      <UseRefApp />
      <hr />
      <h1>UseReduce Hook Examples...</h1>
      <UseReduceApp />
    </div>
  );
}

export default App;
