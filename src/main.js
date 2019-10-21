import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuex from 'vuex';
import headerStore from './store/headerStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    headerStore
  }
})
 
library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  vuex,
  vuetify,
  render: h => h(App)
}).$mount('#app')