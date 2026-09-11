import { Star } from "lucide-react";
import { GITHUB_URL } from "@/lib/constants";

export function GitHubBadge() {
  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-guide-border bg-guide-elevated px-3 py-1 text-xs text-guide-muted no-underline transition-colors duration-200 hover:border-guide-accent/40 hover:text-guide-text"
    >
      <span className="size-2 rounded-full bg-guide-accent" />
      open-ylorde/easy-api-consumer
      <Star className="size-3.5" />
    </a>
  );
}
