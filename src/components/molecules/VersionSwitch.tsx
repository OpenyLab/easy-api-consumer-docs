import { ChevronDown } from "lucide-react";
import { NPM_URL, PACKAGE_VERSION } from "@/lib/constants";

export function VersionSwitch() {
  return (
    <a
      href={NPM_URL}
      target="_blank"
      rel="noreferrer"
      className="mt-2 flex w-full items-center gap-2 rounded-lg border border-guide-border bg-guide-elevated px-2.5 py-1.5 text-sm text-guide-text no-underline transition-colors duration-200 hover:bg-guide-hover"
    >
      <span className="flex size-5 items-center justify-center rounded bg-guide-accent-soft text-[10px] font-bold text-guide-accent">
        e
      </span>
      <span className="flex-1 truncate">v{PACKAGE_VERSION}</span>
      <ChevronDown className="size-3.5 text-guide-muted" />
    </a>
  );
}
