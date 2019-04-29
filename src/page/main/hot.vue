<template>
	<div>
		<div id="hot_sell">
			<ul class="hot_sell_ul">
				<li v-for="(value,index) in hotSellTitle" v-bind:class="isActive==index?'isActive':''" @click="Active(index)">
					<h2>{{value}}</h2>
				</li>
			</ul>
			<div class="hot_sell_content" v-for="(v,i) in msg" v-bind:class="i==isActive?'block':'none'">
				<transition-group name="hehe" >
				<div  v-for="(value,index) in v.imgList" class="hot_content" 
				v-show="(index>=begin&&index<end)"
			v-bind:class="(index>=begin&&index<end)?'inlineBlock':'none'" 
				v-bind:key="value.img">
					<!-- 		<div  > -->
					<div class="top_hot_content" @mouseleave="leave()">
						<a><img v-bind:src="value.img" @mouseenter="enter(index)"></a>
						<div class="tip_span" v-if="value.tip!=''"><span>{{value.tip}}</span></div>
						<div class="hide_tip" v-bind:class="index==isHover?'block':'none'">
							<div class="hide_tip_a"> 
								<a class="hide_tip_a_buy">点击购买</a>
								<a class="hide_tip_a_more">了解详情</a>
							</div>
						</div>
					</div>

					<div class="foot_hot_content">
						<div class="foot_content_title">
							<p>{{value.type}}</p>
						</div>
						<h3 class="foot_goods_name"><a>{{value.name}}</a></h3>
						<p class="foot_goods_function"><a>{{value.func}}</a></p>
						<div class="foot_goods_bottom">
							<div class="foot_goods_star">
								<i class="icon"></i>
							</div>
							<div class="foot_goods_money">
								<span>$ {{value.money}}</span>
							</div>
						</div>
					</div>

				</div></transition-group>
			
				
				<div class="foot_left_button" @click="Begin()">
					<i class="foot_icon"></i>
				</div>
				<div class="foot_right_button" @click="End()">
					<i class="foot_icon"></i>
				</div>
				
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import {getHot} from '../../request/api'
	const data = {
		hotSellTitle: ["春日护肤", "春日彩妆", "经典套装"], //热卖商品导航
		isActive: 0, //热点商品导航索引
		isHover: -1, //图片隐藏层
		/* imgList:["../../../static/images/hot/cz/cz5.png","../../../static/images/hot/cz/cz1.png",
				"../../../static/images/hot/cz/cz3.png","../../../static/images/hot/cz/cz2.png",
				"../../../static/images/hot/cz/cz6.png","../../../static/images/hot/cz/cz7.png",
				"../../../static/images/hot/cz/cz4.webp"], */
		begin: 0,
		end: 4,
		msg: [],
		/* {
			head: "春日护肤",
			imgList: [{
					img: "../../../static/images/hot/hf/1.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "爆款"
				},
				{
					img:"../../../static/images/hot/hf/2.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: ""
				},
				{
					img:"../../../static/images/hot/hf/3.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/hf/4.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/hf/5.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/hf/6.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/hf/7.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
			]
		}, {
			head: "春日彩妆",
			imgList: [{
					img:"../../../static/images/hot/cz/cz5.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				}, {
					img:"../../../static/images/hot/cz/cz1.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/cz/cz3.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				}, {
					img:"../../../static/images/hot/cz/cz2.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/cz/cz6.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				}, {
					img:"../../../static/images/hot/cz/cz7.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/cz/cz4.webp",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
			]
		}, {
			head: "春日香水",
			imgList: [{
					img: "../../../static/images/hot/xs/xs1.webp",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/xs/xs2.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},

				{
					img:"../../../static/images/hot/xs/xs3.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/xs/xs4.webp",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},

				{
					img:"../../../static/images/hot/xs/xs5.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},
				{
					img:"../../../static/images/hot/xs/xs6.png",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				},

				{
					img:"../../../static/images/hot/xs/xs7.webp",
					type: "香水",
					name: "男士香水",
					func: "迷人芳香",
					money: 899,
					tip: "热卖"
				}
			]
		} */

	}
	export default {
		data() {
			return data;
		},
		methods: {
			//点击热卖商品导航，显示下划线表示选中
			Active(index) {
				this.isActive = index
				this.begin=0;
				this.end=4;
			},
			//商品隐藏图层，离开消失
			leave() {
				this.isHover = -1;
			},
			enter(index) {
				this.isHover = index;
			},
			//热点商品左右按钮
			Begin() {
				if (this.begin == 0) {
					this.begin = 4;
					this.end = 8;
				} else {
					this.begin = 0;
					this.end = 4;
				}
			},
			End() {
				if (this.begin == 4) {
					this.begin = 0;
					this.end = 4;
				} else {
					this.begin = 4;
					this.end = 8;
				}
			}
		},mounted() {
			getHot().then(				
			res=>{
				console.log(this)
				this.msg=res 
			}).catch(err=>console.log(err));
		}
	}
