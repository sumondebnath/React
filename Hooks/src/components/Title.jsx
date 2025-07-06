import { memo } from "react";

function Title() {
  console.log("Title Component Rendering!");
  return (
    <div>
      <h2>useCallBack Hook Learning!</h2>
    </div>
  );
}

export default memo(Title);
