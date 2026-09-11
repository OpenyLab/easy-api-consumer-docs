import { cn } from "@/lib/cn";

type InlineCodeProps = {
  children: React.ReactNode;
  className?: string;
};

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "rounded-md bg-guide-hover px-1.5 py-0.5 font-mono text-[0.86em] text-guide-accent",
        className,
      )}
    >
      {children}
    </code>
  );
}
