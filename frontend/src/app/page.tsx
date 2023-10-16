import Sidebar from '@/components/sidebar/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-full flex-row items-center p-3">
      <div className="h-full max-w-screen-md mx-auto flex w-full">
        <Sidebar />

        <div>
          <h1>Content</h1>
        </div>

      </div>
    </main>
  )
}
