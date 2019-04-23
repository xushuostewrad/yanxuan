import Vue from 'vue'
import Vuex from 'vuex'
import devise from './devise'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
// 存储状态
  state: {

  },

  // 操作数据
  mutations: {

  },
  // 异步请求数据
  actions: {
    getBrandList ({ commit }) {
      axios.get('/json/api.js').then(res => {
        let result = res.data
      })
    }
  }
})
