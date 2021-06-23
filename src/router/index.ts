import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/users/Login.vue";
import Signup from "@/views/users/Signup.vue";
import CoachDetails from "@/views/coaches/CoachDetails.vue";
import CoachesList from "@/views/coaches/CoachesList.vue";
import CoachRegistration from "@/views/coaches/CoachRegistration.vue";
import ContactCoach from "@/views/requests/ContactCoach.vue";
import RequestsReceived from "@/views/requests/RequestsReceived.vue";
import NotFound from "@/views/NotFound.vue";
import { routerEnum } from "@/lib/Enums";
import { AuthMiddleWare, LogMiddleWare } from "./middlewares";
const routes: Array<RouteRecordRaw> = [
  {
    path: routerEnum.LOGIN,
    component: Login,
    name:routerEnum.LOGIN,
    beforeEnter:LogMiddleWare
  },
  {
    path: routerEnum.SIGNUP,
    component: Signup,
    name:routerEnum.SIGNUP,
    beforeEnter:LogMiddleWare
  },
  {
    path: routerEnum.HOME,
    name: routerEnum.HOME,
    redirect: routerEnum.COACHES,
  },
  {
    path: routerEnum.COACHES,
    component: CoachesList,
    name:routerEnum.COACHES,
    beforeEnter:AuthMiddleWare
  },
  {
    path: routerEnum.COACH,
    component: CoachDetails,
    name:routerEnum.COACH,
    props: true,
    beforeEnter:AuthMiddleWare,
    children: [
      {
        path: routerEnum.CONTACT,
        component: ContactCoach,
        name:routerEnum.CONTACT,
        props: true,
        beforeEnter:AuthMiddleWare
      },
    ],
  },
  {
    path: routerEnum.REGISTER,
    component: CoachRegistration,
    name:routerEnum.REGISTER,
    beforeEnter:AuthMiddleWare
  },
  {
    path: routerEnum.REQUESTS,
    component: RequestsReceived,
    name:routerEnum.REQUESTS,
    beforeEnter:AuthMiddleWare
  },
  {
    path: routerEnum.NOTFOUND,
    component: NotFound,
    name:routerEnum.NOTFOUND,
    beforeEnter:AuthMiddleWare
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
