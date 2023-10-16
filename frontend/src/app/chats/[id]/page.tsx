import ChatsCont from "@/components/chats/Chats"
import Link from "next/link"

export default function Chats() {
    return (
        <>
            <Link href="/chats" className="underline">Back</Link>
            <p>chat</p>
        </>
    )
}