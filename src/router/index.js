import Vue from "vue";
import VueRouter from "vue-router";
import kebabCase from "lodash/kebabCase";

Vue.use(VueRouter);

const requireComponent = require.context("../views", false, /\.vue$/);

export const routes = requireComponent.keys().map(filename => {
  const componentName = filename.slice(0, -4).replace(/\.\//g, "");

  return {
    path: `/${kebabCase(componentName)}`,
    name: componentName,
    component: requireComponent(filename).default
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
