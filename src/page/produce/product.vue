<template>
<div>
<abc></abc>
		
<div style="height: 1150px;padding-top:100px;">
    <div class="select" id="select">
    <div v-if="$route.query.p_id==1">
        <h3>唇部</h3>
        <ul>
            <li><a href="#">唇釉</a></li>
            <li><a href="#">唇膏</a></li>
            <li><a href="#">唇线笔</a></li>
        </ul>
    </div>
    <div v-if="$route.query.p_id==2">
        <h3>护肤系列</h3>
        <ul>
            <li><a href="#">基础清洁</a></li>
            <li><a href="#">水类舒缓</a></li>
            <li><a href="#">眼唇保养</a></li>
        </ul>
    </div>
    <div v-if="$route.query.p_id==3">
        <h3>香水</h3>
        <ul>
            <li><a href="#">阿玛尼新寄情香水</a></li>
            <li><a href="#">阿玛尼印记香水</a></li>
            <li><a href="#">阿玛尼挚爱香水</a></li>
        </ul>
    </div>
  </div>
  <div id="main">

    <div class="produce" v-for="(item,index) in productList" v-if="index<6">
    	<div></div>
    	<div>
            <a href="#" @click="toProductDetail($route.query.p_id,item.id)">
                <img :src="item.picture">
            </a>
        </div>
    	<div>
            <a href="#" @click="toProductDetail($route.query.p_id,item.id)">{{item.name}}</a>   
        </div>
    	<h3><a href="#" @click="toProductDetail($route.query.p_id,item.id)">{{item.engname}}</a></h3>
    	<div>
         <div style="width: 199px;height: 30px ;margin-left: auto;margin-right: auto;" v-if="$route.query.p_id==1">
             <ul style="width: 100%;height: 100% ;">
                 <li class="producels" v-for="(color,i) in item.color" v-if="i<6" :style="{backgroundColor:color}"></li>
             </ul>
         </div>
         <div style="width: 199px;height: 30px ;margin-left: auto;margin-right: auto;" v-if="$route.query.p_id==2">
             <span >{{item.capacity}}ml</span>
         </div>
         <div style="width: 199px;height: 30px ;margin-left: auto;margin-right: auto;"  v-if="$route.query.p_id==3">
             <span v-for="(cplist,index) in item.capacityPriceList" v-if="index==0">{{cplist.capacity}}ml</span>
         </div>
        </div>
    	<div>
            <span>★★★★</span>
        </div>
    	<div class="buy">
            <div class="price" v-if="$route.query.p_id!=3">
                ￥{{item.price}}
            </div>
            <div class="price" v-for="(cplist,index) in item.capacityPriceList" v-if="index==0&$route.query.p_id==3">
                ￥{{cplist.price}}
            </div>
            <a href="#" class="buynow" @click="toProductDetail($route.query.p_id,item.id)">立即购买</a>
            
        </div>
    	<div></div>
    </div>
    
    
 </div>
 </div>
<footh></footh>
</div>
</template>

<script>

import head from '../../components/Header/head.vue'
import foot from '../../components/Footer/foot.vue'        
import {queryCosmetics,querySkinCare,queryPerfume} from '../../request/api.js'
export default {
    components:{
        abc:head,
        footh:foot,
    },
    data(){
        return{
            productList:[]
        }
        
    },

   watch:{
        '$route':"queryProduct"
    },
    methods:{
        queryProduct(){
            let pid=this.$route.query.p_id
            var _this=this
            if(pid==1){
                queryCosmetics(pid).then(res => {
                    _this.productList = res;
                }).catch(err => console.log(err))    
            }
            if(pid==2){
                querySkinCare(pid).then(res => {
                    _this.productList = res;
                }).catch(err => console.log(err))    
            }
            if(pid==3){
                queryPerfume(pid).then(res => {
                    _this.productList = res;
                }).catch(err => console.log(err))    
            }
        } ,
        toProductDetail(p_id,id){
            this.$router.push({
                path:'/full_module',
                query:{
                    pro_id:p_id,//产品类型id
                    id:id//产品id
                }
            })
        }
    },
    mounted() {
        this.queryProduct(); //进入页面查询
    }    
       
}
</script>

<style scoped>
/deep/ #head{
    background-color:#1b1b1b;
}
.select{
        border-right: solid gray 1px;
        width: 18%;
        float: left;
        height: 100%
    }
    body a
    {color: black;
    text-decoration:none;     
    }
    .produce div ul li{
        float: left;
        text-align: center;
        margin-left: 1%;
    }
    .producels{
        width: 30px;
        height: 12px;
    }
    .produce div ul li:hover{
        height:26px;
    }
    .produce{
        float: left;
        width: 27%;
        overflow: hidden;
        margin: 0.1%;
    }
    .produce div img{
        width: 250px;
    }
    .produce div{
        text-align: center;
    }
    .produce div ul{
        padding-left: 0;
        margin-left: auto;
        margin-right: auto;
        list-style: none;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .produce h3{
        text-align: center;
        font-size: 12px;
        color: #666;
        font-weight: 400;
        max-height: 2.5em;
        min-height: 30px;
        overflow: hidden;
        max-width: 70%;
        margin: 10px auto;
    }
    #main{
        width: auto;
        height: auto;
    }
    .buy{
        margin-top: 10px;
        width: 196px;
         margin-left: auto;margin-right: auto;
    }
    #select li{
        list-style: none;
        padding: 3px;
        padding-left: 30px;
    }
    #select h3{
        padding: 6px ;
        padding-left: 10px;
    }
    #select li a{
        color: gray;
    }
    .price{
        padding: 7px;
        color: #fff;
        background: #464646;
        font-size: 14px; 
        height: 19px;
        width: 84px; 
        float: left;
    }
    .buynow{
        padding: 7px;
        color: #fff;
        background: #151515;
        font-size: 14px;
        height: 19px;
        width: 84px; 
        float: left;
    }
</style>
