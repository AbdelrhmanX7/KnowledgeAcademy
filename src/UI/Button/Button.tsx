import React, { forwardRef } from "react";
import { classNames } from "../../utils";
import { ButtonPropsType } from "./types";
import { generateButtonStyle } from "./utils";

export const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
  function Button(
    {
      label = "",
      variant = "primary",
      danger = false,
      emphasis = "high",
      icon,
      className,
      isLoading = false,
      disabled,
      ...props
    }: ButtonPropsType,
    ref
  ) {
    return (
      <button
        className={classNames(
          " font-medium text-xl px-4 duration-300 font-montserrat active:scale-95 hover:opacity-90 text-white rounded-lg min-w-[40px] h-[46px] cursor-pointer border border-solid shadow-sm",
          icon && "!px-3",
          generateButtonStyle({ emphasis, variant, danger }),
          (disabled || isLoading) && "!cursor-not-allowed",
          disabled && "!opacity-70",
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        <div className="flex justify-center items-center gap-3">
          {isLoading ? (
            <div
              className={classNames(
                "custom-loader",
                (danger || variant === "secondary") &&
                  emphasis !== "medium" &&
                  "white"
              )}
            />
          ) : (
            <>
              {label && <p>{label}</p>}
              {icon && <div className="[&_svg]:!w-6 [&_svg]:!h-6">{icon}</div>}
            </>
          )}
        </div>
      </button>
    );
  }
);

export default Button;
