'use client'

import ChatsCont from "@/components/chats/Chats"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function Chats() {
    useEffect(() => {
        if (!localStorage.getItem('user_name') && !localStorage.getItem('user_id')) redirect('/')
    }, [])

    return (
        <ChatsCont />
    )
}