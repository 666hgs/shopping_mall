/**
 * 模拟mock
 */


import Mock from 'mockjs'
import Head from './head.json'
import Login from './login.json'
//返回接口

Mock.mock('/user/query_myself_2',Head.myself)					//头部导航接口
Mock.mock('/Msg/query_nav_msg',Head.navMsg)						//个人信息接口
Mock.mock('/user/login',Login.user)						//个人信息接口