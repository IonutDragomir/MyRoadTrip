import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VolosView from "@/views/VolosView.vue";
import TheJourneyView from "@/views/TheJourneyView.vue";
import SkiathosView from "@/views/SkiathosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/memories",
    name: "memories",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MemoriesView.vue"),
  },
  {
    path: "/the-journey",
    name: "the-journey",
    component: TheJourneyView,
  },
  {
    path: "/volos",
    name: "volos",
    component: VolosView,
  },
  {
    path: "/skiathos",
    name: "skiathos",
    component: SkiathosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
