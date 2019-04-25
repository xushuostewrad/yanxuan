import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import HomePage from '../views/index/HomePage.vue'
import Classification from '../views/index/Classification.vue'
import General from '../views/index/General.vue'
import Login from '../views/login/Index.vue'
import Center from '../views/index/Center.vue'
import Shop from '../views/index/Shop.vue'
import Fucenter from '../views/index/Fucenter.vue'
import Register from '../views/index/Register.vue'
import Email from '../views/index/Email.vue'
import Search from '../views/search/index.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: 'homepage',
      name: 'homepage',
      component: HomePage,
      meta: { tabNumber: 0 }
    },
    {
      path: 'classification',
      name: 'classification',
      component: Classification,
      meta: { tabNumber: 1 }
    },
    {
      path: 'general',
      name: 'general',
      component: General,
      meta: { tabNumber: 2 }
    },
    {
      path: 'shop',
      name: 'shop',
      component: Shop,
      meta: { tabNumber: 3 }
    },
    {
      path: '',
      redirect: '/homepage'
    }
    ]
  },
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/fucenter',
    name: 'fucenter',
    component: Fucenter
  },
  {
    path: '/email',
    name: 'email',
    component: Email
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: 'login',
    name: 'login',
    component: Login
  },

  {
    path: '*',
    redirect: '/homepage'
  }
  ]
})

export default router
