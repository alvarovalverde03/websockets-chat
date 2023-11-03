import { Router } from "express"
import { getChats } from "../services/chat.service"

const router = Router()

router.get('/', async (req, res) => {
    const chats = await getChats()

    console.log(chats)

    return res.status(200).json({ chats })
})

export default router