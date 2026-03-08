'use client'
import { useParams } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { useDemoStore } from '@/lib/demo-store'

export default function AdminConnectionDetailPage() {
  const { connectionId } = useParams<{ connectionId: string }>()
  const store = useDemoStore()
  const connection = store.getConnectionById(connectionId)
  if (!connection) return null
  return <PageShell role="Admin" title="Connection detail" subtitle="Enough relationship context for the MVP, without turning this into a recommendation console." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/connections'}))}><SectionCard title="Relationship"><div className="space-y-3 text-sm"><div className="flex items-center justify-between"><span>{store.getVendorById(connection.vendorId)?.name}</span><StatusBadge status={connection.status} /></div><div>{store.getGrocerById(connection.grocerId)?.name}</div><div className="text-[hsl(var(--muted-foreground))]">Requested {new Date(connection.requestedAt).toLocaleString()}</div>{connection.approvedAt ? <div className="text-[hsl(var(--muted-foreground))]">Approved {new Date(connection.approvedAt).toLocaleString()}</div> : null}</div></SectionCard></PageShell>
}
