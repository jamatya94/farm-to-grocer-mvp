import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "soft"
type ButtonSize = "sm" | "md" | "lg"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1f6f43] !text-white shadow-[0_18px_40px_-22px_rgba(31,111,67,0.75)] hover:bg-[#185b36]",
  secondary:
    "bg-[#2b8a57] !text-white shadow-[0_18px_40px_-22px_rgba(43,138,87,0.75)] hover:bg-[#217247]",
  outline:
    "border border-[hsl(var(--border))] bg-white/86 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]",
  ghost:
    "bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]",
  soft:
    "bg-[hsl(var(--accent))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent-strong))]",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      type = "button",
      ...props
    },
    ref
  ) {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] no-underline [&_*]:text-inherit transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 hover:-translate-y-[1px] active:translate-y-0",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    )
  }
)
