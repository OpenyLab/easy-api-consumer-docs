import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type FeatureCardProps = {
  title: string;
  href: string;
  children: React.ReactNode;
};

export function FeatureCard({ title, href, children }: FeatureCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "block rounded-xl border border-guide-border bg-guide-elevated p-4 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-guide-accent/40",
      )}
    >
      <h3 className="m-0 mb-2 text-sm font-semibold text-guide-text">{title}</h3>
      <p className="m-0 text-sm leading-6 text-guide-muted">{children}</p>
    </Link>
  );
}
