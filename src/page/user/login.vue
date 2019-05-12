<template>
	<div>
		<!-- 登录 -->
		<div class="login">
			<mainhead></mainhead>
			<!-- <div class="login_top"></div> -->
			<div class="login_cont">
				<div class="spice-title">
					<h2>登录</h2>
					<i class="layui-icon layui-icon-snowflake" style="font-size: 15px; color: #999;"></i>
				</div>
				<div class="login_cont_l">
					<div class="login_cont_left">
						<form class="layui-form login_cont_leftform">
							<div class="layui-form-item">
								<div class="layui-input-block">
									<label>手机号码/电子邮箱</label>
									<input @blur="jiaoyan" v-model="username" v-bind:class="classObject" type="text" name="username" required
									 placeholder="请输入电子邮件或手机号码" autocomplete="off" class="layui-input">
									 <p class="msg" v-html="us_msg"></p>
								</div>
							</div>
							<div class="layui-input-block" pane="">
								<label>密码</label>
								<input type="password" v-model="u_pwd" name="u_pwd" required placeholder="请输入密码" autocomplete="off" class="layui-input">
								<p class="msg" v-html="pwd_msg"></p>
								<input type="checkbox" lay-skin="primary"><label>记住我</label>
							</div>
							<div class="layui-input-block" pane="">
								<a class="layui-btn layui-btn-primary con_btn" v-on:click="login">登录</a>
							</div>
						</form>
					</div>
					<div class="login_cont_member">
						<div>
							<h3 style="font-weight: 200;" class="login_cont_member_title">没有账号？</h3>
						</div>
						<div class="title_cont">
							<p>拥有古驰账号您将获得以下权利：</p>
							<li>保存您的心愿清单</li>
							<li>个性化您的推荐内容</li>
							<li>订单寄送追踪及退换货管理</li>
							<div class="spice-btntop">
								<a @click="register" class="spice-btn spice-btn-black">
									创建账户</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 注册 -->
		<div :style="classStyle" class="register">
			<div class="re_cont">
				<div class="re_cont_close">
					<i @click="registerclose" :class="classStyle" class="layui-icon layui-icon-close"></i>
				</div>
				<div class="re_cont_title">
					创建你的账号
				</div>
				<div class="re_cont_zhuti">
					<div class="layui-input-block re_cont_zhuti_inp">
						<label>手机号码</label>
						<input @blur="phoneverify" style="background-color: #f5f5f5;" v-model="u_phone" type="text" required placeholder="请输入11位手机号码" autocomplete="off" class="layui-input">
						<p class="msg" v-html="re_msg"></p>
					</div>
					<div class="re_cont_verify_comm">
						<div class="re_cont_verifyCode_lef">
							<div class="layui-input-block re_cont_zhuti_inp">
								<label>图形验证码</label>
								<input @blur="GraphicscadeVerify" v-model="GraphicsverifyCode" id="code_input" style="background-color: #f5f5f5;"
								 type="text" required placeholder="请输入图中所示的验证码" autocomplete="off" class="layui-input">
								 <p class="msg" v-html="Graphics_msg"></p>
							</div>
						</div>
						<div class="re_cont_verifyCode_r">
							<div id="v_container"></div>
						</div>
					</div>
					<div class="re_cont_verify_comm">
						<div class="re_cont_verifyCode_lef">
							<div class="layui-input-block re_cont_zhuti_inp">
								<label>手机验证码</label>
								<input @blur="phonecodeverify" style="background-color: #f5f5f5;" v-model="re_code" type="text" required placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
								<p class="msg" v-html="re_code_msg"></p>
							</div>
						</div>
						<div class="phoneverify_r">
							<a @click="sendphonecode">发送验证码</a>
						</div>
					</div>
					<div class="re_cont_verify_comm">
						<div class="passverify_lef">
							<div class="layui-input-block re_cont_zhuti_inp">
								<label>设置密码</label>
								<input style="background-color: #f5f5f5;" v-model="re_pwd" type="text" required placeholder="请输入密码" autocomplete="off" class="layui-input">
								<p class="msg" v-html="re_pwd_msg"></p>
							</div>
						</div>
						<div class="passverify_r">
							<div class="layui-input-block re_cont_zhuti_inp">
								<label>确认密码</label>
								<input style="background-color: #f5f5f5;" v-model="re_qr_pwd" type="text" required placeholder="确认密码" autocomplete="off" class="layui-input">
							</div>
						</div>
					</div>
					<div class="re_cont_foot">
						<a @click="registercommit" class="layui-btn layui-btn-primary re_btn">创建账号</a>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>

</template>

