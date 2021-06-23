import { RequestActionsTypes, RequestMutationTypes } from "@/lib/Enums";
import { IRequest } from "@/lib/Interfaces";
import { RequestState } from "@/@types";
import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "@/lib/Types";
import axios from "axios";

type AugmentedActionsContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RequestState, RootState>, "commit">;

export interface Actions {
  [RequestActionsTypes.SET_NEW_REQUEST](
    { commit }: AugmentedActionsContext,
    payload: IRequest
  ): void;
  [RequestActionsTypes.LOAD_RECEIVED_REQUESTS](
    { commit }: AugmentedActionsContext,
    id: string
  ): void;
}

export const actions: ActionTree<RequestState, RootState> & Actions = {
  async [RequestActionsTypes.SET_NEW_REQUEST]({ commit }, data) {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/api/v1/requests/create",
        headers: {
          "content-type": "application/json",
        },
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async [RequestActionsTypes.LOAD_RECEIVED_REQUESTS]({ commit }, id) {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/api/v1/requests/user/${id}`,
      });
      const { requests } = await response.data.result;
      commit(RequestMutationTypes.SAVE_ALL_REQUESTS, requests);
    } catch (error) {
      console.log(error);
    }
  },
};
