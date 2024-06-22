import { VariantProps } from "class-variance-authority";
import {
  AnchorHTMLAttributes,
  ComponentProps,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils";
import { buttonVariants } from "./Button";

interface LinkButtonVariants
  extends DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    VariantProps<typeof buttonVariants> {}

export interface LinkButtonProps extends LinkButtonVariants {
  className?: ComponentProps<"div">["className"];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href: string;
  label: string;
}

export function LinkButton({
  leftIcon,
  rightIcon,
  className,
  href,
  label,
  ...props
}: LinkButtonProps) {
  const classNames = cn(buttonVariants(props), className);

  return (
    <Link to={href} className={classNames}>
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </Link>
  );
}

type CustomLinkProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "children" | "href"
> & {
  label: string;
  href: string;
};

export function CustomLink({
  label,
  href,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      to={href}
      {...props}
      className={cn(
        "text-clr-secondary underline hover:no-underline",
        className,
      )}
    >
      {label}
    </Link>
  );
}
