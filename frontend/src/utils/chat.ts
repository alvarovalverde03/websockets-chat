import type { TMessage } from './db'
import { getBackendUrl } from './config'

import { io } from "socket.io-client"

const BACKEND_URL = getBackendUrl()

const socket = io(BACKEND_URL, {'transports': ['websocket', 'polling']})

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