'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { buyerNav } from '@/lib/navigation'
import { useCurrentGrocer, useDemoStore } from '@/lib/demo-store'
import { getCountyName } from '@/lib/demo-data'

export default function BuyerVendorsPage() {
  const grocer = useCurrentGrocer()
  const store = useDemoStore()
  if (!grocer) return null
  const approved = store.getConnectedVendorsForGrocer(grocer.id)
  const pending = store.connections.filter((c) => c.grocerId === grocer.id && c.status !== 'approved')
  return <PageShell role="Buyer" title="Connected vendors" subtitle="Browse supplier relationships before you ever build an order." nav={buyerNav.map((n) => ({ ...n, current: n.href === '/buyer/vendors' }))}><div className="grid gap-6 lg:grid-cols-2"><SectionCard title="Approved"><div className="space-y-3">{approved.map((vendor) => <Link key={vendor.id} href={`/buyer/vendors/${vendor.id}`} className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><div className="flex items-start justify-between gap-3"><div><p className="font-medium">{vendor.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{getCountyName(vendor.primaryCountyId)} · {vendor.categories.join(', ')}</p></div><StatusBadge>approved</StatusBadge></div></Link>)}</div></SectionCard><SectionCard title="Pending and archived"><div className="space-y-3">{pending.map((connection) => { const vendor = store.getVendorById(connection.vendorId); if (!vendor) return null; return <div key={connection.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-medium">{vendor.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{vendor.categories.join(', ')}</p></div><StatusBadge>{connection.status}</StatusBadge></div></div>})}</div></SectionCard></div></PageShell>
}
