/**
 * 模拟mock
 */


import Mock from 'mockjs'
import Head from './head.json'
import Login from './login.json'
import Hot from './hot.json'
import Order from './order.json'

import Commodity from './singerCom.json'
import Cart from './cart.json'
import Product from './product.json'
import Comment from './comment.json'
import Perfume from './perfume.json'
import SkinCare from './skinCare.json'
import AddComRes from './addComRes.json'

//返回接口

Mock.mock('/user/query_myself_2',Head.myself)					//头部导航接口
Mock.mock('/Msg/query_nav_msg',Head.navMsg)						//个人信息接口
Mock.mock('/user/login',Login.user)						//个人信息接口
Mock.mock('/main/hot',Hot.msg)									//热点商品
Mock.mock('/order/orderList',Order.orderList)					//个人订单列表
Mock.mock('/order/queryOrderAll',Order.All)						//查询总页码
Mock.mock('/Com/querySingerCom',Commodity.singerCom)	          //单个商品详情
Mock.mock('/Com/querySingerPer',Commodity.Singercosmetics)	          //彩妆商品详情
Mock.mock('/Com/addCartList',Cart.cart_info)	                  //购物车
Mock.mock('/cosmetics/cosmeticsList',Product.productList)				//查询产品
Mock.mock('/product/comment',Comment.commentList)				//查询评论
Mock.mock('/perfume/perfumeList',Perfume.productList)			//查询香水产品
Mock.mock('/skinCare/skinCareList',SkinCare.productList)		//查询护肤产品
Mock.mock('/comment/addComment',AddComRes.addComMsg)		//添加评论

