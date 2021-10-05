import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import VueLogger from "vuejs-logger";

import router from "@/router";
import API from "@/utils/API";
import App from "@/views/App";

Vue.config.productionTip = false;

const isProductionEnv = process.env.NODE_ENV === "production";

Vue.use(
  new VueSocketIO({
    debug: !isProductionEnv,
    connection: `${API.hostname}:${API.port}`
  })
);

Vue.use(VueLogger, {
  isEnabled: true,
  logLevel: isProductionEnv ? "error" : "debug",
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: "|",
  showConsoleColors: true
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
