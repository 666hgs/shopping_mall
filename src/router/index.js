import Vue from 'vue'
import Router from 'vue-router'
import head from '../components/Header/head.vue'							//导入头部组件
import login from '../page/user/login.vue'
import mainuser from '../page/user/mainuser.vue'
import me from '../page/user/me.vue'
import addr from '../page/user/useraddr.vue'
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
			path: '/',									//默认路径
			// component: head						,//跳转的组件
			component: login
		},
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
  ]
})
