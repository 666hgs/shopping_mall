<template>
	<div>
		<Head></Head>
		<div class="free"></div>
		<cart></cart>
		<Foot></Foot>
	</div>
	
</template>

<script>
	import Head from '../../components/Header/head.vue'
	import Foot from '../../components/Footer/foot.vue'
	import  cart from './cart.vue'
	export default{
		name:'cart_end',
		components:{
			Head,
			Foot,
			cart
		}
	}
</script>

<style scoped>
	/deep/ #head{
		background-color:#1B1B1B;
	}
	.free{
		width: 100%;
		height: 100px;
	}
</style>
