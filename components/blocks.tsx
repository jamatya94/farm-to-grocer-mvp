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
    <section
      className={`relative overflow-hidden rounded-[30px] border border-[rgba(32,58,43,0.10)] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(246,249,244,0.86))] p-5 shadow-[0_22px_54px_-34px_rgba(17,24,20,0.20)] ${className ?? ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-[hsl(var(--foreground))]">
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              {description}
            </p>
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
  tone?: "default" | "attention" | "success"
}) {
  const toneStyles =
    tone === "attention"
      ? "border-amber-200/70 bg-[linear-gradient(145deg,rgba(255,251,235,0.96),rgba(255,247,214,0.88))]"
      : tone === "success"
      ? "border-emerald-200/70 bg-[linear-gradient(145deg,rgba(240,253,244,0.96),rgba(220,252,231,0.88))]"
      : "border-[rgba(32,58,43,0.10)] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(247,250,246,0.88))]"

  return (
    <div
      className={`relative overflow-hidden rounded-[26px] border p-5 shadow-[0_18px_40px_-30px_rgba(17,24,20,0.22)] ${toneStyles}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
        {label}
      </p>
      <p className="mt-3 text-[2rem] font-semibold leading-none tracking-[-0.05em] text-[hsl(var(--foreground))]">
        {value}
      </p>
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
