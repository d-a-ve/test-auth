import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const buttonVariants = cva(
  "relative flex items-center text-white font-medium border-2 border-solid justify-center gap-5 w-fit rounded-md disabled:opacity-60 disabled:cursor-not-allowed duration-200 hover:text-clr-secondary focus-within:text-clr-secondary",
  {
    variants: {
      variant: {
        primary:
          "bg-clr-secondary border-transparent hover:bg-transparent hover:border-clr-secondary focus-visible:bg-transparent focus-visible:border-clr-secondary",
        secondary:
          "bg-transparent border-clr-secondary hover:bg-clr-secondary hover:border-transparent focus-visible:bg-clr-secondary focus-visible:border-transparent",
      },
      size: {
        sm: "py-1.5 px-3",
        md: "py-2 px-4",
        lg: "py-3 px-6",
        none: "py-0 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonVariants
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants> {}

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  spinnerSize?: string | number;
}

export function Button({
  children,
  isLoading,
  disabled,
  leftIcon,
  rightIcon,
  className,
  spinnerSize,
  ...props
}: ButtonProps) {
  const classNames = cn(buttonVariants(props), className);

  return (
    <button
      disabled={(isLoading ?? disabled) || disabled}
      className={classNames}
      {...props}
    >
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center">
        <svg
          width={spinnerSize ?? "20"}
          height={spinnerSize ?? "20"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "animate-spin",
            isLoading ? "opacity-1 visible" : "hidden opacity-0",
          )}
        >
          <path
            fill="currentColor"
            d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z"
          />
        </svg>
      </div>
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          isLoading ? "opacity-0" : "opacity-1",
        )}
        style={{ color: "currentcolor" }}
      >
        {leftIcon}
        {children}
        {rightIcon && (
          <span
            style={{
              opacity: isLoading ? 0 : 1,
            }}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </button>
  );
}
