'use client'

import Link from 'next/link'
import { CalendarRange, Store } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatCard, StatusBadge } from '@/components/blocks'
import { buyerNav } from '@/lib/navigation'
import { useCurrentGrocer, useDemoStore } from '@/lib/demo-store'
import { formatDate } from '@/lib/utils'

export default function BuyerDashboardPage() {
  const grocer = useCurrentGrocer()
  const store = useDemoStore()
  if (!grocer) return null
  const grocerOrders = store.getOrdersForGrocer(grocer.id)
  const vendors = store.getConnectedVendorsForGrocer(grocer.id)
  return (
    <PageShell role="Buyer" title={grocer.name} subtitle="A buyer workspace centered on connected vendors, current availability, and order follow-through." nav={buyerNav.map((n) => ({ ...n, current: n.href === '/buyer/dashboard' }))}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Connected Vendors" value={vendors.length} />
        <StatCard label="Orders In Progress" value={grocerOrders.filter((o) => ['submitted', 'modified', 'confirmed'].includes(o.status)).length} />
        <StatCard label="Modified Orders" value={grocerOrders.filter((o) => o.status === 'modified').length} tone="attention" />
        <StatCard label="Upcoming Deliveries" value={grocerOrders.filter((o) => o.status === 'confirmed').length} tone="success" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Attention queue" description="Only the next actions that matter.">
          <div className="space-y-3">
            {grocerOrders.slice(0, 4).map((order) => (
              <Link key={order.id} href={`/buyer/orders/${order.id}`} className="flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]">
                <div>
                  <p className="font-medium">{store.getVendorById(order.vendorId)?.name ?? 'Vendor'}</p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Delivery {formatDate(order.deliveryDate)}</p>
                </div>
                <StatusBadge>{order.status}</StatusBadge>
              </Link>
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Quick actions" description="Keep ordering fast, not bloated." action={<Store className="h-5 w-5 text-[hsl(var(--primary))]" />}>
          <div className="space-y-3">
            <Link href="/buyer/vendors" className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]">View connected vendors</Link>
            <Link href="/buyer/vendors/vendor-agriberry" className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]">Start order with Agriberry Farms</Link>
            <Link href="/buyer/orders" className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]">Review recent orders</Link>
          </div>
        </SectionCard>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Connected vendors snapshot" description="This is a relationship list, not a giant marketplace.">
          <div className="space-y-3">{vendors.map((vendor) => <div key={vendor.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><p className="font-medium">{vendor.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{vendor.categories.join(', ')} · {vendor.deliveryDays.join(', ')}</p></div>)}</div>
        </SectionCard>
        <SectionCard title="Upcoming deliveries" description="Enough visibility for a convincing buyer workflow." action={<CalendarRange className="h-5 w-5 text-[hsl(var(--primary))]" />}>
          <div className="space-y-3">{grocerOrders.filter((o) => o.status === 'confirmed').map((order) => <div key={order.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><p className="font-medium">{store.getVendorById(order.vendorId)?.name ?? 'Vendor'}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{formatDate(order.deliveryDate)}</p></div>)}</div>
        </SectionCard>
      </div>
    </PageShell>
  )
}
