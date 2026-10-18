"use client";

import { useEffect, useId, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const links = [
  { href: "#directions", label: "Направления" },
  { href: "#how", label: "Как это работает" },
  { href: "#progress", label: "Прогресс" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    window.setTimeout(() => {
      const id = href.startsWith("#") ? href.slice(1) : href;
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = href;
      }
    }, 0);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(243,244,247,0.72)] backdrop-blur-xl">
      <div className="container flex h-[4.25rem] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent-from),var(--accent-to))] text-white shadow-[0_8px_20px_rgba(91,108,255,0.35)]">
            <Sparkles className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-[1.15rem]">StudyOS</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#exercise" className="btn btn-primary min-h-11 px-5 text-sm">
            Попробовать упражнение
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/90 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[var(--line)] bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
        >
          <nav className="container flex flex-col gap-1 py-4" aria-label="Мобильная навигация">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-[var(--ink)] hover:bg-[var(--bg)]"
                onClick={(event) => {
                  event.preventDefault();
                  goTo(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#exercise"
              className="btn btn-primary mt-2 w-full"
              onClick={(event) => {
                event.preventDefault();
                goTo("#exercise");
              }}
            >
              Попробовать упражнение
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
