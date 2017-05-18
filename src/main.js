/* THIRD PARTY */
import Vue from 'vue';
import App from './app';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

/* COMPONENTS */
import PageContent from '@/components/PageContent';

Vue.config.productionTip = false;

Vue.use(VueMaterial);

Vue.component('page-content', PageContent);

Vue.material.registerTheme({
  default: {
    primary: 'black',
    accent: 'amber',
    warn: 'red'
  },
  buttons: {
    primary: 'amber'
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
