import './globals.css'
import { DemoStoreProvider } from '@/lib/demo-store'

export const metadata = {
  title: 'Farm to Grocer',
  description: 'Relationship-based wholesale ordering for local vendors and independent grocers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DemoStoreProvider>{children}</DemoStoreProvider>
      </body>
    </html>
  )
}
