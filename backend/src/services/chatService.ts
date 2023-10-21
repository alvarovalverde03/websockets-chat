import { DBmessages } from "../db"

export const addNewMessage = (message) => {
    if (!message) return null

    const msg = DBmessages.push(message)

    if (!msg) return null

    return 'ok'
}