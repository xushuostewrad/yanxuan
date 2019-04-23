import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Search,Badge, BadgeGroup } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Search)
  .use(Badge)
  .use(BadgeGroup)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
