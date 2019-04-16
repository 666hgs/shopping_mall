<template>
	<div>
		<div id="container">
			<Head></Head>
			<div id="main">
				<div id="son"></div>
			</div>
			<Foot></Foot>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Head from '../../components/Header/head.vue'
	import Foot from '../../components/Footer/foot.vue'
	
		$(function() {
		$(window).scroll(function() {
	        var scrolls = $(this).scrollTop();
	            if(scrolls>100){
	                $("#head").css('background-color','#1B1B1B');
	            }else{
					$("#head").css('background-color','');
				}
	        });
			})
	export default{
		components:{
		Head,
		Foot
		}
	}
</script>

<style scoped>
		#main{
		position: relative;
		width: 100%;
		height: 900px;
		margin-bottom: 10px;
	}
	#son{
			width: 100%;
		height: 800px;
	/* 	background-color: #1B1B1B; */
		background-image: url(../../assets/lunbo1.jpg);
		background-repeat: no-repeat;
	}
</style>
