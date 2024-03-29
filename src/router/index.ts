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
      path: "/students",
      name: "students",
      component: () => import("@/views/StudentsView.vue")
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
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/LoginView.vue")
    },
    {
      path: "/register-course",
      name: "register-course",
      component: () => import("@/views/course/RegisterCourse.vue")
    }
  ]
});

export default router;
