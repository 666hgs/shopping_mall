<template>
	<div>
		<userhead></userhead>
		<div class="main_cont">
			<div class="main_cont_wish">

				<a href="#"><img src="../../assets/userimg/Account-round-standard-retina.jpg" /> <br />
					<span>心愿单<i style="margin-top: -10px;" class="layui-icon layui-icon-right"></i></span>
				</a>

				<p>收藏你所喜欢的单品</p>
			</div>
			<div class="main_cont_foot">
				<ul>
					<li>
						<div>
							<a>我的订单<i style="margin-top: -10px;" class="layui-icon layui-icon-right"></i></a>
							<p>管理和编辑您的订单</p>
						</div>
					</li>
					<li>
						<div>
							<a @click="me">我的账户<i style="margin-top: -10px;" class="layui-icon layui-icon-right"></i></a>
							<p>管理您的个人信息</p>
						</div>
					</li>
					<li>
						<div style="border: 0;">
							<a @click="addr">我的地址<i style="margin-top: -10px;" class="layui-icon layui-icon-right"></i></a>
							<p>管理您的订单地址</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
	
		
	import userhead from './userhead.vue'
	
	import {
		mapActions,
		mapGetters
	} from 'vuex'

	export default {
		components: {
			userhead: userhead,
		},
		
		computed: {
		     ...mapGetters(['userAll','user']) 						// 动态计算属性，相当于this.$store.getters.resturantName
		},
		
		methods: {
			me: function(){
				this.$router.replace("/me")
			},
			
			addr: function(){
				this.$router.replace("/addr")
			}
		}
	}
</script>
<style scoped>
	a p label h2 span {
		font-family: "FuturaLT-Book", "NotoSansCJKsc-Regular", "NotoSansCJKsc-Normal", "PingFangSC-Regular", "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", "Microsoft YaHei", sans-serif;
	}
	
	
	
	.main_cont {
		width: 98%;
		height: 809px;
		background-color: #e7e7e7;
		margin: 13px auto;
	}

	.main_cont_wish {
		width: 100%;
		height: 460px;
		border-bottom: solid 1px white;
		text-align: center;
		padding-top: 110px;
	}

	.main_cont_wish img {
		width: 50%;
		height: 252px;
		margin-bottom: 20px;
	}

	.main_cont_wish i {
		/* display: block; */
		padding-bottoms: 20px;
		margin-top: -20px;
		font-size: 8px;
	}

	.main_cont_wish span {
		margin-top: -10px;
	}

	.main_cont_wish p {
		width: 100%;
		text-align: center;
	}

	.main_cont_wish a {
		font-size: 30px;
		letter-spacing: 2px;
		line-height: 32px;
		margin-bottom: 12px;
		padding-left: 11px;
		padding-right: 19px;
		/* padding-tsop: 10px; */
		display: inline-block;
		font-weight: 200;
	}

	.main_cont_foot {
		width: 100%;
	}

	.main_cont_foot ul {
		width: 100%;
		/* float: left; */
	}

	.main_cont_foot ul li {
		width: 33.199%;
		height: 237px;	
		float: left;
		text-align: center;
	}

	.main_cont_foot ul li a {
		font-family: 'NotoSansCJKsc-Light';
		font-size: 18px;
		letter-spacing: 1.25px;
		line-height: 20px;
		margin-bottom: 22px;
		display: inline-block;
		position: relative;
		font-weight: 100;
	}
	
	.main_cont_foot ul li a i{
		font-size: 11px;
	}
	
	.main_cont_foot ul li div {
		width: 100%;
		height: 105px;
		cursor: pointer;
		margin-top: 50px; 
		padding-top: 18px;
		border-right: solid 1px white;
	}
</style>
