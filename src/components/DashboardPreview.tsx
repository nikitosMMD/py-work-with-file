import { BookOpen, Brain, Languages, RefreshCw } from "lucide-react";

const plan = [
  { icon: Brain, title: "Логика", meta: "15 мин · упражнение", done: true },
  { icon: Languages, title: "Немецкий", meta: "20 мин · практика", done: false },
  { icon: BookOpen, title: "Английский", meta: "18 мин · диалог", done: false },
];

export function DashboardPreview() {
  return (
    <figure className="dash-stage animate-float">
      <div className="dash-frame relative z-[1] p-3 sm:p-4 lg:p-5">
        <div className="dash-glow" aria-hidden />
        <div className="relative z-[1] grid gap-3 lg:grid-cols-[128px_minmax(0,1fr)]">
          <aside className="hidden rounded-2xl bg-white/[0.04] p-3 lg:block">
            <p className="mb-4 px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              StudyOS
            </p>
            <ul className="space-y-1.5 text-sm text-white/75">
              <li className="rounded-xl bg-white/12 px-3 py-2.5 font-medium text-white">Сегодня</li>
              <li className="rounded-xl px-3 py-2.5">Направления</li>
              <li className="rounded-xl px-3 py-2.5">Повторение</li>
              <li className="rounded-xl px-3 py-2.5">Прогресс</li>
            </ul>
          </aside>

          <div className="min-w-0 space-y-3">
            <div className="flex items-center justify-between gap-3 px-1">
              <div>
                <p className="text-sm text-white/50">Доброе утро</p>
                <p className="text-lg font-semibold tracking-tight">План на сегодня</p>
              </div>
              <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/55">
                Демонстрационные данные
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.25fr_0.9fr]">
              <div className="dash-plan-card rounded-[22px] p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold tracking-tight">Учебный план</h3>
                  <span className="text-xs font-medium text-[#6d4fc4]">3 занятия</span>
                </div>
                <ul className="space-y-2.5">
                  {plan.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.title}
                        className="flex items-center gap-3 rounded-2xl bg-white/70 px-3 py-2.5 shadow-sm"
                      >
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            item.done
                              ? "border-[#7c5cff] bg-[#7c5cff] text-white"
                              : "border-[#c9b8f0] bg-white"
                          }`}
                          aria-hidden
                        >
                          {item.done ? "✓" : ""}
                        </span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#ebe4ff] text-[#5b45b8]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{item.title}</p>
                          <p className="text-xs text-[var(--ink-soft)]">{item.meta}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[22px] bg-[var(--dash-panel)] p-4 ring-1 ring-white/8">
                  <div className="mb-3 flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-[#b6a4ff]" aria-hidden />
                    <h3 className="text-sm font-semibold">Повторение</h3>
                  </div>
                  <p className="text-sm leading-snug text-white/75">
                    3 карточки · наблюдение и интерпретация
                  </p>
                  <p className="mt-2 text-xs text-white/45">Через 2 дня</p>
                </div>

                <div className="rounded-[22px] bg-[var(--dash-panel)] p-4 ring-1 ring-white/8">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold">Прогресс</h3>
                      <p className="mt-1 text-xs text-white/45">За неделю</p>
                    </div>
                    <div className="dash-progress-ring" style={{ ["--p" as string]: 72 }} role="img" aria-label="Демонстрационный прогресс 72 процента">
                      <span className="dash-progress-value">72%</span>
                    </div>
                  </div>
                  <div
                    className="mt-1 flex h-14 items-end gap-1.5"
                    role="img"
                    aria-label="Демонстрационный график активности"
                  >
                    {[34, 48, 42, 62, 55, 78, 70].map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#b08cff,#5b6cff)]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3.5 text-center text-sm text-[var(--ink-muted)]">
        Пример интерфейса
      </figcaption>
    </figure>
  );
}
