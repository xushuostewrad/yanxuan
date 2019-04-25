<template>
	<div class="general">
		<div class="general_head">
			<van-tabs v-model="curTab" @click="onClick">
				<van-tab title="发现">
					<div class="general_fix">
						<van-icon name="wap-home" @click="goHome" />
						<van-icon name="description" />
						<van-icon name="shopping-cart-o" @click="goShop" />
						<van-tabs>
							<van-tab v-for="index in navList" :title="index"></van-tab>
						</van-tabs>
					</div>
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
					<van-icon name="wap-home" @click="goHome" />
					<van-icon name="description" />
					<van-icon name="shopping-cart-o" @click="goShop" />
					<van-swipe :autoplay="3000">
						<van-swipe-item v-for="(image, index) in bannerList" :key="index" :height="100">
							<img v-lazy="image.picUrl" />
						</van-swipe-item>
					</van-swipe>
					<div class="advice">
						<p>建议征集<van-icon name="add-o" /></p>
						<p>告诉我们，你的好物标准</p>
						<van-row style="background: #F4F4F4;">
							<van-col span="10"><img src="https://yanxuan.nosdn.127.net/2ea4bdb9b29919a37f72d7e099cbb48f.jpg?imageView&quality=75&thumbnail=272x200"/></van-col>
							<van-col span="14">
								<p>说说你想要的中秋月饼</p>
								<p>
									<span><van-icon name="records"/>36条建议</span>
									<span><van-icon name='closed-eye'/>318人看过</span>
								</p>
							</van-col>
						</van-row>
						<van-row>你希望吃到什么口味的月饼？对于月饼礼盒你有什么要求——是几枚装，希望搭配哪些赠品，喜欢的礼盒造型是什么样？快来说说吧～</van-row>
						<van-button size="large" @click="adviceTo">我要建议</van-button>
					</div>
					<div>
						
					</div>
				</van-tab>
			</van-tabs>

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
				bannerList: [],
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
			},
			adviceTo:function(){
				console.log(document.cookie.username)
				if(document.cookie.username == undefined){
					this.$toast("你还没有登陆")
				}
			}
		},
		created() {
			this.$toast.loading({
				loadingType:'spinner'
			})
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
		moueted() {

		}

	}
</script>

<style lang="less">
	@import '../../style/general.less';
</style>