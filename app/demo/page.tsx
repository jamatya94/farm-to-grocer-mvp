"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Brand } from "@/components/brand"
import { demoSeed } from "@/lib/demo-data"
import { useDemoStore } from "@/lib/demo-store"

const vendorOptions = demoSeed.vendors.slice(0, 3)
const grocerOptions = demoSeed.grocers.slice(0, 3)

const getCountyName = (countyId: string) =>
  demoSeed.counties.find((county) => county.id === countyId)?.name ?? "Baltimore, MD"

export default function DemoPage() {
  const { setSession } = useDemoStore()

  const choose = (
    role: "vendor_owner" | "grocer_owner" | "platform_admin",
    profileId: string
  ) => {
    setSession({ role, profileId })

    if (role === "vendor_owner") {
      window.location.assign("/vendor/dashboard")
      return
    }

    if (role === "grocer_owner") {
      window.location.assign("/buyer/dashboard")
      return
    }

    window.location.assign("/admin/dashboard")
  }

  const reset = () => {
    window.localStorage.removeItem("ftg-demo-store-v2")
    window.localStorage.removeItem("ftg-demo-session-v2")
    window.location.assign("/demo")
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f6f1e7_0%,#eef6ef_18%,#f5f8f1_38%,#f6efe3_100%)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[rgba(35,114,68,0.12)] blur-3xl" />
        <div className="absolute right-[-4rem] top-[16rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(214,176,98,0.16)] blur-3xl" />
        <div className="absolute left-[28%] top-[52rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(60,128,86,0.08)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] px-5 pb-20 pt-5 sm:px-6 lg:px-10">
        <header className="rounded-[34px] border border-white/70 bg-white/80 px-6 py-5 shadow-[0_36px_90px_-60px_rgba(20,35,28,0.45)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-6">
            <Brand muted />
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" size="lg" className="px-7 text-base">
                <Link href="/">Back to landing</Link>
              </Button>
              <Button variant="secondary" size="lg" className="px-7 text-base" onClick={reset}>
                Reset data
              </Button>
            </div>
          </div>
        </header>

        <section className="mt-7 overflow-hidden rounded-[40px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.90),rgba(255,255,255,0.64))] shadow-[0_42px_100px_-68px_rgba(20,35,28,0.55)] backdrop-blur-md">
          <div className="grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="px-7 py-9 md:px-10 md:py-11">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">
                Demo control room
              </p>
              <h1 className="mt-5 max-w-[900px] text-[clamp(3rem,5.4vw,5.25rem)] font-semibold leading-[0.97] tracking-[-0.075em] text-[hsl(var(--foreground))]">
                Step directly into the seeded Baltimore + DMV workflow.
              </h1>
              <p className="mt-5 max-w-4xl text-lg leading-9 text-[hsl(var(--muted-foreground))]">
                This environment skips public signup so you can move straight into the product
                experience. Choose a vendor, grocer, or admin profile and explore the exact
                role-based workflow the MVP is designed to demonstrate.
              </p>

              <div className="mt-8 max-w-xl rounded-[28px] border border-[rgba(32,58,43,0.10)] bg-white/78 p-5 shadow-[0_20px_50px_-34px_rgba(17,24,20,0.22)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[hsl(var(--accent))] text-[hsl(var(--primary))]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[hsl(var(--foreground))]">
                      Recommended happy path
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                      Start as Eddie’s of Mount Vernon, place a test order with Agriberry Farms,
                      then switch to Vendor and Admin to show the same transaction across all
                      three views.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden xl:min-h-full">
              <Image
                src="/images/hero/Hero-2.jpg"
                alt="Premium local food commerce imagery"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,20,0.08),rgba(16,24,20,0.22)_38%,rgba(16,24,20,0.72)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-[28px] border border-white/16 bg-[rgba(16,24,20,0.52)] p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/68">
                    What this demo proves
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    One structured order can move cleanly across buyer, vendor, and admin views.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <RoleCard
            tone="vendor"
            eyebrow="Supplier workspace"
            title="Continue as Vendor"
            description="Manage availability, review connections, and respond to incoming orders."
            imageSrc="/images/hero/Hero-5.jpg"
            imageAlt="Vendor and produce themed imagery"
            icon={<Building2 className="h-6 w-6" />}
          >
            {vendorOptions.map((vendor) => {
              const countyName = getCountyName(vendor.primaryCountyId)

              return (
                <button
                  key={vendor.id}
                  onClick={() => choose("vendor_owner", vendor.id)}
                  className="group flex w-full items-center justify-between rounded-[24px] border border-white/14 bg-white/10 px-5 py-4 text-left backdrop-blur-sm transition duration-300 hover:bg-white/16 hover:shadow-[0_16px_30px_-22px_rgba(0,0,0,0.28)]"
                >
                  <div>
                    <p className="text-[1.15rem] font-semibold text-white">{vendor.name}</p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {countyName}
                      {vendor.categories.length > 0 ? ` · ${vendor.categories.join(", ")}` : ""}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:bg-white/18">
                    <ArrowRight className="h-4 w-4 text-white/78 transition group-hover:translate-x-1" />
                  </div>
                </button>
              )
            })}
          </RoleCard>

          <RoleCard
            tone="grocer"
            eyebrow="Buyer workspace"
            title="Continue as Grocer"
            description="Browse connected vendors, build a test order, and watch the timeline update."
           imageSrc="/images/hero/Hero-1.jpg"
imageAlt="Fresh grocery and produce scene"
            icon={<Store className="h-6 w-6" />}
          >
            {grocerOptions.map((grocer) => {
              const countyName = getCountyName(grocer.primaryCountyId)

              return (
                <button
                  key={grocer.id}
                  onClick={() => choose("grocer_owner", grocer.id)}
className="group flex w-full items-center justify-between rounded-[24px] border border-white/14 bg-white/10 px-5 py-4 text-left backdrop-blur-sm transition duration-300 hover:bg-white/16 hover:shadow-[0_16px_30px_-22px_rgba(0,0,0,0.28)]"
                >
                  <div>
                    <p className="text-[1.15rem] font-semibold text-white">
                      {grocer.name}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/72">
                      {countyName}
                      {grocer.categoriesOfInterest.length > 0
                        ? ` · ${grocer.categoriesOfInterest.join(", ")}`
                        : ""}
                    </p>
                  </div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:bg-white/18">
  <ArrowRight className="h-4 w-4 text-white/78 transition group-hover:translate-x-1" />
</div>
                </button>
              )
            })}
          </RoleCard>

          <RoleCard
            tone="admin"
            eyebrow="Platform oversight"
            title="Continue as Admin"
            description="See the network, shared order timeline, and the activity that needs attention."
            imageSrc="/images/hero/Hero-6.jpg"
            imageAlt="Admin and oversight themed imagery"
            icon={<ShieldCheck className="h-6 w-6" />}
          >
            <button
              onClick={() => choose("platform_admin", "admin-platform")}
              className="group flex w-full items-center justify-between rounded-[24px] border border-white/14 bg-white/10 px-5 py-4 text-left backdrop-blur-sm transition duration-300 hover:bg-white/16 hover:shadow-[0_16px_30px_-22px_rgba(0,0,0,0.28)]"
            >
              <div>
                <p className="text-[1.15rem] font-semibold text-white">Platform Admin</p>
                <p className="mt-1 text-sm leading-6 text-white/72">
                  Cross-role visibility into vendors, grocers, connections, and orders.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:bg-white/18">
                <ArrowRight className="h-4 w-4 text-white/78 transition group-hover:translate-x-1" />
              </div>
            </button>
          </RoleCard>
        </div>
      </div>
    </div>
  )
}

