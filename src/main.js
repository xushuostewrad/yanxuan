import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem , Swipe , SwipeItem,Lazyload,Search,Row,Col,Tab, Tabs} from 'vant'
import {api,request} from '../api'

Vue.config.productionTip = false

Vue.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
.use(Search)
.use(Row)
.use(Col)
.use(Tab)
.use(Tabs)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')