import { IRequest } from "@/lib/Interfaces";
import { RequestState } from "@/@types";
import { GetterTree } from "vuex";
import { RootState } from "@/lib/Types";
import { useStore } from "@/store";

export type Getters = {
  requests(state: RequestState): Array<IRequest>;
  hasRequests(state: RequestState): boolean;
};

export const getters: GetterTree<RequestState, RootState> & Getters = {
  hasRequests(state) {
    return (
      state.requests.filter((request: IRequest) => {
        return useStore().getters.currentUser.id === request.receiverId;
      }).length > 0
    );
  },
  requests(state) {
    return state.requests.filter((request: IRequest) => {
      return useStore().getters.currentUser.id === request.receiverId;
    });
  },
};
