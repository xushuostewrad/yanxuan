<template>
	<div class="general">
		
		<van-tabs>
			<van-tab v-for="index in navList" :title="index"></van-tab>
		</van-tabs>
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
	</div>
</template>

<script>
	import { api, request } from '../../api/index.js'
	import axios from 'axios'
	export default {
		methods: {

		},
		data() {
			return {
				navList:['推荐','好货内部价','回购榜','晒单','开发者日记','达人','上新','HOME'],
				tabList: [],
				list: [],
				show: false
			}
		},
		created() {
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
		}

	}
</script>

<style lang="less">
	.general {
		ul {
			li {
				background: #fff;
				margin-bottom: 10px;
				.tit {
					margin-top: 10px;
					width: 90%;
					margin: 0 auto;
					position: relative;
					.author {
						display: inline-block;
						width: 30px;
						height: 30px;
						img {
							border-radius: 50%;
							width: 100%;
							height: 100%;
						}
					}
					.nickname {
						position: absolute;
						top: 20px;
						left: 40px;
					}
					h2 {
						text-align: center;
						font-size: 16px;
						font-weight: normal;
						margin: 10px;
					}
				}
				.phote {
					width: 90%;
					margin: 0 auto;
					img {
						border-radius: 5px;
					}
					p {
						padding: 10px 0;
					}
				}
				&:last-child {
					margin-bottom: 50px;
				}
			}
		}
	}
</style>