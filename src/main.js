import Vue from 'vue'
import App from './app'
import router from './router/app-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'black',
    accent: 'amber',
    warn: 'red'
  },
  buttons: {
    primary: 'amber'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
