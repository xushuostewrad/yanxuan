<template>
	<div class="home" id="root">
		<div class="head">
			<h1>网易严选</h1>
			<van-search @focus="fn1" placeholder="请输入搜索关键词" style="display: inline-block;width: 250px;"></van-search>
			<button class="btn" @click="fn">登录</button>
			<van-tabs>
				<van-tab v-for="index in navList" :title="index.name">

				</van-tab>
			</van-tabs>
		</div>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in bannerList" :key="index" :height="100">
				<img v-lazy="image.picUrl" />
			</van-swipe-item>
		</van-swipe>
		<van-row gutter="20" style="margin: 0 auto;color:#B4282D;line-height: 30px;background: #fff;">
			<van-col span="8">网易自营品牌</van-col>
			<van-col span="8">30天无忧退货</van-col>
			<van-col span="8">48小时快速退款</van-col>
		</van-row>
		<div style="background: #fff;" class="swiper_slide">
			<ul>
				<li v-for="item,index in list" :key="index">
					<div>
						<img :src="item.picUrl">
					</div>
					<p>{{item.text}}</p>
				</li>
			</ul>
		</div>
		<div class="new_people">
			<span>新人专享</span>
		</div>
		<div style="background: #fff;">
			<div class="new_person">
				<div class="left">
					<p>新人专享礼包</p>
					<div>
						<img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
					</div>
				</div>
				<div class="right">
					<div style="margin-bottom: 5px;">
						<p>福利社</p>
						<p class="tej">今日特价</p>
						<div>
							<img src="https://yanxuan.nosdn.127.net/66bb680b4915107067a2c19aeccdb2bf.png?imageView&thumbnail=200x200&quality=75" />
						</div>
					</div>
					<div>
						<p>新人拼团</p>
						<p class="baoyou">1元起包邮</p>
						<div style="padding: 0;width: 90px;">
							<img src="https://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png?imageView&thumbnail=200x200&quality=75" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="direct">
			<div>
				<span>品牌直销商直供<a>更多></a></span>
			</div>
			<ul>
				<li>
					<p>海外制造商</p>
					<p>9.9元起</p>
				</li>
				<li>
					<p>CK制造商</p>
					<p>32.9元起</p>
				</li>
				<li>
					<p>新秀丽制造商</p>
					<p>34.9元起</p>
				</li>
				<li>
					<p>Nine West制造商</p>
					<p>219元起</p>
				</li>
			</ul>
		</div>
		<div class="category">
			<div class="category_box">
				<div>
					<h2>类目热销榜</h2>
				</div>
				<div>
					<div class="left">
						<span>热销榜</span>
						<div>
							<img src="https://yanxuan.nosdn.127.net/b3a401594caf734b7fd843df7ffea1a6.png?imageView&quality=65&thumbnail=200x200" />
						</div>
					</div>
					<div class="right">
						<span>好评榜</span>
						<div>
							<img src="https://yanxuan.nosdn.127.net/a7cbdae2a11186732302078be77103bd.png?imageView&quality=65&thumbnail=200x200" />
						</div>
					</div>
					<ul>
						<li v-for="item,index in list" :key="index">
							<div>
								<img :src="item.picUrl">
							</div>
							<p>{{item.text}}</p>
						</li>
					</ul>
				</div>
			</div>

		</div>
		<div v-show="show" class="placed" @click="toTop"></div>
	</div>
</template>

<script>
	import { api, request } from '../../api/index.js'
	import axios from 'axios'
	export default {
		methods: {
			fn: function() {
				location.href = '/#/login'
			},
			fn1: function() {
				location.href = '/#/search'
			},
			onScroll() {
				let top = document.documentElement.scrollTop;
				if(top > 500) {
					this.show = true
					return false
				} else {
					this.show = false
				}
			},
			toTop: function() {
				let top = document.documentElement.scrollTop;
				let timer = setInterval(function() {
					top = top - 10;
					console.log(top);
					if(top < 0) {
						top = 0;
						clearInterval(timer);
					}
				}, 10)
			}
		},
		mounted() {
			window.addEventListener("scroll", this.onScroll)
		},
		data() {
			return {
				navList: [],
				bannerList: [],
				list: [],
				show: false
			}
		},
		created() {

			//获取导航菜单数据
			request.get(api.HOST + api.HOME_MENU_API).then(res => {
				let result = res.data
				this.navList = result.data
			})
			//获取首页轮播图数据
			request.get(api.HOST + api.HOME_BANNER_API).then(res => {
				let result = res.data
				this.bannerList = result.data
			})
			//获取菜单数据
			request.get(api.HOST + api.HOME_CATE_API).then(res => {
				let result = res.data
				this.list = result.data.kingKongList
			})

			//获取详细商品数据
			request.get(api.HOST + api.CATE_NAV_API).then(res => {
				let result = res.data

			})
		}
	}
