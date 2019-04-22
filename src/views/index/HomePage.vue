<template>
	<div class="home" id="root">
		<div class="head">
			<h1>网易严选</h1>
			<van-search @search="fn1" placeholder="请输入搜索关键词" v-model="value" style="display: inline-block;width: 250px;"></van-search>
			<button class="btn" @click="fn">登录</button>
			<van-tabs>
				<van-tab v-for="index in nav" :title="index">
					
				</van-tab>
			</van-tabs>
		</div>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index" :height="100">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
		<van-row gutter="20" style="margin: 0 auto;color:#B4282D;line-height: 30px;background: #fff;">
			<van-col span="8">网易自营品牌</van-col>
			<van-col span="8">30天无忧退货</van-col>
			<van-col span="8">48小时快速退款</van-col>
		</van-row>
		<div style="background: #fff;">
			<van-row type="flex" justify="space-around">
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png">
					<p>居家生活</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/f90310e950469586307d8595d0ee9c81.png">
					<p>服饰鞋包</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png">
					<p>美食酒水</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png">
					<p>个户清洁</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/63682bd2df06963251b2715e20f98a75.png">
					<p>限时购</p>
				</van-col>
			</van-row>

			<van-row type="flex" justify="space-around">
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png">
					<p>母婴亲子</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png">
					<p>运动旅行</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png">
					<p>数码家电</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png">
					<p>全球特色</p>
				</van-col>
				<van-col span="6">
					<img src="https://yanxuan.nosdn.127.net/861a521a6f53e3399205f18daa23cddc.gif">
					<p>超级会员</p>
				</van-col>
			</van-row>
		</div>
		<div class="new_people">
			<span>新人专享</span>
		</div>
		<div class="new_person">
			<div class="left">
				<p>新人专享礼包</p>
				<div>
					<img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
				</div>
			</div>
			<div class="right">
				<div>
					<img src="https://yanxuan.nosdn.127.net/66bb680b4915107067a2c19aeccdb2bf.png?imageView&thumbnail=200x200&quality=75" />
				</div>
				<div>
					<img src="https://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png?imageView&thumbnail=200x200&quality=75" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			fn: function() {
				location.href = '/#/login'
			},
			fn1: function() {
				console.log(1)
			}
		},
		data() {
			return {
				images: [
					'https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/9bd608e6abafc44264977c2ef29d7c40.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/f7f7458cf89b32b8f98b5eb525cca105.png?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/75eeba1737888fd72d69a745f92d4490.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/ebf51b5850abd563cd64f07603b1a5e4.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/b111014e17fc1aeaea1dbb94eadbf9d8.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/f0f69e7b473124ac611a0a24bfaf7163.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/0b4c816c42af1b95372e17dc9d152000.jpg?imageView&quality=75&thumbnail=750x0'
				],
				nav:['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','全球特色']
			}
		}
	}
</script>
<style language="less">
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
	}
	
	.head h1 {
		font-weight: normal;
		font-size: 16px;
		display: inline-block;
		margin-left: 10px;
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
	}
	
	.van-tab span {
		font-size: 14px;
	}
	.nav ul {
		display: flex;
		justify-content: space-around;
		font-size: 12px;
		color: #B4282D;
		height: 30px;
		line-height: 30px;
	}
	
	.van-col {
		padding: 5px;
		box-sizing: border-box;
	}
	
	.van-col img {
		height: 60px;
		width: 60px;
	}
	
	.van-col p {
		text-align: center;
	}
	
	.new_people {
		text-align: center;
		background: #fff;
		margin-top: 10px;
		line-height: 50px;
	}
	
	.new_people span {
		font-size: 16px;
	}
	
	.new_people span:after {
		content: "— ";
	}
	
	.new_people span:before {
		content: "— ";
	}
	
	.new_person .left {
		display: block;
		background: #F9E9CF;
		width: 48%;
		float: left;
		color: #333;
	}
	
	.new_person .left p {
		padding: 10px 0 0 50px;
		font-size: 16px;
	}
	
	.new_person .right {
		float: left;
		width: 48%;
		background: #F9E9CF;
		color: #333;
	}
</style>