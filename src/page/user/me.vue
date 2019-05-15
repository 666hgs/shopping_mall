<template>
	<div>
		<div class="top">
			<userhead></userhead>
			<div class="main_cont">
				<div class="me_information">
					<div class="me_information_lef">
						<label>你的信息</label>
					</div>
					<div class="me_information_r">
						<!-- <form class="layui-form" name="date"> -->
							<div class="me_group_list">
								<div style="width: 11%; float: left; ">
									<label>称呼</label><br />
									<select v-model="u_sex">
										<option value="请选择">请选择</option>
										<option value="先生">先生</option>
										<option value="小姐">小姐</option>
										<option value="女士">女士</option>
									</select>
								</div>
								<div style="width: 80%; float: left; margin-left: -5%;">
									<div class="layui-input-block" pane="">
										<label>昵称</label>
										<input type="text" v-model="u_lastname" autocomplete="off" class="layui-input">
									</div>
								</div>
							</div>
							<div class="me_group_list">
								<div id="date" class="layui-form-item">
									<div class="layui-input-inline">
										<label>国籍</label><br />
										<select class="no-drop" disabled>
											<option value="">
												<!-- <i class="iconfont icon-zhongguoguoqi"></i> -->中国</option>
										</select>
									</div>
									<div class="layui-input-inline item">
										<label>年</label><br />
										<select v-model="years" lay-f>
											<option v-for="item in year" :value="item" :key="item">{{item}}年</option>
										</select>
									</div>
									<div @change="getDay" class="layui-input-inline item">
										<label>月</label><br />
										<select v-model="months">
											<option v-for="item in month" :value="item" :key="item">{{item}}月</option>
										</select>
									</div>
									<div class="layui-input-inline item">
										<label>日</label><br />
										<select v-model="days">
											<option v-for="item in day" :value="item" :key="item">{{item}}日</option>
										</select>
									</div>
								</div>
							</div>
							<div class="me_group_list">
								<div class="layui-form-item">
									<div class="layui-input-inline">
										<label>联系电话</label><br />
										<select class="no-drop" name="quiz1" disabled>
											<option value="">
												<!-- <i class="iconfont">&#xe63e;</i> -->+86 中国</option>
										</select>
									</div>

									<div class="layui-input-block me_information_r_phone" pane="">
										<input type="text" v-model="u_phone" autocomplete="off" class="layui-input">
									</div>
								</div>
							</div>
						<!-- </form> -->
					</div>
				</div>
				<div class="me_information">
					<div class="me_information_lef">
						<label>账号信息</label>
					</div>
					<div class="me_information_r">
						<div class="me_cont_phone">
							<label>手机号码</label> <br />
							<span>这是您的Gucci官网登录手机号码</span>
							<div class="me_cont_mod_input">
								<div class="layui-input-block" pane="">
									<input disabled="disabled" type="text" v-model="user_phone" autocomplete="off" class="layui-input phone-exhibition">
								</div>
							</div>
							<div class="me_cont_phone_r">
								<a href="#">修改手机号码</a>
								<a @click="register">修改密码</a>
							</div>
						</div>
						<div class="me_cont_email">
							<label>邮箱</label> <br />

							<span>输入您的邮箱，即可用邮箱进行登录和找回密码</span>
							<div class="me_cont_mod_input">
								<div class="layui-input-block" pane="">
									<input type="text" v-model="u_email" autocomplete="off" class="layui-input">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="me_information_commit">
					<!-- @click="user_update" -->
					<a @click="user_upd" class="layui-btn layui-btn-primary">保存修改</a>
					<p>点击以上按钮代表您接受我们的隐私政策</p>
				</div>
			</div>
		</div>

		<!-- 修改密码 -->
		<div :style="classStyle" class="register">
			<div class="re_cont">
				<div class="re_cont_close">
					<i @click="registerclose" :class="classStyle" class="layui-icon layui-icon-close"></i>
				</div>
				<div class="re_cont_title">
					修改密码
				</div>
				<div class="re_cont_zhuti">
					<div class="layui-input-block re_cont_zhuti_inp">
						<label>旧密码</label>
						<input type="password" @blur="pwdoldverify" v-model="pwd_old" style="background-color: #f5f5f5;"  autocomplete="off" class="layui-input">
						<p class="msg" v-html="up_pwd_old"></p>
					</div>
					<div class="re_cont_verify_comm">
						<div class="passverify_lef">
							<div class="layui-input-block re_cont_zhuti_inp">
								<label>新密码</label>
								<input type="password" style="background-color: #f5f5f5;" v-model="pwd_new"  required placeholder="请输入密码"
								 autocomplete="off" class="layui-input">
								<!-- <p class="msg" v-html="up_pwd_old"></p> -->
							</div>
						</div>
						<div class="passverify_r">
							<div class="layui-input-block re_cont_zhuti_inp">
								<label>确认新密码</label>
								<input type="password" style="background-color: #f5f5f5;" v-model="pwd_qr_new" 
								 autocomplete="off" class="layui-input">
								<p class="msg" v-html="pwd_new_msg"></p>
							</div>
						</div>
					</div>
					<div class="re_cont_foot">
						<a @click="user_updatepwd" class="layui-btn layui-btn-primary re_btn">修改密码</a>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
	import {
		pwdoldverifyapi,
		user_updatepwdapi,
		userinfoupdateapi
	} from '../../request/api.js'

	import userhead from './userhead.vue'

	import {
		mapActions,
		mapGetters
	} from 'vuex'




	export default {
		
		computed: {
					...mapGetters(['userAll']), // 动态计算属性，相当于this.$store.getters.resturantName
				},

		components: {
			userhead: userhead,
		},
		
		mounted() {
			this.showall()
			this.init();
		},

		data() {
			return {
				year: [],
				month: [],
				day: [],
					years: '2019',
					months: '1',
					days: '1',
				u_sex: '',
				u_lastname: '',
				u_phone: '',
				user_phone: '18219095402',
				u_email: '',
				up_pwd_old: '',
				pwd_new_msg: '',
				up_pwd: '',
				up_qr_pwd: '',
				pwd_old: '',
				pwd_new: '',
				pwd_qr_new:'',
				classObject: {
					userverify: false,
					userverifyone: false,
				},
				classStyle: {
					display: 'none',
				},
			}
		},

		methods: {
			showall: function(){
				console.log(this.userAll)
				this.u_sex = this.userAll.u_sex
				this.u_lastname = this.userAll.u_lastname
				this.u_phone = this.userAll.u_phone
				this.user_phone = this.userAll.user_phone
				this.u_email = this.userAll.u_email
				if(this.userAll.u_birth != null){
					let birth = this.userAll.u_birth.split("-")
					this.years = birth[0]
					this.months = birth[1]
					this.days = birth[2]
				}
			},

			register: function() {
				this.classStyle.display = 'block';
				document.body.style = 'overflow: hidden';
			},
			registerclose: function() {
				this.classStyle.display = 'none';
				document.body.style = 'overflow: auto';
			},
			
			//验证旧密码
			pwdoldverify: function(){
				let data={
					u_pwd: this.pwd_old
				}
				pwdoldverifyapi(data).then(res => {
					if(res == 'yes'){
						this.up_pwd_old = ''
					}else if(res == 'no'){
						this.up_pwd_old = '旧密码错误'
					}else{
						this.up_pwd_old = ''
					}
				})
			},
			
			//密码修改
			user_updatepwd: function(){
				let data={
					u_id: this.userAll.u_id,
					u_pwd: this.pwd_new
				}
				user_updatepwdapi(data).then(res => {
					this.classStyle.display = 'none';
					document.body.style = 'overflow: auto';
				})
			},
			//信息修改
			user_upd: function(){
				let data={
					u_birth: this.years + '-' + this.months + '-' + this.days,
					u_id : this.userAll.u_id,
					u_sex: this.u_sex,
					u_lastname: this.u_lastname,
					u_phone: this.u_phone,
					u_email: this.u_email
				}
				userinfoupdateapi(data).then(res => {
					this.userAll.u_birth = this.years + '-' + this.months + '-' + this.days
					this.userAll.u_sex = this.u_sex
					this.userAll.u_lastname = this.u_lastname
					this.userAll.u_phone = this.u_phone
					this.userAll.u_email = this.u_email
					
					console.log(this.userAll.u_birth)
					// this.$router.replace('/me')
				})
				
			},



			init() {
				this.getYear();
				this.getMonth();
				this.getDay();
			},
			getYear() { //获取年
				let date = new Date;
				let current_year = date.getFullYear();
				for (let i = 0; i < 100; i++) {
					let y = current_year - i;
					this.year.push(y);
				}
			},
			getMonth() { //获取月
				for (let i = 1; i < 13; i++) {
					this.month.push(i);
				}
			},
			getDay() { //获取日
				this.day = [];
				let day = this.getDaysInMonth(this.years, this.months)
				for (let i = 1; i <= day; i++) {
					this.day.push(i);
				}
			},
			getDaysInMonth(year, month) { //获取某个月的天数
				month = parseInt(month, 10);
				let d = new Date(year, month, 0);
				return d.getDate();
			},
			padding0(num, length) { //数字前填充0方法
				for (let len = (num + "").length; len < length; len = num.length) {
					num = "0" + num;
				}
				return num;
			},
			submit() { //提交      
				let birthday = this.years + "-" + this.padding0(this.months, 2) + "-" + this.padding0(this
					.days, 2);

				let cur_date = new Date();
				if (cur_date < new Date(birthday)) {
					alert("请选择小于今天的年月日");
					return;
				}
				console.log(birthday); //birthday就是得到的最终的日期，格式为2019-01-01
			}

		},
		
		watch:{
			u_sex: function(n,o){
				this.u_sex = n
			},
			years: function(n,o){
				this.months = n

			}
		}


	}
	$(function() {

		layui.use('form', function() {
			var form = layui.form;
			form.render();
		});

	})
