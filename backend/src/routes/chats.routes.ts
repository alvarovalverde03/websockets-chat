import { Router } from "express"
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    const chats = await prisma.chat.findMany({})

    return res.status(200).json({ chats })
})

export default router