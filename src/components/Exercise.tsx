"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";

type Kind = "observation" | "interpretation";

type Statement = {
  id: string;
  text: string;
  answer: Kind;
  explanation: string;
};

const statements: Statement[] = [
  {
    id: "s1",
    text: "На остановке человек трижды посмотрел на наручные часы.",
    answer: "observation",
    explanation:
      "Это можно непосредственно увидеть или зафиксировать. Здесь нет вывода о причинах поведения.",
  },
  {
    id: "s2",
    text: "Человек опаздывает на важную встречу.",
    answer: "interpretation",
    explanation:
      "Опоздание и важность встречи не наблюдаются напрямую — это возможное объяснение, а не факт из сцены.",
  },
  {
    id: "s3",
    text: "Человек переминается с ноги на ногу и смотрит вдоль улицы.",
    answer: "observation",
    explanation:
      "Поза и направление взгляда описывают видимое поведение. Из этого нельзя надёжно вывести намерения.",
  },
];

const labels: Record<Kind, string> = {
  observation: "Наблюдение",
  interpretation: "Интерпретация",
};

export function Exercise() {
  const [choices, setChoices] = useState<Record<string, Kind | null>>({
    s1: null,
    s2: null,
    s3: null,
  });
  const [checked, setChecked] = useState(false);

  const allAnswered = useMemo(
    () => statements.every((item) => choices[item.id] != null),
    [choices],
  );

  const score = useMemo(() => {
    if (!checked) return 0;
    return statements.filter((item) => choices[item.id] === item.answer).length;
  }, [checked, choices]);

  const reset = () => {
    setChoices({ s1: null, s2: null, s3: null });
    setChecked(false);
  };

  return (
    <section id="exercise" className="section" aria-labelledby="exercise-title">
      <div className="container">
        <div className="max-w-2xl">
          <h2 id="exercise-title" className="section-title">
            Наблюдение или интерпретация?
          </h2>
          <p className="section-lead">
            Ситуация: человек стоит на автобусной остановке, несколько раз смотрит на часы,
            переминается с ноги на ногу и смотрит вдоль улицы. Отметьте, что является наблюдением, а
            что — интерпретацией.
          </p>
        </div>

        <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-8">
          <ol className="space-y-5">
            {statements.map((item, index) => {
              const choice = choices[item.id];
              const isCorrect = checked && choice === item.answer;
              const isWrong = checked && choice !== item.answer;

              return (
                <li
                  key={item.id}
                  className={`rounded-[var(--radius-md)] border px-4 py-4 sm:px-5 ${
                    isCorrect
                      ? "border-emerald-300 bg-emerald-50"
                      : isWrong
                        ? "border-rose-300 bg-rose-50"
                        : "border-[var(--line)] bg-[var(--bg)]"
                  }`}
                >
                  <p className="font-medium">
                    <span className="mr-2 text-[var(--ink-muted)]">{index + 1}.</span>
                    {item.text}
                  </p>

                  <fieldset className="mt-3">
                    <legend className="sr-only">Классификация утверждения {index + 1}</legend>
                    <div
                      className="flex flex-wrap gap-2"
                      role="radiogroup"
                      aria-label={`Утверждение ${index + 1}`}
                    >
                      {(Object.keys(labels) as Kind[]).map((kind) => {
                        const selected = choice === kind;
                        return (
                          <button
                            key={kind}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            disabled={checked}
                            data-testid={`${item.id}-${kind}`}
                            className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                              selected
                                ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                                : "border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--ink-soft)]"
                            }`}
                            onClick={() =>
                              setChoices((prev) => ({
                                ...prev,
                                [item.id]: kind,
                              }))
                            }
                          >
                            {labels[kind]}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {checked ? (
                    <div
                      className={`mt-3 flex gap-2 text-sm ${
                        isCorrect ? "text-emerald-800" : "text-rose-800"
                      }`}
                      role="status"
                    >
                      {isCorrect ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      ) : (
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      )}
                      <p>
                        <span className="font-semibold">
                          {isCorrect ? "Верно. " : `Неверно. Правильный ответ: ${labels[item.answer]}. `}
                        </span>
                        {item.explanation}
                      </p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {!checked ? (
              <button
                type="button"
                className="btn btn-primary"
                disabled={!allAnswered}
                onClick={() => setChecked(true)}
              >
                Проверить
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={reset}>
                <RotateCcw className="h-4 w-4" aria-hidden />
                Пройти ещё раз
              </button>
            )}
            {!allAnswered && !checked ? (
              <p className="text-sm text-[var(--ink-muted)]">
                Выберите ответ для каждого утверждения.
              </p>
            ) : null}
            {checked ? (
              <p className="text-sm font-medium text-[var(--ink)]" role="status" aria-live="polite">
                Результат: {score} из {statements.length}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
