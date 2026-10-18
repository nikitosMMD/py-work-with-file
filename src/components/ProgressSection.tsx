import { BookOpen, ChartColumnIncreasing, RefreshCw, Sparkles } from "lucide-react";

const bars = [
  { label: "Пн", value: 35 },
  { label: "Вт", value: 48 },
  { label: "Ср", value: 42 },
  { label: "Чт", value: 60 },
  { label: "Пт", value: 55 },
  { label: "Сб", value: 72 },
  { label: "Вс", value: 64 },
];

const cards = [
  {
    title: "Занятия",
    text: "Логика, язык и короткая математическая практика в одном дне.",
    icon: BookOpen,
  },
  {
    title: "Повторение",
    text: "Карточки возвращаются через интервал, чтобы материал не выветривался.",
    icon: RefreshCw,
  },
  {
    title: "Применение",
    text: "После теории — мини-задача из повседневной жизни.",
    icon: Sparkles,
  },
];

export function ProgressSection() {
  return (
    <section id="progress" className="section bg-white" aria-labelledby="progress-title">
      <div className="container">
        <div className="max-w-2xl">
          <h2 id="progress-title" className="section-title">
            Прогресс, который можно увидеть
          </h2>
          <p className="section-lead">
            Ниже — демонстрационный пример интерфейса. Данные условные и не являются научной
            оценкой интеллекта или навыков.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <article className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--bg)] p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <ChartColumnIncreasing className="h-5 w-5 text-[var(--accent-mid)]" aria-hidden />
              <h3 className="font-semibold">Активность за неделю</h3>
            </div>
            <div
              className="flex h-48 items-end gap-3"
              role="img"
              aria-label="Демонстрационный столбчатый график активности по дням недели"
            >
              {bars.map((bar) => (
                <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-40 w-full items-end rounded-2xl bg-white/70 px-1.5 pb-1.5">
                    <span
                      className="w-full rounded-xl bg-[linear-gradient(180deg,#9b5cff,#5b6cff)]"
                      style={{ height: `${bar.value}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-[var(--ink-muted)]">{bar.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">Демонстрационные данные</p>
          </article>

          <ul className="grid gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <li key={card.title}>
                  <article className="h-full rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--bg)] p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-[var(--accent-mid)]" aria-hidden />
                    </div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">{card.text}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