<script>
	import {
		gVerify
	} from '../../../static/js/gVerify.js' //注意路径

	import mainhead from '../../components/Header/head.vue'
	
	
	import {
		register,
		login,
		phoneverifyapi,
		phonecodverifyapi,
		sendphonecodeapi,
		token
	} from '../../request/api.js'

	import {
		mapActions,
		mapGetters
	} from 'vuex'



	export default {
		
		

		components: {
			mainhead: mainhead
		},

		data() {
			return {
				username: "",
				GraphicsverifyCode: "",
				verifyCode: "",
				u_pwd: '',
				u_phone: '',
				re_pwd: '',
				us_msg: '',
				pwd_msg: '',
				re_code: '',
				re_msg: '',
				re_code_msg: '',
				Graphics_msg: '',
				re_qr_pwd: '',
				re_pwd_msg: '',
				classObject: {
					userverify: false,
					userverifyone: false,
					// login_inp: true
				},
				classStyle: {
					display: 'none',
				},
			}
		},


		mounted() {
			this.Graphicscade(); //需要触发的函数
		},
		methods: {

		//登陆提交
		...mapActions(
			['query_userAll','gettoken'] 
		),
		login: function() {
			//登陆验证
			if(this.username == ''){
				this.us_msg = '账号不能为空'
			}else if(this.u_pwd == ''){
				this.pwd_msg = '密码不能为空'
			}else{
				this.pwd_msg = ''
				login({
					user_phone: this.username,
					u_pwd: this.u_pwd,
				}).then(res => { //登录成功后，把用户信息存入vuex
// 					if(res.user.u_status == 1){
// 						if(res.message == 'error'){
// 							alert("登录失败,用户不存在")
// 						}
// 						else if(res.message == 'pwd'){
// 							alert("登录失败,密码错误")
// 						}else{
							this.query_userAll(res)
							this.$router.replace("/index")
							this.gettoken(res)
// 						}
// 					}else{
// 						alert("该账号被冻结")
// 					}
				})
			}
		},
		//重复手机验证
		phoneverify: function(){
			phoneverifyapi({
				user_phone: this.u_phone
			}).then(res => {
				if(res == 'yes'){
					this.re_msg = ''
				}else{
					this.re_msg = '该手机已经被注册过'
				}
			})
		},
		
		//手机验证码验证
		phonecodeverify: function(){
			phonecodverifyapi({
				re_code: this.re_code
			}).then(res => {
				if(this.re_code == ''){
					this.re_code_msg = '验证码不能为空'
				}
				if(res == 'yes'){
					this.re_code_msg = ''
				}else if(res == 'no'){
					this.re_code_msg = '验证码错误'
				}
			})
		},
		
		//手机验证码发送
		sendphonecode: function(){
			sendphonecodeapi({
				user_phone: this.u_phone
			}).then(res => {
			})
		},
		
		//注册提交
		registercommit: function() { 
			if(this.re_pwd != this.re_qr_pwd){
				this.re_pwd_msg = '请确认密码是否一致'
			}else{
				this.re_pwd_msg = ''
				register({
					user_phone: this.u_phone,
					u_pwd: this.re_pwd
				}).then(res => { 
					this.$router.replace("/login")
				})
			}
			
		},

		// 验证码
		Graphicscade: function() {
			this.verifyCode = new GVerify("v_container");
		},
		GraphicscadeVerify: function() {
			let res = this.verifyCode.validate(this.GraphicsverifyCode);
			if (res) {
				this.Graphics_msg = ''
				return true
			} else {
				this.Graphics_msg = '验证码错误'
				return false
			}
		},

	
		jiaoyan: function() {
			let email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
			var phone = /^1\d{10}$/;
			if (phone.test(this.username) || (email.test(this.username))) {
				this.classObject.userverifyone = true
				this.classObject.userverify = false
				this.us_msg = ''
			} else {
				this.classObject.userverify = true
				return false;
			}
		},
		register: function() {
			this.classStyle.display = 'block';
			document.body.style = 'overflow: hidden';
		},
		registerclose: function() {
			this.classStyle.display = 'none';
			document.body.style = 'overflow: auto';
		}
	},



	}
</script>

