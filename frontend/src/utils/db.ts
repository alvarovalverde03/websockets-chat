import { getApiUrl } from "./config"

const API_PATH = getApiUrl()

export type TMessage = {
    text: string,
    userName: string,
    userId: number,
    chatPublicId?: string,
    createdAt: string,
}

export const getApiMessages = async () => {
    try {
        const messages = await fetch(`${API_PATH}/messages`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const data = await messages.json()
        
        return data.messages
    } catch (e) {
        console.log(e)
    }
}

export const getApiChats = async () => {
    try {
        const chats = await fetch(`${API_PATH}/chats`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
        })
        const data = await chats.json()
        
        return data.chats
    } catch (e) {
        console.log(e)
    }
}
