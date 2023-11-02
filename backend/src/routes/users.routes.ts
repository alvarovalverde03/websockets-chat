import { Router } from "express"
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => { 
    const users = await prisma.user.findMany()
  
    return res.status(200).json({ users })
})

export default router