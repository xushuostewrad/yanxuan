<template>
<<<<<<< HEAD
	<div id="app">
		<transition name="custom-classes-transition" enter-active-class="animated rotateOutUpLeft">
			<router-view></router-view>
		</transition>
		<van-tabbar v-model="active" active-color="#b4282d">
			<van-tabbar-item icon="home-o" :to="{name:'homepage'}">首页</van-tabbar-item>
			<van-tabbar-item icon="search" :to="{name:'classification'}">分类</van-tabbar-item>
			<van-tabbar-item icon="todo-list-o" :to="{name:'general',params:{paramsType:'find'}}">识物</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" :to="{name:'shop'}">购物车</van-tabbar-item>
			<van-tabbar-item icon="manager-o" :to="{name:'center'}">个人</van-tabbar-item>
		</van-tabbar>
	</div>
=======
  <div id="app">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounce"
      leave-active-class="animated rubberBand"
    >
      <router-view></router-view>
    </transition>
    <van-tabbar v-model="active" active-color="#b4282d">
      <van-tabbar-item icon="home-o" :to="{name:'homepage'}">首页</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{name:'classification'}">分类</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" :to="{name:'general',params:{paramsType:'find'}}">识物</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :to="{name:'shop'}">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" :to="{name:'center'}">个人</van-tabbar-item>
    </van-tabbar>
  </div>
>>>>>>> 166d84d6e13a3ab05b8ffaf90f92e13640028654
</template>
<script>
	export default {
		data() {
			let active = this.$route.meta.tabNumber
			return {
				active: active
			}
		}
	}
</script>
<style lang="less">
<<<<<<< HEAD
	#app {
		height: 100%;
	}
	
	.van-tab--active {
		color: #b4282d;
	}
</style>
=======
@import '../../style/base.less';
#app {
  height: 100%;
}
.van-tab--active {
  color: #b4282d;
}
</style>
>>>>>>> 166d84d6e13a3ab05b8ffaf90f92e13640028654
