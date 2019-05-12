<template>
	<div>
		<div id="container">
			<Head></Head>
			<div id="main">
				<Vd></Vd>
			</div>
			<Hot></Hot>
			<Bottom></Bottom>
			<Foot></Foot>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Head from '../../components/Header/head.vue'
	import Foot from '../../components/Footer/foot.vue'
	import Vd from './video.vue'
	import Hot from './hot.vue'
	import Bottom from './bottom.vue'
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
		Foot,
		Vd,					//背景动画
		Hot,
		Bottom
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
</style>
