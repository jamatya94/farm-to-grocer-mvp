import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Brand({ muted = false }: { muted?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-4 md:gap-5">
      <div className="relative h-16 w-16 overflow-hidden rounded-[22px] border border-[rgba(32,58,43,0.08)] bg-white shadow-sm md:h-[76px] md:w-[76px]">
        <Image
          src="/images/brand/logo.png"
          alt="Farm to Grocer logo"
          fill
          className="object-contain p-1.5"
          priority
        />
      </div>

      <div>
        <p className="text-[1.05rem] font-semibold uppercase tracking-[0.24em] text-[hsl(var(--foreground))] md:text-[1.35rem]">
          Farm to Grocer
        </p>
        <p
          className={cn(
            "mt-1 text-sm font-medium md:text-base",
            muted
              ? "text-[hsl(var(--muted-foreground))]"
              : "text-[hsl(var(--muted-foreground))]"
          )}
        >
          Relationship-based wholesale ordering
        </p>
      </div>
    </Link>
  )
}