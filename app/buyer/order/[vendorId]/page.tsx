'use client'
import { useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { SectionCard, StatusBadge } from '@/components/blocks'
import { Button } from '@/components/ui/button'
import { buyerNav } from '@/lib/navigation'
import { useCurrentGrocer, useDemoStore } from '@/lib/demo-store'
import { formatCurrency } from '@/lib/utils'

export default function BuyerOrderCreatePage() {
  const { vendorId } = useParams<{ vendorId: string }>()
  const grocer = useCurrentGrocer()
  const store = useDemoStore()
  const router = useRouter()
  const vendor = store.getVendorById(vendorId)
  const [buyerNote, setBuyerNote] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('2026-03-20')
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  if (!grocer || !vendor) return null
  const availability = store.getAvailabilityForVendor(vendor.id)
  const selected = useMemo(() => availability.map(({ product }) => ({ productId: product.id, quantity: quantities[product.id] || 0, price: product.price })).filter((item) => item.quantity > 0), [availability, quantities])
  const subtotal = selected.reduce((sum, item) => sum + item.quantity * item.price, 0)
  const canSubmit = selected.length > 0 && (!vendor.minimumOrderAmount || subtotal >= vendor.minimumOrderAmount)
  return <PageShell role="Buyer" title={`Order from ${vendor.name}`} subtitle="A single-vendor, non-payment order flow for the demo." nav={buyerNav.map((n) => ({ ...n, current: n.href === '/buyer/vendors' }))}><div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><SectionCard title="Available products"><div className="space-y-3">{availability.map(({ product, availability }) => <div key={product.id} className="rounded-2xl border border-[hsl(var(--border))] bg-white/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-medium">{product.name}</p><p className="text-sm text-[hsl(var(--muted-foreground))]">{product.packSize} · {formatCurrency(product.price)} / {product.unit}</p></div><StatusBadge status={availability.status} /></div><div className="mt-3 flex items-center justify-between gap-4"><span className="text-sm text-[hsl(var(--muted-foreground))]">{availability.availableQuantity} available</span><input type="number" min={0} value={quantities[product.id] || 0} onChange={(e) => setQuantities((prev) => ({ ...prev, [product.id]: Number(e.target.value) }))} className="w-24 rounded-xl border border-[hsl(var(--border))] bg-white px-3 py-2" /></div></div>)}</div></SectionCard><SectionCard title="Order summary" description="Keep this clear, believable, and lightweight."><div className="space-y-4"><div className="rounded-2xl bg-[hsl(var(--accent))] p-4 text-sm"><div>Delivery date</div><input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} className="mt-2 w-full rounded-xl border border-[hsl(var(--border))] bg-white px-3 py-2" /></div><div className="rounded-2xl bg-[hsl(var(--accent))] p-4 text-sm"><div>Buyer note</div><textarea value={buyerNote} onChange={(e) => setBuyerNote(e.target.value)} className="mt-2 h-24 w-full rounded-xl border border-[hsl(var(--border))] bg-white px-3 py-2" /></div><div className="space-y-2 text-sm">{selected.map((item) => { const product = store.products.find((p) => p.id === item.productId); return <div key={item.productId} className="flex justify-between"><span>{product?.name} × {item.quantity}</span><span>{formatCurrency(item.quantity * item.price)}</span></div>})}</div><div className="flex justify-between border-t border-[hsl(var(--border))] pt-4 font-semibold"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>{vendor.minimumOrderAmount ? <p className="text-sm text-[hsl(var(--muted-foreground))]">Minimum order: {formatCurrency(vendor.minimumOrderAmount)}</p> : null}<Button className="w-full" disabled={!canSubmit} onClick={() => { const orderId = store.submitOrder({ vendorId: vendor.id, grocerId: grocer.id, deliveryDate, buyerNote, items: selected.map((s) => ({ productId: s.productId, quantity: s.quantity })) }); router.push(`/buyer/orders/${orderId}`) }}>Submit test order</Button></div></SectionCard></div></PageShell>
}
