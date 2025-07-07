import React from "react";

function Input({ type, placeholder }, reference) {
  return (
    <div>
      <input ref={reference} type={type} placeholder={placeholder} />
    </div>
  );
}

const inputForwardRef = React.forwardRef(Input);

export default inputForwardRef;
