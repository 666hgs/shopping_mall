/**
 * 模拟mock
 */


import Mock from 'mockjs'
import Head from './head.json'
import Hot from './hot.json'
import Order from './order.json'
import Product from './product.json'
import Comment from './comment.json'
//返回接口

Mock.mock('/user/query_myself_2',Head.myself)					//头部导航接口
Mock.mock('/Msg/query_nav_msg',Head.navMsg)						//个人信息接口
Mock.mock('/main/hot',Hot.msg)									//热点商品
Mock.mock('/order/orderList',Order.orderList)					//个人订单列表
Mock.mock('/product/prodductList',Product.product)				//查询产品
Mock.mock('/product/comment',Comment.commentList)				//查询评论