<template>
	<div>
		<button id="test" @click="test">aa</button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		apiAddress
	} from '@/request/api'; // 导入我们的api接口
	const data = {
		myself: []
	}
	export default {
		data() {
			return {
				data
			}
		},
		methods: {
			test: function() {
				apiAddress({

				}).
				then(res => {
					// 获取数据成功后的其他操作
					console.log(res)
					data.myself = res
				})
			}
		}
	}
</script>

<style>
</style>
