import { Menu, Search } from "lucide-react";
import { IconButton } from "@/components/atoms/IconButton";
import { useSidebar } from "@/hooks/useSidebar";

type MobileHeaderProps = {
  onSearch: () => void;
};

export function MobileHeader({ onSearch }: MobileHeaderProps) {
  const { setMobileOpen } = useSidebar();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-guide-border bg-guide-bg/85 px-3 py-2 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-1">
        <IconButton label="Abrir menu" onClick={() => setMobileOpen(true)}>
          <Menu className="size-4" />
        </IconButton>
        <span className="text-sm font-semibold">easy-api-consumer</span>
      </div>
      <IconButton label="Buscar" onClick={onSearch}>
        <Search className="size-4" />
      </IconButton>
    </header>
  );
}
