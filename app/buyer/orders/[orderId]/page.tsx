'use client'
import { useParams } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { Button } from '@/components/ui/button'
import { OrderTimeline, SectionCard, StatusBadge } from '@/components/blocks'
import { buyerNav } from '@/lib/navigation'
import { useCurrentGrocer, useDemoStore } from '@/lib/demo-store'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function BuyerOrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>()
  const grocer = useCurrentGrocer()
  const store = useDemoStore()
  if (!grocer) return null
  const order = store.getOrderById(orderId)
  if (!order) return null
  const vendor = store.getVendorById(order.vendorId)
  const items = store.getOrderItems(order.id)
  const events = store.getOrderEvents(order.id)
  return <PageShell role="Buyer" title={vendor?.name ?? 'Order'} subtitle="Review the order, the vendor response, and the timeline." nav={buyerNav.map((n) => ({ ...n, current: n.href === '/buyer/orders' }))}><div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"><SectionCard title="Order detail" action={<StatusBadge status={order.status} />}><div className="space-y-3 text-sm"><p>Delivery date: {formatDate(order.deliveryDate)}</p><p>Subtotal: {formatCurrency(order.subtotal)}</p>{order.buyerNote ? <p>Buyer note: {order.buyerNote}</p> : null}{order.vendorNote ? <p>Vendor note: {order.vendorNote}</p> : null}<div className="space-y-2 pt-2">{items.map((item) => <div key={item.id} className="flex justify-between"><span>{item.productNameSnapshot} × {item.quantity}</span><span>{formatCurrency(item.priceSnapshot * item.quantity)}</span></div>)}</div>{order.status === 'modified' ? <div className="flex gap-3 pt-4"><Button onClick={() => store.acceptRevision(order.id)}>Accept revision</Button><Button variant="outline" onClick={() => store.rejectOrder(order.id, 'Buyer canceled after revision')}>Cancel order</Button></div> : null}{order.status === 'confirmed' ? <div className="pt-4"><Button variant="outline" onClick={() => store.markDelivered(order.id)}>Mark delivered</Button></div> : null}</div></SectionCard><SectionCard title="Order timeline"><OrderTimeline events={events} /></SectionCard></div></PageShell>
}
