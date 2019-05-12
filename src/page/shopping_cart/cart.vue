<template>
<div class="layui-fluid"> 
	<div class="layui-row">
       <div class="layui-col-md12 cart">
		  <div class="layui-col-md11 cart_main "> <!-- rules=rows cellspacing=0 -->
			   <table class="cart_table" border="1"   rules=rows cellspacing=0>
				  <thead>
						<tr>
							<th class="Allchose"><input type="checkbox" @click="choseAll" ref="selectAllTop" class="checkbtn" />全选</th>
							<th colspan="2">商品信息</th>
							<th>单价</th>
							<th>数量</th>
							<th>金额</th>
							<th>备注</th>
							<th>操作</th>
						</tr> 
					</thead>
					<tbody >
						<tr v-for="(item,index) in cart_info"  :key="item.product_id" >
							<td><input type="checkbox" ref="choseSinger"  @click="selectSingle(index)" class="checkbtn" :value="item" v-model="selected"/></td>
							<td class="goodsImgTd"><img :src="item.picture" class="goodsImg" alt=""></td>
							<td class="goodsName">{{item.name}}</td>
							<td>¥{{item.price}}元</td>
							<td>{{item.number}}</td>
							<td>¥{{item.sum_price}}元</td>
							<td>{{item.notice}}</td>
							<td><button class="layui-btn  " @click="delCart(index)"><i class="layui-icon">&#xe640;</i> 删除</button></td>
						</tr>
					</tbody>
					</table>
			</div>
	 </div>
  </div>
	
	<div class="layui-row">
		<div class="layui-col-md12 cart_opper">
			<span class="sum">合计【消费总数量 {{totalNumber}}】 【消费总金额 ¥ {{totalPrice}}元】</span>
			<button class="layui-btn layui-btn-normal layui-btn-radius oper_btn txt_size" @click="delPart">批量删除</button>
			  <button class="layui-btn layui-btn-danger layui-btn-radius txt_size" @click="delAll">清空</button>
		</div>
		<div class="layui-col-md12 cart_opper " >
			<span class="sum">收货地址：广州市增城区</span>
			<button class="layui-btn layui-btn-danger layui-btn-radius txt_size">更改地址</button>
		</div>
		<div class="layui-col-md12 cart_opper space" >
			<button class="layui-btn layui-btn-normal   end_btn" @click="su">结算</button>
		</div>
	</div>
 </div>
</template>

