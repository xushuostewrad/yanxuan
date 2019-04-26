<template>
	<div class="home">
		<!--头部-->
		<div class="head">
			<div class="head_tab">
				<h1>网易严选</h1>
				<van-search @focus="fn1" placeholder="请输入搜索关键词" style="display: inline-block;width: 250px;"></van-search>
				<button class="btn" @click="fn">登录</button>
				<van-tabs sticky>
					<van-tab v-for="item in navList" :title="item.name">
					</van-tab>
				</van-tabs>
			</div>
		</div>
		<!--轮播图-->
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
				<li v-for="(item,index) in list" :key="index">
					<div>
						<img :src="item.picUrl">
					</div>
					<p>{{item.text}}</p>
				</li>
			</ul>
		</div>
		<!--新人专享-->
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
		<!--类目热销榜-->
		<div class="category">
			<div class="category_box">
				<div class="category_title">
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
						<li v-for="(item,index) in list" :key="index">
							<div>
								<img :src="item.picUrl">
							</div>
							<p>{{item.text}}</p>
						</li>
						<li>
							<a href="javascript:;">查看更多</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--人气推荐-->
		<div class="sentiment">
			<div class="sentiment_title">
				<span>人气推荐<a href="javascript:;">更多></a></span>
			</div>
			<div class="sentiment_adv">
				<div>
					<img src="https://yanxuan.nosdn.127.net/16b4d581afc5a9cd36e8adc8ed6ceb4f.png?imageView&quality=65&thumbnail=280x280" />
				</div>
				<div>
					<p>泰国制造 天然乳胶枕 护颈优眠 升级抗菌</p>
					<p>AAA抗菌枕套 SGS全程监控</p>
					<p>3299￥</p>
				</div>
			</div>
			<ul>
				<li v-for="item in sentimentList" :key="item.Id">
					<div>
						<img :src="item.picUrl" />
					</div>
					<p>{{item.message}}</p>
					<p><span>{{item.msgType}}</span><span>{{item.msgTypeT}}</span></p>
				</li>
			</ul>
		</div>
		<!--限时购-->
		<div class="limit">
			<div class="limit_tilte">
				<p>
					<b>限时购</b>
					<span class="hours"></span>
					<i>:</i>
					<span class="minutes"></span>
					<i>:</i>
					<span class="seconds"></span>
					<a href="javascript:;">更多></a>
				</p>
			</div>
			<ul class="limit_list">
				<li v-for="item in limitList" :key="item.Id">
					<div>
						<img :src="item.picUrl"/>
					</div>
					<p><span>￥{{item.price}}</span><span>￥{{item.disPrice}}</span></p>
				</li>
			</ul>
		</div>
		<!--尾部-->
		<div class="footer">
			<van-button size="small">下载APP</van-button>
			<van-button size="small">电脑版</van-button>
			<p>网易公司版权所有 © 1997-2019</p>
			<p>食品经营许可证：JY13301080111719</p>
		</div>
		<div v-show="show" class="placed">置顶</div>
	</div>
</template>

