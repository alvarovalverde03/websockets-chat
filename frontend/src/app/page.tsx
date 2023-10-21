import { redirect } from "next/navigation"

export default function Home() {
  redirect('/chats')

  return (
    <main className="flex h-full flex-row items-center p-3">
      <div className="h-full max-w-screen-md mx-auto flex w-full">

        <div>
          <h1>Content</h1>
        </div>

      </div>
    </main>
  )
}
