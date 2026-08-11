const items = ["Ekologi", "Feminisme", "Soshum & Politik", "Teologi & Spiritual"];

export function GenreMarquee() {
  const sequence = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
            {sequence.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
              >
                {item}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}