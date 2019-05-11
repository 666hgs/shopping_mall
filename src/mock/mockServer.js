/**
 * 模拟mock
 */


import Mock from 'mockjs'
import Head from './head.json'
import Hot from './hot.json'
import Order from './order.json'
import Commodity from './singerCom.json'
import Cart from './cart.json'
//返回接口

Mock.mock('/user/query_myself_2',Head.myself)					//头部导航接口
Mock.mock('/Msg/query_nav_msg',Head.navMsg)						//个人信息接口
Mock.mock('/main/hot',Hot.msg)									//热点商品
Mock.mock('/order/orderList',Order.orderList)					//个人订单列表
Mock.mock('/order/queryOrderAll',Order.All)						//查询总页码
Mock.mock('/Com/querySingerCom',Commodity.singerCom)	          //单个商品详情
Mock.mock('/Com/querySingerPer',Commodity.Singercosmetics)	          //彩妆商品详情
Mock.mock('/Com/addCartList',Cart.cart_info)	                  //购物车