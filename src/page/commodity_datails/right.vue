<template>
	 <div class="layui-col-xs6 layui-col-sm6 layui-col-md6  right">
			 <h1  class="product_subtitle">{{singerCom.name}}</h1>
			 <h2 class="product_name">{{singerCom.engname}}</h2>
			 <div class="start">
				 <span v-for=" n  in  5" :key=n>
					 <i class="layui-icon layui-icon-rate-solid start_icon" ></i>
				 </span>
				<span class="comment">共{{sum_comment}}条评论</span>
			 </div>
			 <div class="excerpt_details">
				 <span>【柔肤科技】
                 三重亮颜柔肤科技：
              - 角质层：HEPES温和去除老废角质细胞。
                - 表皮<span>...</span></span>
				<a href="#" class="more_link" data-description-target=".product_tabs_holder">查看更多 &gt;</a>
			 </div>
			 <div class="capacitys" > <!-- 容量 -->
				 <div class=" capacity_ml"  :class="{'capacity_chage':curindex==index}"    @click="chose_capacity(index,$event)" v-for=" (item,index) in singerCom.capacity_arr" :key="item.capacity">{{item.capacity}}ml</div>
			 </div>
			 <div class="capacitys" >
				 <div class="btn">
					 <div class="number" >
					<input class="input_nunmber" oninput="value=value.replace(/[^\d]/g,'')"  type="text"  value="" v-model="number" />
					 </div>
					 <div class="add">	
						 <button class="add_btn layui-btn layui-btn-sm"  @click="add_number">
							<i class="layui-icon">&#xe654;</i>
						  </button>
					 </div>
				 </div>
				<div class="btn price" >¥{{number*singerprice}}</div>
			 </div>
			  <div class="capacitys" >
				    <button class=" btn layui-btn  layui-btn-radius add_car" @click="submit_order">支付</button>
					  <button class=" btn layui-btn layui-btn-normal layui-btn-radius add_car" @click="addCart">加入购物车</button>
			  </div>
			  <div id="ver_order" :class="hid==0?'ver_hid':'ver_show'">
				  <div class="order_tip"><h3>亲，请核对订单信息</h3></div>
				  <p class="order_title"><span>订单号:</span><span>{{orders.orders_number}}</span></p>
				  <p class="order_title"><span>姓名:</span><span>hackerQ</span></p>
				  <p class="order_title"><span>手机号码:</span><span>110</span></p>
				  <p class="order_title"><span>地址:</span><span>呵呵</span></p>
				  <p class="order_title">备注：fuck</p>
				  <p class="order_sum">共{{number}}件商品，合计¥{{number*singerprice}}</p>
				  
					 <div class="order_btn">
						<button class=" layui-btn  layui-btn-radius " >支付</button>
						<button class="  layui-btn layui-btn-normal layui-btn-radius " @click="order_cancel">取消</button>
					  </div>
					  
			  </div>
		
	</div>
</template>

