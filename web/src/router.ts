import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

import { APPLICATION_NAME } from "@/config"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/HomeLayout.vue"),
    children: [
      {
        path: "",
        name: "HomePage",
        component: () => import("@/pages/HomePage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/our-mission",
        name: "MissionPage",
        component: () => import("@/pages/MissionPage.vue"),
        meta: {
          title: "Our Mission",
          background: { class: "mission-bg" },
        },
      },
      {
        path: "/team",
        name: "TeamPage",
        component: () => import("@/pages/TeamPage.vue"),
        meta: {
          title: "Team",
          background: { class: "team-bg" },
        },
      },
      {
        path: "/careers",
        name: "CareersPage",
        component: () => import("@/pages/CareersPage.vue"),
        meta: {
          title: "Careers",
          background: { class: "careers-bg" },
        },
      },
      {
        path: "/contact",
        name: "ContactPage",
        component: () => import("@/pages/ContactPage.vue"),
        meta: {
          title: "Contact Us",
          background: { class: "contact-bg" },
        },
      },
      {
        path: "/pricing",
        name: "PricingPage",
        component: () => import("@/pages/PricingPage.vue"),
        meta: {
          title: "Pricing",
          background: { class: "pricing-bg" },
        },
      },
    ],
  },
  {
    path: "/errors/not-found",
    name: "errors/NotFoundPage",
    component: () => import("@/pages/errors/NotFoundPage.vue"),
    meta: {
      title: "Not Found",
      requiresAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/errors/not-found",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on navigation
    return { top: 0, left: 0 }
  },
})

router.beforeEach(async (to) => {
  if (to.meta && to.meta.title) {
    document.title = `${APPLICATION_NAME} - ${to.meta.title}`
  } else {
    document.title = APPLICATION_NAME
  }

  return true
})

export default router
