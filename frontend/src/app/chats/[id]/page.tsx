import ChatsCont from "@/components/chats/Chats"
import Link from "next/link"
import Image from "next/image"
import Message from "@/components/message/Message"
import SendInput from "@/components/sendInput/SendInput"

import { io } from "socket.io-client"

const socket = io("http://localhost:8000")

// client-side
socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
})
  
socket.on("disconnect", () => {
    console.log(socket.id); // undefined
})

const messages = [
    "Ble ble ble ble ble fdhjsdddddddddddddddgbuasidbsajdbjs",
    "Bla bla bla bla Bla bla bla bla",
    "Sed euismod, velit ac bibendum bibendum, elit."
]

export default function Chats() {
    return (
        <>
            <Link href="/chats" className="underline">
                <svg className="w-7 h-7 text-gray-500 dark:text-gray-100 hover:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8L2 12L6 16"/>
                    <path d="M2 12H22"/>
                </svg>
            </Link>

            <div className="w-full h-full">
                <div className="w-full h-full pt-2 pb-5 flex flex-col justify-end gap-2">
        
                    <Message message="hola que tal estamos" isMe={true} />
                    <Message message={messages[0]} isMe={false} />
                    <Message message={messages[1]} isMe={true} />
                    <Message message={messages[2]} isMe={false} />
                    
                </div>
            </div>

            <SendInput />
        </>
    )
}