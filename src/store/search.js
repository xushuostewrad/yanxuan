import Axios from 'axios'

const state = {
	searchList:[],  //搜索数据
}

const mutations = {
	setSearchList(state,list){
		state.searchList = list
	}
}

const actions = {
	//获取数据
	getSearchList({commit}){
		Axios.post('https://m.you.163.com/xhr/search/searchAutoComplete.json',{
			parmas:{				
				keywordPrefix: '1'
			}
		}).then(res => {
			console.log(res.data)
		})
	}
	
}


export default {
	namespaced: true,
	state,
	mutations,
	actions
}
