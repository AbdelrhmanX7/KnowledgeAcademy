export interface ButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "tertiary";
  emphasis?: "high" | "medium";
  danger?: boolean;
  icon?: React.ReactNode;
}

export type ButtonPropsType = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  };

export type GenerateButtonStyleType = Omit<ButtonProps, "label">;
