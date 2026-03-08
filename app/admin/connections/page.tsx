'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { useDemoStore } from '@/lib/demo-store'

export default function AdminConnectionsPage() {
  const store = useDemoStore()
  return <PageShell role="Admin" title="Connections" subtitle="Lightweight visibility into vendor-grocer relationship records." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/connections'}))}><SectionCard title="All connections"><div className="space-y-3">{store.connections.map((connection) => <Link key={connection.id} href={`/admin/connections/${connection.id}`} className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><div><p className="font-medium">{store.getVendorById(connection.vendorId)?.name} → {store.getGrocerById(connection.grocerId)?.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{new Date(connection.requestedAt).toLocaleDateString()}</p></div><StatusBadge status={connection.status} /></Link>)}</div></SectionCard></PageShell>
}
