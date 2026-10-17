"use client";

import { useId, useState } from "react";
import {
  Brain,
  Calculator,
  ChevronDown,
  Eye,
  Globe2,
  GraduationCap,
  Lightbulb,
  MessagesSquare,
  Wrench,
} from "lucide-react";

const directions = [
  {
    title: "Логика и критическое мышление",
    description: "Разбирать аргументы, замечать допущения и проверять выводы.",
    example: "Пример занятия: отличить факт от мнения в короткой новости.",
    icon: Brain,
    tone: "bg-[#e8eefc] text-[#3554c4]",
  },
  {
    title: "Наблюдательность",
    description: "Фиксировать детали и отделять увиденное от догадок.",
    example: "Пример занятия: описать сцену только наблюдаемыми деталями.",
    icon: Eye,
    tone: "bg-[#ffeeda] text-[#c46a1d]",
  },
  {
    title: "Психология",
    description: "Понимать эмоции, привычки и влияние контекста на решения.",
    example: "Пример занятия: разобрать, как формулировка задачи меняет выбор.",
    icon: Lightbulb,
    tone: "bg-[#f1e8ff] text-[#6d3fc4]",
  },
  {
    title: "Память и обучение",
    description: "Строить устойчивые знания через практику и повторение.",
    example: "Пример занятия: собрать карточки для интервального повторения.",
    icon: GraduationCap,
    tone: "bg-[#e7f7ef] text-[#1f8a57]",
  },
  {
    title: "Общая эрудиция",
    description: "Связывать факты из разных областей в понятную картину.",
    example: "Пример занятия: объяснить явление простыми аналогиями.",
    icon: Globe2,
    tone: "bg-[#e9f4ff] text-[#2178b8]",
  },
  {
    title: "Иностранные языки",
    description: "Тренировать понимание и речь на понятных жизненных темах.",
    example: "Пример занятия: короткий диалог о планах на неделю.",
    icon: MessagesSquare,
    tone: "bg-[#e8f8f2] text-[#1f8f6d]",
  },
  {
    title: "Математика",
    description: "Решать практические задачи и укреплять точность мышления.",
    example: "Пример занятия: посчитать бюджет поездки с несколькими условиями.",
    icon: Calculator,
    tone: "bg-[#ebefff] text-[#3d4fc4]",
  },
  {
    title: "Практические навыки",
    description: "Применять знания в быту, работе и самостоятельных проектах.",
    example: "Пример занятия: составить чеклист подготовки к важному разговору.",
    icon: Wrench,
    tone: "bg-[#fff3e5] text-[#b86b1f]",
  },
];

export function Directions() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section id="directions" className="section" aria-labelledby="directions-title">
      <div className="container">
        <div className="max-w-2xl">
          <h2 id="directions-title" className="section-title">
            Восемь направлений для роста
          </h2>
          <p className="section-lead">
            Выберите тему и посмотрите, как может выглядеть короткое занятие. Все примеры —
            демонстрационные.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {directions.map((item) => {
            const Icon = item.icon;
            const panelId = `${baseId}-${item.title}`;
            const isOpen = openId === item.title;

            return (
              <li key={item.title}>
                <article
                  className={`h-full rounded-[var(--radius-md)] ${item.tone} p-5 shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-soft)]`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-current"
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
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {item.description}
                  </p>
                  {isOpen ? (
                    <p
                      id={panelId}
                      className="mt-3 rounded-xl bg-white/65 px-3 py-2 text-sm text-[var(--ink)]"
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
