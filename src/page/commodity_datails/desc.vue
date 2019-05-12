<template>
	<div class=" desc layui-row">
	  <div class="layui-col-xs8 layui-col-sm8 layui-col-md8 desc_left">
		 <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
			  <ul class="layui-tab-title">
				<li class="layui-this">描述</li>
				<li>使用方法</li>
			  </ul>
			  <div class="layui-tab-content">
					<div class="layui-tab-item layui-show">
					  <div class="layui-row">
						<div class="left_desc_area  layui-col-xs2 layui-col-sm2 layui-col-md2">
							<h4>特点</h4>
							<p>一款水精华质地的柔肤水，清洁肌肤的同时令肌肤水润柔滑</p>
							<h4>功效</h4>
							<p>温和去除表皮角质细胞，紧致毛孔，带走暗沉，令肌肤恢复柔亮光泽</p>
							<h4>类型</h4>
							<p>光钥新肌系列</p>
						</div>
						<div class="right_desc_area layui-col-xs7 layui-col-sm7 layui-col-md7">
							【柔肤科技】 <br>
							<b>三重亮颜柔肤科技：</b> <br/>
							- 角质层：	温和去除老废角质细胞。 <br/>
							- 表皮层：富含透明质酸，令肌肤即刻水润，锁水保湿，持久充盈饱满。 <br/>
							- 表皮底部：荔枝皮提取物、红景天萃取物、龙胆根萃取物，令肌肤平滑透亮。 <br/><br/>
							【使用效果】 <br/>
							即时功效：肌肤平滑水润有光泽，令后续护肤程序更易吸收，上妆更加服帖，妆容均匀通透有光泽。 <br/><br/>
							全天功效：肌肤整日清爽水润，肤色持久透亮。 <br/><br/>
							持续使用：肤质更柔滑细致，肤色更均匀。肌肤日渐焕发自然光泽，细纹明显减少。	 
						</div>
					  </div>
						
					
							
						
					</div>
				   <div class="layui-tab-item use_way">
					   <span>每日早晚，挤压适量柔肤水于化妆棉上，于清洁后的肌肤上由内至外轻柔画圈按摩，直至吸收。</span>
				   </div>
			  </div>
        </div>      
	  </div>
	  
	  
	  
	  <div class="layui-col-xs3 layui-col-sm3 layui-col-md3 desc_right">
       <h4>官网礼遇</h4>
       <ul >
         <li>
           <div class="icon_reassurance">
	        <img alt="" src="https://www.giorgioarmanibeauty.cn/on/demandware.static/-/Sites-armani-cn-Library/zh_CN/dwba3dba74/pdp-footer-00.png" title="">
           </div>
			<div class="icons_info">
			<h4>产品承诺</h4>
			<p>官方认证</p>
			</div>
         </li>

			<li>
			  <div class="icon_reassurance">
				<img  src="https://www.giorgioarmanibeauty.cn/on/demandware.static/-/Sites-armani-cn-Library/default/dw9b2205f2/footer/icons/products_icon.svg" title=""></div>
			  <div class="icons_info">
				<h4>活动惊喜</h4>
				<p>购买任意产品即享明星1日体验装2件组</p>
			  </div>
			</li>
			<li>
			  <div class="icon_reassurance">
				<img alt="" src="https://www.giorgioarmanibeauty.cn/on/demandware.static/-/Sites-armani-cn-Library/zh_CN/dweeb4fcac/pdp-footer-01.png" title=""></div>
			   <div class="icons_info">
				 <h4>支付方式</h4>
				 <p>支持货到付款和多种在线支付</p>
			   </div>
			</li>
       </ul>  
	  </div>  
	</div>
</template>

<script>
	//选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
  var element = layui.element;
  
});
export default{
	
	data(){
		return{
			
		}
	}
}
</script>

<style>
	.desc{   /* 描述div */
	display: inline-block;
    width: 100%;
	height: 500px;
    margin-top: 60px;
    clear: both;
    padding: 40px 0;
    background: #eee;
    box-sizing: border-box;
	font-family: montserrat semi bold,sans-serif,microsoft yahei;
	    color: #666;
	}
	.desc .desc_left{  /* 左边所在div */
		margin-left: 40px;
	}
	.layui-tab ul li{
		font-size: 16px;
	}
	.left_desc_area{  /* 左边划分出来的部分 */
		text-indent : 21px;
		font-size: 16px;
	}
	.right_desc_area{/* 左边划分出来的部分 */
		margin-left: 80px;
		font-size: 16px;
		line-height: 23px;
		padding-top: 0.9em;
	}
	h4{    
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
	}
	.use_way{ /* 使用方法所在div */
		font-size: 16px;
	}
	.use_way  span{   /* 使用方法文本格式 */
		display: block;
		margin-top: 4%;
	}
	.desc_right{  /* 右边的盒子 */
		font-size: 16px;
	}
	.icon_reassurance,.icons_info{  /* 图标 */
		margin-top: 4%;
		height: 80px;
	}
	.icon_reassurance{ /* 图标加文字所在的盒子 */
	display: flex;
	 justify-content: center;
	align-items: center;
	width: auto;
    float: left;
	/* background: red; */
	}
	.icon_reassurance img{  /* 图标 */
		width: 30px;
		height: 24px;
	}
	.icons_info{ /* 图标信息 */
    width: 82%;
    float: left;
	/* background: #00F7DE; */
	line-height: 45%;
	padding-top: 3%;
	margin-left: 9%;
	}
</style>
