<template>
<div>
<abc></abc>
		
<div style="height: 1150px;padding-top:100px;">
    <div class="select" id="select">
    <div>
        <h3>{{product.className}}</h3>
        <ul>
            <li v-for="item in product.classList"><a :href="item.liurl">{{item.liname}}</a></li>
            
        </ul>
    </div>
  </div>
  <div id="main">

    <div class="produce" v-for="item in product.productList">
    	<div></div>
    	<div>
            <a :href="'product/'+item.id">
                <img src="../../assets/product/2.png" alt="无痕持妆粉底液">
            </a>
        </div>
    	<div>
            <a :href="'product/'+item.id">{{item.name}}</a>   
        </div>
    	<h3><a :href="'product/'+item.id">{{item.engname}}</a></h3>
    	<div>
         <div style="width: 199px;height: 30px ;margin-left: auto;margin-right: auto;">
             <ul style="width: 100%;height: 100% ;">
                 <li class="producels" v-for="color in item.color" :style="{backgroundColor:color}"></li>
             </ul>
         </div>
        </div>
    	<div>
            <span>★★★★</span>
        </div>
    	<div class="buy">
            
            <div class="price">￥{{item.price}}</div>
            <a :href="'product/'+item.id" class="buynow">立即购买</a>
            
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
import {queryProduct} from '../../request/api.js'
export default {
    components:{
        abc:head,
        footh:foot,
    },
    data(){
        return{
            product:{}
        }
        
    },


    methods:{
        queryProduct(pid){
            queryProduct(pid).then(res => {
                this.product = res;
            }).catch(err => console.log(err))    
        } 
    },
    mounted() {
        this.queryProduct(1); //进入页面查询
    }    
       
}
</script>

<style>
#head{
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
