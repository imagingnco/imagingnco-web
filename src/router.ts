import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Process from "@/views/Process.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/process",
    name: "Process",
    component: Process,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/just/${just}",
    name: "Just",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;