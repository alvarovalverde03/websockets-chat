'use client'

import Image from "next/image"

type MessageProps = {
  message: string
  user_name: string
  user_id: string
  date: string
}

export default function Message({ message, user_name, user_id, date }: MessageProps) {
  const isMe = localStorage.getItem('user_id') === user_id
  const formatDate = new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <div className={`w-full flex ${ isMe ? 'justify-end' : 'justify-start'}`}>
        <div className={`lg:max-w-[90%] max-w-[85%] md:min-w-[40%] min-w-[45%] flex ${ isMe ? 'flex-row' : 'flex-row-reverse'} items-end justify-end gap-1.5`}>
            <div className={`lg:max-w-[90%] max-w-[85%] md:min-w-[20%] min-w-[45%] ${ isMe ? 'bg-zinc-900' : 'bg-cyan-900' } px-3 py-2 rounded flex flex-col relative pb-5`}>
                <span className={`text-sm text-gray-400 ${ isMe ? 'hidden' : '' }`}>{ user_name }</span>
                <span className="text-base break-words">{ message }</span>
                <span className="absolute bottom-0 right-0 text-[0.65rem] opacity-60 px-2 py-1 truncate">{ formatDate }</span>
            </div>

            <Image src={"https://api.multiavatar.com/Binx Bond.svg"} className="rounded-full" alt={""} width={20} height={20} />
        </div>
    </div>
  )
}