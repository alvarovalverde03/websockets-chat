'use client'

import { getUserById } from "@/utils/users"
import { useEffect, useState } from "react"
import Image from "next/image"

type MessageProps = {
  text: string
  userName: string
  userId: number
  createdAt: string
}

async function getUserName(userId: number) {
  const { user } = await getUserById(userId)
  return user?.username?.toString()
}

export default function Message({ text, userName, userId, createdAt }: MessageProps) {
  const isMe = Number(localStorage.getItem('user_id')) === userId
  const formatDate = new Date(createdAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  const [userNameState, setUserNameState] = useState<string | null>(null)
  useEffect(() => {
    getUserName(userId).then((userName) => setUserNameState(userName))
  }, [])

  return (
    <div className={`w-full flex ${ isMe ? 'justify-end' : 'justify-start'}`}>
        <div className={`lg:max-w-[90%] max-w-[85%] md:min-w-[40%] min-w-[45%] flex ${ isMe ? 'flex-row' : 'flex-row-reverse'} items-end justify-end gap-1.5`}>
            <div className={`lg:max-w-[90%] max-w-[85%] md:min-w-[20%] min-w-[45%] ${ isMe ? 'bg-zinc-300 dark:bg-zinc-900' : 'bg-cyan-200 dark:bg-cyan-900' } text-black dark:text-white px-3 py-2 rounded flex flex-col relative pb-5`}>
                <span className={`text-sm opacity-60 text-black dark:text-white ${ isMe ? 'hidden' : '' }`}>{userNameState}</span>
                <span className="text-base break-words">{ text }</span>
                <span className="absolute bottom-0 right-0 text-[0.65rem] text-black dark:text-white opacity-60 px-2 py-1 truncate">{ formatDate }</span>
            </div>

            <Image src={"https://api.multiavatar.com/Binx Bond.svg"} className="rounded-full" alt={""} width={20} height={20} />
        </div>
    </div>
  )
}