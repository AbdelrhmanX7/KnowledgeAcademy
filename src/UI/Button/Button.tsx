import React from "react";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  buttonType = "primary",
  size = "normal",
  icone = false,
  block = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${buttonType} btn-${size} ${
        icone ? "btn-icon" : ""
      } ${block ? "btn-block" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
