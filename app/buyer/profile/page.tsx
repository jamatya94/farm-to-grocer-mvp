'use client'
import { PageShell } from '@/components/page-shell'
import { SectionCard } from '@/components/blocks'
import { buyerNav } from '@/lib/navigation'
import { getCountyName } from '@/lib/demo-data'
import { useCurrentGrocer } from '@/lib/demo-store'

export default function BuyerProfilePage() {
  const grocer = useCurrentGrocer()
  if (!grocer) return null
  return <PageShell role="Buyer" title={grocer.name} subtitle="A lightweight store profile for the demo." nav={buyerNav.map((n) => ({ ...n, current: n.href === '/buyer/profile' }))}><div className="grid gap-6 lg:grid-cols-2"><SectionCard title="Store details"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Description</dt><dd>{grocer.description}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">County</dt><dd>{getCountyName(grocer.primaryCountyId)}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Receiving address</dt><dd>{grocer.receivingAddress}</dd></div></dl></SectionCard><SectionCard title="Receiving rules"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Receiving days</dt><dd>{grocer.receivingDays.join(', ')}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Preferred delivery</dt><dd>{grocer.preferredDeliveryDays.join(', ')}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Categories of interest</dt><dd>{grocer.categoriesOfInterest.join(', ')}</dd></div></dl></SectionCard></div></PageShell>
}
