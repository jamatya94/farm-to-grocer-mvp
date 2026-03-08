"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Leaf,
  MapPin,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Store,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const featureCards = [
  {
    title: "Relationship-first vendor network",
    description:
      "A tighter vendor-grocer graph built around approved connections, not anonymous marketplace noise.",
    icon: <Store className="h-7 w-7" />,
  },
  {
    title: "Availability that reflects reality",
    description:
      "Work from time-bound supply windows and constrained inventory instead of static product catalogs.",
    icon: <ShoppingBasket className="h-7 w-7" />,
  },
  {
    title: "Structured wholesale ordering",
    description:
      "Place test orders, handle revisions, and move through a shared order timeline without payment complexity.",
    icon: <Truck className="h-7 w-7" />,
  },
  {
    title: "Admin oversight without bloat",
    description:
      "Monitor vendors, grocers, connections, and orders with just enough visibility to run the network.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
]

const steps = [
  {
    step: "01",
    title: "Connect vendors and grocers",
    body:
      "Approved vendor relationships create a network that feels intentional, local, and operationally credible.",
  },
  {
    step: "02",
    title: "Browse current availability",
    body:
      "Grocers see what is actually available now, with delivery cadence, lead time, and minimum-order context.",
  },
  {
    step: "03",
    title: "Track one shared order story",
    body:
      "A test order flows through buyer, vendor, and admin views with the same status timeline and revision history.",
  },
]

const valueColumns = [
  {
    kicker: "For local vendors",
    title: "Manage supply without turning the demo into a giant back office.",
    body:
      "Show products, publish constrained availability, review connection requests, and respond to incoming orders in a cleaner operational surface.",
    bullets: [
      "Simple product and availability management",
      "Incoming connection requests from neighborhood grocers",
      "Confirm, modify, or reject orders",
    ],
    icon: <Leaf className="h-5 w-5" />,
  },
  {
    kicker: "For independent grocers",
    title: "Order from connected vendors through a workflow that feels dependable.",
    body:
      "View approved vendors, browse current availability, place a non-payment test order, and track the same order across the platform.",
    bullets: [
      "Connected vendor view, not a chaotic marketplace",
      "Single-vendor ordering tied to real availability",
      "Clear delivery dates and revision handling",
    ],
    icon: <Building2 className="h-5 w-5" />,
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f6f1e7_0%,#eef6ef_18%,#f5f8f1_38%,#f6efe3_100%)] text-[hsl(var(--foreground))]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[rgba(35,114,68,0.14)] blur-3xl" />
        <div className="absolute right-[-4rem] top-[22rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(214,176,98,0.16)] blur-3xl" />
        <div className="absolute left-[28%] top-[60rem] h-[26rem] w-[26rem] rounded-full bg-[rgba(60,128,86,0.10)] blur-3xl" />
      </div>

     <div className="mx-auto max-w-[1720px] px-5 pb-20 pt-5 sm:px-6 lg:px-10">
        <header className="rounded-[34px] border border-white/70 bg-white/72 px-5 py-4 shadow-[0_28px_80px_-58px_rgba(17,24,20,0.38)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-[22px] border border-[rgba(32,58,43,0.08)] bg-white shadow-sm transition duration-300 group-hover:scale-[1.03] md:h-[76px] md:w-[76px]">
                <Image
                  src="/images/brand/logo.png"
                  alt="Farm to Grocer logo"
                  fill
                  className="object-contain p-1.5"
                  priority
                />
              </div>
              <div>
  <p className="text-[1.15rem] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--foreground))] md:text-[1.45rem]">
    Farm to Grocer
  </p>
  <p className="mt-1 text-sm font-medium text-[hsl(var(--muted-foreground))] md:text-[1rem]">
    Relationship-based wholesale ordering
  </p>
</div>
            </Link>

            <div className="flex items-center gap-2">
              <Button
  asChild
  size="lg"
  className="px-7 text-base"
>
                <Link href="/demo">View demo</Link>
              </Button>
              <Button
  asChild
  variant="outline"
  size="lg"
  className="px-7 text-base"
>
                <Link href="/demo">Enter platform</Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="mt-7 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <div className="rounded-[40px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(244,249,243,0.78)_42%,rgba(248,241,228,0.72)_100%)] p-7 shadow-[0_42px_100px_-70px_rgba(20,35,28,0.52)] backdrop-blur-md md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--muted-foreground))]">
              Baltimore-rooted • DMV-aware
            </p>

            <h1 className="mt-5 max-w-[980px] text-[clamp(3.25rem,6.4vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-[hsl(var(--foreground))]">
              A cleaner wholesale workflow for local vendors and independent grocers.
            </h1>

            <p className="mt-7 max-w-3xl text-[1.1rem] leading-9 text-[hsl(var(--muted-foreground))] md:text-[1.16rem]">
              Farm to Grocer is a relationship-based coordination layer for local food
              commerce. It helps vendors and neighborhood grocers connect, manage constrained
              availability, place structured orders, and follow the same order story across
              buyer, vendor, and admin views.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[hsl(var(--primary))] px-7 text-white shadow-[0_18px_40px_-24px_rgba(27,98,58,0.8)] hover:translate-y-[-1px] hover:opacity-95"
              >
                <Link href="/demo">
                  Enter demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-[rgba(32,58,43,0.12)] bg-white/80 px-7 text-[hsl(var(--foreground))]"
              >
                <Link href="#how-it-works">See how it works</Link>
              </Button>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <Metric
                label="Demo geography"
                value="Baltimore + DMV"
                subcopy="Seeded around neighborhood retail and regional service areas"
              />
              <Metric
                label="Core loop"
                value="Connect → Order → Respond"
                subcopy="Built around the exact workflow we chose to demo"
              />
              <Metric
                label="MVP posture"
                value="Focused, not bloated"
                subcopy="No payments, no chat, no enterprise sprawl"
              />
            </div>
          </div>

          <div className="relative min-h-[690px] overflow-hidden rounded-[40px] border border-white/70 bg-[linear-gradient(180deg,rgba(244,250,245,0.74),rgba(255,248,239,0.42))] shadow-[0_42px_100px_-68px_rgba(20,35,28,0.55)] backdrop-blur-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.32),transparent_44%)]" />

            <div className="absolute left-6 right-6 top-6 h-[360px] overflow-hidden rounded-[30px] shadow-[0_26px_70px_-42px_rgba(17,24,20,0.6)]">
              <Image
                src="/images/hero/Hero-2.jpg"
                alt="Local produce and farm-side wholesale scene"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,20,0.04),rgba(17,24,20,0.18)_56%,rgba(17,24,20,0.62)_100%)]" />
            </div>

            <div className="absolute left-6 top-[300px] w-[42%] max-w-[260px] rotate-[-6deg] overflow-hidden rounded-[28px] border border-white/25 bg-white/85 p-2 shadow-[0_26px_70px_-42px_rgba(17,24,20,0.45)] backdrop-blur-md transition duration-500 hover:rotate-[-3deg]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src="/images/hero/Hero-5.jpg"
                  alt="Fresh produce close-up"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute right-6 top-[348px] w-[46%] max-w-[300px] rotate-[5deg] overflow-hidden rounded-[28px] border border-white/25 bg-white/85 p-2 shadow-[0_26px_70px_-42px_rgba(17,24,20,0.45)] backdrop-blur-md transition duration-500 hover:rotate-[2deg]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src="/images/hero/Hero-6.jpg"
                  alt="Seasonal local food image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute inset-x-6 bottom-6 rounded-[30px] border border-white/18 bg-[rgba(15,24,19,0.58)] p-6 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Why this matters
              </p>
              <p className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.05em]">
                Dependable local sourcing needs better infrastructure, not more manual coordination.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm text-white/90">
                <Pill>Approved vendor relationships</Pill>
                <Pill>Current availability visibility</Pill>
                <Pill>Shared order timeline</Pill>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[34px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_-58px_rgba(17,24,20,0.38)] backdrop-blur-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Mission + product
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,4.2vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
              Built to make local wholesale coordination more dependable, structured, and repeatable.
            </h2>
            <p className="mt-5 text-base leading-8 text-[hsl(var(--muted-foreground))]">
              This MVP is not trying to be a full commerce operating system. It is a focused
              ordering and coordination experience for local vendors and independent grocers
              that need better visibility, cleaner handoffs, and a workflow that respects
              how local food actually moves.
            </p>

            <div className="mt-6 space-y-4">
              <Callout
                icon={<MapPin className="h-5 w-5 text-[hsl(var(--primary))]" />}
                title="Baltimore as the center of gravity"
                body="The seeded story is localized around Baltimore, with the broader operational footprint extending across select DMV counties."
              />
              <Callout
                icon={<Sparkles className="h-5 w-5 text-[hsl(var(--primary))]" />}
                title="Premium, mission-led presentation"
                body="The product should feel polished and modern while still rooted in neighborhood commerce, local supply, and practical operations."
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featureCards.map((card, index) => (
              <section
                key={card.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.90),rgba(240,247,241,0.86)_45%,rgba(249,241,229,0.82)_100%)] p-6 shadow-[0_30px_80px_-58px_rgba(17,24,20,0.36)] transition duration-300 hover:translate-y-[-4px] hover:shadow-[0_36px_95px_-56px_rgba(17,24,20,0.48)]"
                >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,110,66,0.08),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-[rgba(33,110,66,0.14)] bg-[linear-gradient(180deg,rgba(224,241,229,1),rgba(247,250,246,1)_58%,rgba(247,239,226,1)_100%)] text-[hsl(var(--primary))] shadow-[0_18px_36px_-24px_rgba(17,24,20,0.38)] transition duration-300 group-hover:scale-[1.08] group-hover:-rotate-3 group-hover:shadow-[0_24px_45px_-24px_rgba(17,24,20,0.48)]">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                    {card.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] opacity-85 transition duration-300 group-hover:translate-x-1">
                    Explore concept
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {valueColumns.map((column) => (
            <section
              key={column.title}
              className="rounded-[34px] border border-white/72 bg-[linear-gradient(150deg,rgba(255,255,255,0.88),rgba(242,248,242,0.80)_42%,rgba(248,240,226,0.74)_100%)] p-6 shadow-[0_32px_85px_-60px_rgba(17,24,20,0.4)] backdrop-blur-sm md:p-8"
              >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[hsl(var(--accent))] text-[hsl(var(--primary))]">
                  {column.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  {column.kicker}
                </p>
              </div>

              <h3 className="mt-5 text-[clamp(1.8rem,3vw,2.65rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
                {column.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">
                {column.body}
              </p>

              <ul className="mt-6 space-y-3">
                {column.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-[hsl(var(--foreground))]">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[hsl(var(--primary))]" />
                    <span className="leading-7">{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        <section
  id="how-it-works"
  className="relative mt-8 overflow-hidden rounded-[38px] border border-white/70 bg-[linear-gradient(145deg,rgba(24,48,34,0.96),rgba(38,84,56,0.92)_48%,rgba(72,110,72,0.86)_100%)] p-6 shadow-[0_40px_100px_-58px_rgba(17,24,20,0.55)] backdrop-blur-md md:p-9"
>
          <div className="absolute inset-y-0 right-0 hidden w-[32%] bg-[radial-gradient(circle_at_top,rgba(33,110,66,0.08),transparent_56%)] lg:block" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              How it works
            </p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-4xl text-[clamp(4rem,5.3vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.085em]">
                A simple workflow, shaped around the realities of local food supply.
              </h2>
              <div className="max-w-md rounded-[22px] border border-[rgba(33,110,66,0.1)] bg-white/75 p-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                Farm to Grocer is strongest when it makes a local ordering relationship feel clearer,
                calmer, and more operationally dependable.
              </div>
            </div>

            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {steps.map((step) => (
                <section
                  key={step.step}
                  className="group rounded-[30px] border border-[rgba(32,58,43,0.12)] bg-white/80 p-5 transition duration-300 hover:translate-y-[-2px] hover:shadow-[0_22px_50px_-34px_rgba(17,24,20,0.28)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[1.05rem] font-semibold tracking-[0.18em] text-[hsl(var(--primary))]">
                      {step.step}
                    </p>
                    <div className="h-10 w-10 rounded-full border border-[rgba(33,110,66,0.12)] bg-[hsl(var(--accent))] transition duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-5 text-[1.7rem] font-semibold leading-tight tracking-[-0.04em]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[hsl(var(--muted-foreground))]">
                    {step.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-[38px] border border-white/72 bg-[linear-gradient(145deg,rgba(255,255,255,0.84),rgba(255,255,255,0.64))] p-6 shadow-[0_36px_90px_-60px_rgba(17,24,20,0.42)] backdrop-blur-md md:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Demo promise
              </p>
              <h2 className="mt-4 text-[clamp(2.35rem,4.6vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.08em]">
                See the same transaction from the buyer, vendor, and admin sides.
              </h2>
              <p className="mt-5 max-w-2xl text-[1.05rem] leading-9 text-[hsl(var(--muted-foreground))]">
                The MVP demo is intentionally built around one core loop: the grocer places a
                test order, the vendor confirms or modifies it, and the platform reflects the
                same status progression through a shared order timeline.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[hsl(var(--primary))] px-7 text-white shadow-[0_18px_40px_-24px_rgba(27,98,58,0.8)] hover:translate-y-[-1px] hover:opacity-95"
                >
                  <Link href="/demo">
                    Enter the demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-[rgba(32,58,43,0.12)] bg-white/80 px-7 text-[hsl(var(--foreground))]"
                >
                  <Link href="/buyer/dashboard">Preview buyer workspace</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-[30px] border border-[rgba(32,58,43,0.1)] bg-[linear-gradient(180deg,rgba(247,250,245,0.85),rgba(255,255,255,0.9))] p-5">
              <div className="absolute inset-y-6 left-8 w-px bg-[rgba(33,110,66,0.12)]" />
              <div className="relative space-y-5">
                <TimelineRow
                  tone="default"
                  title="Buyer submits test order"
                  body="A grocer orders against current vendor availability and selects an eligible delivery date."
                />
                <TimelineRow
                  tone="warning"
                  title="Vendor modifies one line item"
                  body="A low-stock scenario updates quantity while preserving the same order record and timeline."
                />
                <TimelineRow
                  tone="success"
                  title="Buyer accepts revision"
                  body="The order is confirmed and remains visible across buyer, vendor, and admin views."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function Metric({
  label,
  value,
  subcopy,
}: {
  label: string
  value: string
  subcopy: string
}) {
  return (
    <div className="rounded-[26px] border border-[rgba(32,58,43,0.12)] bg-white/76 p-4 shadow-[0_14px_34px_-28px_rgba(17,24,20,0.25)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">
        {label}
      </p>
      <p className="mt-3 text-[1.9rem] font-semibold leading-none tracking-[-0.06em]">{value}</p>
      <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{subcopy}</p>
    </div>
  )
}

function Callout({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="flex gap-4 rounded-[24px] border border-[rgba(32,58,43,0.12)] bg-white/76 p-4 shadow-[0_14px_34px_-28px_rgba(17,24,20,0.22)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] bg-[hsl(var(--accent))]">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{body}</p>
      </div>
    </div>
  )
}

function TimelineRow({
  title,
  body,
  tone,
}: {
  title: string
  body: string
  tone: "default" | "warning" | "success"
}) {
  const dotTone =
    tone === "warning"
      ? "bg-amber-500"
      : tone === "success"
      ? "bg-emerald-600"
      : "bg-[hsl(var(--primary))]"

  return (
    <div className="rounded-[26px] border border-[rgba(32,58,43,0.12)] bg-white/88 p-5 shadow-[0_14px_34px_-28px_rgba(17,24,20,0.22)]">
      <div className="flex gap-4">
        <div className={`mt-1 h-3 w-3 rounded-full shrink-0 ${dotTone}`} />
        <div>
          <p className="text-[1.2rem] font-semibold tracking-[-0.03em]">{title}</p>
          <p className="mt-2 text-base leading-8 text-[hsl(var(--muted-foreground))]">{body}</p>
        </div>
      </div>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5">
      {children}
    </span>
  )
}