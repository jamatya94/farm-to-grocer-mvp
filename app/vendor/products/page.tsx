'use client'
import { PageShell } from '@/components/page-shell'
import { SectionCard } from '@/components/blocks'
import { vendorNav } from '@/lib/navigation'
import { useCurrentVendor, useDemoStore } from '@/lib/demo-store'
import { formatCurrency } from '@/lib/utils'

export default function VendorProductsPage() {
  const vendor = useCurrentVendor()
  const store = useDemoStore()
  if (!vendor) return null
  const products = store.getProductsForVendor(vendor.id)
  return <PageShell role="Vendor" title="Products" subtitle="Stable catalog offerings. Availability is managed separately." nav={vendorNav.map((n)=>({...n,current:n.href==='/vendor/products'}))}><SectionCard title="Active products"><div className="space-y-3">{products.map((product) => <div key={product.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-medium">{product.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{product.category} · {product.packSize}</p></div><div className="font-medium">{formatCurrency(product.price)}</div></div></div>)}</div></SectionCard></PageShell>
}
