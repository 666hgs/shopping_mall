import Vue from 'vue'
import Router from 'vue-router'
import head from '../components/Header/head.vue'							//导入头部组件
import login from '../page/user/login.vue'
import mainuser from '../page/user/mainuser.vue'
import me from '../page/user/me.vue'
import addr from '../page/user/useraddr.vue'
import  full_module from '../page/commodity_datails/full_module.vue'
import cart_end from '../page/shopping_cart/cart_end.vue'
import cart from '../page/shopping_cart/cart.vue'
import product from '../page/produce/product.vue'							//导入产品组件
import comment from '../page/produce/comment.vue'							//导入评论组件	
import main from '../page/main/main.vue'
import allOrder from '../page/order/allOrder.vue'
import KB from '../page/order/kongbai.vue'

Vue.use(Router)
/**
 * 全部路由  写在routes数组中，用逗号隔开
 * 记得在上面导入 要跳转的组件
 */
export default new Router({
	mode: 'history',
  routes: [
		//{ }写一个转发地址，如果要路由传参，参考vue官方文档
		{
			path: '/login',									//默认路径
			component: login						//跳转的组件
		},
		{
			path: '/index',									//默认路径
			component: mainuser						//跳转的组件
		},
		{
			path: '/me',									//默认路径
			component: me						//跳转的组件
		},
		{
			path: '/addr',									//默认路径
			component: addr						//跳转的组件
		},
		{
			path:'/',									//默认路径
			component:main						//跳转的组件
		},{
			path:'/head',
			component:head
		},{
			path:'/order',
			component:allOrder
		},{
			path:'/kongbai',
			component:KB
		},
		{
			path:'/product',									//默认路径
			component:product					//跳转的组件
		},
		{
			path:'/comment',									//默认路径
			component:comment					//跳转的组件
		},
			{
			  path: '/detail',
			  component: full_module
			},
			{	
			  path: '/cart',
			  component: cart_end
			}
  ]
})
