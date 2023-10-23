export type TMessage = {
    content: string,
    user_name: string,
    user_id: string,
    date: string,
}

export const getApiMessages = async () => {
    try {
        // const basePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'
        
        // const basePath = 'http://localhost:3000/api'
        const basePath = 'https://realtime-chat.1.ie-1.fl0.io/api'

        const messages = await fetch(`${basePath}/messages`)

        const data = await messages.json()
        return data.messages
    } catch (e) {
        console.log(e)
    }
}
