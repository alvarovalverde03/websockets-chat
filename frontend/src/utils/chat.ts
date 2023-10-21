import type { FormData } from '@/components/sendInput/SendInput'
import { addMessage } from './db'

export function sendMessage (data: FormData) {
    addMessage ({
        content: data.message,
        isMe: true
    })
}