<style scoped>
	/deep/ #head{
		background-color: #1B1B1B;
	}
	.msg{
		color: red;
		/* margin-top: -60px; */
		/* margin-bottom: 30px; */
		font-size: 12px;
	}
	#head {
		background-color: #1B1B1B;
	}

	body {
		/* 溢出隐藏 */
		overflow: auto;
	}

	div,
	p,
	span,
	i,
	ul,
	li,
	dl,
	dt,
	dd {
		word-break: normal;
	}

	.code {
		margin: 400px auto;
		width: 114px;
		height: 40px;
		border: 1px solid red;
	}

	.userverifyone {
		background-color: #ffffff;
		border: 1px solid transparent;
	}

	.userverify {
		background-color: #F5DBDC;
		border: 1px solid #D24E55;
		/* display: inline; */
	}

	.login {
		width: 100%;
		height: 100%;
		margin: 0;
		z-index: 1;
		position: absolute;
		font-family: "FuturaLT-Light", "NotoSansCJKsc-Light", "NotoSansCJKsc-Normal", "PingFangSC-Regular", "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", "Microsoft YaHei", sans-serif;
	}

	.register {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		z-index: 2;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		display: none;
		font-family: "FuturaLT-Light", "NotoSansCJKsc-Light", "NotoSansCJKsc-Normal", "PingFangSC-Regular", "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", "Microsoft YaHei", sans-serif;
	}

	.login_cont {
		width: 98%;
		height: 780px;
		margin-top: 7%;
		margin-left: 1%;
		text-align: center;
		display: block;
		background-color: #e7e7e7;
	}

	.login_cont_l {
		margin-top: 30px;
		width: 53%;
		margin-left: 23%;
		height: 425px;
	}

	.spice-title {
		width: 53%;
		height: 50px;
		border-bottom: solid 1px #DBD8D6;
		margin-left: 23%;
		padding-top: 1.5%;
		padding-bottom: 2%;
		color: #313131;
		font-size: 22px;
		letter-spacing: 2.5px;
	}

	.spice-title h2 {
		word-break: normal;
		font-weight: 300;
		line-height: 1.2;
		color: inherit;
		display: block;
		-webkit-margin-before: 0.83em;
		-webkit-margin-after: 0em;
		-webkit-margin-start: 0px;
		-webkit-margin-end: 0px;
		display: block;
	}

	.login_cont_left {
		text-align: left;
		margin: 0;
		padding: 0;
		width: 50%;
		margin-top: 5%;
		height: 350px;
		border-right: solid 1px white;
		padding-top: 30px;
		float: left;
	}

	.login_cont_leftform {
		margin-left: -15%;
		margin-right: 13%;
	}

	.layui-input-block label {
		font-size: 12px;
		color: #1b1b1b;
		letter-spacing: 0.5px;
	}

	input {
		margin-bottom: 30px;
		margin-top: 10px;
		height: 37px;
		line-height: 16px;
		padding: 0px 12px;
		color: #1B1B1B;
		resize: none;
		width: 100%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0 15px;
		font-size: 12px;
		background-color: #ffffff;
		border: 1px solid transparent;
		outline: 0px solid transparent;
		border-radius: 0px;
		outline-offset: 0;
	}

	.con_btn {
		background-color: #1B1B1B;
		color: white;
		font-size: 10px;
		width: 100%;
		margin-top: 20px;
	}

	.con_btn:hover {
		color: white;
	}

	.login_cont_member {
		width: 40%;
		float: right;
		text-align: left;
		margin-top: 8.5%;
	}

	.spice-btn {
		border: 2px solid #1B1B1B;
		color: #1B1B1B;
		display: inline-block;
		zoom: 1;
		font-weight: normal;
		vertical-align: middle;
		min-width: 70%;
		padding: 0px 5px;
		height: 37px;
		line-height: 36px;
		font-size: 12px;
		margin-top: 5%;
		text-align: center;
		cursor: pointer;
		border-radius: 0;
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
		-ms-border-radius: 0;
		-o-border-radius: 0;
	}

	.spice-btn:hover {
		border: 2px solid #999999;
		color: #999999;
	}

	.login_cont_member_title {
		font-size: 22px;
		margin-bottom: 5%;
	}

	.title_cont p {
		font-size: 16px;
		font-weight: normal;
		margin-bottom: 5%;
	}

	.title_cont li {
		font-size: 13px;
		margin-bottom: 4%;
		list-style-type: circle;
	}

	.re_cont {
		width: 39%;
		height: 80%;
		margin: 4% auto;
		background-color: #ffffff;
		padding-top: 1%;
	}

	.re_cont_title {
		width: 75%;
		font-size: 24px;
		color: #1b1b1b;
		letter-spacing: 2px;
		/* line-height: 28px; */
		padding-bottom: 3.5%;
		border-bottom: 1px solid #E7E7E7;
		font-weight: 100;
		word-break: normal;
		margin: auto;
		margin-top: 4%;
		text-align: center;
	}

	.re_cont_close {
		width: 5%;
		float: right;
		margin-right: 3%;
	}

	.re_cont_close i {
		cursor: pointer;
		font-size: 30px;
	}

	.re_cont_zhuti {
		width: 75%;
		height: 73%;
		margin: auto;
		padding-top: 5%;
	}

	.re_cont_zhuti_inp {
		width: 88%;
		/* border: 1px solid #E7E7E7; */
		margin: auto;
		/* padding-left: 5%; */
	}

	.re_cont_verify_comm {
		width: 100%;
		height: 23%;
	}

	.re_cont_verifyCode_lef {
		width: 60%;
		float: left;
		margin-left: 3%;
	}

	.re_cont_verifyCode_r {
		float: right;
		width: 35%;
		margin-top: 7%;
	}

	#v_container {
		width: 50%;
		height: 50px;
		float: left;
	}

	.phoneverify_r {
		float: right;
		width: 35%;
		margin-top: 8%;
	}

	.phoneverify_r a {
		font-size: 12px;
		text-decoration: underline;
	}


	.passverify_lef {
		width: 48%;
		float: left;
		margin-left: 3%;

	}

	.passverify_r {
		width: 48%;
		float: right;

	}

	.re_cont_foot {
		width: 100%;
	}

	.re_btn {
		width: 35%;
		margin-left: 33%;
		background-color: #313131;
		font-size: 12.5px;
		color: white;
	}

	.re_btn:hover {
		color: white;
	}
</style>
