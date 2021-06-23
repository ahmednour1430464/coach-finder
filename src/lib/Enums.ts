export enum Mode {
  FLAT = "flat",
  OUTLINE = "outline",
}
export enum AreaOfExpertise {
  BACKEND = "backend",
  FRONTEND = "frontend",
  CAREER = "career",
}

//router
export enum routerEnum {
  LOGIN = "/login",
  SIGNUP = "/singup",
  HOME = "/",
  COACHES = "/coaches",
  COACH = "/coaches/:id",
  CONTACT = "contact",
  REGISTER = "/register",
  REQUESTS = "/requests",
  NOTFOUND = "/:notfound(.*)",
}

export enum Role {
  USER = "USER",
  COACH = "COACH",
}

//request store
export enum RequestMutationTypes {
  SET_NEW_REQUEST = "SET_NEW_REQUEST",
  SAVE_ALL_REQUESTS = "SAVE_ALL_REQUESTS",
}
export enum RequestActionsTypes {
  SET_NEW_REQUEST = "SET_NEW_REQUEST",
  LOAD_RECEIVED_REQUESTS = "LOAD_RECEIVED_REQUESTS",
}

//user store
export enum UserMutationTypes {
  SET_USER = "SET_USER",
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
}

//coach store
export enum MutationTypes {
  SET_NEW_COACH = "SET_NEW_COACH",
  SAVE_ALL_COACHES = "SAVE_ALL_COACHES",
}
export enum ActionsTypes {
  SET_NEW_COACH = "SET_NEW_COACH",
  LOAD_ALL_COACHES = "LOAD_ALL_COACHES",
}
