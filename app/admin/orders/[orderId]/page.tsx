'use client'
import { useParams } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { OrderTimeline, SectionCard, StatusBadge } from '@/components/blocks'
import { adminNav } from '@/lib/navigation'
import { useDemoStore } from '@/lib/demo-store'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function AdminOrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>()
  const store = useDemoStore()
  const order = store.getOrderById(orderId)
  if (!order) return null
  const items = store.getOrderItems(order.id)
  const events = store.getOrderEvents(order.id)
  return <PageShell role="Admin" title="Order detail" subtitle="All three views should converge on the same order story." nav={adminNav.map((n)=>({...n,current:n.href==='/admin/orders'}))}><div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"><SectionCard title="Order summary" action={<StatusBadge>{order.status}</StatusBadge>}><div className="space-y-3 text-sm"><p>Vendor: {store.getVendorById(order.vendorId)?.name}</p><p>Grocer: {store.getGrocerById(order.grocerId)?.name}</p><p>Delivery date: {formatDate(order.deliveryDate)}</p><p>Subtotal: {formatCurrency(order.subtotal)}</p>{order.buyerNote ? <p>Buyer note: {order.buyerNote}</p> : null}{order.vendorNote ? <p>Vendor note: {order.vendorNote}</p> : null}<div className="space-y-2 pt-2">{items.map((item) => <div key={item.id} className="flex justify-between"><span>{item.productNameSnapshot} × {item.quantity}</span><span>{formatCurrency(item.priceSnapshot * item.quantity)}</span></div>)}</div></div></SectionCard><SectionCard title="Timeline"><OrderTimeline events={events} /></SectionCard></div></PageShell>
}