<script>
	import {
		queryCommodity
	} from '../../request/api.js'
	 import {mapActions, mapGetters} from 'vuex'
	 import Stores from  '../../localStorage.js'
	export default{
		name:'right',
		data(){
			return{
				number:1,
				curindex:-1,
				singerprice:0,
				orders:{
					orders_number:'20190504252',
					name:'hackrQ',
					phone_number:110,
					address:'广州'
				},
				sum_comment:6,
				hid:0,
				curCapacity:0,
				curColor:'',
				u_id:1,
               singerCom:[],
			   token:'',
			   product_id:'',
			   "id":1,
			   "pro_id":3,
			   /* trolleys:[] */  /* 购物车测试数组 */
			}
		},
		/* computed: {
		     ...mapGetters(['token']) 						//token
				}, */
		methods:{
			...mapActions(
				['getPicture','getName']							//下面会调用
			),
			 chose_capacity(index,event){
				this.sum_price=this.singerCom.capacity_arr[index].prices*this.number;
				 this.curindex=index;
				 this.singerprice=this.singerCom.capacity_arr[index].prices;
				 this.curCapacity= parseInt( event.currentTarget.innerHTML.replace("ml",""))  ; //获取迭代选中容量值            
				 if(this.number>=this.singerCom.capacity_arr[index].restnumber){ /* 切换容量的最大值库存 */
				 	this.number=this.singerCom.capacity_arr[index].restnumber;
				 }
			 },
			 add_number(){  /* 增加购买数量 */
				 this.number=parseInt(this.number) +1;
				 if(this.number>=this.singerCom.capacity_arr[this.curindex].restnumber){
					 layer.alert('没有更多了', {icon: 5});
					 this.number=this.singerCom.capacity_arr[this.curindex].restnumber;
				 }
			 },
			 submit_order(){
				 Stores.remove();
				 this.hid=1;
				
			 },
			 order_cancel(){
				 this.hid=0; 
			 },
			 querySingerCom(){ /* 查询单个商品 */
				 queryCommodity(1).then(res =>{
					  this.singerCom=res;
					  this.getPicture(this.singerCom.picture);
					  this.getName(this.singerCom.name);
					   this.singerprice=this.singerCom.capacity_arr[0].prices; //数据初始化
					   
				 }).catch( err => { console.log(err)})
			 },
			 addCart(){  //查询用户状态
			     if(this.curindex==-1){
					 layui.use('layer', function(){
                        var layer = layui.layer;
                        layer.msg('请选择产品容量');
                     }); 
					  return;
				 }
				 if(this.token.trim()==""||this.token==null){ //未登录将数据存localstorage
				    let trolleys=  Stores.fetch();
					/* let trolleys=this.trolleys;  测试代码
					console.log(this.curCapacity) */
				    let  trolley=trolleys.find( value => 
						value.id==this.id  &&value.capacity==this.curCapacity ) //标志位
					let sum=this.number*this.singerprice
					
					let ids=this.id;   //当前产品id         //标志位
		            let pro_ids=this.pro_id  ///获取当前产品类型
					 if(pro_ids==1){  //彩妆类
                       this.product_id=ids.toString()+this.curColor;  //id加颜色生成唯一主键
                     }else if(pro_ids==2){  //护肤类
                       this.product_id=ids.toString();  //id生成唯一主键
                      }else if(pro_ids==3){  //香水类
                       this.product_id=ids.toString()+this.curCapacity.toString();//id加容量生成唯一主键
                    }
					
					if(trolley){  /* 购物车已存在当前产品 */
					  	 trolley.number+=parseInt(this.number)
						 trolley.sum_price+=sum;
					}
					 else{  /* 购物车不存在当前产品 */
						trolley ={
							 product_id:this.product_id,  
							 id:this.id,  //产品id       //标志位
							 pro_id:this.pro_id, //产品类型id
							 u_id:this.u_id,  //用户id
							 capacity:this.curCapacity,  //当前容量
							 picture:this.singerCom.picture,
							 name:this.singerCom.name,
							 price:this.singerprice,
							 number: this.number,
							 sum_price:sum,
							 notice: "人生恰似一场修行",
							 isSelected:1  /* 默认被选中 */
						}
						trolleys.push(trolley);
					 }
					Stores.save(trolleys); 
					 layui.use('layer', function(){
                        var layer = layui.layer;
                       layer.msg('商品添加成功');
                     });  
					  
				 }else{/* 将数据返回后台存redis */
				   let cart ={
				      	 product_id:this.product_id,
				      	 id:this.id,  //产品id     //标志位
				      	 pro_id:this.pro_id, //产品类型id
				      	 u_id:this.u_id,  //用户id
				      	 capacity:this.curCapacity,  //当前容量
				      	 picture:this.singerCom.picture,
				      	 name:this.singerCom.name,
				      	 price:this.singerprice,
				      	 number: this.number,
				      	 sum_price:sum,
				      	 notice: "人生恰似一场修行",
				      	 isSelected:1  /* 默认被选中 */
				      }
					   addCart(cart).then(res =>{
					  	   if(res==1){
							    layui.use('layer', function(){
							      var layer = layui.layer;
							     layer.msg('商品添加成功');
							   }); 
						   }
					  					   
					  }).catch( err => { console.log(err)})
					  
				 }
			 }
			 
		},
		mounted(){
			this.querySingerCom();
		}
		
   }
</script>