function RoleCard({
  tone,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
  children,
}: {
  tone: "vendor" | "grocer" | "admin"
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  const shellClass =
  "border-white/20 bg-[linear-gradient(145deg,rgba(18,30,24,0.82),rgba(26,48,35,0.72))] shadow-[0_34px_95px_-58px_rgba(17,24,20,0.55)]"
const overlayClass =
  tone === "admin"
    ? "bg-[linear-gradient(180deg,rgba(14,18,20,0.14),rgba(14,18,20,0.52)_42%,rgba(14,18,20,0.92)_100%)]"
    : "bg-[linear-gradient(180deg,rgba(14,22,18,0.10),rgba(14,22,18,0.46)_44%,rgba(14,22,18,0.90)_100%)]"

const textTone = {
  eyebrow: "text-white/70",
  title: "text-white",
  description: "text-white/75",
  iconWrap: "border-white/14 bg-white/12 text-white",
  bodyShell:
    "border-white/14 bg-white/10 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.35)]",
}
  return (
  <section
    className={`group relative overflow-hidden rounded-[36px] border backdrop-blur-sm transition duration-300 hover:-translate-y-[3px] ${shellClass}`}
  >
    <div className="absolute inset-0">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.05]"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>

    <div className="relative z-10 flex min-h-[720px] flex-col justify-end p-5 md:p-6">
<div className={`rounded-[30px] border p-6 backdrop-blur-md ${textTone.bodyShell}`}>
          <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${textTone.eyebrow}`}>
              {eyebrow}
            </p>
<h2
  className={`mt-3 text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.05em] ${textTone.title}`}
>              {title}
            </h2>
            <p className={`mt-3 text-base leading-8 ${textTone.description}`}>
              {description}
            </p>
          </div>

          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border ${textTone.iconWrap}`}
          >
            {icon}
          </div>
        </div>

        <div className="space-y-3">{children}</div>
      </div>
    </div>
  </section>
)
}