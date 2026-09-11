import { NavLink, useLocation } from "react-router-dom";
import { BookOpen, Download } from "lucide-react";
import { cn } from "@/lib/cn";
import type { NavLink as NavLinkItemType } from "@/types/docs";

type NavLinkItemProps = {
  item: NavLinkItemType;
  nested?: boolean;
  onNavigate?: () => void;
};

const icons = {
  book: BookOpen,
  download: Download,
};

export function NavLinkItem({ item, nested = false, onNavigate }: NavLinkItemProps) {
  const location = useLocation();
  const Icon = item.icon ? icons[item.icon] : null;
  const active = location.pathname === item.href;

  return (
    <NavLink
      to={item.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] transition-colors duration-200",
        nested && "pl-3",
        active
          ? "bg-guide-accent-soft font-medium text-guide-accent"
          : "text-guide-muted hover:bg-guide-hover hover:text-guide-text",
      )}
    >
      {Icon ? <Icon className="size-3.5 shrink-0" /> : null}
      {item.title}
    </NavLink>
  );
}