<style>
	.right{ /* 右边最大的容器 */
			 height: 450px;
			 /* background: #5FB878; */
			 font-family: "微软雅黑";
	}
	.product_subtitle{ /* 中文名字 */
		font-weight: 400;
        text-transform: uppercase;
        margin: 0;
        font-size: 24px;
	}
	.product_name{  /* 英文名字 */
	font-family: montserrat ultra light,sans-serif,microsoft yahei;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 18px;
    color: #666;
    margin: 10px 0 0;
	}
	.start{  /* 星级 容器*/
		width: 80%;
		height: 80px;
		/* background: #C6E746; */
		 display: flex;
		align-items: center;
	}
	.start .start_icon,.start .comment{  /* 星级和评论字体共同属性 */
		font-size: 16px;
		letter-spacing:6px;
	}
	.start .start_icon{  /* 星级图标 */
		color: #000;
	}
	.start .comment{ /* 评论容器 */
       color: #666;
	   letter-spacing:3px;
	   margin-left: 5%;
	}
	.excerpt_details{  /* 描述细节盒子 */
		width: 80%;
		height: 60px;
		/* background: yellow; */
	display: inline-block;
    color: #000;
    font-size: 16px;
	font-family: "微软雅黑";
	text-indent : 21px;
	}
	.capacitys{ /* 容量所在的div */
		width: 90%;
		height: 45px;
		/* background: red; */
		 display: flex;
		justify-content:flex-start;
		align-items: center;
		margin-bottom: 5%;
		font-size: 18px;
	}
	.capacitys .capacity_ml{  /* 单个容量div */
		width: 25%;
		height: 45px;
		/* background: #00FF00; */
		float: left;
		margin-right:4%;
		text-align: center;
		line-height: 45px;
		padding-left: 10px;
		box-sizing: border-box;
		font-size: 18px;
		border: 1px solid #8f6666;
		cursor:pointer;
	
	}
	.capacitys .btn{   /* 按钮的公共布局 */
		width: 25%;
		height: 45px;
		margin-right:4%;
		font-size: 18px;
	}
	.capacitys .price{  /* 价格div */
		text-align: center;
		line-height: 45px;
		color: #8f6666;
		border: 1px solid #8f6666;
		
	}
	.number{     /* 输入框所在容器 */
		width: 60%;
		height: 45px;
		float: left;
		background: greenyellow;
		text-align: center;
		line-height: 45px;
		font-size: 18px;
		border: 1px solid #8f6666;
		padding: 0;
	}
	.input_nunmber{ /* 输入框的数字 */
		 width: 100%;
		 height: 45px;
		 float: left;
		 border-color: transparent;
		 text-align: center;
		 color: #8f6666;
	}
	.add{   /* 增加按钮所在容器 */
		width: 38%;
		height: 45px;
		float: left;
		background: beige;
		border-color: transparent;
	}
	.add_btn{   /* 增加按钮 */
		width: 100%;
		height: 100%;
	}
	.add_car{     /* 支付 加入购物车公共样式 */
		color: black;
	}
	.capacity_chage{  /* 容量div样式变化 */
		background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;	
 color: white;
	}
	.price{   /* 价格 */
		cursor: help;
	}
	#ver_order{   /* 订单所在div */
		font-size: 18px;
		width: 50%;
		height: 260px;
		background: #ffffff;
		font-family:  "Comic Sans MS", cursive, "微软雅黑";
		position: relative;
		left: -20%;
		top:-80%;
		border: 1px solid #d8d8d8;
	}
	 .ver_show{
		opacity: 1;
		z-index: 0;
	 }
	 .ver_hid{
		 opacity: 0;
		 z-index: -10;
	 }
	 .order_tip{
		 background: #f8f8f8;
		 padding-top: 1%;
		 padding-bottom: 1%;
	 }
 .order_title{ /* 订单标题 */
	 margin-left: 24%;
	 margin-bottom: 0.8%;
	
 }
 .order_sum{   /* 订单统计 */
	 margin-top: 2%;
	 text-align: center;
 }
 .order_btn{  /* 订单按钮 */
	 width: 100%;
	 height: 50px;
	 /* background: red; */
	 display: flex;
	 margin-top: 1%;
	display: flex;
	 justify-content: center;
	 align-items: center;
 }
  #ver_order .layui-btn{  /* 订单按钮样式 */
	   font-size: 16px;
  }
</style>
