import Counter from "./useReduce/Counter";
import ComplexCounter from "./useReduce/ComplexCounter";
import ComplexCounter2 from "./useReduce/ComplexCounter3";
import CounterLocal from "./useReduce/Counter4Local";
import ComponentApp from "./useReduce/globalState/ComponentApp";
import GetPostUseState from "./APIuseStare&useReducer/GetPostUseState";
import GetPostUseReducer from "./APIuseStare&useReducer/GetPostUseReducer";

function UseReduceApp() {
  return (
    <div>
      <Counter />
      <ComplexCounter />
      <ComplexCounter2 />
      <h1>For Local State & pattern...</h1>
      <CounterLocal />

      <h1>For Global State & pattern...</h1>
      <ComponentApp />

      <br />
      <h1>API Fetch using useState!</h1>
      <GetPostUseState />
      <br />
      <h1>API Fetch using useReducer !</h1>
      <GetPostUseReducer />
    </div>
  );
}

export default UseReduceApp;
