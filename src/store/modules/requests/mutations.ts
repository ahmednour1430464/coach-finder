import { RequestMutationTypes } from "@/lib/Enums";
import { IRequest } from "@/lib/Interfaces";
import { RequestState } from "@/@types";
import { MutationTree } from "vuex";

export type Mutations<S = RequestState> = {
  [RequestMutationTypes.SET_NEW_REQUEST](
    state: S,
    payload: IRequest
  ): Promise<void>;
  [RequestMutationTypes.SAVE_ALL_REQUESTS](
    state: S,
    payload: Array<IRequest>
  ): Promise<void>;
};

export const mutations: MutationTree<RequestState> & Mutations = {
  async [RequestMutationTypes.SET_NEW_REQUEST](state, payload) {
    state.requests.push(payload);
  },
  async [RequestMutationTypes.SAVE_ALL_REQUESTS](state, payload) {
    state.requests = [];
    for (let i = 0; i < payload.length; i++) {
      const { id, email, message, receiverId, senderId } = payload[i];
      const request: IRequest = { id, email, message, receiverId, senderId };
      console.log(request);

      state.requests.push(request);
    }
  },
};
