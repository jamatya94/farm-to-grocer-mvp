'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { vendorNav } from '@/lib/navigation'
import { useCurrentVendor, useDemoStore } from '@/lib/demo-store'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function VendorOrdersPage() {
  const vendor = useCurrentVendor()
  const store = useDemoStore()
  if (!vendor) return null
  const orders = store.getOrdersForVendor(vendor.id)
  return <PageShell role="Vendor" title="Orders" subtitle="Incoming orders from connected grocers." nav={vendorNav.map((n)=>({...n,current:n.href==='/vendor/orders'}))}><SectionCard title="All orders"><div className="space-y-3">{orders.map((order) => <Link key={order.id} href={`/vendor/orders/${order.id}`} className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><div><p className="font-medium">{store.getGrocerById(order.grocerId)?.name ?? 'Grocer'}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{formatDate(order.deliveryDate)} · {formatCurrency(order.subtotal)}</p></div><StatusBadge>{order.status}</StatusBadge></Link>)}</div></SectionCard></PageShell>
}
