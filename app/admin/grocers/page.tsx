'use client'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { SectionCard } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { getCountyName } from '@/lib/demo-data'
import { useDemoStore } from '@/lib/demo-store'

export default function AdminGrocersPage() {
  const store = useDemoStore()
  return <PageShell role="Admin" title="Grocers" subtitle="Buyer organizations and receiving-side context." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/grocers'}))}><SectionCard title="Grocer organizations"><div className="space-y-3">{store.grocers.map((grocer) => <Link key={grocer.id} href={`/admin/grocers/${grocer.id}`} className="block rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4 hover:bg-[hsl(var(--accent))]"><p className="font-medium">{grocer.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{getCountyName(grocer.primaryCountyId)} · {grocer.categoriesOfInterest.join(', ')}</p></Link>)}</div></SectionCard></PageShell>
}
