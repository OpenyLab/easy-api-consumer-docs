import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type PageNavCardProps = {
  direction: "prev" | "next";
  href: string;
  title: string;
};

export function PageNavCard({ direction, href, title }: PageNavCardProps) {
  const isNext = direction === "next";

  return (
    <Link
      to={href}
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-1 rounded-xl border border-guide-border bg-guide-elevated px-4 py-3 no-underline transition-colors duration-200 hover:border-guide-accent/40",
        isNext ? "items-end text-right" : "items-start",
      )}
    >
      <span className="flex items-center gap-1 text-xs text-guide-muted">
        {isNext ? (
          <>
            Next Page
            <ArrowRight className="size-3.5" />
          </>
        ) : (
          <>
            <ArrowLeft className="size-3.5" />
            Previous Page
          </>
        )}
      </span>
      <span className="truncate font-medium text-guide-text">{title}</span>
    </Link>
  );
}
