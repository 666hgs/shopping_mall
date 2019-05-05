<template>
	<div>
		<div id="head">
			<div id="logo_div">
				<a href="/" class="logo_a">
					<img class="logo_imga"  src="../../assets/icon/logo2.png"/>  
					<img class="logo_imgb"  src="../../assets/icon/logo1.png"/>
				</a>
			</div> 
			<div id="head_list_div"> 
				<ul class="head_list_ul">
					<li class="zhuanqu" id="zhuanqu1" @mouseenter="enter1()" @mouseleave="leave1()">彩妆专区<span>|</span>
					<div id="caizhuang" v-bind:class="czzq1==true?'block':'none'">
						<div class="xs_head">
							<ul class="xs_ul">
								<li class="xs_ul_li">
									<ul class="xs_ul_ul">
										<li>唇膏</li>
										<li>唇釉</li>
										<li>唇膏</li>
										<li>唇线笔</li>
									</ul>
								</li>
								<li class="xs_ul_li"><ul class="xs_ul_ul">
										<li>面部</li>
										<li>胭脂</li>
										<li>粉底液</li>
										<li>面部清洁</li>
										<li>底妆</li>
									</ul></li>
								<li class="xs_ul_li"><ul class="xs_ul_ul">
										<li>眼部</li>
										<li>眉影</li>
										<li>眉笔</li>
										<li>眼线</li>
										<li>睫毛膏</li>
									</ul></li>
							</ul>
						</div>
						<!--专区下面的三张图片-->
						<div class="xs_pic">
							<div class="xs_content">
								<div class="xs_li_content1">
									<a>
									<img src="../../assets/chungao/chungao1.png"  class="xs_li_img"/> 
									</a>
									<div class="xs_li_content_p">
									<p class="xs_li_bp">臻致丝绒哑光唇釉</p>
									<p class="xs_li_sp">The best seller lip groess</p>
									<button class="xs_li_button">点击购买</button>
									</div>
								</div>
								<div class="xs_li_content1">
										<a>
									<img src="../../assets/chungao/fendi1.png"  class="xs_li_img"/> 
									</a>
									<div class="xs_li_content_p">
									<p class="xs_li_bp">轻质精华粉底液</p>
									<p class="xs_li_sp">Discover the iconic silky.
									</p>
									<button class="xs_li_button">点击购买</button></div>
								</div>
							</div>
						</div>
					</div>
					
					
					</li>
					
					<li class="zhuanqu" id="zhuanqu2" @mouseenter="enter2()" @mouseleave="leave2()">护肤专区<span>|</span>
					<div id="hufu" v-bind:class="hfzq1==true?'block':'none'">
						<div class="xs_head">
							<ul class="xs_ul">
								<li class="xs_ul_li">
									<ul class="xs_ul_ul">
										<li>护肤系列</li>
										<li>基础清洁</li>
										<li>水类舒缓</li>
										<li>眼唇保养</li>
									</ul>
								</li>
								<li class="xs_ul_li"><ul class="xs_ul_ul">
										<li>光钥新肌肤</li>
										<li>基础清洁</li>
										<li>水类舒缓</li>
										<li>眼唇保养</li>
										<li>精华修护</li>
									</ul></li>
								<li class="xs_ul_li"><ul class="xs_ul_ul">
										<li>清洁防晒综合系列</li>
										<li>基础清洁</li>
										<li>面霜</li>
										<li>修颜面霜</li>
									</ul></li>
							</ul>
						</div>
						<!--专区下面的三张图片-->
						<div class="xs_pic">
							<div class="xs_content">
								<div class="xs_li_content1">
									<a>
									<img src="../../assets/chungao/hufu1.png"  class="xs_li_img"/> 
									</a>
									<div class="xs_li_content_p">
									<p class="xs_li_bp">黑钥匙至臻奂颜面霜</p>
									<p class="xs_li_sp">CREMA NERA</p>
									<p class="xs_li_sp">EXTRME SUPREME</p>
									<button class="xs_li_button">点击购买</button>
									</div>
								</div>
								<div class="xs_li_content1">
										<a>
									<img src="../../assets/chungao/hufu2.png"  class="xs_li_img"/> 
									</a>
									<div class="xs_li_content_p">
									<p class="xs_li_bp">黑钥匙至臻颜精华液</p>
									<p class="xs_li_sp">CREMA NERA EXTREMA
									</p>
									<button class="xs_li_button">点击购买</button></div>
								</div>
								<div class="xs_li_content1">
										<a>
									<img src="../../assets/chungao/hufu3.png"  class="xs_li_img"/> 
									</a>
								<div class="xs_li_content_p">
								<p class="xs_li_bp">光阴美肤修颜霜</p>
								<p class="xs_li_sp">CREMA NERA EXTREMA</p>
								<button class="xs_li_button">点击购买</button></div>
								</div>
							</div>
						</div>
					</div>
					</li>
					
					<li class="zhuanqu" id="zhuanqu3" @mouseenter="enter3()" @mouseleave="leave3()">香水专区
					<div id="xiangshui" v-bind:class="xszq1==true?'block':'none'">
						<div class="xs_head">
							<ul class="xs_ul">
								<li class="xs_ul_li">
									<ul class="xs_ul_ul">
										<li>女士香水系列</li>
										<li>阿玛尼新寄情香水</li>
										<li>阿玛尼印记香水</li>
										<li>阿玛尼挚爱香水</li>
									</ul>
								</li>
								<li class="xs_ul_li"><ul class="xs_ul_ul">
										<li>男士香水系列</li>
										<li>阿玛尼寄情香水</li>
										<li>阿玛尼印记香水</li>
										<li>阿玛尼印记运动香水</li>
										<li>阿玛尼本色香水</li>
									</ul></li>
								<li class="xs_ul_li"><ul class="xs_ul_ul">
										<li>明星系列</li>
										<li>寄情系列</li>
										<li>挚爱系列</li>
										<li>印记系列</li>
										<li>本色系列</li>
									</ul></li>
							</ul>
						</div>
						<!--专区下面的三张图片-->
						<div class="xs_pic">
							<div class="xs_content">
								<div class="xs_li_content1">
									<a>
									<img src="../../assets/chungao/xs1.png"  class="xs_li_img"/> 
									</a>
									<div class="xs_li_content_p">
									<p class="xs_li_bp">迷情挚爱女士香水</p>
									<p class="xs_li_sp">SI PASSIONE EDP</p>
									<button class="xs_li_button">点击购买</button>
									</div>
								</div>
								<div class="xs_li_content1">
										<a>
									<img src="../../assets/chungao/xs2.png"  class="xs_li_img"/> 
									</a>
									<div class="xs_li_content_p">
									<p class="xs_li_bp">寄情男士香水</p>
									<p class="xs_li_sp">ACQUA DI CIO 
									</p>
									<p class="xs_li_sp">POUR HOMME 
									</p>
									<button class="xs_li_button">点击购买</button></div>
								</div>
								
							</div>
						</div>
					</div>
					</li>
				</ul>
			</div> 
			 <div id="search">
				<input id="search_input" @focus="focus()" @blur="blur()"/>
				<i id="serch_img"></i>
				<div id="search_form" v-bind:class="search==true?'block':'none'">
					<ul> 
						<li>1</li>
						<li>1</li>
						<li>1</li>
					</ul>
				</div>
			</div> 
			<div id="head_right">
				<div id="dingdan" @click="dingdan()">
					<img src="../../assets/icon/dingdan1.png" id="dingdan1"/>
					</div>
					<div id="car">
					<img src="../../assets/icon/gouwuche1.png" id="car1"/>
				</div>
				<div id="person">
					<img src="../../assets/icon/geren1.png" id="person1"/>
				</div>
			</div>		
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	$(function() {
/* 	$("#search_input").focus(function(){
		
		$("#search_form").css("display","block");
	})
		$("#search_input").blur(function(){
		$("#search_form").css("display","none");
	})
	$("#zhuanqu1").mouseover(function(){
		$("#caizhuang").css("display","block");
	}) 
	$("#zhuanqu1").mouseout(function(){
		$("#caizhuang").css("display","none");
	}) 
		$("#zhuanqu2").mouseover(function(){
		$("#hufu").css("display","block");
	}) 
	$("#zhuanqu2").mouseout(function(){
		$("#hufu").css("display","none");
	}) 
		$("#zhuanqu3").mouseover(function(){
		$("#xiangshui").css("display","block");
	}) 
	$("#zhuanqu3").mouseout(function(){
		$("#xiangshui").css("display","none");
	}) */
	})
	const data={
		czzq1:false ,
		hfzq1:false ,
		xszq1:false ,
		search:false,
	}
	export default{
		name:'Head',
		data(){
			return data;
		},
		methods:{
			dingdan(){
				this.$router.replace("/order")
			},
			enter1(){
				this.czzq1=true;
			},
			enter2(){
				this.hfzq1=true;
			},
			enter3(){
				this.xszq1=true;
			},
			focus(){
				this.search=true;
			},
			leave1(){
				this.czzq1=false;
			},
			leave2(){
				this.hfzq1=false;
			},
			leave3(){
				this.xszq1=false;
			},
			blur(){
				this.search=false;
			}
		}
	}
