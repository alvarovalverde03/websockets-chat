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

export const getApiMessages = () => {
    return [...messagesBD]
}

export const addMessage = (message: TMessage) => {
    messagesBD.push(message)
    return message
}