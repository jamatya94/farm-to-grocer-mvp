export type DemoRole = 'vendor_owner' | 'grocer_owner' | 'platform_admin'
export type OrderStatus = 'draft' | 'submitted' | 'modified' | 'confirmed' | 'delivered' | 'canceled'
export type ConnectionStatus = 'pending' | 'approved' | 'declined' | 'archived'
export type AvailabilityStatus = 'available' | 'limited' | 'sold_out'

export type County = {
  id: string
  name: string
}

export type VendorProfile = {
  id: string
  name: string
  description: string
  phone: string
  primaryCountyId: string
  serviceAreaIds: string[]
  categories: string[]
  deliveryDays: string[]
  leadTimeDays: number
  minimumOrderAmount?: number
  story?: string
}

export type GrocerProfile = {
  id: string
  name: string
  description: string
  phone: string
  primaryCountyId: string
  receivingAddress: string
  receivingDays: string[]
  preferredDeliveryDays: string[]
  categoriesOfInterest: string[]
}

export type Product = {
  id: string
  vendorId: string
  category: string
  name: string
  unit: string
  packSize: string
  price: number
  isActive: boolean
}

export type ProductAvailability = {
  id: string
  productId: string
  availableQuantity: number
  status: AvailabilityStatus
  availableFrom: string
  availableUntil: string
}

export type Connection = {
  id: string
  vendorId: string
  grocerId: string
  status: ConnectionStatus
  requestedAt: string
  approvedAt?: string
}

export type Order = {
  id: string
  vendorId: string
  grocerId: string
  connectionId: string
  status: OrderStatus
  deliveryDate: string
  subtotal: number
  buyerNote?: string
  vendorNote?: string
  createdAt: string
  updatedAt: string
}

export type OrderItem = {
  id: string
  orderId: string
  productId: string
  productNameSnapshot: string
  unitSnapshot: string
  packSizeSnapshot: string
  priceSnapshot: number
  quantity: number
}

export type OrderEvent = {
  id: string
  orderId: string
  eventType: string
  eventLabel: string
  note?: string
  createdAt: string
}

export type DemoSeed = {
  counties: County[]
  vendors: VendorProfile[]
  grocers: GrocerProfile[]
  products: Product[]
  availability: ProductAvailability[]
  connections: Connection[]
  orders: Order[]
  orderItems: OrderItem[]
  orderEvents: OrderEvent[]
}

export const counties: County[] = [
  { id: 'county-baltimore-city', name: 'Baltimore City' },
  { id: 'county-baltimore', name: 'Baltimore County' },
  { id: 'county-anne-arundel', name: 'Anne Arundel County' },
  { id: 'county-howard', name: 'Howard County' },
  { id: 'county-montgomery', name: 'Montgomery County' },
  { id: 'county-prince-georges', name: "Prince George's County" },
  { id: 'county-dc', name: 'Washington, DC' },
]

export const categories = [
  'Greens & Salads',
  'Vegetables',
  'Fruits',
  'Herbs',
  'Eggs',
  'Dairy',
  'Pantry',
  'Meat & Poultry',
]

