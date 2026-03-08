'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { vendorNav } from '@/lib/navigation'
import { useCurrentVendor, useDemoStore } from '@/lib/demo-store'

export default function VendorConnectionsPage() {
  const vendor = useCurrentVendor()
  const store = useDemoStore()
  if (!vendor) return null
  const connections = store.getVendorConnections(vendor.id)
  return <PageShell role="Vendor" title="Connections" subtitle="Manage grocer relationships without turning this into CRM software." nav={vendorNav.map((n)=>({...n,current:n.href==='/vendor/connections'}))}><SectionCard title="All connections"><div className="space-y-3">{connections.map((connection) => <Link key={connection.id} href={`/admin/connections/${connection.id}`} className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><div><p className="font-medium">{store.getGrocerById(connection.grocerId)?.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">Requested {new Date(connection.requestedAt).toLocaleDateString()}</p></div><StatusBadge>{connection.status}</StatusBadge></Link>)}</div></SectionCard></PageShell>
}
