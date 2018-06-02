import Vue from 'vue'
import Vuex from 'vuex'
import {getToken} from '@/utils/auth'
Vue.use(Vuex)

const state = {
  loginShow: false,
  registerShow: false,
  token: getToken()
}

const getters = {
  // getter是通过state得到衍生的状态
}

const actions = {
  isloginShow ({commit}, data) {
    commit('ISLOGINSHOW', data)
  },
  isregisterShow ({commit}, data) {
    commit('ISREGISTER', data)
  },
  setToken ({commit}, data) {
    commit('SETTOKEN', data)
  }
}

const mutations = {
  ISLOGINSHOW (state, data) {
    state.loginShow = data
  },
  ISREGISTER (state, data) {
    state.registerShow = data
  },
  SETTOKEN (state, data) {
    state.toekn = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