export const vendors: VendorProfile[] = [
  {
    id: 'vendor-agriberry',
    name: 'Agriberry Farms',
    description: 'A premium fruit-forward farm known for berries, seasonal produce, and dependable delivery cadence for independent grocers.',
    phone: '(804) 555-0143',
    primaryCountyId: 'county-baltimore-city',
    serviceAreaIds: ['county-baltimore-city', 'county-baltimore', 'county-howard', 'county-dc'],
    categories: ['Fruits', 'Greens & Salads', 'Herbs'],
    deliveryDays: ['Tuesday', 'Friday'],
    leadTimeDays: 2,
    minimumOrderAmount: 150,
    story: 'Built for neighborhood stores that want local fruit supply without the back-and-forth of spreadsheets and texts.',
  },
  {
    id: 'vendor-fullbright',
    name: 'Fullbright Farm',
    description: 'Mixed produce and egg supplier serving Baltimore and nearby counties with consistent harvest windows.',
    phone: '(410) 555-0194',
    primaryCountyId: 'county-baltimore',
    serviceAreaIds: ['county-baltimore-city', 'county-baltimore', 'county-anne-arundel'],
    categories: ['Vegetables', 'Eggs', 'Greens & Salads'],
    deliveryDays: ['Wednesday', 'Saturday'],
    leadTimeDays: 2,
    minimumOrderAmount: 120,
  },
  {
    id: 'vendor-baby-beans',
    name: 'Baby Beans',
    description: 'A compact specialty grower focused on herbs, tender greens, and restaurant-grade freshness for retailers.',
    phone: '(443) 555-0130',
    primaryCountyId: 'county-baltimore-city',
    serviceAreaIds: ['county-baltimore-city', 'county-baltimore'],
    categories: ['Herbs', 'Greens & Salads'],
    deliveryDays: ['Monday', 'Thursday'],
    leadTimeDays: 1,
    minimumOrderAmount: 80,
  },
  {
    id: 'vendor-baltimore-rye',
    name: 'Baltimore Rye',
    description: 'Small-batch pantry and grain goods with a strong independent retail fit.',
    phone: '(410) 555-0117',
    primaryCountyId: 'county-baltimore-city',
    serviceAreaIds: ['county-baltimore-city', 'county-baltimore', 'county-dc'],
    categories: ['Pantry'],
    deliveryDays: ['Tuesday'],
    leadTimeDays: 3,
    minimumOrderAmount: 100,
  },
  {
    id: 'vendor-patapsco-dairy',
    name: 'Patapsco Dairy',
    description: 'Local dairy and egg producer with a compact, dependable wholesale assortment.',
    phone: '(410) 555-0181',
    primaryCountyId: 'county-howard',
    serviceAreaIds: ['county-howard', 'county-baltimore-city', 'county-baltimore', 'county-montgomery'],
    categories: ['Dairy', 'Eggs'],
    deliveryDays: ['Tuesday', 'Friday'],
    leadTimeDays: 2,
    minimumOrderAmount: 140,
  },
]

export const grocers: GrocerProfile[] = [
  {
    id: 'grocer-eddies-mv',
    name: "Eddie's of Mount Vernon",
    description: 'A neighborhood grocer in the heart of Baltimore with a strong premium-local fit.',
    phone: '(410) 555-0150',
    primaryCountyId: 'county-baltimore-city',
    receivingAddress: '813 N Charles St, Baltimore, MD',
    receivingDays: ['Tuesday', 'Wednesday', 'Friday'],
    preferredDeliveryDays: ['Tuesday', 'Friday'],
    categoriesOfInterest: ['Fruits', 'Greens & Salads', 'Vegetables', 'Herbs', 'Dairy', 'Eggs', 'Pantry'],
  },
  {
    id: 'grocer-eddies-roland',
    name: "Eddie's of Roland Park",
    description: 'Independent grocery with a premium neighborhood footprint and reliable receiving schedule.',
    phone: '(410) 555-0151',
    primaryCountyId: 'county-baltimore',
    receivingAddress: '5113 Roland Ave, Baltimore, MD',
    receivingDays: ['Monday', 'Wednesday', 'Friday'],
    preferredDeliveryDays: ['Wednesday', 'Friday'],
    categoriesOfInterest: ['Fruits', 'Vegetables', 'Eggs', 'Pantry'],
  },
  {
    id: 'grocer-charles-street',
    name: 'Charles Street Market',
    description: 'Small retailer with a sharp local assortment and recurring produce needs.',
    phone: '(443) 555-0170',
    primaryCountyId: 'county-baltimore-city',
    receivingAddress: '900 N Charles St, Baltimore, MD',
    receivingDays: ['Tuesday', 'Thursday'],
    preferredDeliveryDays: ['Tuesday', 'Thursday'],
    categoriesOfInterest: ['Greens & Salads', 'Herbs', 'Vegetables', 'Pantry'],
  },
]

