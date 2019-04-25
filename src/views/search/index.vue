<template>
	<div class="search_detail">
		<van-icon name="wap-home" @click="fn" />
		<van-search placeholder="请输入搜索关键词" show-action shape="round">
			<ul>
				<li v-for="(item,index) in searchList" :key="index">{{}}</li>
			</ul>
			<div slot="action">搜索</div>
		</van-search>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		computed: {
			...mapState('search', [
				'searchList'
			])
		},
		methods: {
			...mapActions('search', ['getSearchList']),
			fn:function(){
				location.href = '/#/homepage'
			}
		},
		created() {
			this.getSearchList();
		},

	}
</script>

<style lang="less">
	.van-icon-wap-home {
		position: absolute;
		font-size: 30px;
		top: 10px;
	}
	.van-search {
		padding-left: 35px;
	}

</style>
