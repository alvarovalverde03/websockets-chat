import Image from "next/image"
import Link from "next/link"

type MessageProps = {
    name: string
    lastMessage: string
    time: string
    notifications: number
}

export default function Chat({ name, lastMessage, time, notifications }: MessageProps) {
    return (
        <Link href="/chats/x" className="flex flex-row place-content-start items-center gap-2 px-3 py-2.5 border-b-[1px] hover:bg-black/10 dark:hover:bg-white/10">
            <Image src={"https://api.multiavatar.com/Binx Bond.svg"} className="rounded-full" alt={""} width={50} height={50} />
            <div className="flex flex-row place-content-between items-center w-full">
                <div className="flex flex-col place-content-start">
                    <h2 className="text-black dark:text-gray-100 text-lg">{ name }</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{ lastMessage }</p>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-xs capitalize">{ time }</span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-m font-medium text-blue-900 bg-cyan-100 rounded-full dark:bg-cyan-900 dark:text-blue-100">{ notifications }</span>
                </div>
            </div>
        </Link>
    )
}