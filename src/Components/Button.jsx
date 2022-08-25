import React from "react";
import "./Button.css";

const Button = ({ children, colorScheme, variant, onClick }) => {
  return (
    // we have replicated button component of chakra ui
    <button
      data-testid="customButton"
      className={`button ${colorScheme || "blue"} ${variant || "ghost"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
