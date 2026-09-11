import { cn } from "@/lib/cn";
import { InlineCode } from "@/components/atoms/InlineCode";

type OptionRowProps = {
  name: string;
  type: string;
  defaultValue?: string;
  children: React.ReactNode;
};

export function OptionRow({ name, type, defaultValue, children }: OptionRowProps) {
  return (
    <div className="border-b border-guide-border py-5 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-baseline gap-2">
        <InlineCode>{name}</InlineCode>
        <span className="font-mono text-xs text-guide-faint">{type}</span>
        {defaultValue ? (
          <span className="text-xs text-guide-muted">
            padrão: <InlineCode>{defaultValue}</InlineCode>
          </span>
        ) : null}
      </div>
      <p className={cn("m-0 text-sm leading-6 text-guide-muted")}>{children}</p>
    </div>
  );
}
