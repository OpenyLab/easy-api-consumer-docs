import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function ExternalLink({
  href,
  children,
  className,
  showIcon = false,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn("doc-link inline-flex items-center gap-1", className)}
    >
      {children}
      {showIcon ? <ArrowUpRight className="size-3.5 opacity-70" /> : null}
    </a>
  );
}
