import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Experiences from "@/views/Experiences.vue";
import Articles from "@/views/Articles.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/sobre",
      name: "about",
      component: About,
    },
    {
      path: "/projetos",
      name: "projects",
      component: Projects,
    },
    {
      path: "/trajetoria-profissional",
      name: "experiences",
      component: Experiences,
    },
    {
      path: "/artigos",
      name: "article",
      component: Articles,
    },
  ],
});

export default router;
