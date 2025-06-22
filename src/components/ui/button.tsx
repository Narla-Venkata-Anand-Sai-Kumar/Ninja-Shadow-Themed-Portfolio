import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ninja-glow",
        {
          "bg-gradient-to-r from-ninja-charcoal to-ninja-black dark:from-ninja-silver dark:to-ninja-white text-ninja-white dark:text-ninja-black ninja-shadow hover:ninja-shadow-hover": variant === "default",
          "bg-destructive text-destructive-foreground ninja-shadow hover:bg-destructive/90": variant === "destructive",
          "ninja-border bg-background ninja-shadow hover:bg-ninja-silver/10 dark:hover:bg-ninja-gray/10 hover:text-accent-foreground": variant === "outline",
          "bg-ninja-silver/20 dark:bg-ninja-gray/20 text-ninja-charcoal dark:text-ninja-silver ninja-shadow hover:bg-ninja-silver/30 dark:hover:bg-ninja-gray/30": variant === "secondary",
          "hover:bg-ninja-silver/10 dark:hover:bg-ninja-gray/10 hover:text-accent-foreground": variant === "ghost",
          "text-ninja-charcoal dark:text-ninja-silver underline-offset-4 hover:underline": variant === "link",
        },
        {
          "h-9 px-4 py-2": size === "default",
          "h-8 rounded-md px-3 text-xs": size === "sm",
          "h-10 rounded-md px-8": size === "lg",
          "h-9 w-9": size === "icon",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