</script>

<style>
     .hehe-enter,.hehe-leave-to{
            opacity: 0;
        }
        .hehe-enter-to,.hehe-leave{
            opacity: 1;
        }
        .hehe-enter-active,.hehe-leave-active{
            transition: all 1s;
        }
	/**
	 * 热点商品下层
	 */
	.foot_hot_content {
		text-align: center;
	}

	.foot_content_title {

		padding: 40px 40px 5px;
		height: 37px;
	}

	.foot_content_title p {
		line-height: 22px;
		font-size: 18px;
		color: #000;
		letter-spacing: 1px;
		margin: 0px;
	}

	.foot_goods_name {
		margin-bottom: 20px;
		min-height: 20px;
		font-size: 18px;
		letter-spacing: 1px;
		overflow: hidden;
	}

	.foot_goods_function {
		margin-bottom: 30px;
		color: darkgrey;
		overflow: hidden;
		font-size: 18px;
	}

	.foot_goods_bottom {
		position: relative;
	}

	.foot_goods_star {
		display: inline-block;
		padding-right: 0.625rem;
		position: relative;
		overflow: hidden;
		width: 85px;
		height: 11px;
		font-size: 0;
	}

	.foot_goods_star:after {
		display: block;
		position: absolute;
		right: 0;
		bottom: 0;
		content: '';
		width: 1px;
		height: 30px;
		background: #dadada;
	}

	.foot_goods_star i {
		background-image: url(../../assets/icon.png);
		background-position: 0 -190px;
		width: 85px;
		height: 11px;
		display: inline-block;
		font-style: normal !important;
		font-weight: 400;
	}

	.foot_goods_money {
		display: inline-block;
		padding-left: 0.625rem;
	}

	.foot_left_button {
		left: 0;
		margin-top: -74px;
		width: 22px;
		height: 62px;
		background-size: 12px 22px;
		position: absolute;
		top: 50%;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url(../../assets/left.svg);
	}

	.foot_right_button {
		right: 0;
		margin-top: -74px;
		width: 22px;
		height: 62px;
		background-size: 12px 22px;
		position: absolute;
		top: 50%;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url(../../assets/right.svg);
	}

	.foot_icon {}

	/**
	 * 热点商品内容
	 */
	.hot_content {
		position: relative;
		margin: 0 20px;
		width: 280px;
		display: inline-block;
	}

	.top_hot_content {
		display: inline-block;
		width: 100%;
		border: 1px solid darkgrey;
		background-color: lightgrey;
		box-sizing: border-box;
		position: relative;
	}

	.top_hot_content a img {
		width: 280px;
		height: 280px;
		vertical-align: middle;
	}

	.tip_span {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
	}

	.tip_span span {
		width: 60px;
		height: 30px;
		color: white;
		display: inline-block;
		background: #000;
		letter-spacing: .75px;
		text-align: center;
	}

	/**
	 * 图片隐藏层
	 */
	.hide_tip {
		position: absolute;
		z-index: 1;
		background-color: rgba(255, 255, 255, .55);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		white-space: nowrap;
		text-align: center;
	}

	.none {
		display: none;
	}

	.block {
		display: block;
	}

	.inlineBlock {
		display: inline-block;
	}

	.hide_tip_a {
		display: inline-block;
		overflow: auto;
		margin: auto;
		position: relative;
		top: 35%;
		left: 0;
		bottom: 0;
		right: 0;
	}

	.hide_tip_a_buy {
		width: 200px;
		height: 42px;
		background-color: #000;
		display: block;
		color: white;
		margin-bottom: 20px;
		vertical-align: middle;
		line-height: 40px;
		
	}

	.hide_tip_a_buy:hover {
		background-color: deeppink;
		transition-property: background-color;
		transition-duration: 500ms;
		  transition-timing-function: linear;
	}

	.hide_tip_a_more {
		width: 200px;
		background-color: white;
		display: block;
		border: 1px solid #000;
		height: 42px;
		line-height: 40px;
		vertical-align: middle;
	}


	#hot_sell {
		max-width: 1280px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50px;
		position: relative;
		padding: 0 15px;
		background-color: white;
	}

	/**
	 * 热点商品导航条
	 */
	.hot_sell_ul {
		list-style: none;
		padding: 60px 0px 56px;
		text-align: center;
	}

	.hot_sell_ul li {
		display: inline-block;
		padding: 0 30px;
	}

	.hot_sell_ul li h2 {
		display: block;
		cursor: pointer;
		font-size: 24px;
		letter-spacing: 2px;
		color: #000;
		font-weight: 500;
	}

	.hot_sell_ul li.isActive h2 {
		position: relative;
	}

	.hot_sell_ul li.isActive h2:after {
		display: block;
		position: absolute;
		bottom: -7px;
		content: '';
		width: 100%;
		height: 2px;
		background: #000;
	}
</style>
