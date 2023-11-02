import { TMessageShared } from "./TMessage";
import { TUserShared } from "./TUser";

export type TChatShared = {
    id: string,
    users: TUserShared[],
    messages: TMessageShared[],
    createdAt: string,
}