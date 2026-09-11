import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NavLinkItem } from "@/components/molecules/NavLinkItem";
import { cn } from "@/lib/cn";
import type { NavGroup } from "@/types/docs";

type NavGroupItemProps = {
  group: NavGroup;
  onNavigate?: () => void;
};

export function NavGroupItem({ group, onNavigate }: NavGroupItemProps) {
  const location = useLocation();
  const containsActive = group.items.some((item) => item.href === location.pathname);
  const [open, setOpen] = useState(containsActive);

  useEffect(() => {
    if (containsActive) setOpen(true);
  }, [containsActive]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-[13px] text-guide-muted transition-colors duration-200 hover:bg-guide-hover hover:text-guide-text"
      >
        <span>{group.title}</span>
        <ChevronRight
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-90",
          )}
        />
      </button>
      <div className="sidebar-grid" data-open={open}>
        <div className="overflow-hidden">
          <div className="ml-2.5 mt-0.5 space-y-0.5 border-l border-guide-border pl-2">
            {group.items.map((item) => (
              <NavLinkItem
                key={item.href}
                item={item}
                nested
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
