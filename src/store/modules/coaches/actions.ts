import { Coach } from "@/lib/Classes";
import { ActionsTypes, MutationTypes, Role } from "@/lib/Enums";
import { State } from "@/@types";
import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "@/lib/Types";
import axios from "axios";
import { ICoach } from "@/lib/Interfaces";
import { useStore } from "@/store";

type AugmentedActionsContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [ActionsTypes.SET_NEW_COACH](
    { commit }: AugmentedActionsContext,
    payload: ICoach
  ): Promise<void>;
  [ActionsTypes.LOAD_ALL_COACHES]({
    commit,
  }: AugmentedActionsContext): Promise<void>;
}
export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionsTypes.SET_NEW_COACH]({ commit }, data) {
    const { firstName, lastName, description, areas, hourlyRate } = data;
    const { email } = useStore().getters.currentUser;
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/v1/coaches/create",
        data: {
          email,
          firstName,
          lastName,
          description,
          areas,
          hourlyRate,
        },
        headers: {
          "content-type": "application/json",
        },
      });
      const { coach } = await response.data.result;
      commit(MutationTypes.SET_NEW_COACH, coach as ICoach);
    } catch (error) {
      console.log(error);
    }
  },
  async [ActionsTypes.LOAD_ALL_COACHES]({ commit }) {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/api/v1/coaches",
      });
      const coaches: Array<ICoach> = await response.data.result.coaches;
      //console.log(coaches);
      commit(MutationTypes.SAVE_ALL_COACHES, coaches);
    } catch (error) {
      console.log(error);
    }
  },
};
