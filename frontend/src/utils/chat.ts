import type { FormData } from '@/components/sendInput/SendInput'
import type { TMessage } from './db'

import { io } from "socket.io-client"

//const socket = io("http://localhost:8000")
const socket = io('https://realtime-chat.1.ie-1.fl0.io')

export function sendMessage (data: FormData) {
    const message: TMessage = {
        content: data.message,
        isMe: true
    }

    socket.emit("message", message)
}