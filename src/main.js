import Vue from "vue";
import App from "./App.vue";
import { VuePlugin } from "vuera";

Vue.config.productionTip = false;
Vue.use(VuePlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})//.$mount("#app");