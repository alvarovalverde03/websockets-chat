import type { FormData } from '@/components/sendInput/SendInput'
import type { TMessage } from './db'

import { io } from "socket.io-client"

// const socket = io("http://localhost:8000")
const socket = io('https://realtime-chat.1.ie-1.fl0.io', {'transports': ['websocket', 'polling']})

export function sendMessage (data: TMessage) {
    const message: TMessage = {
        content: data.content,
        user_name: data.user_name,
        user_id: data.user_id,
        date: data.date,
    }

    socket.emit("message", message)
}