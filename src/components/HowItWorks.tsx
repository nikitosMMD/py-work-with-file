import { ArrowRight, BookOpenCheck, BrainCircuit, Repeat, Sparkles, Target } from "lucide-react";

const steps = [
  {
    title: "Понять",
    text: "Сначала разобрать идею простыми словами и примерами.",
    icon: BrainCircuit,
  },
  {
    title: "Потренироваться",
    text: "Закрепить материал короткими упражнениями без спешки.",
    icon: BookOpenCheck,
  },
  {
    title: "Воспроизвести",
    text: "Объяснить своими словами или решить задачу без подсказки.",
    icon: Sparkles,
  },
  {
    title: "Применить",
    text: "Перенести навык в повседневную ситуацию или мини-проект.",
    icon: Target,
  },
  {
    title: "Повторить спустя время",
    text: "Вернуться к теме позже, чтобы знания оставались живыми.",
    icon: Repeat,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="section bg-white" aria-labelledby="how-title">
      <div className="container">
        <div className="max-w-2xl">
          <h2 id="how-title" className="section-title">
            Как устроено обучение
          </h2>
          <p className="section-lead">
            StudyOS предлагает понятный цикл практики. Это подход к занятиям, а не заявление о
            доказанной эффективности продукта.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative">
                <article className="h-full rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--bg)] p-5">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-[var(--accent-mid)]" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold text-[var(--ink-muted)]">
                      Шаг {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">{step.text}</p>
                </article>
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[var(--ink-muted)] md:block"
                    aria-hidden
                  />
                ) : null}
              </li>
            );
          })}
        </ol>

        <p className="mt-6 text-sm text-[var(--ink-muted)] md:hidden">
          Порядок шагов: Понять → Потренироваться → Воспроизвести → Применить → Повторить спустя
          время.
        </p>
      </div>
    </section>
  );
}
