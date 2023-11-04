export type TMessage = {
    text: string,
    userName: string,
    userId: number,
    chatPublicId?: string,
    createdAt: string,
}

export const getApiMessages = async () => {
    try {
        const apiBasePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'
        const messages = await fetch(`${apiBasePath}/messages`)

        const data = await messages.json()
        console.log(data.messages)
        return data.messages
    } catch (e) {
        console.log(e)
    }
}

export const getApiChats = async () => {
    try {
        const apiBasePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'
        const chats = await fetch(`${apiBasePath}/chats`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        const data = await chats.json()
        console.log(data.chats)
        return data.chats
    } catch (e) {
        console.log(e)
    }
}

export const postApiUser = async (username: string) => {
    try {
        const apiBasePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'
        const user = await fetch(`${apiBasePath}/users`, {
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
        const apiBasePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'
        const user = await fetch(`${apiBasePath}/users/${id}`)

        const data = await user.json()
        return data.user
    } catch (e) {
        console.log(e)
    }
}