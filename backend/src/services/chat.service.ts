import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getMessages = async () => {
    return await prisma.message.findMany()
}


export const addNewMessage = async (message) => {
    if (!message) return null

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
                    id: message.chatId
                }
            }
        }
    })

    if (!msg) return null

    return 'ok'
}