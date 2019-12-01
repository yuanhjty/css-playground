import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Example from "./components/Example.vue";

Vue.component("Example", Example);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
