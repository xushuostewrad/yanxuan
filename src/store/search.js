import Axios from 'axios'

const state = {
	searchList:[], //搜索数据
	genList:[], //识物信息
}

const mutations = {
	setSearchList(state,list){
		state.searchList = list
	},
	setGenList(state,list){
		state.genList = list
	}
}

const actions = {
	//获取数据
	getSearchList({commit}){
		Toast.loading({
			loadingType:'spinner',
			duration:0
		})
		Axios.post('https://m.you.163.com/xhr/search/searchAutoComplete.json',{
			parmas:{				
				keywordPrefix: '1'
			},
			header:{
				"Access-Control-Allow-Origin":"*"
			}
		}).then(res => {
			let result = res.data
			if(result.code === 200){				
				commit("getSearchList",result.data)
			}else{
				Toast(result.msg)
			}
			Toast.clear()
		})
	},
	
	getGenList( { commint } ) {
		Toast.loading({
			loadingType:'spinner',
			duration:0
		})
		Axios.get('https://m.you.163.com/topic/v1/find/recManual.json',{
			header:{
				"Access-Control-Allow-Origin":"*"
			}
		}).then( res => {
			let result = res.data
			if(result.code === 200){
				commint('getGenList',result.data)
			}else{
				Toast(result.msg)
			}
			Toast.clear()
		})
	}
	
}


export default {
	namespaced: true,
	state,
	mutations,
	actions
}
