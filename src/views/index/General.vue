<template>
	<div class="general">
		<div class="general_head">
			<van-icon name="wap-home" @click="goHome" />
			<van-tabs v-model="curTab" @click="onClick">
				<van-tab title="发现">
					<!--<van-tabs>
						<van-tab v-for="index in navList" :title="index"></van-tab>
					</van-tabs>-->
					<ul>
						<li v-for="item in list" :key="item.topicId">
							<div class="tit">
								<p style="padding-top: 10px;">
									<span class="author">
							<img :src="item.avatar"/>
						</span>
									<span class="nickname">{{item.nickname}}</span>
								</p>
								<h2>{{item.title}}</h2>
								<h3 v-show="show" :styleId="item.style" class="sub">{{item.subTitle}}</h3>
							</div>
							<div class="phote">
								<img :src="item.picUrl" />
								<p>{{item.readCount}}人看过</p>
							</div>
						</li>
					</ul>
				</van-tab>
				<van-tab title="甄选家">
					<van-swipe :autoplay="3000">
						<van-swipe-item v-for="(image, index) in bannerList" :key="index" :height="100">
							<img v-lazy="image.picUrl" />
						</van-swipe-item>
					</van-swipe>
					<div>
						
					</div>
				</van-tab>
			</van-tabs>
			<van-icon name="description" />
			<van-icon name="shopping-cart-o" @click="goShop" />
		</div>

	</div>
</template>

<script>
	import { api, request } from '../../api/index.js'
	import axios from 'axios'
	export default {
		data() {
			let curTab = this.$route.params.paramsType === 'find' ? 0 : 1
			return {
				navList: ['推荐', '好货内部价', '回购榜', '晒单', '开发者日记', '达人', '上新', 'HOME'],
				tabList: [],
				list: [],
				bannerList:[],
				show: false,
				curTab: curTab
			}
		},
		methods: {
			onClick(index, title) {
				let paramsType = index === 0 ? 'find' : 'home';
				this.$router.replace({
					name: 'general',
					params: {
						paramsType
					}
				})
			},
			goHome: function() {
				this.$router.replace({
					name: 'homepage'
				})
			},
			goShop: function() {
				this.$router.replace({
					name: 'shop'
				})
			}
		},
		created() {
			
			request.get(api.HOST + api.HOME_BANNER_API).then(res => {
				let result = res.data
				this.bannerList = result.data
			})
			
			request.get(api.HOST + api.TOPIC_LIST_API, {
				params: {
					page: 1
				}
			}).then(res => {
				let result = res.data
				if(result.status === 0) {
					let data = result.data
					data.forEach(x => {
						x.topics.forEach(item => {
							this.list.push(item)
						})
					})
				} else {
					console.log(result.message)
				}
			})
		},
		moueted(){
			
		}

	}
</script>

<style lang="less">
	@import '../../style/general.less';
</style>