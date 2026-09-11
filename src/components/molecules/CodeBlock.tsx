import { Highlight, themes } from "prism-react-renderer";
import type { Language } from "prism-react-renderer";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

type CodeBlockProps = {
  code: string;
  language?: Language;
  filename?: string;
};

export function CodeBlock({
  code,
  language = "tsx",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const trimmed = code.replace(/^\n/, "").replace(/\n$/, "");

  async function copy() {
    await navigator.clipboard.writeText(trimmed);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="group relative my-5 overflow-hidden rounded-xl border border-guide-border bg-guide-code">
      <div className="flex items-center justify-between border-b border-guide-border px-4 py-2">
        <span className="text-xs text-guide-muted">
          {filename ?? language}
        </span>
        <button
          type="button"
          onClick={() => void copy()}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-guide-muted transition-colors duration-200 hover:bg-guide-hover hover:text-guide-text"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-guide-accent" />
              Copiado
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              Copiar
            </>
          )}
        </button>
      </div>
      <Highlight
        theme={themes.nightOwl}
        code={trimmed}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "overflow-x-auto p-4 text-[13px] leading-6 text-[#d6deeb]",
            )}
            style={{ ...style, background: "transparent", margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
