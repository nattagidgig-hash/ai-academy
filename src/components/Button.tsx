import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-blue-electric to-cyan-cyber text-black-rich font-semibold glow-cyan hover:brightness-110",
  secondary:
    "bg-surface-glass backdrop-blur-md ring-1 ring-inset ring-cyan-cyber/40 text-white-ice hover:ring-cyan-cyber/70",
  ghost:
    "text-text-secondary hover:text-accent-glow hover:underline underline-offset-4",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
  lg: "h-14 px-9 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-xl font-medium cursor-pointer transition-all duration-150 active:scale-98 select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
