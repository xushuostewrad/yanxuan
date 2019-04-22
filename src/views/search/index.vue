<template>
	<div class="search_detail">
		<van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
			<div slot="action" @click="onSearch">搜索</div>
		</van-search>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		methods: {
			...mapActions('search', ['getSearchList']),
			onSearch: function() {
				
			},
		},
		created() {
			this.getSearchList();
		}
	}
</script>

<style>
	.van-search {
		/*width: 300px;*/
		/*display: inline;*/
	}
</style>