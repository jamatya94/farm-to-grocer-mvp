'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { buyerNav } from '@/lib/navigation'
import { useCurrentGrocer, useDemoStore } from '@/lib/demo-store'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function BuyerOrdersPage() {
  const grocer = useCurrentGrocer()
  const store = useDemoStore()
  if (!grocer) return null
  const orders = store.getOrdersForGrocer(grocer.id)
  return <PageShell role="Buyer" title="Orders" subtitle="Track submitted, modified, confirmed, and delivered orders." nav={buyerNav.map((n) => ({ ...n, current: n.href === '/buyer/orders' }))}><SectionCard title="All orders"><div className="space-y-3">{orders.map((order) => <Link key={order.id} href={`/buyer/orders/${order.id}`} className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><div><p className="font-medium">{store.getVendorById(order.vendorId)?.name ?? 'Vendor'}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{formatDate(order.deliveryDate)} · {formatCurrency(order.subtotal)}</p></div><StatusBadge>{order.status}</StatusBadge></Link>)}</div></SectionCard></PageShell>
}
