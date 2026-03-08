"use client"

import Link from "next/link"
import { ArrowRight, Building2, ShieldCheck, Store } from "lucide-react"
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(247,251,245,0.96),rgba(251,247,240,0.98)_46%,rgba(246,240,229,1)_100%)]">
      <div className="mx-auto max-w-[1720px] px-5 pb-20 pt-5 sm:px-6 lg:px-10">
        <header className="rounded-[34px] border border-white/70 bg-white/78 px-6 py-5 shadow-[0_36px_90px_-60px_rgba(20,35,28,0.45)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-6">
            <Brand muted />
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="lg" className="px-7 text-base">
                <Link href="/">Back to landing</Link>
              </Button>
              <Button variant="secondary" size="lg" className="px-7 text-base" onClick={reset}>
                Reset data
              </Button>
            </div>
          </div>
        </header>

        <section className="mt-6 rounded-[34px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.8),rgba(255,255,255,0.56))] px-6 py-8 shadow-[0_42px_100px_-68px_rgba(20,35,28,0.55)] backdrop-blur-md md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">
            Choose a role
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-[hsl(var(--foreground))] md:text-5xl">
            Step directly into the seeded Baltimore + DMV demo.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[hsl(var(--muted-foreground))]">
            This environment skips public signup so you can experience the workflow immediately.
            Select a vendor, grocer, or admin profile and move through the exact role-based paths
            we agreed to demo.
          </p>
        </section>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <RolePanel
            title="Continue as Vendor"
            description="Manage availability, review connections, and respond to incoming orders."
            icon={<Building2 className="h-5 w-5 text-[hsl(var(--primary))]" />}
          >
            {vendorOptions.map((vendor) => {
              const countyName = getCountyName(vendor.primaryCountyId)

              return (
                <button
                  key={vendor.id}
                  onClick={() => choose("vendor_owner", vendor.id)}
                  className="flex w-full items-center justify-between rounded-3xl border border-[hsl(var(--border))] bg-white px-5 py-4 text-left transition hover:bg-[hsl(var(--accent))]"
                >
                  <div>
                    <p className="font-medium text-[hsl(var(--foreground))]">{vendor.name}</p>
                    <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                      {countyName}
                      {vendor.categories.length > 0 ? ` · ${vendor.categories.join(", ")}` : ""}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                </button>
              )
            })}
          </RolePanel>

          <RolePanel
            title="Continue as Grocer"
            description="Browse connected vendors, build a test order, and watch the timeline update."
            icon={<Store className="h-5 w-5 text-[hsl(var(--primary))]" />}
          >
            {grocerOptions.map((grocer) => {
              const countyName = getCountyName(grocer.primaryCountyId)

              return (
                <button
                  key={grocer.id}
                  onClick={() => choose("grocer_owner", grocer.id)}
                  className="flex w-full items-center justify-between rounded-3xl border border-[hsl(var(--border))] bg-white px-5 py-4 text-left transition hover:bg-[hsl(var(--accent))]"
                >
                  <div>
                    <p className="font-medium text-[hsl(var(--foreground))]">{grocer.name}</p>
                    <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                      {countyName}
                      {grocer.categoriesOfInterest.length > 0
                        ? ` · ${grocer.categoriesOfInterest.join(", ")}`
                        : ""}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                </button>
              )
            })}
          </RolePanel>

          <RolePanel
            title="Continue as Admin"
            description="See the network, the shared order timeline, and the activity that needs attention."
            icon={<ShieldCheck className="h-5 w-5 text-[hsl(var(--primary))]" />}
          >
            <button
              onClick={() => choose("platform_admin", "admin-platform")}
              className="flex w-full items-center justify-between rounded-3xl border border-[hsl(var(--border))] bg-white px-5 py-4 text-left transition hover:bg-[hsl(var(--accent))]"
            >
              <div>
                <p className="font-medium text-[hsl(var(--foreground))]">Platform Admin</p>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                  Cross-role visibility into vendors, grocers, connections, and orders.
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
            </button>
          </RolePanel>
        </div>
      </div>
    </div>
  )
}

function RolePanel({
  title,
  description,
  icon,
  children,
}: {
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[30px] border border-white/70 bg-white/78 p-5 shadow-[0_35px_90px_-65px_rgba(20,35,28,0.45)] backdrop-blur-sm md:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.03em] text-[hsl(var(--foreground))]">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            {description}
          </p>
        </div>
        <div className="rounded-2xl bg-[hsl(var(--accent))] p-3">{icon}</div>
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  )
}