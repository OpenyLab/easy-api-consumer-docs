import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { searchIndex } from "@/data/navigation";
import { Kbd } from "@/components/atoms/Kbd";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchIndex.slice(0, 6);

    return searchIndex.filter((entry) => {
      const haystack = `${entry.title} ${entry.section} ${entry.keywords}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const id = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]">
      <button
        type="button"
        aria-label="Fechar busca"
        className="animate-overlay-in absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div className="animate-panel-in relative w-full max-w-2xl overflow-hidden rounded-2xl border border-guide-border bg-guide-sidebar shadow-2xl">
        <div className="flex items-center gap-3 border-b border-guide-border px-4 py-3">
          <Search className="size-4 text-guide-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar no guia..."
            className="flex-1 bg-transparent text-sm text-guide-text outline-none placeholder:text-guide-faint"
          />
          <Kbd>ESC</Kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-guide-muted">
              Nenhum resultado para “{query}”.
            </li>
          ) : (
            results.map((entry) => (
              <li key={entry.href}>
                <button
                  type="button"
                  className="flex w-full flex-col rounded-lg px-3 py-2.5 text-left transition-colors duration-150 hover:bg-guide-hover"
                  onClick={() => {
                    navigate(entry.href);
                    onClose();
                  }}
                >
                  <span className="text-sm font-medium text-guide-text">
                    {entry.title}
                  </span>
                  <span className="text-xs text-guide-muted">{entry.section}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
