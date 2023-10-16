import Image from "next/image"
import Chat from "../chat/Chat"
import Search from "../search/Search"

export default function Chats() {
    return (
        <>
            <Search />

            <div className="overflow-y-scroll max-h-[55vh] pb-14"> {/* chats */}
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