import axios from 'axios'
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
    set_country (state, obj) {
      state.list_country = obj
    },
    set_area (state, obj) {
      state.list_area = obj
    },
    set_document (state, obj) {
      state.list_document = obj
    },
    set_users (state, obj) {
      state.list_user = obj
    },
    set_edit_uset (state, obj) {
      const index = state.list_user.map(function (u) {return u._id}).indexOf(obj._id)
      const {country, ...data} = obj
      const countries = state.list_country.findIndex(c => c._id === country)
      const {email} = state.list_user[index]
      if(index >= 0) {
        state.list_user[index] = {
          ...data,
          email,
          country: state.list_country[countries]
        }
      }
    }

  },
  actions: {
    async load_countries ({commit}) {
      const resp = await axios.get(`${process.env.VUE_APP_URL_API}/api/country`)
      commit('set_country', resp.data.Contries)
    },
    async load_area ({commit}) {
      const resp = await axios.get(`${process.env.VUE_APP_URL_API}/api/area`)
      commit('set_area', resp.data.Areas)
    },
    async load_document ({commit}) {
      const resp = await axios.get(`${process.env.VUE_APP_URL_API}/api/documentType`)
      commit('set_document', resp.data.DocumentsType)
    },
    async load_users ({commit}, p=1) {
      const resp = await axios.get(`${process.env.VUE_APP_URL_API}/api/user?page=${p}`)
      const { Page, TotalPages,  Users} = resp.data
      commit('set_users', Users)
      return {ok: true, nextpage: Page < TotalPages}
    },
    async update_users ({commit}, user) {
      try{
        await axios.put(`${process.env.VUE_APP_URL_API}/api/user/${user._id}`, user)
        commit('set_edit_uset', user)
        return { ok: true}
      }catch (error) {
        return {ok: false, msg:error.response.data.errors[0].msg}
      }
    },
    async delete_users ({_}, id) {
      try {
        await axios.delete(`${process.env.VUE_APP_URL_API}/api/user/${id}`)
        return { ok: true}
      } catch (error) {
        return {ok: false, msg:error.response.data.errors[0].msg}
      }
    },
    async save_user({_}, user) {
      try {
        await axios.post(`${process.env.VUE_APP_URL_API}/api/user`, user)
        return { ok: true}
      } catch (error) {
        return {ok: false, msg:error.response.data.errors[0].msg}
      }
    }
  },
  modules: {
  }
})
