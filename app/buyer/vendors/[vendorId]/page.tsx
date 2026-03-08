'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { Button } from '@/components/ui/button'
import { buyerNav } from '@/lib/navigation'
import { getCountyName } from '@/lib/demo-data'
import { useCurrentGrocer, useDemoStore } from '@/lib/demo-store'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function BuyerVendorDetailPage() {
  const { vendorId } = useParams<{ vendorId: string }>()
  const grocer = useCurrentGrocer()
  const store = useDemoStore()
  if (!grocer) return null
  const vendor = store.getVendorById(vendorId)
  if (!vendor) return <PageShell role="Buyer" title="Vendor not found" nav={buyerNav}>{null}</PageShell>
  const availability = store.getAvailabilityForVendor(vendor.id)
  return <PageShell role="Buyer" title={vendor.name} subtitle={vendor.description} nav={buyerNav.map((n) => ({ ...n, current: n.href === '/buyer/vendors' }))}><div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"><SectionCard title="Current availability" description="What is actually orderable now."><div className="space-y-3">{availability.map(({ product, availability }) => <div key={product.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-medium">{product.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{product.category} · {product.packSize}</p></div><StatusBadge status={availability.status} /></div><div className="mt-3 flex items-center justify-between text-sm"><span>{formatCurrency(product.price)} / {product.unit}</span><span className="text-[hsl(var(--muted-foreground))]">{availability.availableQuantity} available · until {formatDate(availability.availableUntil)}</span></div></div>)}</div></SectionCard><div className="space-y-6"><SectionCard title="Vendor operating basics"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Primary county</dt><dd>{getCountyName(vendor.primaryCountyId)}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Service areas</dt><dd>{vendor.serviceAreaIds.map(getCountyName).join(', ')}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Delivery days</dt><dd>{vendor.deliveryDays.join(', ')}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Lead time</dt><dd>{vendor.leadTimeDays} days</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Minimum order</dt><dd>{vendor.minimumOrderAmount ? formatCurrency(vendor.minimumOrderAmount) : 'None'}</dd></div></dl></SectionCard><Button className="w-full" asChild><Link href={`/buyer/order/${vendor.id}`}>Start test order</Link></Button></div></div></PageShell>
}
