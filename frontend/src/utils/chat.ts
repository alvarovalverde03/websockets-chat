import type { FormData } from '@/components/sendInput/SendInput'
import { addMessage } from './db'
import type { TMessage } from './db'

import { io } from "socket.io-client"

const socket = io("http://localhost:8000")

export async function sendMessage (data: FormData) {
    const message: TMessage = {
        content: data.message,
        isMe: true
    }

    socket.emit("message", message)

    await addMessage(message)
}