</script>

<style>
	.none{
		display: none;
	}
	.block{
		display: block;
	}
*{
	padding: 0px;
	margin: 0px;
}
#container{
	width: 100%;
/* 	background-color: grey; */
}
/*头部左边两个图标盒子*/
#head{
	width: 100%;
	height: 90px;
	position: fixed;
/* 	background-color: #1B1B1B; */
	z-index: 10;
}
#head:hover{
	background-color: #1B1B1B ;
}
#logo_div{
	position: relative;
	display: inline-block;
	float: left;
	left:7.5% ;
	width: 22.7%;
	height: 100%;
}
.logo_a{
	position: relative;
	display: block;
	height: 100%;
}
.logo_imga{	
	width: 30%;
	height: 88%;
	
}
.logo_imgb{
	margin-top: 20px;
	width: 66%;
	height: 66%;
}
/* 头部 中间三个专区*/
#head_list_div{
	margin-left: 15%;
	float: left;
	height: 100%;
	width: 25.3%;
	
}
.head_list_ul{	
	height: 100%;
	/* color: #A9A9A9; */
	color: #fff;
	text-align: center;
	float: left;
	margin-top: 20px;
	list-style: none;
	width: 100%;
}
.zhuanqu{
	font-size: 24px;
	height: 50px;
	width: 33%;
	padding-top: 4%;
	height: 100%;
	float: left;
}
.head_list_ul>li:hover{
	color: darkgrey;
	cursor: pointer;
}
.head_list_ul>li>span{
	float: right;
	color: darkgrey;
}
/* 三个专区的下拉框 */
#xiangshui,#caizhuang,#hufu{
	position: absolute;
	width: 100%;
	height: 300px;
	left: 0;
	top: 90px;
	background-color: #F5F5F5;
}
/* 下拉框的上半部分 */
.xs_head{
	position: relative;
	height: 50%;
	width: 60%;
	left: 20%;
	padding-left: 15%;
}
.xs_ul{
	width: 100%;
	height: 100%;
	text-align: left;
}
.xs_ul>li{float: left;
	list-style: none;
}
.xs_ul_li{
	width: 20%;
	height: 100%;
}
.xs_ul_ul{
 padding-top: 8%; 
	height: 100%;
	width: 100%;
}
.xs_ul_ul>li{
	font-size: 12px;
	color: dimgrey;
	list-style: none;
	height: 15%;

	
}
.xs_ul_ul li:first-child{
	font-size: 1.125rem;
	margin-bottom: 3%;
	color: black;
}
/* 专区下拉框的 下半部分 */
.xs_pic{
	border-top: 1px solid darkgrey;
	position: relative;
	width: 100%;
	height: 49%;
	padding-left: 25%;
	padding-top: 2%;
}
.xs_content:{
	text-align: left;
	display: inherit;
	
}
.xs_li_content1{
	float: left;
	display: inherit;
	width: 20%;
	height: 100%;
	position: relative;
	
text-align: justify;
text-justify: newspaper;
word-break: break-all;
}

