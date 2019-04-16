<template>
	<div>
		<div id="foot">
			<ul class="foot_ul">
				<li>
					<div id="first_li">
						<img class="foot_li_img" src="../../assets/icon/footer_logo.jpg"/>
						<p class="p_big">100%官方正品保证</p>
						<div class="dark_div">
						<p class="p_dark">乔治*阿玛尼，从时装到美妆，以大师匠心定义意式优雅。</p>
						<p class="p_dark">悠然信步人生，愈现真实完美</p>
					</div></div>
					</li>
				<li>
					<div class="foot_mid_div">
						<img src="../../assets/icon/icon--.png" />
						<p class="p_big_2">无忧购物</p>
						<br />
						<p class="p_dark_2">尊享官网礼物</p>
					</div>
				</li>
				<li>
					<div class="foot_mid_div">
						<img src="../../assets/icon/huoche.png" />
						<p class="p_big_2">臻品酥香</p>
						<br />
						<p class="p_dark_2">支持在线支付/货到付款</p>
					</div>
				</li>
				<li>
					<div class="foot_mid_div">
						<img src="../../assets/icon/shouji.png" />
						<p class="p_big_2">联系我们</p>
						<br />
						<p class="p_dark_2">123-456-7888</p>
					</div>
				</li>
			</ul>
			
		</div> 
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		
	}
</script>

<style scoped>
	#foot{
		width: 100%;
		height: 220px;
		background-color:whitesmoke;
	}
	.foot_ul{
		padding: 20px 0px;
		
		list-style: none;
		height: 200px;
	}
	
	.foot_ul li:last-child{
		border: 0;
	}
	.foot_ul li{
		padding: 10px 0px;
		float: left;
		border-right: 1px solid grey;
		height: 160px;
		width: 20%;
	}
	.foot_ul li:first-child{
		
		height: 160px;
		width: 39%;
	}
	#first_li{
		float: left;
		position: relative;
		width: 100%;
		padding-top: 20px;
		
	}
	.p_big{
		margin-left: 200px ;
		font-weight: 800;
	}
	.foot_li_img{
		position: absolute;
		left: 100px;
	}
	.dark_div{
		color: grey;
		margin-top: 20px;
		margin-left: 200px;
		width: 420px;
		height: 100px;
	}
	.p_big_2{
		font-weight: 800;
		}
	.foot_mid_div{
		padding-top: 20px;
		text-align: center;
	}
	.p_dark_2{
		color: grey;
	}
</style>
