import { UserState } from "@/@types";
import { UserMutationTypes } from "@/lib/Enums";
import { IUser } from "@/lib/Interfaces";
import { MutationTree } from "vuex";

export type Mutations<S = UserState> = {
  [UserMutationTypes.SET_USER](state: S, payload: IUser): Promise<void>;
};

export const mutations: MutationTree<UserState> & Mutations = {
  async [UserMutationTypes.SET_USER](state, payload) {
    state.user = payload;
  },
};
