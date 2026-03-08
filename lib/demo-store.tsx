'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  demoSeed,
  type Connection,
  type DemoRole,
  type GrocerProfile,
  type Order,
  type OrderEvent,
  type OrderItem,
  type OrderStatus,
  type Product,
  type ProductAvailability,
  type VendorProfile,
} from './demo-data'

type Session = { role: DemoRole; profileId: string } | null

type SubmitOrderInput = {
  vendorId: string
  grocerId: string
  deliveryDate: string
  buyerNote?: string
  items: Array<{ productId: string; quantity: number }>
}

type ModifyOrderInput = {
  orderId: string
  items: Array<{ orderItemId: string; quantity: number }>
  vendorNote?: string
}

type DemoStoreContextValue = {
  session: Session
  vendors: VendorProfile[]
  grocers: GrocerProfile[]
  connections: Connection[]
  products: Product[]
  availability: ProductAvailability[]
  orders: Order[]
  orderItems: OrderItem[]
  orderEvents: OrderEvent[]
  setSession: (session: Session) => void
  resetDemo: () => void
  getCurrentVendor: () => VendorProfile | undefined
  getCurrentGrocer: () => GrocerProfile | undefined
  getVendorById: (id: string) => VendorProfile | undefined
  getGrocerById: (id: string) => GrocerProfile | undefined
  getConnectionById: (id: string) => Connection | undefined
  getOrderById: (id: string) => Order | undefined
  getProductsForVendor: (vendorId: string) => Product[]
  getAvailabilityForVendor: (vendorId: string) => Array<{ product: Product; availability: ProductAvailability }>
  getConnectedVendorsForGrocer: (grocerId: string) => VendorProfile[]
  getVendorConnections: (vendorId: string) => Connection[]
  getOrdersForVendor: (vendorId: string) => Order[]
  getOrdersForGrocer: (grocerId: string) => Order[]
  getOrderItems: (orderId: string) => OrderItem[]
  getOrderEvents: (orderId: string) => OrderEvent[]
  submitOrder: (input: SubmitOrderInput) => string
  confirmOrder: (orderId: string) => void
  modifyOrder: (input: ModifyOrderInput) => void
  rejectOrder: (orderId: string, note?: string) => void
  acceptRevision: (orderId: string) => void
  markDelivered: (orderId: string) => void
}

const DemoStoreContext = createContext<DemoStoreContextValue | null>(null)
const STORAGE_KEY = 'ftg-demo-store-v3'
const SESSION_KEY = 'ftg-demo-session-v3'

