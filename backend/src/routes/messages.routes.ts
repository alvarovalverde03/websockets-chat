import { Router } from "express"
import { getMessages } from "../services/chat.service"

const router = Router()

router.get('/', async (req, res) => {
    const messages = await getMessages()

    return res.status(200).json({ messages })
})

export default router