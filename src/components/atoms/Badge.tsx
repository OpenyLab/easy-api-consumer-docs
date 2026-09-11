import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "accent" | "muted" | "warn";
  className?: string;
};

export function Badge({ children, tone = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide",
        tone === "accent" &&
          "bg-guide-accent-soft text-guide-accent",
        tone === "muted" &&
          "bg-guide-hover text-guide-muted",
        tone === "warn" &&
          "bg-[rgba(240,178,50,0.14)] text-guide-warn",
        className,
      )}
    >
      {children}
    </span>
  );
}
