import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section className="hero-shell" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden>
        <Image
          src="/images/hero-mountains.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="hero-bg-veil" aria-hidden />

      <div className="container grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.2fr)] lg:gap-8 xl:gap-12">
        <div className="animate-rise relative z-[1] max-w-xl">
          <p className="mb-4 inline-flex rounded-full border border-white/50 bg-white/65 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--ink-soft)] shadow-sm backdrop-blur">
            Осмысленное обучение без шума
          </p>
          <h1 id="hero-title" className="hero-title">
            Развивай мышление.
            <br />
            <span className="gradient-text">Применяй знания в жизни.</span>
          </h1>
          <p className="hero-lead">
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

        <div className="animate-rise-delay relative z-[1] min-w-0 lg:-mr-2 xl:-mr-4">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
