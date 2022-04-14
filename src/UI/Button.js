import React from "react";

function Button({ children, version, type, isDisable }) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
