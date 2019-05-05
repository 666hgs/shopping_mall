import Vue from 'vue'
import Router from 'vue-router'
import head from '../components/Header/head.vue'							//导入头部组件
import main from '../page/main/main.vue'
import allOrder from '../page/order/allOrder.vue'
Vue.use(Router)
/**
 * 全部路由  写在routes数组中，用逗号隔开
 * 记得在上面导入 要跳转的组件
 */
export default new Router({
  routes: [
		//{ }写一个转发地址，如果要路由传参，参考vue官方文档
	  {
			path:'/',									//默认路径
			component:main						//跳转的组件
		},{
			path:'/head',
			component:head
		},{
			path:'/order',
			component:allOrder
		}
		
		
  ]
})
