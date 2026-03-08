'use client'
import Link from 'next/link'
import { Package2, Truck } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatCard, StatusBadge } from '@/components/blocks'
import { vendorNav } from '@/lib/navigation'
import { useCurrentVendor, useDemoStore } from '@/lib/demo-store'

export default function VendorDashboardPage() {
  const vendor = useCurrentVendor()
  const store = useDemoStore()
  if (!vendor) return null
  const orders = store.getOrdersForVendor(vendor.id)
  const connections = store.getVendorConnections(vendor.id)
  const availability = store.getAvailabilityForVendor(vendor.id)
  return <PageShell role="Vendor" title={vendor.name} subtitle="A light operations console for products, availability, connections, and incoming orders." nav={vendorNav.map((n) => ({ ...n, current: n.href === '/vendor/dashboard' }))}><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><StatCard label="Pending connections" value={connections.filter((c) => c.status === 'pending').length} /><StatCard label="Orders needing review" value={orders.filter((o) => ['submitted', 'modified'].includes(o.status)).length} tone="attention" /><StatCard label="Confirmed upcoming orders" value={orders.filter((o) => o.status === 'confirmed').length} tone="success" /><StatCard label="Limited products" value={availability.filter((a) => a.availability.status === 'limited').length} /></div><div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><SectionCard title="Action queue"><div className="space-y-3">{orders.slice(0,4).map((order) => <Link key={order.id} href={`/vendor/orders/${order.id}`} className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><div><p className="font-medium">{store.getGrocerById(order.grocerId)?.name ?? 'Grocer'}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">Order {order.id}</p></div><StatusBadge>{order.status}</StatusBadge></Link>)}</div></SectionCard><SectionCard title="Quick actions" action={<Package2 className="h-5 w-5 text-[hsl(var(--primary))]" />}><div className="space-y-3"><Link href="/vendor/products" className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]">View products</Link><Link href="/vendor/availability" className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]">Update availability</Link><Link href="/vendor/orders" className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]">Review incoming orders</Link></div></SectionCard></div><div className="mt-6"><SectionCard title="Upcoming deliveries" action={<Truck className="h-5 w-5 text-[hsl(var(--primary))]" />}><div className="space-y-3">{orders.filter((o) => o.status === 'confirmed').map((order) => <div key={order.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><p className="font-medium">{store.getGrocerById(order.grocerId)?.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{order.deliveryDate}</p></div>)}</div></SectionCard></div></PageShell>
}
