import Image from "next/image"
import Chat from "../chat/Chat"
import Search from "../search/Search"
import { getApiChats } from "@/utils/db"

async function fetchChats() {
    return await getApiChats()
}

export default async function Chats() {
    const chats = await fetchChats()

    return (
        <>
            <Search />

            <div className="overflow-y-auto lg:max-h-[55vh] h-full lg:pb-14 pb-20"> {/* chats */}
                {chats && chats.map((chat: any) => (
                    <Chat
                        id={chat.publicId}
                        name={chat.name}
                        lastMessage="text last message"
                        updatedAt={chat.updatedAt}
                        notifications={1}
                        key={chat.id}
                    />
                )
                )}
                {!chats.length && 
                    <div className="flex flex-col items-center justify-center h-full">
                        <p className="text-gray-500">No chats yet</p>
                    </div>
                }

            </div>
        </>
    )
}