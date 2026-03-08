'use client'
import { useParams } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { SectionCard } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { getCountyName } from '@/lib/demo-data'
import { useDemoStore } from '@/lib/demo-store'

export default function AdminGrocerDetailPage() {
  const { grocerId } = useParams<{ grocerId: string }>()
  const store = useDemoStore()
  const grocer = store.getGrocerById(grocerId)
  if (!grocer) return null
  return <PageShell role="Admin" title={grocer.name} subtitle="Grocer detail snapshot for the demo." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/grocers'}))}><div className="grid gap-6 lg:grid-cols-2"><SectionCard title="Profile summary"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Description</dt><dd>{grocer.description}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Primary county</dt><dd>{getCountyName(grocer.primaryCountyId)}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Receiving address</dt><dd>{grocer.receivingAddress}</dd></div></dl></SectionCard><SectionCard title="Activity summary"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Preferred delivery days</dt><dd>{grocer.preferredDeliveryDays.join(', ')}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Connections</dt><dd>{store.connections.filter((c) => c.grocerId === grocer.id).length}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Orders</dt><dd>{store.getOrdersForGrocer(grocer.id).length}</dd></div></dl></SectionCard></div></PageShell>
}
