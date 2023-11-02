export type TMessage = {
    text: string,
    userName: string,
    userId: number,
    chatId?: number,
    createdAt: string,
}

const basePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'

export const getApiMessages = async () => {
    try {
        const messages = await fetch(`${basePath}/messages`)

        const data = await messages.json()
        console.log(data.messages)
        return data.messages
    } catch (e) {
        console.log(e)
    }
}

export const getApiChats = async () => {
    try {
        const chats = await fetch(`${basePath}/chats`)

        const data = await chats.json()
        return data.chats
    } catch (e) {
        console.log(e)
    }
}

export const postApiUser = async (username: string) => {
    try {
        const user = await fetch(`${basePath}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })

        const data = await user.json()
        return data.user
    } catch (e) {
        console.log(e)
    }
}

export const getApiUsernameById = async (id: number) => {
    try {
        const user = await fetch(`${basePath}/users/${id}`)

        const data = await user.json()
        return data.user
    } catch (e) {
        console.log(e)
    }
}