<script>
<<<<<<< HEAD
	var getTime = (function() {
		let hours, minutes, seconds
		return {
			init() {
				this.event()
			},
			event() {
				setInterval(() => {
					this.setTime();
					document.querySelector(".hours").innerHTML = hours;
					document.querySelector(".minutes").innerHTML = minutes;
					document.querySelector(".seconds").innerHTML = seconds;
				}, 1000)
			},
			setTime() {
				let date = new Date();
				hours = date.getHours();
				minutes = date.getMinutes();
				seconds = date.getSeconds();
				if(seconds < 10) {
					seconds = "0" + seconds;
				}
				if(minutes < 10) {
					minutes = "0" + minutes;
				}
				if(hours < 10) {
					hours = "0" + hours;
				}
			}
		}

	}())
	getTime.init();

	import { api, request } from '../../api/index.js'
	import axios from 'axios'
	export default {
		methods: {
			fn: function() {
				this.$router.replace({
					name:'center'
				})
			},
			fn1: function() {
				this.$router.replace({
					name:'search'
				})
			},
			onScroll() {
				let top = document.documentElement.scrollTop;
				if(top > 300) {
					this.show = true
					return false
				} else {
					this.show = false
				}
			},
			toTop() {
				let top = document.documentElement.scrollTop;
				let timer = setInterval(function() {
					top -= 30
					if(top < 0) {
						top = 0;
						clearInterval(timer)
					}
					document.documentElement.scrollTop = top;
				}, 10)
			}

		},
		mounted() {
			window.addEventListener("scroll", this.onScroll)
			document.querySelector(".placed").addEventListener("click", this.toTop)
		},
		data() {
			return {
				navList: [],
				bannerList: [],
				list: [],
				show: false,
				sentimentList: [{
						Id: 0,
						picUrl: 'https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=330x330',
						message: '美国制造 除甲醛空气净化剂...',
						msgType: '爆品',
						msgTypeT: '限时购'
					},
					{
						Id: 1,
						picUrl: 'https://yanxuan.nosdn.127.net/48c97d6449ae2a2193d2dfc65517758d.png?imageView&quality=65&thumbnail=330x330',
						message: '男式精梳棉圆领短袖T恤衫',
						msgType: '爆品',
						msgTypeT: '限时购'
					},
					{
						Id: 2,
						picUrl: 'https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330',
						message: '全净皓齿变速式声波电动牙刷',
						msgType: '双品节特惠',
						msgTypeT: '限时购'
					}
				],
				hours: 0,
				minutes: 0,
				seconds: 0,
				limitList:[
				{
					Id:0,
					picUrl:'https://yanxuan.nosdn.127.net/9fa42b2e967ac449024d9723afd5f38a.png?imageView&thumbnail=216x216&quality=75',
					price:247,
					disPrice:369
				},
				{
					Id:1,
					picUrl:'https://yanxuan.nosdn.127.net/9d02106dc435e863fea9c9d7e27a06c5.png?imageView&thumbnail=216x216&quality=75',
					price:9.9,
					disPrice:12.9
				},
				{
					Id:2,
					picUrl:'https://yanxuan.nosdn.127.net/4808526f99e3e912a645dd2e4c5a20d0.png?imageView&thumbnail=216x216&quality=75',
					price:149,
					disPrice:199
				},
				{
					Id:3,
					picUrl:'https://yanxuan.nosdn.127.net/52b4876b561380e42ff5aa1342545523.png?imageView&thumbnail=216x216&quality=75',
					price:988,
					disPrice:1068
				},
				{
					Id:4,
					picUrl:'https://yanxuan.nosdn.127.net/67744653917b96ba89578882b83944a2.png?imageView&thumbnail=216x216&quality=75',
					price:159,
					disPrice:199
				},
				{
					Id:5,
					picUrl:'https://yanxuan.nosdn.127.net/6a4bae3cbf19f139c852583baa535e14.png?imageView&thumbnail=216x216&quality=75',
					price:247,
					disPrice:369
				},
				]
			}
		},
		created() {

			//			this.$toast.loading({
			//				message: '正在加载',
			//				loadingType: 'spinner'
			//			})
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
=======
import { api, request } from '../../api/index.js'
import axios from 'axios'
export default {
  methods: {
    fn: function () {
      location.href = '/#/login'
    },
    fn1: function () {
      location.href = '/#/search'
    },
    onScroll () {
      let top = document.documentElement.scrollTop
>>>>>>> 166d84d6e13a3ab05b8ffaf90f92e13640028654

      if (top > 500) {
        this.show = true
        return false
      } else {
        this.show = false
      }
    },
    toTop: function () {
      let top = document.documentElement.scrollTop
      let timer = setInterval(function () {
        top = top - 10
        // console.log(top)
        if (top < 0) {
          top = 0
          clearInterval(timer)
        }
      }, 10)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  data () {
    return {
      navList: [],
      bannerList: [],
      list: [],
      show: false
    }
  },
  created () {
    this.$toast.loading({
      message: '正在加载',
      loadingType: 'spinner'
    })
    // 获取导航菜单数据
    request.get(api.HOST + api.HOME_MENU_API).then(res => {
      let result = res.data
      this.navList = result.data
      console.log(this.navList)
    })
    // 获取首页轮播图数据
    request.get(api.HOST + api.HOME_BANNER_API).then(res => {
      let result = res.data
      this.bannerList = result.data
    })
    // 获取菜单数据
    request.get(api.HOST + api.HOME_CATE_API).then(res => {
      let result = res.data
      this.list = result.data.kingKongList
    })

    // 获取详细商品数据
    request.get(api.HOST + api.CATE_NAV_API).then(res => {
      let result = res.data
    })
  }
}
</script>
<style lang="less">
	@import '../../style/homepage.less';
</style>