export const products: Product[] = [
  { id: 'product-strawberries', vendorId: 'vendor-agriberry', category: 'Fruits', name: 'Strawberries', unit: 'case', packSize: '8 x 1 qt', price: 42, isActive: true },
  { id: 'product-blueberries', vendorId: 'vendor-agriberry', category: 'Fruits', name: 'Blueberries', unit: 'case', packSize: '12 pints', price: 48, isActive: true },
  { id: 'product-baby-kale', vendorId: 'vendor-agriberry', category: 'Greens & Salads', name: 'Baby Kale', unit: 'case', packSize: '6 lbs', price: 28, isActive: true },
  { id: 'product-dill', vendorId: 'vendor-baby-beans', category: 'Herbs', name: 'Dill', unit: 'bunch', packSize: '24 bunches', price: 14, isActive: true },
  { id: 'product-basil', vendorId: 'vendor-baby-beans', category: 'Herbs', name: 'Basil', unit: 'bunch', packSize: '24 bunches', price: 16, isActive: true },
  { id: 'product-arugula', vendorId: 'vendor-baby-beans', category: 'Greens & Salads', name: 'Arugula', unit: 'case', packSize: '4 lbs', price: 24, isActive: true },
  { id: 'product-carrots', vendorId: 'vendor-fullbright', category: 'Vegetables', name: 'Rainbow Carrots', unit: 'crate', packSize: '10 lbs', price: 18, isActive: true },
  { id: 'product-beets', vendorId: 'vendor-fullbright', category: 'Vegetables', name: 'Red Beets', unit: 'crate', packSize: '10 lbs', price: 16, isActive: true },
  { id: 'product-eggs', vendorId: 'vendor-fullbright', category: 'Eggs', name: 'Farm Eggs', unit: 'carton', packSize: '12 eggs', price: 6, isActive: true },
  { id: 'product-rye-flour', vendorId: 'vendor-baltimore-rye', category: 'Pantry', name: 'Stone-Milled Rye Flour', unit: 'bag', packSize: '5 lbs', price: 11, isActive: true },
  { id: 'product-granola', vendorId: 'vendor-baltimore-rye', category: 'Pantry', name: 'House Granola', unit: 'case', packSize: '12 bags', price: 36, isActive: true },
  { id: 'product-milk', vendorId: 'vendor-patapsco-dairy', category: 'Dairy', name: 'Whole Milk', unit: 'crate', packSize: '6 half-gallons', price: 24, isActive: true },
  { id: 'product-yogurt', vendorId: 'vendor-patapsco-dairy', category: 'Dairy', name: 'Plain Yogurt', unit: 'case', packSize: '12 cups', price: 30, isActive: true },
  { id: 'product-dairy-eggs', vendorId: 'vendor-patapsco-dairy', category: 'Eggs', name: 'Pasture Eggs', unit: 'carton', packSize: '12 eggs', price: 7, isActive: true },
]

