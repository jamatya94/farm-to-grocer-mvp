import Link from "next/link"
import { ArrowRight, Building2, CalendarClock, MapPinned, PackageSearch, Store } from "lucide-react"
import { Brand } from "@/components/brand"
import { HeroMetric, SectionCard } from "@/components/blocks"
import { Button } from "@/components/ui/button"

const featureCards = [
  {
    title: "Relationship-first supplier network",
    copy: "Approved vendor connections, not anonymous browsing. The platform is built around real local sourcing relationships.",
    icon: Building2,
  },
  {
    title: "Current availability, not fantasy inventory",
    copy: "Buyers see what vendors can actually supply now, with limited stock signals and date-bound availability.",
    icon: PackageSearch,
  },
  {
    title: "Structured ordering with a human workflow",
    copy: "Grocers submit an order, vendors confirm or revise, and everyone can see the timeline move clearly.",
    icon: CalendarClock,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(247,251,245,0.96),rgba(251,247,240,0.98)_46%,rgba(246,240,229,1)_100%)] text-[hsl(var(--foreground))]">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-5 sm:px-6 lg:px-8">
        <header className="rounded-[32px] border border-white/60 bg-white/72 px-5 py-4 shadow-[0_36px_90px_-60px_rgba(20,35,28,0.45)] backdrop-blur-md">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Brand />
            <div className="flex flex-wrap items-center gap-2">
              <Link href="#how-it-works" className="rounded-full px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] transition hover:bg-[hsl(var(--accent))]">How it works</Link>
              <Link href="#for-teams" className="rounded-full px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] transition hover:bg-[hsl(var(--accent))]">Who it serves</Link>
              <Button asChild variant="outline" size="sm">
                <Link href="/demo">View demo</Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hero-panel rounded-[34px] border border-white/70 px-6 py-8 shadow-[0_42px_100px_-68px_rgba(20,35,28,0.55)] backdrop-blur-md md:px-8 md:py-10">
            <p className="section-kicker">Baltimore-rooted • DMV-ready</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.07em] md:text-6xl md:leading-[1.02]">
              Premium local wholesale ordering for vendors and independent grocers.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[hsl(var(--foreground-soft))] md:text-lg">
              Farm to Grocer is a relationship-based coordination layer for local food commerce. It helps vendors and neighborhood grocers manage current availability, submit structured orders, and keep everyone aligned through a clean shared timeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/demo">
                  Enter the demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link href="#for-teams">Explore the workflow</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <HeroMetric label="Network scope" value="Baltimore + DMV" />
              <HeroMetric label="Order model" value="Vendor confirms or revises" />
              <HeroMetric label="Demo focus" value="Role-based shared timeline" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="image-tile h-[220px] sm:h-[250px] lg:h-[280px]">
              <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" alt="Fresh produce harvested for local wholesale" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.14em] text-white/75">Current availability</p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.03em]">Local produce and pantry goods surfaced in a cleaner ordering workflow.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="image-tile h-[180px]">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80" alt="Independent grocer using a tablet in store" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
                  <p className="text-sm font-medium tracking-[-0.02em]">Independent grocers</p>
                </div>
              </div>
              <div className="image-tile h-[180px]">
                <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80" alt="Farmer handling berries and produce" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
                  <p className="text-sm font-medium tracking-[-0.02em]">Vendor-managed supply</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="for-teams" className="mt-10 grid gap-6 lg:grid-cols-2">
          <SectionCard title="Built for local vendors" description="A lighter operating surface for people who need to manage what they offer, what is available now, and which grocers need attention.">
            <ul className="space-y-3 text-sm leading-7 text-[hsl(var(--foreground-soft))]">
              <li>• Maintain products, availability, delivery days, and service areas.</li>
              <li>• Review incoming connections and orders without a bloated back office.</li>
              <li>• Confirm or revise a buyer order while keeping the relationship intact.</li>
            </ul>
          </SectionCard>
          <SectionCard title="Made for independent grocers" description="A structured buyer workflow that feels operationally clear, not like a consumer marketplace.">
            <ul className="space-y-3 text-sm leading-7 text-[hsl(var(--foreground-soft))]">
              <li>• Browse only approved vendors and current availability.</li>
              <li>• Submit a single-vendor test order with eligible delivery timing.</li>
              <li>• Track revisions, confirmations, and timeline updates in one place.</li>
            </ul>
          </SectionCard>
        </section>

        <section id="how-it-works" className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionCard title="How the MVP works" description="A focused workflow, not a giant commerce operating system.">
            <div className="space-y-5 text-sm leading-7 text-[hsl(var(--foreground-soft))]">
              <div>
                <p className="section-kicker">Step 1</p>
                <p className="mt-2 text-base font-medium text-[hsl(var(--foreground))]">Connect vendor and grocer profiles</p>
                <p className="mt-1">The platform starts with relationship approval and clear service-area fit.</p>
              </div>
              <div>
                <p className="section-kicker">Step 2</p>
                <p className="mt-2 text-base font-medium text-[hsl(var(--foreground))]">Order from live availability</p>
                <p className="mt-1">Grocers browse what a vendor can currently supply, then submit a structured test order.</p>
              </div>
              <div>
                <p className="section-kicker">Step 3</p>
                <p className="mt-2 text-base font-medium text-[hsl(var(--foreground))]">Share one timeline across all roles</p>
                <p className="mt-1">Vendors confirm or revise, grocers respond, and admins can see the full operating story.</p>
              </div>
            </div>
          </SectionCard>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon
              return (
                <SectionCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.copy}
                  action={<Icon className="h-5 w-5 text-[hsl(var(--primary))]" />}
                  className="h-full"
                >
                  <div className="h-1 w-16 rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--primary-deep)))]" />
                </SectionCard>
              )
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <SectionCard title="A Baltimore story with regional reach" description="The demo is grounded in Baltimore and extends across the broader DMV to make the network feel real without losing local identity.">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] p-5">
                <MapPinned className="h-5 w-5 text-[hsl(var(--primary))]" />
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">Baltimore-centered</p>
                <p className="mt-2 text-sm leading-7 text-[hsl(var(--foreground-soft))]">The seeded demo profiles feel like neighborhood retailers, specialty suppliers, and independent operators rooted in Baltimore.</p>
              </div>
              <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] p-5">
                <Store className="h-5 w-5 text-[hsl(var(--primary))]" />
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">DMV-operational</p>
                <p className="mt-2 text-sm leading-7 text-[hsl(var(--foreground-soft))]">Service areas span Baltimore City, Baltimore County, Anne Arundel, Howard, Montgomery, Prince George’s County, and Washington, DC.</p>
              </div>
            </div>
          </SectionCard>
          <SectionCard title="Try the role-based demo" description="The first pass is seeded with local test data so you can move directly into the grocer, vendor, and admin perspectives.">
            <div className="space-y-4">
              <div className="rounded-3xl border border-[hsl(var(--border))] bg-white/72 p-5">
                <p className="text-base font-medium text-[hsl(var(--foreground))]">Happy path</p>
                <p className="mt-2 text-sm leading-7 text-[hsl(var(--foreground-soft))]">A grocer submits an order, the vendor confirms it, and the timeline updates across all three views.</p>
              </div>
              <div className="rounded-3xl border border-[hsl(var(--border))] bg-white/72 p-5">
                <p className="text-base font-medium text-[hsl(var(--foreground))]">Constraint path</p>
                <p className="mt-2 text-sm leading-7 text-[hsl(var(--foreground-soft))]">A vendor revises one item because of low stock, the grocer accepts the update, and the admin sees the entire order trail.</p>
              </div>
              <Button asChild size="lg" className="mt-2 w-full justify-center">
                <Link href="/demo">Launch the demo workspace</Link>
              </Button>
            </div>
          </SectionCard>
        </section>
      </div>
    </div>
  )
}
