<template>
	<div>
			<div id="container">
			<Head></Head>
			<Order></Order>
			<Foot></Foot>
		</div>
	</div>
</template>

<script>
		import Vue from 'vue'
	import Head from '../../components/Header/head.vue'
	import Foot from '../../components/Footer/foot.vue'
	import Order from './order.vue'
	export default{
		components:{
		Head,
		Foot,
		Order
		}
	}
</script>

<style>
		#main{
		position: relative;
		width: 100%;
		height: 100%;
		margin-bottom: 10px;
	}
	#head{
		background-color:#1B1B1B;
	}
</style>
