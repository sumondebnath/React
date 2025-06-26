// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

/* So, Start From here to ----------------------------------------------------------------------------------------------------------- Learning */

// import Clock from "./components/EventListener";
// import ClockList from "./components/ClockList";
// import Form from "./components/Form";
// import Text from "./components/inheritance/Text";

import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Bracket from "./components/composition/Bracket";

function App() {
  // const quantities = [1, 2, 3];
  // return (
  //   <div>
  //     {/* <Clock locale="en-US" /> */}
  //     {/* <ClockList quantities={quantities} /> */}
  //     {/* <Form /> */}

  //     {/* <Text/> */}

  //   </div>
  // );

  return (
    <Emoji>
      {({ addEmoji }) => (
        <Bracket>
          {({ addBracket }) => (
            <Text addEmoji={addEmoji} addBracket={addBracket} />
          )}
        </Bracket>
      )}
    </Emoji>
  );
}

export default App;
