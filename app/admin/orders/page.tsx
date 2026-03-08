'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { useDemoStore } from '@/lib/demo-store'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function AdminOrdersPage() {
  const store = useDemoStore()
  return <PageShell role="Admin" title="Orders" subtitle="Cross-platform order visibility for the demo." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/orders'}))}><SectionCard title="All orders"><div className="space-y-3">{store.orders.map((order) => <Link key={order.id} href={`/admin/orders/${order.id}`} className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><div><p className="font-medium">{store.getVendorById(order.vendorId)?.name} → {store.getGrocerById(order.grocerId)?.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{formatDate(order.deliveryDate)} · {formatCurrency(order.subtotal)}</p></div><StatusBadge>{order.status}</StatusBadge></Link>)}</div></SectionCard></PageShell>
}
