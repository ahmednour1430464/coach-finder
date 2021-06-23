import { UserState } from "@/@types";
import { UserActionTypes, UserMutationTypes } from "@/lib/Enums";
import { IUser } from "@/lib/Interfaces";
import { RootState } from "@/lib/Types";
import axios from "axios";
import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "./mutations";

type AugmentedActionsContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<UserState, RootState>, "commit">;

export interface Actions {
  [UserActionTypes.SET_USER](
    { commit }: AugmentedActionsContext,
    payload: IUser
  ): Promise<void>;
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  async [UserActionTypes.SET_USER]({ commit }, payload) {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/login",
        headers: {
          "content-type": "application/json",
        },
        data: payload,
      });
      const { user } = await response.data.result;

      commit(UserMutationTypes.SET_USER, user as IUser);
    } catch (error) {
      console.log(error);
    }
  },
};
