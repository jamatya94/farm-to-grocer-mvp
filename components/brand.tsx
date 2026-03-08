export function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold">FG</div>
      <div>
        <div className="text-sm uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">Baltimore · DMV</div>
        <div className="text-lg font-semibold text-[hsl(var(--foreground))]">Farm to Grocer</div>
      </div>
    </div>
  )
}
