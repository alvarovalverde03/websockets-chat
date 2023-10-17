import Header from '@/components/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={inter.className + ' h-full'}>
        <div className="h-full bg-black w-full flex items-center justify-center">
          <div className="lg:h-3/4 lg:w-1/2 h-full w-full lg:rounded-lg lg:border bg-black text-card-foreground shadow-sm overflow-hidden">
            <Header />

            <div className='pt-6 lg:px-10 px-5 lg:max-h-[85%] 2xl:max-h-[90%] max-h-[90%] h-full overflow-hidden flex flex-col justify-between'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
