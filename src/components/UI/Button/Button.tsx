import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "success" | "error";
  size?: "small" | "normal" | "large";
  icone?: boolean;
  block?: boolean;
  children: ReactNode;
}

const Button = ({
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
