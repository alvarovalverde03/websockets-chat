import Image from "next/image"
import Chat from "../chat/Chat"
import Search from "../search/Search"

export default function Chats() {
    return (
        <>
            <Search />

            <div className="overflow-y-auto lg:max-h-[55vh] max-h-full lg:pb-14 pb-20"> {/* chats */}
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
                <Chat />

                <Chat />
            </div>
        </>
    )
}