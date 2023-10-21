export type TMessage = {
    content: string,
    isMe: boolean
}

export const messagesBD: TMessage[] = [
    {
        content: "Ble ble ble ble ble fdhjsdddddddddddddddgbuasidbsajdbjs",
        isMe: false
    },
    {
        content:  "Bla bla bla bla Bla bla bla bla",
        isMe: true
    },
    {
        content: "Sed euismod, velit ac bibendum bibendum, elit.",
        isMe: false
    },
]

export const getApiMessages = async () => {
    try {
        const basePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'

        const messages = await fetch(`${basePath}/messages`)

        const data = await messages.json()
        return data.messages
    } catch (e) {
        console.log(e)
    }
}

export const addMessage = async (message: TMessage) => {
    try {
        const basePath = process.env.NODE_ENV === 'production' ? process.env.API_BASE_PATH : 'http://localhost:3000/api'

        console.log(JSON.stringify(message))

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        }

        const res = await fetch(`${basePath}/messages`, requestOptions)

        console.log(res)
        return res.json()
    } catch (e) {
        console.log(e)
    }
}