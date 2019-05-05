/**
 * 模拟mock
 */


import Mock from 'mockjs'
import Head from './head.json'
import Hot from './hot.json'
import Order from './order.json'
//返回接口

Mock.mock('/user/query_myself_2',Head.myself)					//头部导航接口
Mock.mock('/Msg/query_nav_msg',Head.navMsg)						//个人信息接口
Mock.mock('/main/hot',Hot.msg)									//热点商品
Mock.mock('/order/orderList',Order.orderList)					//个人订单列表
Mock.mock('/order/queryOrderAll',Order.All)						//查询总页码