'use client'
import { useParams } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { SectionCard } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { getCountyName } from '@/lib/demo-data'
import { useDemoStore } from '@/lib/demo-store'

export default function AdminVendorDetailPage() {
  const { vendorId } = useParams<{ vendorId: string }>()
  const store = useDemoStore()
  const vendor = store.getVendorById(vendorId)
  if (!vendor) return null
  return <PageShell role="Admin" title={vendor.name} subtitle="Vendor detail snapshot for the demo." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/vendors'}))}><div className="grid gap-6 lg:grid-cols-2"><SectionCard title="Profile summary"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Description</dt><dd>{vendor.description}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Primary county</dt><dd>{getCountyName(vendor.primaryCountyId)}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Categories</dt><dd>{vendor.categories.join(', ')}</dd></div></dl></SectionCard><SectionCard title="Activity summary"><dl className="space-y-3 text-sm"><div><dt className="text-[hsl(var(--muted-foreground))]">Products</dt><dd>{store.getProductsForVendor(vendor.id).length}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Connections</dt><dd>{store.getVendorConnections(vendor.id).length}</dd></div><div><dt className="text-[hsl(var(--muted-foreground))]">Orders</dt><dd>{store.getOrdersForVendor(vendor.id).length}</dd></div></dl></SectionCard></div></PageShell>
}
