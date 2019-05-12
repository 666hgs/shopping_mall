<template>
	<div class="layui-fluid  vessel" >
		<Head></Head>
		<div class="free"></div>
		<centercontext></centercontext>
		<descContext></descContext>
		<detailContext></detailContext>
		<comment></comment>
		<Foot></Foot>
	</div>
	
</template>

<script>
	import Head from '../../components/Header/head.vue'
	import Foot from '../../components/Footer/foot.vue'
	import center  from './center.vue'
	import  desc  from './desc.vue'
	import  comment from '../produce/comment.vue'
	import  detail  from './detail.vue'
	
	export default{
		components: {
			centercontext:center,
			descContext:desc,
			detailContext:detail,
			comment,
			Head,
			Foot
		},
	}
</script>

<style scoped>
	/deep/ #head{
		background-color:#1B1B1B;
	}
	.free{
		width: 100%;
		height: 200px;
	}
 .vessel{
	
 }
 .layui-fluid{
	 padding: 0;
 }
 
</style>