<script>
	import {
		addToCart,queryCart,delCart,cleanCart,partCart
	} from '../../request/api.js'
	 import Stores from  '../../localStorage.js'
	  import {mapActions, mapGetters} from 'vuex'
	export default{
		 name:'cart',
		 data(){
			 return{
				   cart_info:[],
					 selected:[],//被选中的产品
					 curindex:-1,
					 key:[],
					 noDelProduct:[] /* 需要清除的产品 */
					
			 }
		 },
		 computed:{
			 totalNumber(){
				 return this.selected.reduce((a,b) =>parseInt(a)+parseInt(b.number),0)
			 },
			  totalPrice(){
			 	 return this.selected.reduce((a,b) =>parseFloat(a)+parseFloat(b.sum_price),0)
			 },
			 
			 ...mapGetters(['userAll','token']) 
		 },
		 methods:{
				loadCart(){ //页面加载时，加载购物车数据
					if(this.token.trim()==""||this.token==null){  //未登录
						    this.cart_info=Stores.fetch();
							this.selected=this.cart_info;
							this.$refs.selectAllTop.checked=true;
							for(let i=0;i<this.cart_info.length;i++){
									this.cart_info[i].isSelected=1					       
							}
					}else{//已登录
					   var   tempCart=[];
					   if(Stores.fetch().length!=0){
					   		for(let car in Stores.fetch()){
					   			 addToCart(car).then(res =>{
					   				   				   
					   			}).catch( err => { console.log(err)})
								Stores.remove();
					   	   }
						   console.log("本地商品更新成功")
					   		
					   }
					   let data={
						   u_id:this.userAll.u_id
					   }
						queryCart(data).then(res =>{  /* 合并本地localstorage */
					         this.cart_info=res;
					         this.selected=this.cart_info;
					         this.$refs.selectAllTop.checked=true;
					         for(let i=0;i<this.cart_info.length;i++){
					         		this.cart_info[i].isSelected=1					       
					         }
				       }).catch( err => { console.log(err)})
					}
				},
				delCart(index){   /* 删除单个产品 */
					if(this.token.trim()==""||this.token==null){  //未登录
						    this.cart_info.splice(index,1);  
								Stores.save( this.cart_info)
					}else{//已登录
					    let data={
							    product_id:this.cart_info[index].product_id,
					   			 u_id:this.userAll.u_id
					   }
						delCart(data).then(res =>{
								    this.cart_info.splice(index,1);  
						}).catch( err => { console.log(err)})
					}
				},                  
				choseAll(){   /* 全选 */
					if(this.selected.length!==Stores.fetch().length){  /* 全选 */
						this.$refs.choseSinger.checked=true;
						this.selected=this.cart_info;
						for(let i=0;i<this.cart_info.length;i++){
								this.cart_info[i].isSelected=1					       
						}
					}else{   /* 全不选 */
					       if(this.cart_info.length==1){
							   this.$refs.choseSinger.checked=true;
						   }
							this.selected=[];
							for(let i=0;i<this.cart_info.length;i++){
								this.cart_info[i].isSelected=0					       
							}
							
					}
				},
				selectSingle(index){  /* 选择单个产品 */
	                 		if(this.cart_info[index].isSelected!=1){
								this.cart_info[index].isSelected=1;
							}else{
								this.cart_info[index].isSelected=0;
							}
								console.log(this.cart_info[index].isSelected)
							for(let i=0;i<this.cart_info.length;i++){
								 if(this.cart_info[i].isSelected==0){
									 this.$refs.selectAllTop.checked=false;
									return
								 }		
								   this.$refs.selectAllTop.checked=true;
							}
							
				},
				delAll(){ /* 清空 */
					if(this.token.trim()==""||this.token==null){  //未登录  
					          this.cart_info=[];
								Stores.remove();
					}else{//已登录
					for(let i=0;i<this.cart_info.length;i++){
					      this.key.push(this.cart_info[i].product_id)
					}
					let data={
						 u_id:this.userAll.u_id,
						 key:this.key+''
					}
					cleanCart(data).then(res =>{
							 this.cart_info=[];
					}).catch( err => { console.log(err)})
						
					}
				},
				delPart(){ //清除部分
				this.noDelProduct.splice(0,this.noDelProduct.length)
					if(this.token.trim()==""||this.token==null){  //未登录  
                           for(let i=0;i<this.cart_info.length;i++){
							       if(this.cart_info[i].isSelected==1){
									    this.cart_info.splice(i,1); /* 被选中的 */
										i--;
								   }
						   }
						  Stores.save( this.cart_info)
					}else{//已登录
					for(let i=0;i<this.cart_info.length;i++){
							if(this.cart_info[i].isSelected==1){
		                         this.key.push(this.cart_info[i].product_id)
							}
					}
					let data={
						 u_id:this.userAll.u_id,
						 key:this.key+''
					}
						partCart(data).then(res =>{
							for(let i=0;i<this.cart_info.length;i++){
								if(this.cart_info[i].isSelected==1){
								this.cart_info.splice(i,1); /* 被选中的 */
									i--;
								}
							}
								
						}).catch( err => { console.log(err)})
						
					}
				},
				su(){
					/* let info={
						u_id:this.id,  //产品id       //标志位
						orderList:[
							{
								orderType :this.pro_id, //产品类型id
								orderID	:this.userAll.u_id,  //用户id
								goodsMoney:this.number*this.singerprice,
								goodsNumber: this.number,
								goodsDetail:this.singerCom.name,
								goodsDetail2:this.curCapacity,  //当前容量
								goodsImg:this.singerCom.picture,
								
							}	
						]
						  
					}
					insertOrder(info).then(res =>{
						  this.orders.orders_number=res.ordreNumber;
						   
					 }).catch( err => { console.log(err)}) */
				}
				
		 },
		 mounted(){
			 	/* this.addToCart(); */
				this.loadCart();
				
		 }
	}
	
	$(function(){
			var h=$(window).height();
			$('body').height(h);
			
		
	})	
	 
	 
	 
</script>


<style scoped>
/deep/	body{
		background: url(../../../static/images/cart/8.jpg);
		background-size: cover;
		

	}
	.layui-fluid{
		padding: 0;
	}
  .cart{
		/* background: red; */
		display: flex;
		justify-content: center;
		margin-bottom: 2%;
	}
	.cart_main{
		padding-top: 0;
		border: none;
		/* background: #00F7DE; */
		
	}
	.cart_opper{
		/* background:yellowgreen; */
		font-family:  "Comic Sans MS", cursive, "微软雅黑";
		font-size: 18px;
		color: black;
		 /* background: #f2f2f2; */
		
	}
	.cart_table{
		  width: 100%;
		  align-content: center;	
			font-family:  "Comic Sans MS", cursive, "微软雅黑";
      font-size: 18px;
			border-left-style: none;
			border-right-style: none;	
			 /* border-color: #e6e6e6; */
	}
	.cart_table tbody{  /* 数据背景色 */
		 text-align: center;
		 /* color: white; */
		 background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
	}
	.checkbtn{
		 zoom: 180%;
		 color: red;
		
		  
		 
	}
	th{
		padding-top: 2%;
		 padding-bottom:2%; 
		 background: #f2f2f2;
	}
	td{
		padding-top: 1%;
		 padding-bottom:1%; 
	}
	.Allchose{
		 padding-top: 0;
		  padding-bottom:0; 
	}
	.goodsImgTd{
		width: 20%;
	}
	.goodsImg{
		width: 60%;
		height: 30%;
	}
	.goodsName{
		text-align: left;
	}
	.txt_size{
		font-size: 17px;
	}
	.sum{
		margin-left: 10%;
	}
	.oper_btn{
		margin-left: 40%;
	}
	.end_btn{
		margin-left: 80%;
		font-size: 18px;
	}
	.space{
		margin-bottom: 3%;
	}
</style>
