<template>
	<div id="app">
		<router-view></router-view>
		<van-tabbar v-model="active" active-color="#b4282d">
			<van-tabbar-item icon="home-o" :to="{name:'homepage'}">首页</van-tabbar-item>
			<van-tabbar-item icon="search" :to="{name:'classification'}">分类</van-tabbar-item>
			<van-tabbar-item icon="todo-list-o" :to="{name:'general',params:{paramsType:'find'}}">识物</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" :to="{name:'shop'}">购物车</van-tabbar-item>
			<van-tabbar-item icon="manager-o" :to="{name:'center'}">个人</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		data(){
			let active = this.$route.meta.tabNumber
			return {
				active:active
			}
		}
	}
</script>

<style lang="less">
	.van-tab--active {
		color: #b4282d;
	}
</style>