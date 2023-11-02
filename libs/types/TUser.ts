import { TChatShared } from "./TChat"
import { TMessageShared } from "./TMessage"

export type TUserShared = {
    username: string,
    messages: TMessageShared[],
    chats: TChatShared[],
    createdAt: string,
}