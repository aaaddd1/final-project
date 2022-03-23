import { createRouter, createWebHistory } from "vue-router";
//import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
//my additions:
import LogIn from "../views/LogIn.vue"
import Register from "../views/Register.vue"

const routes = [
  { path: "/", component: Home },
 // { path: "/auth", component: Auth },
  { path: "/login", component: LogIn },
  { path: "/register", component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

