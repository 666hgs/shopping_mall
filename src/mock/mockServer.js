/**
 * 模拟mock
 */


import Mock from 'mockjs'
import Head from './head.json'
import Hot from './hot.json'
//返回接口

Mock.mock('/user/query_myself_2',Head.myself)					//头部导航接口
Mock.mock('/Msg/query_nav_msg',Head.navMsg)						//个人信息接口
Mock.mock('/main/hot',Hot.msg)									//热点商品