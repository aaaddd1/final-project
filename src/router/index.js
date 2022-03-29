import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
//my additions:
import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"

import TaskHome from "../views/TaskHome.vue"

const routes = [
  // { path: "/", component: Home },
  { path: "/", component: TaskHome },
  { 
    path: "/auth", 
    component: Auth,
    children: [
      { path: "", component: SignIn},
      { path: "sign-up", component: SignUp},
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

