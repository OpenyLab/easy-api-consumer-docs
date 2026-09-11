import { Link } from "react-router-dom";
import { PanelLeftClose, PanelLeftOpen, Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/atoms/IconButton";
import { SearchTrigger } from "@/components/molecules/SearchTrigger";
import { VersionSwitch } from "@/components/molecules/VersionSwitch";
import { NavLinkItem } from "@/components/molecules/NavLinkItem";
import { NavGroupItem } from "@/components/molecules/NavGroupItem";
import { navigation } from "@/data/navigation";
import { useSidebar } from "@/hooks/useSidebar";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

type SidebarProps = {
  onSearch: () => void;
};

export function Sidebar({ onSearch }: SidebarProps) {
  const { collapsed, mobileOpen, toggleCollapsed, setMobileOpen } = useSidebar();
  const { theme, toggleTheme } = useTheme();

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Fechar menu"
          className="animate-overlay-in fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobile}
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[17.5rem] flex-col border-r border-guide-border bg-guide-sidebar",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          collapsed ? "lg:-translate-x-full" : "lg:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between gap-2 px-4 py-3">
          <Link
            to="/"
            onClick={closeMobile}
            className="text-sm font-semibold tracking-tight text-guide-text no-underline"
          >
            easy-api-consumer
          </Link>
          <IconButton label="Recolher sidebar" onClick={toggleCollapsed} className="hidden lg:inline-flex">
            {collapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
          </IconButton>
        </div>

        <div className="px-3 pb-3">
          <SearchTrigger onOpen={onSearch} />
          <VersionSwitch />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {navigation.map((section, index) => (
            <div key={section.label ?? index} className={cn(index > 0 && "mt-5")}>
              {section.label ? (
                <p className="mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-guide-faint">
                  {section.label}
                </p>
              ) : null}
              <div className="space-y-0.5">
                {section.items.map((item) =>
                  item.kind === "link" ? (
                    <NavLinkItem
                      key={item.href}
                      item={item}
                      onNavigate={closeMobile}
                    />
                  ) : (
                    <NavGroupItem
                      key={item.title}
                      group={item}
                      onNavigate={closeMobile}
                    />
                  ),
                )}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center justify-between border-t border-guide-border px-3 py-2">
          <IconButton
            label={theme === "dark" ? "Tema claro" : "Tema escuro"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </IconButton>
          <IconButton
            label="Recolher sidebar"
            onClick={toggleCollapsed}
            className="hidden lg:inline-flex"
          >
            <PanelLeftClose className="size-4" />
          </IconButton>
        </div>
      </aside>
    </>
  );
}
