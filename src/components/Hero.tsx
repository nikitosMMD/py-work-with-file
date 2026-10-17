import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section className="hero-atmosphere pb-10 pt-10 sm:pb-14 sm:pt-14" aria-labelledby="hero-title">
      <div className="container grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="animate-rise max-w-xl">
          <h1
            id="hero-title"
            className="text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.04em]"
          >
            Развивай мышление.
            <br />
            <span className="gradient-text">Применяй знания в жизни.</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-[var(--ink-soft)] sm:text-lg">
            Логика, языки, математика и практические навыки — в одном пространстве для
            осмысленного обучения.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#exercise" className="btn btn-primary">
              Попробовать упражнение
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#directions" className="btn btn-secondary">
              Посмотреть направления
            </a>
          </div>
        </div>

        <div className="animate-rise-delay min-w-0">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