.xs_li_content_p{
	float: left;
	display: inline-block;
	width: 49%;
	height: 100px;
	margin-left: 3%;
}
.xs_li_img{
	float: left;
}
.xs_li_div{
	display: inline;
}
.xs_li_bp{
	color: black;
	font-size: 1rem;
}
.xs_li_sp{
	font-size: 12px;
	color: gray;
}
.xs_li_button{
	display: block;
	margin-top: 10%;
background-color: black;
width: 104px;
height: 36px;
color: #FFFFFF
}
/*头部搜索框*/
#search{
	float: left;
position: relative;
	width: 11.4%;
	height: 44.4%;
	margin-left: 5%;
	margin-top: 2%;
	
}
#search_input{
	width:77.7% ;
	height: 63%;
	padding-left: 10%;
	padding-right: 2.5%;
	border-radius: 15px;
	border: 4px solid white;
	outline:none;
	
}
#search_input:hover{
	cursor:text ;
	border-color: skyblue;
}
#serch_img{
	margin-top: 4%;
	margin-left: 2.5%;
	background-image: url(../../assets/icon/search.png);
	background-repeat: no-repeat;
	position: absolute;
	left: 0px;
	 background-position: 0px 0px; 
	width: 1rem;
	height: 1rem;
}
#search_form{
	position: absolute;
	background-color: white;
	left: 5%;
	width: 85%;
}

#search_form ul{
	list-style: none;
}
#search_form ul li{
	padding: 8px;
}
#search_form ul li:hover{
	background-color: lightgrey;
}

/*头部右边三个图标*/
#head_right{
	float: right;
	margin-top: 2%;
	position:  relative;
	width: 19%;
	height: 44.4%;
	text-align: center;
}
#head_right img:hover{
	cursor: pointer;
}
#dingdan{
	display: inline-block;
	width:23.3%;
	height: 55.5%;
}
#dingdan1:hover{
	content: url(../../assets/icon/dingdan2.png);
}
#car1:hover{
	content: url(../../assets/icon/gouwuche2.png);
}
#person1:hover{
	content: url(../../assets/icon/geren2.png);
}
#car{
	display: inline-block;
	width:23.3%;
	height: 55.5%;
}#person{
	display: inline-block;
	width:23.3%;
	height: 55.5%;
}
</style>
