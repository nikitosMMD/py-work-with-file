import {
  BookOpen,
  Brain,
  CalendarDays,
  ChartColumnIncreasing,
  Eye,
  Languages,
  RefreshCw,
} from "lucide-react";

const plan = [
  { icon: Brain, title: "Логика", meta: "15 мин · упражнение" },
  { icon: Languages, title: "Испанский", meta: "20 мин · практика" },
  { icon: BookOpen, title: "Математика", meta: "25 мин · задачи" },
];

export function DashboardPreview() {
  return (
    <figure className="animate-float w-full">
      <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--dash-bg)] p-3 text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10 sm:p-4">
        <div className="grid gap-3 md:grid-cols-[132px_1fr]">
          <aside className="hidden rounded-2xl bg-[var(--dash-panel)] p-3 md:block">
            <p className="mb-4 text-xs font-semibold tracking-wide text-white/50">Меню</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="rounded-xl bg-white/10 px-3 py-2">Сегодня</li>
              <li className="rounded-xl px-3 py-2">Направления</li>
              <li className="rounded-xl px-3 py-2">Повторение</li>
              <li className="rounded-xl px-3 py-2">Прогресс</li>
            </ul>
          </aside>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--dash-panel)] px-4 py-3">
              <div>
                <p className="text-sm text-white/55">Доброе утро</p>
                <p className="font-semibold">План на сегодня</p>
              </div>
              <CalendarDays className="h-5 w-5 text-white/55" aria-hidden />
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl bg-[var(--dash-panel)] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Занятия</h3>
                  <span className="text-xs text-white/45">демо</span>
                </div>
                <ul className="space-y-2">
                  {plan.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.title}
                        className="flex items-center gap-3 rounded-xl border border-[var(--dash-line)] bg-white/[0.03] px-3 py-2.5"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs text-white/50">{item.meta}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl bg-[var(--dash-panel)] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-[#9b8cff]" aria-hidden />
                    <h3 className="text-sm font-semibold">Повторение</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    3 карточки по теме «Наблюдение и интерпретация»
                  </p>
                  <p className="mt-2 text-xs text-white/45">Через 2 дня</p>
                </div>

                <div className="rounded-2xl bg-[var(--dash-panel)] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <ChartColumnIncreasing className="h-4 w-4 text-[#7aa2ff]" aria-hidden />
                    <h3 className="text-sm font-semibold">Прогресс</h3>
                  </div>
                  <div
                    className="flex h-16 items-end gap-1.5"
                    role="img"
                    aria-label="Демонстрационный график прогресса за неделю"
                  >
                    {[28, 42, 36, 58, 50, 72, 64].map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#9b5cff,#5b6cff)] opacity-90"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-white/45">Демо-данные за неделю</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-[var(--dash-line)] bg-white/[0.03] px-4 py-3 text-sm text-white/70 md:hidden">
              <Eye className="h-4 w-4 shrink-0" aria-hidden />
              Упрощённый вид интерфейса на телефоне
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-[var(--ink-muted)]">
        Пример интерфейса
      </figcaption>
    </figure>
  );
}
