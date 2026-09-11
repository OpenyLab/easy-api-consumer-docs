import { getAdjacentPages } from "@/data/navigation";
import { PageNavCard } from "@/components/molecules/PageNavCard";

type PageFooterNavProps = {
  pathname: string;
};

export function PageFooterNav({ pathname }: PageFooterNavProps) {
  const { prev, next } = getAdjacentPages(pathname);

  if (!prev && !next) return null;

  return (
    <div className="mt-12 flex gap-3">
      {prev ? (
        <PageNavCard direction="prev" href={prev.href} title={prev.title} />
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <PageNavCard direction="next" href={next.href} title={next.title} />
      ) : null}
    </div>
  );
}
