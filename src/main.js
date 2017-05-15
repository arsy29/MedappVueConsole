import Vue from 'vue'
import App from './App'
import router from './router/app-router'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui';

Vue.config.productionTip = false

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
