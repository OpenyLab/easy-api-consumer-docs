import { cn } from "@/lib/cn";

type KbdProps = {
  children: React.ReactNode;
  className?: string;
};

export function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex min-w-5 items-center justify-center rounded border border-guide-border bg-guide-elevated px-1.5 py-0.5 font-sans text-[10px] font-medium text-guide-muted",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
