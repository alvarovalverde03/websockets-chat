'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import SendInput from "@/components/sendInput/SendInput"
import Message from "@/components/message/Message"
import type { TMessage } from "@/utils/db"
import { getApiMessages } from "@/utils/db"
import { usePathname } from 'next/navigation'

import { io } from "socket.io-client"
import path from "path"

export default function Chats() {
    const [messages, setMessages] = useState<TMessage[]>([])
    const ref = useRef<HTMLDivElement>(null)
    const path = usePathname()
    const chatId = path.split('/').pop()
        
    let socket = io("http://localhost:8000", {'transports': ['websocket', 'polling']})
    if (process.env.NODE_ENV === "production") socket = io("https://realtime-chat.1.ie-1.fl0.io", {'transports': ['websocket', 'polling']})

    // client-side
    socket.on("connect", () => {
        console.log('connect: ', socket.id)    
    })
    
    socket.on("disconnect", () => {
        console.log('disconect: ', socket.id)
    })

    socket.on("new_message", (data: any) => {        
        getMessages()
    })

    async function getMessages() {
        const messages = await getApiMessages()
        setMessages(messages)
    }

    useEffect(() => {
        getMessages()
        if (messages.length) ref.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    }, [messages.length])

    function handleOnSend() {
        getMessages()
    }

    return (
        <>
            <Link href="/chats" className="underline">
                <svg className="w-7 h-7 text-black dark:text-white hover:opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8L2 12L6 16"/>
                    <path d="M2 12H22"/>
                </svg>
            </Link>

            <div className="w-full h-full overflow-y-auto scroll-smooth">
                <div className="w-full h-auto pt-2 pb-5 flex flex-col justify-end gap-2">

                    {messages.map((message, index) => (
                        <Message 
                            text={message.text} 
                            userName={message.userName} 
                            userId={message.userId}
                            createdAt={message.createdAt}
                            key={index} 
                        />
                    ))}
                    
                    <div ref={ref} className="mb-[-10px]" />
                </div>
            </div>

            <SendInput onCreate={handleOnSend} chatId={chatId} />
        </>
    )
}