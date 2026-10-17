import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section pt-0" aria-labelledby="final-title">
      <div className="container">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] px-6 py-14 text-white sm:px-10 sm:py-16">
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,#2a3148_0%,#3a2f5c_45%,#4a3a72_100%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 20% 90%, rgba(140,160,220,0.45), transparent 60%), radial-gradient(ellipse 60% 70% at 85% 20%, rgba(180,120,255,0.35), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2
                id="final-title"
                className="max-w-xl text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]"
              >
                Продолжай учиться.{" "}
                <span className="bg-[linear-gradient(120deg,#c7b7ff,#8eb6ff)] bg-clip-text text-transparent">
                  Продолжай расти.
                </span>
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="mb-4 text-sm text-white/75 lg:ml-auto lg:max-w-sm">
                Попробуйте короткое упражнение прямо на странице — без регистрации и обещаний,
                которых продукт пока не даёт.
              </p>
              <a href="#exercise" className="btn btn-primary bg-white text-[var(--ink)] hover:bg-[#f3f4f7]">
                Попробовать упражнение
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
