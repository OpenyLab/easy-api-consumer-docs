import { Search } from "lucide-react";
import { Kbd } from "@/components/atoms/Kbd";

type SearchTriggerProps = {
  onOpen: () => void;
};

export function SearchTrigger({ onOpen }: SearchTriggerProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex w-full items-center gap-2 rounded-lg border border-guide-border bg-guide-elevated px-2.5 py-1.5 text-sm text-guide-muted transition-colors duration-200 hover:border-guide-faint hover:bg-guide-hover"
    >
      <Search className="size-3.5" />
      <span className="flex-1 text-left">Search</span>
      <span className="hidden items-center gap-1 sm:flex">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </span>
    </button>
  );
}
