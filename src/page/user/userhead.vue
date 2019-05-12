<template>
	<div>
		<div id="main_top">
			<mainhead></mainhead>
			<div class="main_top_name">
				<h2>欢迎你，<span>{{userAll.u_lastname}}</span></h2>
			</div>
		</div>
	</div>
</template>

<script>
	import mainhead from '../../components/Header/head.vue'
	
	import {
		mapActions,
		mapGetters
	} from 'vuex'
	
	export default {
		components: {
			mainhead: mainhead,
		},
		
		computed: {
		     ...mapGetters(['userAll']) 						// 动态计算属性，相当于this.$store.getters.resturantName
		},
	}
</script>

<style scoped>
	a p label h2 span {
		font-family: "FuturaLT-Book", "NotoSansCJKsc-Regular", "NotoSansCJKsc-Normal", "PingFangSC-Regular", "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", "Microsoft YaHei", sans-serif;
	
	}
	
	#main_top {
		width: 100%;
		height: 330px;
		background-color: rgba(0, 0, 0, 0.3);
		background-image: url(../../assets/userimg/Account-standard-retina.jpg);
		background-repeat: round; 
	}
	
	.main_top_name {
		width: 100%;
		text-align: center;
		padding-top: 170px;
	}
	
	.main_top_name h2 {
		font-size: 32px;
		letter-spacing: 0.88px;
		line-height: 32px;
		margin-bottom: 28px;
		font-weight: lighter;
		font-family: 'NotoSansCJKsc-Light';
		color: #FFFFFF;
	}
</style>
