"use client"

import Link from "next/link"
import { RefreshCcw } from "lucide-react"
import { Brand } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
  current?: boolean
}

export function PageShell({
  role,
  title,
  subtitle,
  nav,
  children,
}: {
  role: string
  title: string
  subtitle: string
  nav: NavItem[]
  children: React.ReactNode
}) {
  const handleReset = () => {
    if (typeof window === "undefined") return
    window.localStorage.removeItem("ftg-demo-store-v2")
    window.localStorage.removeItem("ftg-demo-session-v2")
    window.location.assign("/demo")
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,250,243,0.96),rgba(250,246,236,0.96)_44%,rgba(245,240,231,0.98)_100%)]">
      <div className="mx-auto max-w-[1720px] px-5 sm:px-6 lg:px-10">
        <header className="rounded-[30px] border border-white/60 bg-white/72 px-5 py-4 shadow-[0_35px_85px_-60px_rgba(20,35,28,0.45)] backdrop-blur-md">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <Brand muted />
              <span className="hidden rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--accent))] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))] sm:inline-flex">
                {role}
              </span>
            </div>
            <div className="hidden gap-2 md:flex md:flex-wrap">
              {nav.map((item, index) => (
                <Link
                  key={`${item.href}-${item.label}-${index}`}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] transition hover:bg-[hsl(var(--accent))]",
                    item.current && "bg-[hsl(var(--accent))] text-[hsl(var(--foreground))]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={handleReset} className="w-fit">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Reset demo
            </Button>
          </div>
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">{role} workspace</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[hsl(var(--foreground))] md:text-4xl">{title}</h1>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[hsl(var(--muted-foreground))] md:text-right">{subtitle}</p>
          </div>
        </header>

        <main className="mt-8">{children}</main>
      </div>
    </div>
  )
}
