import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function IconButton({ label, className, children, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-md text-guide-muted transition-colors duration-200 hover:bg-guide-hover hover:text-guide-text",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
