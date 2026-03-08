import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function StatCard({ label, value, tone = 'default' }: { label: string; value: string | number; tone?: 'default' | 'attention' | 'success' }) {
  return (
    <Card className="p-5">
      <div className="text-sm text-[hsl(var(--muted-foreground))]">{label}</div>
      <div className={cn('mt-3 text-3xl font-semibold', tone === 'attention' && 'text-amber-700', tone === 'success' && 'text-emerald-700')}>{value}</div>
    </Card>
  )
}

export function SectionCard({ title, description, action, children }: { title: string; description?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description ? <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{description}</p> : null}
        </div>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </Card>
  )
}

export function StatusBadge({ status }: { status: string }) {
  const cls =
    status === 'confirmed' || status === 'approved' || status === 'delivered'
      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      : status === 'modified' || status === 'pending' || status === 'limited'
        ? 'bg-amber-50 text-amber-700 border border-amber-200'
        : status === 'canceled' || status === 'declined' || status === 'sold_out'
          ? 'bg-rose-50 text-rose-700 border border-rose-200'
          : 'bg-stone-100 text-stone-700 border border-stone-200'
  return <Badge className={cls}>{status.replaceAll('_', ' ')}</Badge>
}

export function OrderTimeline({ events }: { events: Array<{ id: string; eventLabel: string; note?: string; createdAt: string }> }) {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[hsl(var(--primary))]" />
            {index < events.length - 1 ? <div className="mt-2 h-full min-h-8 w-px bg-[hsl(var(--border))]" /> : null}
          </div>
          <div className="pb-4">
            <div className="font-medium">{event.eventLabel}</div>
            {event.note ? <div className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{event.note}</div> : null}
            <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{new Date(event.createdAt).toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
