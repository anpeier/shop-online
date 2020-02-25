import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search/:keyword",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Search.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    children: [
      {
        path: "/",
        name: "CheckPhone",
        component: () => import("./../components/signup/Phone.vue")
      },
      {
        path: "phone",
        name: "CheckPhone",
        component: () => import("./../components/signup/Phone.vue")
      },
      {
        path: "info",
        name: "Info",
        component: () => import("./../components/signup/Info.vue")
      },
      {
        path: "finish",
        name: "Finish",
        component: () => import("./../components/signup/Finish.vue")
      }
    ]
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../views/Form.vue")
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/Goods.vue')
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
