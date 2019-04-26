import Axios from 'axios'

const state = {
  searchList: [] // 搜索数据
}

const mutations = {
  setSearchList (state, list) {
    state.searchList = list
  }
}

const actions = {
  // 获取数据
  getSearchList ({ commit }) {
    Axios.post('https://m.you.163.com/xhr/search/searchAutoComplete.json', {
      parmas: {
        'csrf_token': 'd3f25ff6852e8ace0f2d40ebcdf2962f',
        'keywordPrefix': 1
      },
      header: {
        'Access-Control-Allow-Origin': '*',
        'Content-Language': 'zh-CN',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'charset': 'UTF-8',
        'Pragma': 'no-cache',
        'Server': 'nginx',
        'Transfer-Encoding': 'chunked'
      }
    }).then(res => {
      let result = res.data
      if (result.code === 200) {
        commit('getSearchList', result.data)
      }
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
