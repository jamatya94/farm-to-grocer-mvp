import Link from "next/link"

export function Brand({ muted = false }: { muted?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,hsl(var(--primary)),hsl(var(--primary-deep)))] text-sm font-semibold text-white shadow-[0_16px_35px_-18px_rgba(24,68,48,0.6)]">
        FTG
      </div>
      <div>
        <p className="text-sm font-semibold tracking-[-0.02em] text-[hsl(var(--foreground))]">
          Farm to Grocer
        </p>
        <p className={`text-xs ${muted ? "text-[hsl(var(--muted-foreground))]" : "text-[hsl(var(--muted-foreground))]"}`}>
          Relationship-first wholesale ordering
        </p>
      </div>
    </Link>
  )
}
