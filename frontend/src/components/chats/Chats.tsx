import Image from "next/image"
import Chat from "../chat/Chat"
import Search from "../search/Search"

export default function Chats() {
    return (
        <>
            <Search />

            <div> {/* chats */}
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