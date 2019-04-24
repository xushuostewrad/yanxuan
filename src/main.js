import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, Field, CellGroup,TabbarItem, Checkbox, CheckboxGroup, Swipe, Icon, Row, Col, RadioGroup, Radio, SwipeItem, Toast, Lazyload, Search, Badge, BadgeGroup, NavBar } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Search)
  .use(Badge)
  .use(BadgeGroup)
  .use(NavBar)
  .use(Toast)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(CellGroup)
  .use(Field)
  .use(RadioGroup)
  .use(Radio)
  .use(Checkbox)
  .use(CheckboxGroup)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
