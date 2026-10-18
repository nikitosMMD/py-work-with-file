"use client";

import { useId, useState, type ComponentType } from "react";
import { ChevronDown } from "lucide-react";
import {
  ArtErudition,
  ArtLanguages,
  ArtLogic,
  ArtMath,
  ArtMemory,
  ArtObservation,
  ArtPsychology,
  ArtSkills,
} from "./DirectionArt";

type Direction = {
  title: string;
  description: string;
  example: string;
  Art: ComponentType<{ className?: string }>;
  tone: string;
};

const directions: Direction[] = [
  {
    title: "Логика и критическое мышление",
    description: "Разбирать аргументы и проверять выводы.",
    example: "Пример занятия: отличить факт от мнения в короткой новости.",
    Art: ArtLogic,
    tone: "bg-[#e7eefc]",
  },
  {
    title: "Наблюдательность",
    description: "Фиксировать детали без лишних догадок.",
    example: "Пример занятия: описать сцену только наблюдаемыми деталями.",
    Art: ArtObservation,
    tone: "bg-[#ffeeda]",
  },
  {
    title: "Психология",
    description: "Понимать эмоции, привычки и контекст решений.",
    example: "Пример занятия: разобрать, как формулировка задачи меняет выбор.",
    Art: ArtPsychology,
    tone: "bg-[#f1e8ff]",
  },
  {
    title: "Память и обучение",
    description: "Закреплять знания практикой и повторением.",
    example: "Пример занятия: собрать карточки для интервального повторения.",
    Art: ArtMemory,
    tone: "bg-[#e6f7ef]",
  },
  {
    title: "Общая эрудиция",
    description: "Связывать факты из разных областей.",
    example: "Пример занятия: объяснить явление простыми аналогиями.",
    Art: ArtErudition,
    tone: "bg-[#e8f4ff]",
  },
  {
    title: "Иностранные языки",
    description: "Тренировать речь на жизненных темах.",
    example: "Пример занятия: короткий диалог о планах на неделю.",
    Art: ArtLanguages,
    tone: "bg-[#e7f8f1]",
  },
  {
    title: "Математика",
    description: "Решать практические задачи точно и спокойно.",
    example: "Пример занятия: посчитать бюджет поездки с условиями.",
    Art: ArtMath,
    tone: "bg-[#eaeefe]",
  },
  {
    title: "Практические навыки",
    description: "Переносить знания в быт и проекты.",
    example: "Пример занятия: чеклист подготовки к важному разговору.",
    Art: ArtSkills,
    tone: "bg-[#fff2e4]",
  },
];

export function Directions() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section id="directions" className="section bg-[var(--bg)]" aria-labelledby="directions-title">
      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Направления
            </p>
            <h2 id="directions-title" className="section-title">
              Восемь направлений для роста
            </h2>
            <p className="section-lead">
              Выберите тему и откройте короткий пример занятия. Все примеры демонстрационные.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {directions.map((item) => {
            const Art = item.Art;
            const panelId = `${baseId}-${item.title}`;
            const isOpen = openId === item.title;

            return (
              <li key={item.title}>
                <article
                  className={`direction-card ${item.tone} ${isOpen ? "is-open" : ""}`}
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <div className="flex min-h-[132px] flex-1 items-center justify-center pt-1">
                      <Art className="direction-art" />
                    </div>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-[var(--ink)] shadow-sm transition-colors hover:bg-white"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      aria-label={
                        isOpen
                          ? `Скрыть пример занятия: ${item.title}`
                          : `Показать пример занятия: ${item.title}`
                      }
                      onClick={() => setOpenId(isOpen ? null : item.title)}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  </div>
                  <h3 className="mt-2 text-[1.15rem] font-bold leading-snug tracking-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                    {item.description}
                  </p>
                  {isOpen ? (
                    <p
                      id={panelId}
                      className="mt-4 rounded-2xl bg-white/75 px-3.5 py-3 text-sm leading-relaxed text-[var(--ink)] shadow-sm"
                    >
                      {item.example}
                    </p>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
