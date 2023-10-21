import Image from "next/image"
import Chat from "../chat/Chat"
import Search from "../search/Search"

export default function Chats() {
    return (
        <>
            <Search />

            <div className="overflow-y-auto lg:max-h-[55vh] h-full lg:pb-14 pb-20"> {/* chats */}
                <Chat 
                    name="Global Chat"
                    lastMessage="The last message will go here"
                    time="00:00"
                    notifications={1}
                />
            </div>
        </>
    )
}