import { routerEnum } from "@/lib/Enums";
import { useStore } from "@/store";
import {
  NavigationGuardNext as Next,
  RouteLocationNormalized as Route,
} from "vue-router";

export const LogMiddleWare = (to: Route, from: Route, next: Next) => {
  console.log({from:from.name,to:to.name});
  next()
};


export const AuthMiddleWare=(to: Route, from: Route, next: Next)=>{
  if (!(useStore().getters.currentUser.id)) {
    
    return next(true)
  }
  next(routerEnum.LOGIN)
}