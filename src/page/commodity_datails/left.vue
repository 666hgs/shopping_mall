<template>
	 <div class="layui-col-xs6 layui-col-sm6 layui-col-md6  left">
		 <div class="imagcontext layui-col-xs8 layui-col-sm8 layui-col-md8">
			 <pic-zoom  :url="picture" :scale="2"></pic-zoom>
		 </div>
		
	</div>
	 
</template>

	<script type="text/javascript">
		import PicZoom from 'vue-piczoom'
		import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'left',
   data(){
	    return{
			Url:require('../../../static/images/commodity_datails/1.jpg'),
		}
   },
   computed: {
        ...mapGetters(['picture']) 						// 动态计算属性，相当于this.$store.getters.resturantName
   		},
    methods:{
		
	},
  components: {
    PicZoom
  }
}
		
	</script>

	
<style>
	.left{  /* 左边最大的盒子 */
	     height: 450px;
		/* background:#1E9FFF; */
		 display: flex;
		 justify-content: center;
		 align-items: center;
	}
	.imagcontext{  /* 图片容器 */
		 height: 85%;
		 margin: 0 auto;
		/* background: #00FF00; */
		 margin: auto;	  
	}
	/* 放大图片所在边框 */
	 .mouse-cover-canvas{
            position:fixed;
            left:100%;
            margin-top: 9.8%;
			margin-left: 0.8%;		        
        }
		/* 移动的黑色方块大小 */
		.imagcontext  .magnifier-box .mouse-cover{
			width: 120px  ! important;  
			height: 120px ! important;
		}
		
</style>
