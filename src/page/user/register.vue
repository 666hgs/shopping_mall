<template>
	<div>
		<div class="re_top"></div>
		<div class="re_img_name">
			<img src="../../assets/account_header_image.jpg" />
		</div>
	</div>
</template>

<script>
	import login from './login.vue'

	// 报错就给组件加个名字
	export default {
		components: {
			login
		}
	}
</script>

<style>
	.re_top {
		width: 100%;
		height: 150px;
		border: solid #000 1px;
		background-color: #000000;
	}

	.re_img_name {
		width: 100%;
		height: 500px;
		border: solid red 1px;
	}

	.re_img_name img {
		
		position: relative;
		left: 50%;
		margin: 0 0 0 -640px;
		width: auto;
		display: block;
	}
</style>
