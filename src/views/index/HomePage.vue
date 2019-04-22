<template>
	<div class="home">
		<div class="head">
			<h1>网易严选</h1>
			<input type="text" v-model="val" placeholder=""/>
		</div>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index" :height="100">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
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
				]
			}
		}
	}
</script>
<style type="text/css">
	* {
		margin: 0;
		padding: 0;
	}
	img {
		width: 100%;
		height: 185px;
	}
	.head h1 {
		font-weight: normal;
		font-size: 16px;
		display: inline-block;	
	}
</style>