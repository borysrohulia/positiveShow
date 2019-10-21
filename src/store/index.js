import Vue from 'vue'
import Vuex from 'vuex'
import headerStore from './headerStore/headerStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      headerStore,
    }
  })