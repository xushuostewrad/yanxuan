import axios from 'axios'
import apiM from './api'
import { Toast } from 'vant'

const state = {
  brandList: []
}
const getters = {

}
const mutations = {
  setBrandList (state, list) {
    state.brandList = list
  }
}
const actions = {
  getBrandList ({ commit }) {
    let url = apiM.CATE_SUB_MENU_API
    axios.get({
      url
    }).then(res => {
      let result = res.data
      console.log(res)
      commit('getMenuList', res.data)
    })
  }
}
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
