import { Info, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/cn";

type CalloutProps = {
  title?: string;
  tone?: "info" | "tip" | "warn";
  children: React.ReactNode;
};

export function Callout({ title, tone = "info", children }: CalloutProps) {
  const Icon = tone === "warn" ? TriangleAlert : Info;

  return (
    <aside
      className={cn(
        "my-5 rounded-xl border px-4 py-3 text-sm leading-6",
        tone === "tip" &&
          "border-guide-accent/30 bg-guide-accent-soft text-guide-text",
        tone === "info" &&
          "border-guide-info/30 bg-[rgba(88,101,242,0.08)] text-guide-text",
        tone === "warn" &&
          "border-guide-warn/30 bg-[rgba(240,178,50,0.08)] text-guide-text",
      )}
    >
      <div className="mb-1 flex items-center gap-2 font-medium">
        <Icon
          className={cn(
            "size-4",
            tone === "tip" && "text-guide-accent",
            tone === "info" && "text-guide-info",
            tone === "warn" && "text-guide-warn",
          )}
        />
        {title ?? (tone === "warn" ? "Atenção" : tone === "tip" ? "Dica" : "Nota")}
      </div>
      <div className="text-guide-muted">{children}</div>
    </aside>
  );
}
