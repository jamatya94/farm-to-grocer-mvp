'use client'

import Link from 'next/link'
import { Shield, ShoppingBasket, Tractor } from 'lucide-react'
import { Brand } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useDemoStore } from '@/lib/demo-store'

export default function DemoPage() {
  const { setSession } = useDemoStore()

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] px-6 py-8 text-[hsl(var(--foreground))]">
      <div className="mx-auto max-w-6xl">
        <Brand />
        <div className="mt-10 max-w-3xl">
          <div className="text-sm uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">Choose a demo experience</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Skip signup. Step directly into the role-based workflows.</h1>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <RoleCard icon={<Tractor className="h-6 w-6" />} title="Vendor owner" description="Products, availability, connection review, and incoming orders." actions={[
            { label: 'Agriberry Farms', href: '/vendor/dashboard', onClick: () => setSession({ role: 'vendor_owner', profileId: 'vendor-agriberry' }) },
            { label: 'Fullbright Farm', href: '/vendor/dashboard', onClick: () => setSession({ role: 'vendor_owner', profileId: 'vendor-fullbright' }) },
          ]} />
          <RoleCard icon={<ShoppingBasket className="h-6 w-6" />} title="Grocer owner" description="Connected vendors, availability browsing, and non-payment test orders." actions={[
            { label: "Eddie's of Mount Vernon", href: '/buyer/dashboard', onClick: () => setSession({ role: 'grocer_owner', profileId: 'grocer-eddies-mv' }) },
            { label: "Eddie's of Roland Park", href: '/buyer/dashboard', onClick: () => setSession({ role: 'grocer_owner', profileId: 'grocer-eddies-roland' }) },
          ]} />
          <RoleCard icon={<Shield className="h-6 w-6" />} title="Platform admin" description="Vendors, grocers, connections, orders, and timeline visibility." actions={[
            { label: 'Platform Admin', href: '/admin/dashboard', onClick: () => setSession({ role: 'platform_admin', profileId: 'admin-main' }) },
          ]} />
        </div>
      </div>
    </div>
  )
}

function RoleCard({ icon, title, description, actions }: { icon: React.ReactNode; title: string; description: string; actions: Array<{ label: string; href: string; onClick: () => void }> }) {
  return (
    <Card className="p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))]">{icon}</div>
      <h2 className="mt-5 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">{description}</p>
      <div className="mt-6 space-y-3">
        {actions.map((action) => (
          <Button key={action.label} asChild className="w-full justify-between"><Link href={action.href} onClick={action.onClick}>{action.label}</Link></Button>
        ))}
      </div>
    </Card>
  )
}
