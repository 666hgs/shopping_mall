npm 命令如果本地安装了淘宝镜像可以直接用 cnpm替换
git下载项目后  本地npm install 或者cnpm install
安装完后  直接npm run dev  运行项目

文件目录说明: 只在src目录下开发，动态图片(数据库存放路径的图片)存放在static/images下，静态图片（例如头部导航图标）直接存放在src/assets中

├─assets																			//存放静态图片
├─components																		//公用组件(例如头部导航，尾部)
│  └─Header						
│          head.vue
│          
├─config																		--	
│      bus.js																		//特殊情况下 父子传参才需要用到（一般不用）
│      env.js																		//忽略这个			
│      
├─mock																			--- 模拟后端数据(开发前端时后端接口还没写好可以在这里模拟数据)
│      head.json   																	//Json数据，按照自己需求定义数据结构
├	   mockServer.js																//按照demo
│      
├─page																			---   其他组件（基本是在这个文件夹下开发的）
│  ├─login																			//登录组件，在这个目录下新建login.vue开发登录界面
│  └─main																			//主页，同上
|  └─....																			//每开发一个模块 新建一个目录
├─request																		---   封装了ajax请求	
│      api.js																		// ajax调用接口，写异步请求时现在这里注册接口名					
│      http.js																		// 封装了ajax请求，一些错误响应码处理 后期统一填写
│      
├─router																		---   路由转发
│      index.js																		//  照着demo写就好了，
│      
└─store																			---vuex全局变量管理，相当于cookies，存放用户数据等
|       actions.js																	
|        getters.js																	
|        index.js																	//全局变量 全部声明在 state数组中
|        mutations.js															
├─  App.vue																		---   入口
│   main.js																		---  全局公用Js 

 
 
 vuex 的三个步骤  参考下官方文档
 
 页面中引入 VUEX 全局变量
 import {mapActions, mapGetters} from 'vuex'
 在method中调用
 method:{
	 ...mapActions(
	 	['query_nav_msg','query_user']							//下面会调用
	 ),
	 login:function(){											//登录
		 异步接口名({
			 传参(用户名密码)
		 }).then(res => {                 						//登录成功后，把用户信息存入vuex
				this.query_nav_msg(res.data)					//执行vuex三个步骤中的action,action内部调用mutation更新全局变量
				})
	 }	 
 }
 
 执行完上述函数后，在其他组件中可以通过如下方式，获取用户信息
 import {mapActions, mapGetters} from 'vuex'
 	 
computed: {
     ...mapGetters(['nav_msg','user']) 						// 动态计算属性，相当于this.$store.getters.resturantName
		}
		
然后页面可以直接  {{user.username}}    显示属性