import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import type { TocItem } from "@/types/docs";

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] },
    );

    items.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden w-56 shrink-0 xl:block">
      <div className="fixed top-24 w-56">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-guide-faint">
          On this page
        </p>
        <nav className="max-h-[calc(100vh-8rem)] space-y-1 overflow-y-auto border-l border-guide-border">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block border-l-2 py-1 text-[13px] no-underline transition-colors duration-200",
                item.level === 3 ? "pl-5" : "pl-3",
                activeId === item.id
                  ? "-ml-px border-guide-accent text-guide-text"
                  : "border-transparent text-guide-muted hover:text-guide-text",
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
