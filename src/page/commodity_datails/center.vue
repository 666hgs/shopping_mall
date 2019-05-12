<template>
	 <div class="layui-row  center">
		 <!-- 移动：6/12 | 平板：6/12 | 桌面：4/12 -->
      <div class="layui-col-xs12 layui-col-sm12 layui-col-md12 " >
		  <div class="free"></div>
       <leftcontext></leftcontext>
			<rightcontext></rightcontext>
      </div>
	</div>
</template>

<script>
   import  left  from './left.vue'
	 import  right from  './right.vue'
	 export default{
		  components:{
				  leftcontext:left,
					 rightcontext:right,
					
			}
	 }
</script>

<style>
	#center{
		height: 450px;
		background: #00FFFF;
      padding: 0;
	}
	.free{
		width: 100%;
		height: 80px;
	}
</style>
