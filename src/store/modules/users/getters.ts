import { UserState } from "@/@types";
import { IUser } from "@/lib/Interfaces";
import { RootState } from "@/lib/Types";
import { GetterTree } from "vuex";


export type Getters={
    currentUser(state:UserState):IUser
}

export const getters:GetterTree<UserState,RootState>&Getters={
    currentUser(state){
        return state.user as IUser
    }
}