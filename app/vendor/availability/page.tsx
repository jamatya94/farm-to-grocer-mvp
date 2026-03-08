'use client'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { vendorNav } from '@/lib/navigation'
import { useCurrentVendor, useDemoStore } from '@/lib/demo-store'
import { formatDate } from '@/lib/utils'

export default function VendorAvailabilityPage() {
  const vendor = useCurrentVendor()
  const store = useDemoStore()
  if (!vendor) return null
  const rows = store.getAvailabilityForVendor(vendor.id)
  return <PageShell role="Vendor" title="Availability" subtitle="Time-bound records of what is actually orderable now." nav={vendorNav.map((n)=>({...n,current:n.href==='/vendor/availability'}))}><SectionCard title="Current availability"><div className="space-y-3">{rows.map(({product,availability}) => <div key={product.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-medium">{product.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{product.packSize} · {availability.availableQuantity} available</p></div><StatusBadge>{availability.status}</StatusBadge></div><p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">Active {formatDate(availability.availableFrom)} to {formatDate(availability.availableUntil)}</p></div>)}</div></SectionCard></PageShell>
}
