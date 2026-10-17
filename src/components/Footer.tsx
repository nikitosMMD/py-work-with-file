export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold tracking-tight">StudyOS</p>
        <p className="text-sm text-[var(--ink-muted)]">
          Демонстрационный лендинг образовательного продукта.
        </p>
      </div>
    </footer>
  );
}