export const availability: ProductAvailability[] = [
  { id: 'avail-strawberries', productId: 'product-strawberries', availableQuantity: 18, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-blueberries', productId: 'product-blueberries', availableQuantity: 12, status: 'limited', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-baby-kale', productId: 'product-baby-kale', availableQuantity: 14, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-dill', productId: 'product-dill', availableQuantity: 22, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-basil', productId: 'product-basil', availableQuantity: 8, status: 'limited', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-arugula', productId: 'product-arugula', availableQuantity: 7, status: 'limited', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-carrots', productId: 'product-carrots', availableQuantity: 20, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-beets', productId: 'product-beets', availableQuantity: 15, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-eggs', productId: 'product-eggs', availableQuantity: 48, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-rye-flour', productId: 'product-rye-flour', availableQuantity: 24, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-granola', productId: 'product-granola', availableQuantity: 10, status: 'limited', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-milk', productId: 'product-milk', availableQuantity: 9, status: 'limited', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-yogurt', productId: 'product-yogurt', availableQuantity: 16, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
  { id: 'avail-dairy-eggs', productId: 'product-dairy-eggs', availableQuantity: 40, status: 'available', availableFrom: '2026-03-10', availableUntil: '2026-03-20' },
]

export const connections: Connection[] = [
  {
    id: 'connection-agriberry-eddies',
    vendorId: 'vendor-agriberry',
    grocerId: 'grocer-eddies-mv',
    status: 'approved',
    requestedAt: '2026-03-04T10:00:00.000Z',
    approvedAt: '2026-03-05T12:00:00.000Z',
  },
  {
    id: 'connection-fullbright-eddies',
    vendorId: 'vendor-fullbright',
    grocerId: 'grocer-eddies-mv',
    status: 'approved',
    requestedAt: '2026-03-02T10:00:00.000Z',
    approvedAt: '2026-03-03T10:00:00.000Z',
  },
  {
    id: 'connection-babybeans-charles',
    vendorId: 'vendor-baby-beans',
    grocerId: 'grocer-charles-street',
    status: 'approved',
    requestedAt: '2026-03-02T10:00:00.000Z',
    approvedAt: '2026-03-03T10:00:00.000Z',
  },
  {
    id: 'connection-rye-roland',
    vendorId: 'vendor-baltimore-rye',
    grocerId: 'grocer-eddies-roland',
    status: 'pending',
    requestedAt: '2026-03-07T11:00:00.000Z',
  },
  {
    id: 'connection-dairy-eddies-roland',
    vendorId: 'vendor-patapsco-dairy',
    grocerId: 'grocer-eddies-roland',
    status: 'declined',
    requestedAt: '2026-03-06T11:00:00.000Z',
  },
]

export const orders: Order[] = [
  {
    id: 'order-happy-1',
    vendorId: 'vendor-agriberry',
    grocerId: 'grocer-eddies-mv',
    connectionId: 'connection-agriberry-eddies',
    status: 'confirmed',
    deliveryDate: '2026-03-14',
    subtotal: 132,
    buyerNote: 'Please deliver before 10am if possible.',
    createdAt: '2026-03-08T14:00:00.000Z',
    updatedAt: '2026-03-09T12:30:00.000Z',
  },
  {
    id: 'order-modified-1',
    vendorId: 'vendor-fullbright',
    grocerId: 'grocer-eddies-mv',
    connectionId: 'connection-fullbright-eddies',
    status: 'modified',
    deliveryDate: '2026-03-15',
    subtotal: 138,
    buyerNote: 'Please call on arrival.',
    vendorNote: 'Reduced carrots based on current available volume.',
    createdAt: '2026-03-08T15:00:00.000Z',
    updatedAt: '2026-03-09T11:00:00.000Z',
  },
  {
    id: 'order-delivered-1',
    vendorId: 'vendor-baby-beans',
    grocerId: 'grocer-charles-street',
    connectionId: 'connection-babybeans-charles',
    status: 'delivered',
    deliveryDate: '2026-03-11',
    subtotal: 54,
    createdAt: '2026-03-06T15:00:00.000Z',
    updatedAt: '2026-03-11T16:00:00.000Z',
  },
]

export const orderItems: OrderItem[] = [
  { id: 'item-happy-1', orderId: 'order-happy-1', productId: 'product-strawberries', productNameSnapshot: 'Strawberries', unitSnapshot: 'case', packSizeSnapshot: '8 x 1 qt', priceSnapshot: 42, quantity: 2 },
  { id: 'item-happy-2', orderId: 'order-happy-1', productId: 'product-baby-kale', productNameSnapshot: 'Baby Kale', unitSnapshot: 'case', packSizeSnapshot: '6 lbs', priceSnapshot: 28, quantity: 2 },
  { id: 'item-modified-1', orderId: 'order-modified-1', productId: 'product-carrots', productNameSnapshot: 'Rainbow Carrots', unitSnapshot: 'crate', packSizeSnapshot: '10 lbs', priceSnapshot: 18, quantity: 4 },
  { id: 'item-modified-2', orderId: 'order-modified-1', productId: 'product-eggs', productNameSnapshot: 'Farm Eggs', unitSnapshot: 'carton', packSizeSnapshot: '12 eggs', priceSnapshot: 6, quantity: 11 },
  { id: 'item-delivered-1', orderId: 'order-delivered-1', productId: 'product-basil', productNameSnapshot: 'Basil', unitSnapshot: 'bunch', packSizeSnapshot: '24 bunches', priceSnapshot: 16, quantity: 2 },
  { id: 'item-delivered-2', orderId: 'order-delivered-1', productId: 'product-arugula', productNameSnapshot: 'Arugula', unitSnapshot: 'case', packSizeSnapshot: '4 lbs', priceSnapshot: 24, quantity: 1 },
]

export const orderEvents: OrderEvent[] = [
  { id: 'event-happy-1', orderId: 'order-happy-1', eventType: 'submitted', eventLabel: 'Order submitted by buyer', createdAt: '2026-03-08T14:00:00.000Z' },
  { id: 'event-happy-2', orderId: 'order-happy-1', eventType: 'confirmed', eventLabel: 'Vendor confirmed order', createdAt: '2026-03-09T12:30:00.000Z' },
  { id: 'event-modified-1', orderId: 'order-modified-1', eventType: 'submitted', eventLabel: 'Order submitted by buyer', createdAt: '2026-03-08T15:00:00.000Z' },
  { id: 'event-modified-2', orderId: 'order-modified-1', eventType: 'modified', eventLabel: 'Vendor modified order', note: 'Reduced carrots from 6 crates to 4 crates.', createdAt: '2026-03-09T11:00:00.000Z' },
  { id: 'event-delivered-1', orderId: 'order-delivered-1', eventType: 'submitted', eventLabel: 'Order submitted by buyer', createdAt: '2026-03-06T15:00:00.000Z' },
  { id: 'event-delivered-2', orderId: 'order-delivered-1', eventType: 'confirmed', eventLabel: 'Vendor confirmed order', createdAt: '2026-03-07T10:00:00.000Z' },
  { id: 'event-delivered-3', orderId: 'order-delivered-1', eventType: 'delivered', eventLabel: 'Order marked delivered', createdAt: '2026-03-11T16:00:00.000Z' },
]

export const demoSeed: DemoSeed = {
  counties,
  vendors,
  grocers,
  products,
  availability,
  connections,
  orders,
  orderItems,
  orderEvents,
}

export function getCountyName(id: string) {
  return counties.find((county) => county.id === id)?.name ?? id
}

export function getVendorById(vendorId: string) {
  return vendors.find((vendor) => vendor.id === vendorId)
}

export function getGrocerById(grocerId: string) {
  return grocers.find((grocer) => grocer.id === grocerId)
}

export function getConnectionById(connectionId: string) {
  return connections.find((connection) => connection.id === connectionId)
}

export function getOrderById(orderId: string) {
  return orders.find((order) => order.id === orderId)
}

export function getProductsByVendorId(vendorId: string) {
  return products.filter((product) => product.vendorId === vendorId && product.isActive)
}

export function getAvailabilityByVendorId(vendorId: string) {
  const vendorProductIds = products
    .filter((product) => product.vendorId === vendorId)
    .map((product) => product.id)
  return availability.filter((entry) => vendorProductIds.includes(entry.productId))
}

export const getProductsForVendor = getProductsByVendorId
export const getAvailabilityForVendor = getAvailabilityByVendorId
