import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      alias: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue")
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("@/views/CoursesView.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/auth/RegisterView.vue")
    }
  ]
});

export default router;
