<template>
	<div></div>
</template>


<script>
	import {api,request} from '../../api/index.js'
	import axios from 'axios'
	export default {
		created(){
			request.get(api.HOST + api.USER_CHECK_LOGIN_API).then(res => {
				let result = res.data
				console.log(result)
			}).catch(error => {
				console.log(error)
			})
		}
	}
</script>