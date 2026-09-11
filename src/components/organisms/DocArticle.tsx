import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GitHubBadge } from "@/components/molecules/GitHubBadge";
import { TableOfContents } from "@/components/organisms/TableOfContents";
import { PageFooterNav } from "@/components/organisms/PageFooterNav";
import type { TocItem } from "@/types/docs";

type DocArticleProps = {
  title: string;
  description?: string;
  toc?: TocItem[];
  showGithub?: boolean;
  children: React.ReactNode;
};

export function DocArticle({
  title,
  description,
  toc = [],
  showGithub = false,
  children,
}: DocArticleProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | easy-api-consumer`;
    if (!location.hash) window.scrollTo({ top: 0 });
  }, [title, location.pathname, location.hash]);

  return (
    <div className="mx-auto flex w-full max-w-6xl gap-10 px-4 py-8 sm:px-8">
      <div key={location.pathname} className="animate-page-in min-w-0 flex-1">
        <h1 className="m-0 text-[2rem] font-semibold tracking-tight text-guide-text">
          {title}
        </h1>
        {showGithub ? (
          <div className="mt-4">
            <GitHubBadge />
          </div>
        ) : null}
        {description ? (
          <p className="mt-4 text-[1.05rem] leading-7 text-guide-muted">
            {description}
          </p>
        ) : null}
        <div className="prose-guide mt-6 text-[15px] leading-7 text-guide-muted">
          {children}
        </div>
        <PageFooterNav pathname={location.pathname} />
      </div>
      <TableOfContents items={toc} />
    </div>
  );
}
