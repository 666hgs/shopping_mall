<template>
	<div>
		<div class="main_bottom">
			<div class="left_main_bottom">
				<div class="left_main_bottom_first" @mouseenter="enter()">
					<picture>
						<source srcset="../../assets/bottom_1_1280.jpg" media="(max-width: 1280px)">
						<source srcset="../../assets/bottom_1_1920.jpg" media="(max-width:1920px)">
						<img srcset="../../assets/bottom_1_1280.jpg" />
					</picture>
				</div>
				<div class="left_main_bottom_second none" v-bind:class="flag==true?'block':'none'" @mouseleave="leave()">
					<div class="left_second_main">
						<p class="second_main_p">阿玛尼激情香水系列</p>
						<h3 class="second_main_h3">以自然之名 诠释全新愉悦</h3>
						<a class="bottom_btn_more">了解详情</a>
					</div>
				</div>
			</div>
			<div class="right_main_bottom">
				<div @mouseenter="enter2()" class="right_main_bottom_div">
					<picture>
						<source srcset="../../assets/bottom_2_1280.jpg" media="(min-width: 1280px) and (max-width: 1920px)" />
						<source srcset="../../assets/bottom_2_1920.jpg" media="(max-width:1920px)" />
						<img src="../../assets/bottom_2_1280.jpg" alt="default" />
					</picture>
					<div class="right_main_bottom_second none" v-bind:class="flag2==true?'block':'none'" @mouseleave="leave2()">
						<div class="right_second_main">
							<p class="second_main_p">激情女士香水</p>
							<h3 class="second_main_h3">水生茉莉之调，携手一抹柑橘清新</h3>
							<a class="bottom_btn_more">了解详情</a>
						</div>
					</div>
				</div>

				<div class="right_main_second_bottom">
					<div class="right_second_main">
						<p class="second_main_p">激情女士香水</p>
						<h3 class="second_main_h3">水生茉莉之调，携手一抹柑橘清新</h3>
						<a class="bottom_btn_more">了解详情</a>
					</div>
				</div>
			</div>
		</div>
	<div class="big_bottom">
		<picture>
			<source srcset="../../assets/bottom_3_960.jpg" media="(max-width:960px)"/>
			<source srcset="../../assets/bottom_3_1920.jpg" media="(max-width:1920px)"/>
			<img src="../../../build/logo.png" />
		</picture>
			<div class="big_bottom_son">
				<h4>DETAIL</h4>
				<h3>Far-Eastern Refinement Meets Italian Naturalness</h3>
				<h2>当东方优雅遇上意大利的自然主义</h2>
				<p>阅读时间:1分钟</p>
				<button>查看更多</button>
			</div>
		
	</div>
	</div>
</template>

<script>
	const data = {
		flag: false,
		flag2: false
	}
	export default {
		data() {
			return data;
		},
		methods: {
			enter() {
				this.flag = true;
			},
			leave() {
				this.flag = false;
			},
			enter2() {
				this.flag2 = true;
			},
			leave2() {
				this.flag2 = false;
			}
		}
	}
</script>

<style>
	/**
	 * 最底部大图片
	 */
	.big_bottom{
		width: 100%;
		height: auto;
		position: relative;	
		text-align: center;	
		color: white;
	}
	.big_bottom_son{
		position: absolute;
		top: 30%;
		left: 25%;
	}
	.big_bottom_son h4{
		line-height: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.0625rem;
	}
	.big_bottom_son h4:after{
		    content: '';
    background-color: #fff;
    display: block;
    width: 100px;
    margin: 15px auto 0;
    height: 1px;
    filter: alpha(opacity=40);
    opacity: .4;
	}
	.big_bottom_son h3{
		font-size: 1.875rem;
		letter-spacing: 0.0625rem;
		line-height: normal;
		font-weight: 400;
		margin-bottom: 0.625rem;
	}
	.big_bottom_son h2{
		font-size: 1.375rem;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 0.625rem;
		}
	.big_bottom_son P{
		color: #eee;
    font-family: montserrat ultra light,sans-serif,microsoft yahei;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
	}
	.big_bottom_son button{
		    font-size: 11px;
		padding: 12px 35px;
		letter-spacing: .1px;
		color: #fff;
		text-align: center;
		background-color: #000;
		border: 1px solid #000;
		vertical-align: middle;
		margin-top: 0.9375rem;
	}
	.big_bottom_son button:before{
	    padding-right: 15px;
    font-size: 14px;
      font-family: fontello;
    content: "";
	}
	
	
	
	
	
	.none {
		display: none;
	}

	.block {
		display: block;
	}

	.main_bottom {
		font-size: 0;
		width: 100%;
		height: 100%;
		margin-top: 20px;
		position: relative;
	}	
	.main_bottom img {
		width: 100%;
		height: 100%;
	}
	/**
	 * 隐藏层的P标签和H3标签，多处复用
	 */
		.second_main_p {
		font-size: 1.5rem;
		line-height: 1.875rem;
		font-weight: 500;
		color: black;
		letter-spacing: 0.0625rem;
	}
	
	.second_main_h3 {
		font-size: 0.875rem;
		line-height: 3rem;
		font-weight: 500;
		letter-spacing: 0.0625rem;
	}
/**
 * 左边板块
 */
	.left_main_bottom {
		width: 65%;
		height: 100%;
		position: relative;
		display: inline-block;
		vertical-align: top;
	}
	.left_main_bottom_first {
		display: inline-block;
		position: relative;
	}

	.left_main_bottom_second {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: #81C0AB;
		font-size: 0.75rem;
		text-align: center;
	}
	.left_second_main {
		position: relative;
		display: inline-block;
		overflow: hidden;
		top: 35%;
		margin: auto;
	}

/**
 * 了解详情按钮
 */
	.bottom_btn_more {
		width: 200px;
		height: 42px;
		background-color: #000;
		display: block;
		color: white;
		vertical-align: middle;
		line-height: 40px;
		margin-top: 0.3125rem;
		letter-spacing: 0.125rem;
	}
	/**
	 * 右边板块
	 */
	.right_main_bottom_div{
		width: auto;
		height: auto;
		position: relative;
	}
	.right_main_bottom {
		width: 35%;
		height: 100%;
		display: inline-block;
		position: relative;
		vertical-align: top;
	}
	.right_main_bottom_second {
		position: absolute;
		background-color: #81C0AB;
		text-align: center;
		width: 100%;
		height: 100%;
		right: 0;
		top: 0;
	}
/**
 * 右下角板块
 */
	.right_second_main {
		position: relative;
		top: 35%;
		display: inline-block;
		overflow: hidden;
		margin: auto;
		font-size: 0.75rem;

	}
	
	.right_main_second_bottom {
		margin-top: 20%;
		text-align: center;
		position: relative;
		width: 100%;
		height: 40%;
	}
</style>
