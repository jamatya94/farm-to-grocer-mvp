import { cn } from '@/lib/utils'

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[24px] border border-[hsl(var(--border))] bg-white/80 shadow-sm', className)} {...props} />
}
