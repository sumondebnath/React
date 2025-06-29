// import React from "react";

// export default class ClickCounter extends React.Component {
//   render() {
//     const { count, incrementCount } = this.props;

//     return (
//       <div>
//         <button type="button" onClick={incrementCount}>
//           Clicked {count} times
//         </button>
//       </div>
//     );
//   }
// }

export default function ClickCounter(props) {
  const { count, incrementCount } = props;

  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
}
