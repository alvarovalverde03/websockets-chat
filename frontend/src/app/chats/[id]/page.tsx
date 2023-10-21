'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import SendInput from "@/components/sendInput/SendInput"
import Message from "@/components/message/Message"
import type { TMessage } from "@/utils/db"
import { getApiMessages } from "@/utils/db"


import { io } from "socket.io-client"

const socket = io("http://localhost:8000")

// client-side
socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
})
  
socket.on("disconnect", () => {
    console.log(socket.id); // undefined
})

export default function Chats() {
    const [messages, setMessages] = useState<TMessage[]>([])

    function getMessages() {
        const messages = getApiMessages()
        setMessages(messages)
    }

    useEffect(() => {
        getMessages()
    }, [])

    function handleOnSend() {
        getMessages()
    }

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

                    {messages.map((message, index) => (
                        <Message message={message.content} isMe={message.isMe} key={index} />
                    ))}

                </div>
            </div>

            <SendInput onCreate={handleOnSend} />
        </>
    )
}