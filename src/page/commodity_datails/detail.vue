<template>
	<div class="layui-row">
	  <div class="layui-col-xs12 layui-col-sm12 layui-col-md12 detail_main">
		  <div class="layui-col-xs8 layui-col-sm18 layui-col-md8   detail">
			  <h2>产品详情 </h2>
			  <div class="imageSource">
				    <img :src="url" />
			  </div>
		  </div>
	  </div>
	</div>  
</template>

<script>
	export default{
		data(){
			return{
				images:[
					{  }
				],
				url:require("../../../static/images/commodity_datails/detail.jpg")
			}
		}
	}
</script>

<style>
	.detail_main{  /* 主要div */
		display: flex;
		justify-content: center;
	}
	.detail{   /* 图片所在容器 */
		padding: 0;
		text-align: center;
		margin: auto;
		height: auto;
		/* background: red; */
		margin-top: 6%;
		font-family: "Montserrat Light",sans-serif,"Microsoft Yahei";
		font-size: 22px;
		font-weight: bold;
    letter-spacing: 5px;
	}
	.imageSource{  /* 图片集合 */
		width: 100%;
		height: auto;
		margin-top: 5%;
		/* background: #009688; */
	}
</style>
