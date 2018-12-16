import Vue from 'vue'
import Vuex from 'vuex'
import tagsview from './modules/tagsView.js'
import getters from './getters.js'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tagsview
  },
  getters
})

export default store
