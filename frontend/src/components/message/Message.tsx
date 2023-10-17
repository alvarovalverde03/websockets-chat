import Image from "next/image"

type MessageProps = {
  message: string
  isMe: boolean
}

export default function Message({ message, isMe }: MessageProps) {
  return (
    <div className={`w-full flex ${ isMe ? 'justify-end' : 'justify-start'}`}>
        <div className={`lg:max-w-[90%] max-w-[85%] flex ${ isMe ? 'flex-row' : 'flex-row-reverse'} items-end justify-end gap-1.5`}>
            <div className={`lg:max-w-[90%] max-w-[85%] ${ isMe ? 'bg-zinc-900' : 'bg-cyan-900' } px-3 py-2 rounded`}>
                <span className="text-base break-words">{ message }</span>
            </div>

            <Image src={"https://api.multiavatar.com/Binx Bond.svg"} className="rounded-full" alt={""} width={20} height={20} />
        </div>
    </div>
  )
}