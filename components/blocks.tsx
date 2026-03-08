import * as React from "react"
import { cn } from "@/lib/utils"

type Tone = "default" | "success" | "attention" | "warning" | "danger"

const toneMap: Record<Tone, string> = {
  default: "bg-[hsl(var(--accent))] text-[hsl(var(--foreground))]",
  success: "bg-emerald-100 text-emerald-900",
  attention: "bg-amber-100 text-amber-900",
  warning: "bg-orange-100 text-orange-900",
  danger: "bg-rose-100 text-rose-900",
}

export function StatusBadge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize tracking-[-0.01em]",
        toneMap[tone],
        className
      )}
    >
      {children}
    </span>
  )
}

export function SectionCard({
  title,
  description,
  action,
  children,
  className,
}: {
  title: string
  description?: string
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("rounded-[28px] border border-[hsl(var(--border))] bg-white/78 p-5 shadow-[0_30px_80px_-55px_rgba(20,35,28,0.35)] backdrop-blur-sm md:p-6", className)}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">{title}</h2>
          {description ? (
            <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{description}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  )
}

export function StatCard({
  label,
  value,
  tone = "default",
}: {
  label: string
  value: string | number
  tone?: Tone
}) {
  return (
    <div className="rounded-[24px] border border-[hsl(var(--border))] bg-white/78 p-5 shadow-[0_25px_70px_-55px_rgba(20,35,28,0.35)] backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">{label}</p>
        <StatusBadge tone={tone}>{tone === "default" ? "Live" : tone}</StatusBadge>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[hsl(var(--foreground))]">{value}</p>
    </div>
  )
}

export function HeroMetric({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-white/50 bg-white/55 p-4 backdrop-blur-sm">
      <p className="text-xs uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">{label}</p>
      <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">{value}</p>
    </div>
  )
}


type TimelineEvent = {
  id: string
  eventLabel: string
  note?: string
  createdAt: string
}

export function OrderTimeline({
  events,
  className,
}: {
  events: TimelineEvent[]
  className?: string
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {events.length === 0 ? (
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 text-sm text-[hsl(var(--muted-foreground))]">
          No timeline events yet.
        </div>
      ) : (
        events.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"
          >
            <p className="font-medium text-[hsl(var(--foreground))]">
              {event.eventLabel}
            </p>
            {event.note ? (
              <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                {event.note}
              </p>
            ) : null}
            <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
              {new Date(event.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  )
}
