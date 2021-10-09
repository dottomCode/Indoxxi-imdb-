import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import axios from "axios";

import "buefy/dist/buefy.css";

Vue.use(Buefy, axios);
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
