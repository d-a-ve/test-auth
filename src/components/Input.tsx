import { VariantProps, cva } from "class-variance-authority";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from "react";
import { cn } from "../utils";
import { EyeIcon, EyeSlashIcon } from "./svg";

const inputVariants = cva(
  "relative px-3 py-2 flex items-center justify-center gap-2 rounded-md transition-all select-none text-base border-solid border w-full",
  {
    variants: {
      variant: {
        default:
          "border-clr-secondary text-clr-foreground bg-transparent focus-within:bg-clr-secondary/10",
      },
      inputSize: {
        sm: "py-1.5 px-3",
        md: "py-2 px-4",
        lg: "py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "sm",
    },
  },
);

export interface InputVariants
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputVariants> {}

interface TextInputProps extends InputVariants {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeHolder?: string;
  isPasswordVisible?: boolean;
}

export const Input = forwardRef(function Input(
  {
    className,
    leftIcon,
    rightIcon,
    type,
    isLoading,
    disabled,
    onChange,
    placeHolder,
    variant,
    inputSize,
    ...props
  }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const classNames = cn(
    inputVariants({ variant, inputSize }),
    className,
    disabled || isLoading ? "opacity-[.8] cursor-not-allowed" : "",
  );
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const inputType = type === "password" && isPasswordShown ? "text" : type;
  return (
    <div className={classNames}>
      {leftIcon && leftIcon}
      <input
        onChange={onChange}
        type={inputType}
        className={cn(
          "placeholder:text-foreground/70 w-full bg-transparent outline-none",
          disabled ?? isLoading ? "cursor-not-allowed" : "",
        )}
        placeholder={placeHolder ?? "Placeholder"}
        disabled={isLoading ?? disabled}
        ref={ref}
        {...props}
      />
      {rightIcon && rightIcon}
      {type === "password" && (
        <button
          type="button"
          onClick={() => setIsPasswordShown((prev) => !prev)}
        >
          {isPasswordShown ? <EyeSlashIcon /> : <EyeIcon />}
        </button>
      )}
    </div>
  );
});
