import { PrismaClient } from '@prisma/client'
import { UserBack } from '../types/User'

const prisma = new PrismaClient()

export const getUsers = async () => {
    return await prisma.user.findMany()
}

export const getUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if (!user) return null
    
    return user
}

export const createUser = async (user: UserBack) => {
    if (!user) return null

    const newUser = await prisma.user.create({
        data: {
            username: user.username,
            chats: {
                connect: {
                    id: 1
                }
            }
        }
    })

    if (!newUser) return null

    return newUser
}
