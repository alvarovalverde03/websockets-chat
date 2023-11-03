import type { FormData } from '@/components/sendInput/SendInput'
import type { TMessage } from './db'

import { io } from "socket.io-client"

let socket = io("http://localhost:8000", {'transports': ['websocket', 'polling']})
if (process.env.NODE_ENV === "production") socket = io("https://realtime-chat.1.ie-1.fl0.io", {'transports': ['websocket', 'polling']})

export function sendMessage (data: TMessage) {
    const message: TMessage = {
        text: data.text,
        userName: data.userName,
        userId: Number(data.userId),
        chatPublicId: data.chatPublicId,
        createdAt: data.createdAt
    }

    socket.emit("message", message)
}