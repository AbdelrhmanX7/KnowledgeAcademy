import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "success" | "error";
  size?: "small" | "normal" | "large";
  icone?: boolean;
  block?: boolean;
  children: React.ReactNode;
}
