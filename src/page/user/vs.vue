<template>
	<div>
		<div class="select-box">
	<span class="item">
		<select v-model="formData.year">
			<option v-for="item in year" :value="item" :key="item">{{item}}年</option>
		</select>
	</span>
	<span class="item" @change="getDay">
		<select  v-model="formData.month">
			<option v-for="item in month" :value="item" :key="item">{{item}}月</option>
		</select>
	</span>
	<span class="item">
		<select  v-model="formData.day" >
			<option v-for="item in day" :value="item" :key="item">{{item}}日</option>
		</select>
    </span>
</div>
<div><a class="btn-submit btn-submit-s" @click="submit"></a></div>
	</div>

</template>

<script>
	import {
		gVerify
	} from '../../../static/js/gVerify.js' //注意路径

	
	import {} from '../../request/api.js'
	
	
	import {
		mapActions,
		mapGetters
	} from 'vuex'

	export default {
	data() {
		return {
		    year:[],
			month:[],
			day:[],
			formData:{
				year:2019,
				month:1,
				day:1
			},
		}
	},
	methods: {
		init(){
		  this.getYear();
		  this.getMonth();
		  this.getDay();
		},
		getYear(){//获取年
		  let date = new Date;
		  let current_year = date.getFullYear();
		  for (let i = 0; i < 100; i++) {
		    let y = current_year - i;
			this.year.push(y);
		  }
		},
		getMonth(){//获取月
		  for (let i = 1; i < 13; i++) {
			this.month.push(i);
		  }
		},
		getDay(){//获取日
		  this.day = [];
		  let day = this.getDaysInMonth(this.formData.year, this.formData.month)
		  for (let i = 1; i <= day ; i++) {
		      this.day.push(i);
		  }
		},
		getDaysInMonth(year, month) {//获取某个月的天数
	          month = parseInt(month, 10);
		  let d = new Date(year, month, 0);
		  return d.getDate();
		},
		padding0(num, length) {//数字前填充0方法
		   for(let len = (num + "").length; len < length; len = num.length) {
			  num = "0" + num;            
		   }
		   return num;
		},
                submit(){//提交      
                    let birthday = this.formData.year +"-" + this.padding0(this.formData.month,2) +"-" + this.padding0(this.formData.day,2);
 
		    let cur_date = new Date();
		    if(cur_date < new Date(birthday)){
			    alert("请选择小于今天的年月日");
			    return;
		    }
                    console.log(birthday);//birthday就是得到的最终的日期，格式为2019-01-01
                }
	 },
	 mounted() {
		this.init();
	 }
}

	// 	 $(function(){
	// 		 var verifyCode = new GVerify("v_container");
	// 		 	   document.getElementById("my_button").onclick = function(){
	// 		 	       var res = verifyCode.validate(document.getElementById("code_input").value);
	// 		 	       if(res){
	// 		 	           alert("验证正确");
	// 		 	       }else{
	// 		 	           alert("验证码错误");
	// 		 	       }
	// 		 	   }
	// 		 })
</script>

<style>

</style>
