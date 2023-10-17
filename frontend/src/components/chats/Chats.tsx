import Image from "next/image"
import Chat from "../chat/Chat"
import Search from "../search/Search"

export default function Chats() {
    return (
        <>
            <Search />

            <div className="overflow-y-auto max-h-[55vh] pb-14"> {/* chats */}
                <Chat />

                <Chat />
            </div>
        </>
    )
}