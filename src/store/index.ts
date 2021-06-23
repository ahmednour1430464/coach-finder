import { RequestState, State, UserState } from "@/@types";
import { createStore } from "vuex";
import { store as coach, Store as CoachStore } from "./modules/coaches";
import { store as request, Store as RequestStore } from "./modules/requests";
import { store as user, Store as UserStore } from "./modules/users";

export type RootState = {
  coaches: State;
  requests: RequestState;
  users: UserState;
};
export type Store = CoachStore<Pick<RootState, "coaches">> &
  RequestStore<Pick<RootState, "requests">> &
  UserStore<Pick<RootState, "users">>;

const store = createStore<RootState>({
  modules: {
    coach,
    request,
    user,
  },
});

export const useStore = (): Store => {
  return store as Store;
};

export default store;