</script>
<style lang="less">
	* {
		margin: 0;
		padding: 0;
		font-size: 12px;
	}
	
	body {
		background: #f4f4f4;
	}
	
	img {
		width: 100%;
		height: 185px;
	}
	
	.head {
		background: #fff;
		h1 {
			font-weight: normal;
			font-size: 16px;
			display: inline-block;
			margin-left: 10px;
		}
	}
	
	.btn {
		border: 1px solid #b4282d;
		background: none;
		color: #b4282d;
		font-size: 12px;
		padding: 2px;
	}
	
	.van-tab {
		margin: 0 4px;
		span {
			font-size: 14px;
		}
	}
	
	.nav {
		ul {
			display: flex;
			justify-content: space-around;
			font-size: 12px;
			color: #B4282D;
			height: 30px;
			line-height: 30px;
		}
	}
	
	.van-col {
		padding: 5px;
		box-sizing: border-box;
		img {
			height: 60px;
			width: 60px;
		}
		p {
			text-align: center;
		}
	}
	
	.new_people {
		text-align: center;
		background: #fff;
		margin-top: 10px;
		line-height: 50px;
		span {
			font-size: 16px;
			&:after {
				content: "— ";
			}
			&:before {
				content: "— ";
			}
		}
	}
	/*新人专享*/
	
	.new_person {
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		padding-bottom: 20px;
		.left {
			display: block;
			background: #F9E9CF;
			float: left;
			width: 48%;
			color: #333;
			box-sizing: border-box;
			margin-right: 5px;
			p {
				padding: 10px 0 0 25px;
				font-size: 16px;
			}
			div {
				width: 120px;
				height: 120px;
				margin: 27px auto;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.right {
			float: left;
			color: #333;
			width: 48%;
			box-sizing: border-box;
			div {
				overflow: hidden;
				background: #F9E9CF;
				position: relative;
				height: 100px;
				padding: 10px 0 0 10px;
				box-sizing: border-box;
				div {
					position: absolute;
					top: 0;
					right: 0;
					img {
						width: 100px;
						height: 100px;
						float: right;
					}
				}
				p {
					font-size: 16px;
				}
				.baoyou {
					position: relative;
					display: inline-block;
					background: #CBB693;
					border-radius: .05333rem;
					color: #fff;
					font-size: 12px;
					text-align: center;
				}
				.tej {
					color: #7F7F7F;
					font-size: 12px;
				}
			}
		}
	}
	
	.swiper_slide {
		background: #fff;
		overflow: hidden;
		margin: 0 auto;
		padding-bottom: 10px;
		.van-swipe {
			.van-swipe-item {
				img {
					width: 100%;
					margin: 0;
				}
			}
		}
		ul {
			width: 95%;
			margin: 0 auto;
			li {
				float: left;
				width: 20%;
				text-align: center;
				div {
					width: 50px;
					height: 50px;
					margin: 0 auto;
					img {
						width: 100%;
						height: 100%;
					}
				}
				p {
					margin-top: 5px;
				}
			}
		}
	}
	/*直销榜*/
	
	.direct {
		background: #fff;
		margin-bottom: 10px;
		margin-top: 10px;
		padding-bottom: 20px;
		div {
			padding: 10px 20px 10px 10px;
			span {
				text-indent: 5px;
				font-size: 14px;
				a {
					float: right;
					font-size: 14px;
				}
			}
		}
		ul {
			width: 95%;
			margin: 0 auto;
			overflow: hidden;
			li {
				width: 48%;
				height: 150px;
				float: left;
				background: url(../../assets/direct_one.png) no-repeat center center;
				background-size: 100% 100%;
				&:nth-of-type(2) {
					background-image: url(../../assets/direct_two.png);
					margin-bottom: 5px;
					margin-left: 5px;
				}
				&:nth-of-type(3) {
					background-image: url(../../assets/direct_thor.png);
					margin-right: 5px;
				}
				&:nth-of-type(4) {
					background-image: url(../../assets/direct_tho.png);
				}
				p {
					text-align: center;
					padding-top: 10px;
					&:nth-of-type(2) {
						color: #7F7F7F;
					}
				}
			}
		}
	}
	/*类目热销榜*/
	
	.category {
		background: #fff;
		.category_box {
			width: 95%;
			margin: 0 auto;
			overflow: hidden;
			padding-bottom: 20px;
			div {
				&:nth-of-type(1) {
					padding: 10px 0;
					h2 {
						font-size: 16px;
						font-weight: normal;
					}
				}
			}
		}
		.left {
			display: block;
			float: left;
			width: 48%;
			color: #333;
			background: #F9F3E4;
			box-sizing: border-box;
			margin-right: 5px;
			height: 100px;
			position: relative;
			div {
				width: 100px;
				height: 100%;
				position: absolute;
				top: 0;
				right: 0;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.right {
			float: left;
			color: #333;
			width: 48%;
			box-sizing: border-box;
			height: 100px;
			background: #EBEFF6;
			position: relative;
			div {
				height: 100%;
				width: 100px;
				position: absolute;
				top: 0;
				right: 0;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		ul {
			li {
				float: left;
				width: 20%;
				div {
					width: 50px;
					height: 50px;
					margin: 0 auto;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			p {
				text-align: center;
			}
		}
	}
	
	.placed {
		position: fixed;
		bottom: 80px;
		right: 20px;
		width: 40px;
		height: 40px;
		background: red;
		border-radius: 10px;
	}
</style>