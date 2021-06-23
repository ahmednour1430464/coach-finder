import { GetterTree } from "vuex";
import { ICoach } from "@/lib/Interfaces";
import { State } from "@/@types";
import { RootState } from "@/lib/Types";
export type Getters = {
  coaches(state: State): Array<ICoach>;
  hasCoaches(state: State): boolean;
};

export const getters: GetterTree<State, RootState> & Getters = {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  }
};
