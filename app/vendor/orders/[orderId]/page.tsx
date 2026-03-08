'use client'
import { useParams } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { Button } from '@/components/ui/button'
import { OrderTimeline, SectionCard, StatusBadge } from '@/components/blocks'
import { vendorNav } from '@/lib/navigation'
import { useCurrentVendor, useDemoStore } from '@/lib/demo-store'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function VendorOrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>()
  const vendor = useCurrentVendor()
  const store = useDemoStore()
  if (!vendor) return null
  const order = store.getOrderById(orderId)
  if (!order) return null
  const grocer = store.getGrocerById(order.grocerId)
  const items = store.getOrderItems(order.id)
  const events = store.getOrderEvents(order.id)
  return <PageShell role="Vendor" title={grocer?.name ?? 'Order'} subtitle="Review the buyer request and respond with a confirm, modification, or cancellation." nav={vendorNav.map((n)=>({...n,current:n.href==='/vendor/orders'}))}><div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"><SectionCard title="Order detail" action={<StatusBadge status={order.status} />}><div className="space-y-3 text-sm"><p>Delivery date: {formatDate(order.deliveryDate)}</p><p>Subtotal: {formatCurrency(order.subtotal)}</p>{order.buyerNote ? <p>Buyer note: {order.buyerNote}</p> : null}{order.vendorNote ? <p>Vendor note: {order.vendorNote}</p> : null}<div className="space-y-2 pt-2">{items.map((item) => <div key={item.id} className="flex justify-between"><span>{item.productNameSnapshot} × {item.quantity}</span><span>{formatCurrency(item.priceSnapshot * item.quantity)}</span></div>)}</div><div className="flex flex-wrap gap-3 pt-4"><Button onClick={() => store.confirmOrder(order.id)}>Confirm order</Button><Button variant="outline" onClick={() => store.modifyOrder({ orderId: order.id, vendorNote: 'Adjusted first line to reflect current available volume.', items: items.slice(0,1).map((item) => ({ orderItemId: item.id, quantity: Math.max(1, item.quantity - 1) })) })}>Modify order</Button><Button variant="ghost" onClick={() => store.rejectOrder(order.id, 'Canceled for demo purposes')}>Cancel order</Button></div></div></SectionCard><SectionCard title="Order timeline"><OrderTimeline events={events} /></SectionCard></div></PageShell>
}