</script>

<style scoped>
	
	
	select{
		width: 100%;
		height: 38px;
		margin-top: 11px;
		border: solid 1px white;
		cursor: pointer;
	}
	
	.no-drop{
		cursor: no-drop;
	}
	
	select option{
		height: 50px;
	}
	
	.top {
		width: 100%;
		position: absolute;
	}

	.register {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		z-index: 2;
		top: 49.5%;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		font-family: "FuturaLT-Light", "NotoSansCJKsc-Light", "NotoSansCJKsc-Normal", "PingFangSC-Regular", "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", "Microsoft YaHei", sans-serif;
	}

	.layui-input-block label {
		font-size: 12px;
		color: #1b1b1b;
		letter-spacing: 0.5px;
	}

	.layui-input-block input {
		margin-bottom: 25px;
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

	.layui-input-block p {
		color: red;
		font-size: 13px;
	}

	.re_cont {
		width: 39%;
		height: 64%;
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
		margin: auto;
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

	.main_cont {
		width: 98%;
		height: 809px;
		background-color: #e7e7e7;
		margin-top: 13px;
		margin-left: 1%;
	}


	.me_information {
		width: 75%;
		height: 280px;
		position: relative;
		padding-top: 50px;
		margin: auto;
		font-family: "FuturaLT-Book", "NotoSansCJKsc-DemiLight", "NotoSansCJKsc-Normal", "PingFangSC-Regular", "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", "Microsoft YaHei", sans-serif;
	}

	.me_information_lef {
		width: 25%;
		float: left;
		height: 50px;
		position: relative;
	}

	.me_information_r {
		width: 74%;
		float: right;
		margin-top: 13px;
		height: 100%;

		position: relative;
		border-bottom: solid 2px white;
	}

	.me_information_lef label {
		font-size: 18px;
		color: #313131;
		letter-spacing: 0px;
		position: absolute;
		top: 0;
		left: 0;
		font-weight: 100;
	}

	.me_information_r label {
		height: 30px;
		font-size: 13px;
		color: #313131;
		letter-spacing: 0px;
		/* position: absolute; */
		margin-bottom: 10px;
	}

	.me_information_commit {
		margin-top: 30px;
		padding-left: 32%;
	}

	.me_information_commit a {
		background-color: #1B1B1B;
		color: white;
		font-size: 10px;
		width: 13%;
		margin-top: 20px;
		margin-bottom: 8px;
	}

	.me_information_commit a:hover {
		color: whitesmoke;
	}

	.me_information_commit p {
		font-size: 12px;
		color: #999999;

	}

	.me_group_list input {
		margin-top: 10px;
	}

	.phone-exhibition {
		font-size: 12px;
		color: #999;
		background: #dbd8d6;
	}

	.me_group_list {
		width: 100%;
		height: 85px;
	}

	.layui-input-inline:nth-child(1) {
		width: 30%;
	}

	.layui-input-inline:nth-child(2) {
		width: 20%;
	}

	.layui-input-inline:nth-child(3) {
		width: 20%;
	}

	.layui-input-inline:nth-child(4) {
		width: 20%;
	}

	.me_information_r_phone {
		width: 65%;
		float: right;
		margin-top: 20px;
		margin-right: 4%;
		margin-left: -10%;
	}

	.me_cont_email span {
		font-size: 12px;
		font-style: italic;
		color: #999999;
		display: block;
		margin: 27px 0 9px 0;
	}

	.me_cont_phone {
		width: 100%;
		position: relative;
	}

	.me_cont_email {
		position: relative;
	}

	.me_cont_phone span {
		font-size: 12px;
		font-style: italic;
		color: #999999;
		display: block;
		margin: 27px 0 9px 0;
	}

	.me_cont_mod_input {
		/* float: left; */
		width: 50%;
		margin-left: -13.5%;
		margin-bottom: 15px;
	}

	.me_cont_phone_r {
		width: 50%;
		margin-left: 40%;
		margin-top: -51px;
		height: 60px;
		cursor: pointer;
		font-size: 13px;
	}

	.me_cont_phone_r a {
		width: 20%;
	}

	.me_cont_phone_r a:nth-child(2) {
		margin-left: 25%;
		margin-top: -7.5%;
		padding-left: 5%;
		padding-top: 13px;
		height: 30px;
		display: block;
		border-left: solid 1px white;
	}
</style>
