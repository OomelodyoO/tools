import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import crypto from 'crypto-js'
import router from "./router";


Vue.config.productionTip = false;

/**
 * use
 */
Vue.use(ElementUI);
/**
 * prototype
 */
Vue.prototype.$crypto = crypto;
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');