const uid = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 9)}`
const nowIso = () => new Date().toISOString()

function usePersistentState<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw) setValue(JSON.parse(raw))
    } catch {}
  }, [key])

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])

  return [value, setValue] as const
}

function buildFallbackState() {
  return {
    vendors: demoSeed.vendors,
    grocers: demoSeed.grocers,
    connections: demoSeed.connections,
    products: demoSeed.products,
    availability: demoSeed.availability,
    orders: demoSeed.orders,
    orderItems: demoSeed.orderItems,
    orderEvents: demoSeed.orderEvents,
  }
}

export function DemoStoreProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = usePersistentState<Session>(SESSION_KEY, {
    role: 'grocer_owner',
    profileId: 'grocer-eddies-mv',
  })

  const [state, setState] = usePersistentState(STORAGE_KEY, buildFallbackState())

  const getVendorById = (id: string) => state.vendors.find((item) => item.id === id)
  const getGrocerById = (id: string) => state.grocers.find((item) => item.id === id)
  const getConnectionById = (id: string) => state.connections.find((item) => item.id === id)
  const getOrderById = (id: string) => state.orders.find((item) => item.id === id)

  const getProductsForVendor = (vendorId: string) =>
    state.products.filter((item) => item.vendorId === vendorId && item.isActive)

  const getAvailabilityForVendor = (vendorId: string) => {
    const vendorProducts = getProductsForVendor(vendorId)
    return vendorProducts
      .map((product) => ({
        product,
        availability: state.availability.find((entry) => entry.productId === product.id),
      }))
      .filter(
        (item): item is { product: Product; availability: ProductAvailability } => Boolean(item.availability),
      )
  }

  const getConnectedVendorsForGrocer = (grocerId: string) => {
    const vendorIds = state.connections
      .filter((conn) => conn.grocerId === grocerId && conn.status === 'approved')
      .map((conn) => conn.vendorId)
    return state.vendors.filter((vendor) => vendorIds.includes(vendor.id))
  }

  const getVendorConnections = (vendorId: string) => state.connections.filter((item) => item.vendorId === vendorId)
  const getOrdersForVendor = (vendorId: string) =>
    state.orders.filter((item) => item.vendorId === vendorId).sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
  const getOrdersForGrocer = (grocerId: string) =>
    state.orders.filter((item) => item.grocerId === grocerId).sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
  const getOrderItems = (orderId: string) => state.orderItems.filter((item) => item.orderId === orderId)
  const getOrderEvents = (orderId: string) =>
    state.orderEvents.filter((item) => item.orderId === orderId).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))

  const getCurrentVendor = () => (session?.role === 'vendor_owner' ? getVendorById(session.profileId) : undefined)
  const getCurrentGrocer = () => (session?.role === 'grocer_owner' ? getGrocerById(session.profileId) : undefined)

  const pushEvent = (orderId: string, eventType: string, eventLabel: string, note?: string) => {
    const event: OrderEvent = {
      id: uid('event'),
      orderId,
      eventType,
      eventLabel,
      note,
      createdAt: nowIso(),
    }
    setState((prev) => ({ ...prev, orderEvents: [...prev.orderEvents, event] }))
  }

  const updateOrderStatus = (orderId: string, status: OrderStatus, extra?: Partial<Order>) => {
    setState((prev) => ({
      ...prev,
      orders: prev.orders.map((order) =>
        order.id === orderId ? { ...order, status, updatedAt: nowIso(), ...extra } : order,
      ),
    }))
  }

  const submitOrder = (input: SubmitOrderInput) => {
    const connection = state.connections.find(
      (item) => item.vendorId === input.vendorId && item.grocerId === input.grocerId && item.status === 'approved',
    )
    if (!connection) throw new Error('No approved connection exists for this buyer/vendor pair.')

    const usableItems = input.items.filter((item) => item.quantity > 0)
    if (!usableItems.length) throw new Error('At least one order item is required.')

    const orderId = uid('order')
    const createdAt = nowIso()
    const builtItems: OrderItem[] = usableItems.map((entry) => {
      const product = state.products.find((item) => item.id === entry.productId)
      if (!product) throw new Error(`Product not found: ${entry.productId}`)
      return {
        id: uid('order-item'),
        orderId,
        productId: product.id,
        productNameSnapshot: product.name,
        unitSnapshot: product.unit,
        packSizeSnapshot: product.packSize,
        priceSnapshot: product.price,
        quantity: entry.quantity,
      }
    })

    const subtotal = builtItems.reduce((sum, item) => sum + item.priceSnapshot * item.quantity, 0)

    const order: Order = {
      id: orderId,
      vendorId: input.vendorId,
      grocerId: input.grocerId,
      connectionId: connection.id,
      status: 'submitted',
      deliveryDate: input.deliveryDate,
      subtotal,
      buyerNote: input.buyerNote,
      createdAt,
      updatedAt: createdAt,
    }

    setState((prev) => ({
      ...prev,
      orders: [order, ...prev.orders],
      orderItems: [...prev.orderItems, ...builtItems],
      orderEvents: [
        ...prev.orderEvents,
        { id: uid('event'), orderId, eventType: 'created', eventLabel: 'Draft created', createdAt },
        { id: uid('event'), orderId, eventType: 'submitted', eventLabel: 'Order submitted by buyer', createdAt },
      ],
    }))

    return orderId
  }

  const confirmOrder = (orderId: string) => {
    updateOrderStatus(orderId, 'confirmed')
    pushEvent(orderId, 'confirmed', 'Vendor confirmed order')
  }

  const modifyOrder = ({ orderId, items, vendorNote }: ModifyOrderInput) => {
    setState((prev) => {
      const nextItems = prev.orderItems.map((item) => {
        const match = items.find((candidate) => candidate.orderItemId === item.id)
        return match ? { ...item, quantity: match.quantity } : item
      })
      const subtotal = nextItems
        .filter((item) => item.orderId === orderId)
        .reduce((sum, item) => sum + item.priceSnapshot * item.quantity, 0)
      return {
        ...prev,
        orderItems: nextItems,
        orders: prev.orders.map((order) =>
          order.id === orderId
            ? { ...order, status: 'modified', vendorNote, subtotal, updatedAt: nowIso() }
            : order,
        ),
      }
    })
    pushEvent(orderId, 'modified', 'Vendor modified order', vendorNote)
  }

  const rejectOrder = (orderId: string, note?: string) => {
    updateOrderStatus(orderId, 'canceled', { vendorNote: note })
    pushEvent(orderId, 'canceled', 'Order canceled', note)
  }

  const acceptRevision = (orderId: string) => {
    updateOrderStatus(orderId, 'confirmed')
    pushEvent(orderId, 'accepted', 'Buyer accepted vendor revision')
  }

  const markDelivered = (orderId: string) => {
    updateOrderStatus(orderId, 'delivered')
    pushEvent(orderId, 'delivered', 'Order marked delivered')
  }

  const resetDemo = () => {
    setState(buildFallbackState())
    setSession({ role: 'grocer_owner', profileId: 'grocer-eddies-mv' })
  }

  const value: DemoStoreContextValue = {
    session,
    vendors: state.vendors,
    grocers: state.grocers,
    connections: state.connections,
    products: state.products,
    availability: state.availability,
    orders: state.orders,
    orderItems: state.orderItems,
    orderEvents: state.orderEvents,
    setSession,
    resetDemo,
    getCurrentVendor,
    getCurrentGrocer,
    getVendorById,
    getGrocerById,
    getConnectionById,
    getOrderById,
    getProductsForVendor,
    getAvailabilityForVendor,
    getConnectedVendorsForGrocer,
    getVendorConnections,
    getOrdersForVendor,
    getOrdersForGrocer,
    getOrderItems,
    getOrderEvents,
    submitOrder,
    confirmOrder,
    modifyOrder,
    rejectOrder,
    acceptRevision,
    markDelivered,
  }

  return <DemoStoreContext.Provider value={value}>{children}</DemoStoreContext.Provider>
}

export function useDemoStore() {
  const context = useContext(DemoStoreContext)
  if (!context) throw new Error('useDemoStore must be used within a DemoStoreProvider')
  return context
}

export function useCurrentGrocer() {
  const store = useDemoStore()
  return store.getCurrentGrocer()
}

export function useCurrentVendor() {
  const store = useDemoStore()
  return store.getCurrentVendor()
}
