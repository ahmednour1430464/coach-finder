import { MutationTypes } from "@/lib/Enums";
import { ICoach } from "@/lib/Interfaces";
import { State } from "@/@types";
import { MutationTree } from "vuex";

export type Mutations<S = State> = {
  [MutationTypes.SET_NEW_COACH](state: S, payload: ICoach): Promise<void>;
  [MutationTypes.SAVE_ALL_COACHES](
    state: S,
    payload: Array<ICoach>
  ): Promise<void>;
};

export const mutations: MutationTree<State> & Mutations = {
  async [MutationTypes.SET_NEW_COACH](state, payload) {
    state.coaches.push(payload);
  },
  async [MutationTypes.SAVE_ALL_COACHES](state, payload) {
    state.coaches = [];
    for (let i = 0; i < payload.length; i++) {
      const {
        id,
        firstName,
        lastName,
        description,
        hourlyRate,
        areas,
      } = payload[i];
      const coach: ICoach = {
        id,
        firstName,
        lastName,
        description,
        hourlyRate,
        areas,
      };
      state.coaches.push(coach);
    }
  },
};

export default {};
