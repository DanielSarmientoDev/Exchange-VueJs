import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";
import ErrorCoin from "@/views/ErrorCoin";
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "/*",
      name: "ErrorCoin",
      component: ErrorCoin,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },
  ],
});
