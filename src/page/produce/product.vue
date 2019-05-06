<template>
<div>
<abc></abc>
		
<div style="height: 1150px;padding-top:100px;">
    <div class="select" id="select">
    <div>
        <h3>{{className}}</h3>
        <ul>
            <li v-for="item in classList"><a :href="item.liurl">{{item.liname}}</a></li>
            
        </ul>
    </div>
  </div>
  <div id="main">

    <div class="produce" v-for="item in list">
    	<div></div>
    	<div>
            <a :href="item.href">
                <img src="../../assets/product/2.png" alt="无痕持妆粉底液">
            </a>
        </div>
    	<div>
            <a :href="item.href">{{item.productName}}</a>   
        </div>
    	<h3><a :href="item.href">{{item.productElsName}}</a></h3>
    	<div>
         <div style="width: 199px;height: 30px ;margin-left: auto;margin-right: auto;">
             <ul style="width: 100%;height: 100% ;">
                 <li class="producels" style="background-color:#f5d0b0"></li>
                 <li class="producels" style="background-color:#fbddbb"></li>
                 <li class="producels" style="background-color:#f9d9bd"></li>
                 <li class="producels" style="background-color:#f1c7a4"></li>
                 <li class="producels" style="background-color:#edc59e"></li>
                 <li class="producels" style="background-color:#ebc3a2"></li>
             </ul>
         </div>
        </div>
    	<div>
            <span>{{item.star}}</span>
        </div>
    	<div class="buy">
            
            <div class="price">￥{{item.price}}</div>
            <a :href="item.href" class="buynow">立即购买</a>
            
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
export default {
    components:{
        abc:head,
        footh:foot,
    },
    data(){
        return{
            show:true,
            //分类名
            className:'唇部',
            // 子分类
            classList:[
                {liname:'唇釉',liurl:'https://www.baidu.com'},
                {liname:'唇膏',liurl:'https://www.baidu.com'},
                {liname:'唇线笔',liurl:'https://www.baidu.com'}
            ],
            //产品列表
            list:[
                {productName:'无痕持妆粉底液',productElsName:'POWER FABRIC',price:580,star:'★★★★★',href:'https://www.baidu.com'},
                {productName:'轻垫精华粉底液（粉盒+粉芯）',productElsName:'POWER FABRIC',price:590,star:'★★★',href:'www.baidu.com'},
                {productName:'造型紧颜粉底液',productElsName:'POWER FABRIC',price:580,star:'★★★★★',href:'www.baidu.com'},
                {productName:'大师造型粉底乳',productElsName:'POWER FABRIC',price:580,star:'★★★★',href:'www.baidu.com'},
            ],
        }
        
    },


    methods:{
        
        blockHeight(event){
            
            /*event.target.style.height="26px";
            if(event.currentTarget.nextElementSibling!=null)
                event.currentTarget.nextElementSibling.style.height="12px";
            if(event.currentTarget.nextElementSibling.nextElementSibling!=null)
            event.currentTarget.nextElementSibling.nextElementSibling.style.height="12px";
        if(event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling!=null)
            event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.style.height="12px";
        if(event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling!=null)
            event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.height="12px";
        if(event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling!=null)
            event.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.height="12px";*/

        },
        
    }
       
}
</script>

<style>
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
