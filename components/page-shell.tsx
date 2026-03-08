'use client'

import Link from 'next/link'
import { Brand } from '@/components/brand'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useDemoStore } from '@/lib/demo-store'

export function PageShell({
  role,
  title,
  subtitle,
  nav,
  children,
}: {
  role: string
  title: string
  subtitle?: string
  nav: Array<{ label: string; href: string; current?: boolean }>
  children: React.ReactNode
}) {
  const { resetDemo } = useDemoStore()
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <header className="border-b border-[hsl(var(--border))] bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Brand />
          <div className="hidden gap-2 md:flex">
            {nav.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} className={cn('rounded-full px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))]', item.current && 'bg-[hsl(var(--accent))] text-[hsl(var(--foreground))]')}>{item.label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-[hsl(var(--muted-foreground))] md:block">{role}</span>
            <Button variant="outline" size="sm" asChild><Link href="/demo">Switch demo</Link></Button>
            <Button variant="ghost" size="sm" onClick={resetDemo}>Reset</Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">{role} workspace</div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? <p className="mt-3 max-w-3xl text-[hsl(var(--muted-foreground))]">{subtitle}</p> : null}
        </div>
        {children}
      </main>
    </div>
  )
}
