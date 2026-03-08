'use client'
import { PageShell } from '@/components/page-shell'
import { SectionCard } from '@/components/blocks'
import { vendorNav } from '@/lib/navigation'
import { getCountyName } from '@/lib/demo-data'
import { useCurrentVendor } from '@/lib/demo-store'
import { formatCurrency } from '@/lib/utils'

export default function VendorProfilePage() {
  const vendor = useCurrentVendor()
  if (!vendor) return null
  return <PageShell role="Vendor" title="Profile" subtitle="Vendor business identity and operating basics." nav={vendorNav.map((n)=>({...n,current:n.href==='/vendor/profile'}))}><div className="grid gap-6 lg:grid-cols-2"><SectionCard title="Business info"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Description</dt><dd>{vendor.description}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Phone</dt><dd>{vendor.phone}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Primary county</dt><dd>{getCountyName(vendor.primaryCountyId)}</dd></div></dl></SectionCard><SectionCard title="Operating rules"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Service areas</dt><dd>{vendor.serviceAreaIds.map(getCountyName).join(', ')}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Delivery days</dt><dd>{vendor.deliveryDays.join(', ')}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Lead time</dt><dd>{vendor.leadTimeDays} days</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Minimum order</dt><dd>{vendor.minimumOrderAmount ? formatCurrency(vendor.minimumOrderAmount) : 'None'}</dd></div></dl></SectionCard></div></PageShell>
}
