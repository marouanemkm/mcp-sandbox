import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-base border-2 border-border bg-background px-4 py-2 text-base font-base text-foreground shadow-shadow transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-foreground/50 focus-visible:outline-none focus-visible:translate-x-boxShadowX focus-visible:translate-y-boxShadowY focus-visible:shadow-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
