import { Link } from "lucide-react";
import { cn } from "@/lib/cn";

type HeadingAnchorProps = {
  id: string;
  level?: 2 | 3;
  children: React.ReactNode;
};

export function HeadingAnchor({ id, level = 2, children }: HeadingAnchorProps) {
  const Tag = level === 3 ? "h3" : "h2";

  return (
    <Tag
      id={id}
      className={cn(
        "group scroll-mt-24 font-semibold tracking-tight text-guide-text",
        level === 2 ? "mt-10 mb-3 text-[1.35rem]" : "mt-8 mb-2 text-lg",
      )}
    >
      <a
        href={`#${id}`}
        className="inline-flex items-center gap-2 text-inherit no-underline hover:text-guide-text"
      >
        {children}
        <Link className="size-3.5 text-guide-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </a>
    </Tag>
  );
}
