import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module,
} from "vuex";

import { UserState } from "@/@types";
import { state } from "./state";
import { getters, Getters } from "./getters";
import { mutations, Mutations } from "./mutations";
import { actions, Actions } from "./actions";
import { RootState } from "@/lib/Types";

export type Store<S = UserState> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store: Module<UserState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
