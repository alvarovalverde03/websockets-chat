import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getChats = async () => {
    return await prisma.chat.findMany()
}

export const getMessages = async () => {
    return await prisma.message.findMany()
}

export const addNewMessage = async (message) => {
    if (!message) return null

    console.log(message)

    const msg = await prisma.message.create({
        data: {
            text: message.text,
            createdAt: message.createdAt,
            user: {
                connect: {
                    id: message.userId
                }
            },
            chat: {
                connect: {
                    publicId: message.chatPublicId
                }
            }
        }
    })

    if (!msg) return null

    return 'ok'
}

export const generateId = () => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789%$#@!&*(){}[]<>?'
    let counter = 0
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
        counter++
    }

    return result
}
