import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_country: [],
    list_document: [],
    list_area: [],
    list_user: []
  },
  getters: {
    getCountries: (state) => {
      return state.list_country
    },
    getDocuments: (state) => {
      return state.list_document
    },
    getAreas: (state) => {
      return state.list_area
    },
    getUsers: (state) => {
      return state.list_user
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
