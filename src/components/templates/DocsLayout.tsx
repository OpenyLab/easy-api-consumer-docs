import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { PanelLeftOpen } from "lucide-react";
import { Sidebar } from "@/components/organisms/Sidebar";
import { SearchModal } from "@/components/organisms/SearchModal";
import { MobileHeader } from "@/components/organisms/MobileHeader";
import { IconButton } from "@/components/atoms/IconButton";
import { SidebarContext } from "@/hooks/useSidebar";
import { ThemeContext } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";

type Theme = "dark" | "light";

export function DocsLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("eac-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("eac-theme", theme);
  }, [theme]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
      }}
    >
      <SidebarContext.Provider
        value={{
          collapsed,
          mobileOpen,
          toggleCollapsed: () => setCollapsed((value) => !value),
          setMobileOpen,
        }}
      >
        <div className="min-h-screen bg-guide-bg">
          <Sidebar onSearch={() => setSearchOpen(true)} />
          <div
            className={cn(
              "min-h-screen transition-[margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              collapsed ? "lg:ml-0" : "lg:ml-[17.5rem]",
            )}
          >
            <MobileHeader onSearch={() => setSearchOpen(true)} />
            {collapsed ? (
              <div className="sticky top-3 z-20 hidden px-3 lg:block">
                <IconButton
                  label="Expandir sidebar"
                  onClick={() => setCollapsed(false)}
                  className="border border-guide-border bg-guide-elevated"
                >
                  <PanelLeftOpen className="size-4" />
                </IconButton>
              </div>
            ) : null}
            <Outlet />
          </div>
          <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
        </div>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  );
}
