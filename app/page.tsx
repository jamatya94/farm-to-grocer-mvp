import Link from 'next/link'
import { ArrowRight, Leaf, Store, Truck } from 'lucide-react'
import { Brand } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center justify-between">
          <Brand />
          <Button asChild><Link href="/demo">Enter demo</Link></Button>
        </div>
        <section className="grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">Premium · mission-led · Baltimore-rooted</div>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight tracking-tight">Relationship-based wholesale ordering for local vendors and independent grocers.</h1>
            <p className="mt-6 max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">Farm to Grocer is a B2B local food coordination platform built to make dependable local sourcing feel structured, modern, and repeatable.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild><Link href="/demo">View role-based demo</Link></Button>
              <Button size="lg" variant="outline" asChild><Link href="/buyer/vendors/vendor-agriberry">See ordering flow <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
          </div>
          <Card className="overflow-hidden p-6">
            <div className="rounded-[24px] bg-[linear-gradient(135deg,rgba(34,85,64,0.96),rgba(52,112,87,0.86))] p-6 text-[hsl(var(--primary-foreground))]">
              <div className="text-sm uppercase tracking-[0.18em] opacity-80">How the MVP works</div>
              <div className="mt-5 space-y-4">
                <div className="flex gap-3"><Store className="mt-1 h-5 w-5" /><div><div className="font-medium">Connect approved vendors and grocers</div><div className="text-sm opacity-80">Keep sourcing relationship-first, not marketplace-chaotic.</div></div></div>
                <div className="flex gap-3"><Leaf className="mt-1 h-5 w-5" /><div><div className="font-medium">Browse live availability</div><div className="text-sm opacity-80">Current products, simple volume logic, and readable delivery rules.</div></div></div>
                <div className="flex gap-3"><Truck className="mt-1 h-5 w-5" /><div><div className="font-medium">Submit, modify, confirm, and track</div><div className="text-sm opacity-80">One order timeline visible across buyer, vendor, and admin views.</div></div></div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
