import React from "react";

function ShowCount({ count, title }) {
  console.log(`Renderting ${title}`);

  return (
    <p>
      {title} is {count}
    </p>
  );
}

export default React.memo(ShowCount);
