'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { getCountyName } from '@/lib/demo-data'
import { useDemoStore } from '@/lib/demo-store'

export default function AdminVendorsPage() {
  const store = useDemoStore()
  return <PageShell role="Admin" title="Vendors" subtitle="View vendor organizations and their operational footprint." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/vendors'}))}><SectionCard title="Vendor organizations"><div className="space-y-3">{store.vendors.map((vendor) => <Link key={vendor.id} href={`/admin/vendors/${vendor.id}`} className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><p className="font-medium">{vendor.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{getCountyName(vendor.primaryCountyId)} · {vendor.categories.join(', ')}</p></Link>)}</div></SectionCard></PageShell>
}
