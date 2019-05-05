<template>
	<div>
		<div class="order">
			<div class="order_contain">
				<!--表头-->
				<table class="order_contain_head">
					<colgroup>
						<col class="order_head_1" />
						<col class="order_head_2" />
						<col class="order_head_3" />
						<col class="order_head_4" />
						<col class="order_head_5" />
						<col class="order_head_6" />
						<col class="order_head_7" />
					</colgroup>
					<tbody>
						<tr>
							<th>宝贝</th>
							<th>单价</th>
							<th>数量</th>
							<th>商品操作</th>
							<th>实付款</th>
							<th>交易状态</th>
							<th>交易操作</th>
						</tr>
					</tbody>
				</table>

				<!--循环订单 -->
				<div class="order_list" v-for="(value,index) in orderList">
					<table class="order_list_table" cellspacing="0">
						<colgroup>
							<col class="order_head_1" />
							<col class="order_head_2" />
							<col class="order_head_3" />
							<col class="order_head_4" />
							<col class="order_head_5" />
							<col class="order_head_6" />
							<col class="order_head_7" />
						</colgroup>
						<tbody class="order_title_number">
							<tr>
								<td class="orderNumber">
									<label class="orderNumber_left">
										<span class="orderNumber_time">{{value.orderDate}}</span>
									</label>
									<span>
										<span>订单号</span>
										<span>:</span>
										<span>{{value.orderNumber}}</span>
									</span>
								</td>
								<td class="order_head_2"></td>
								<td class="order_head_3"></td>
								<td class="order_head_4"></td>
								<td class="order_head_5"></td>
								<td class="order_head_6"></td>
								<td class="delete_td">
									<a class="delete_icon">
										<i></i>
									</a>
								</td>
							</tr>
						</tbody>
						<tbody class="order_tbody">
							<tr v-for="(v,i) in value.goodsList">
								<td>
									<div class="order_product">
										<div class="order_product_img">
											<a href="#" target="_blank">
												<img :src="v.goodsImg" width="80px" height="80px" />
											</a>
										</div>
										<div class="order_product_img_right">
											<p>{{v.goodsDetail}}</p>
											<p>{{v.goodsDetail2}}</p>
										</div>
									</div>
								</td>
								<td>
									<div class="order_product_money">
										<p>
											<span>$</span>
											<span>{{v.goodsMoney}}</span>
										</p>
									</div>
								</td>
								<!--数量-->
								<td>
									<div>
										<p>
											<span>{{v.goodsNumber}}</span>
										</p>
									</div>
								</td>
								<!--操作-->
								<td>

								</td>
								<!--付款-->
								<td>
									<div>
										<p>
											<strong>
												<span>$</span>
												<span>{{v.goodsPay}}</span>
											</strong>
										</p>
									</div>
								</td>
								<!--交易状态-->
								<td v-if="i==0">

									<div v-if="v.goodsStatus=='success'">
										<p>交易成功</p>
										<p>订单详情</p>
									</div>
									<div v-else>
										<p>交易失败</p>
										<p>订单详情</p>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>














			</div>
			<Page :cur="cur" :all="all" :callback="callback"></Page>
			<p class="page_p">{{msg}}</p>
		</div>
	</div>
</template>

<script>
	import Page from './page.vue'
	import {
		queryOrderList,
		queryOrderAll
	} from '../../request/api.js'
	const data = {
		cur: 1,
		all: 0,
		msg: '',
		orderList: []
	}
	export default {
		data() {
			return data;
		},
		components: {
			Page
		},
		methods: {
			callback(data) {
				this.cur = data.page
				this.orderList = data.list //分页操作
				this.msg = '你点击了' + data.page + '页'
			},
			queryOrder() { //进入订单页面，默认第一页，查询第一页页面数据			
				queryOrderList(1).then(
					res => {
						this.orderList = res;
					}).catch(err => console.log(err));

			},
			queryOrderPageAll() {
				queryOrderAll().then(res => {
					this.all = res
				}).catch(err => console.log(err))
			}
		},
		mounted() {
			this.queryOrder(); //进入页面查询第一页
			this.queryOrderPageAll()
		}

	}
</script>

<style>
	tbody {
		display: table-row-group;
		vertical-align: middle;
		border-color: inherit;
	}

	tr {
		display: table-row;
		vertical-align: inherit;
		border-color: inherit;
	}

	td {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.order {
		width: 100%;
		height: auto;
		padding-top: 90px;
		position: relative;
	}

	.order_contain {
		width: 70%;
		margin: 5% 15%;
	}

	.order_contain_head {
		text-align: center;
		border: 1px solid #e8e8e8;
		background-color: #f5f5f5;
		margin: 10px 0;
		width: 100%;
		color: #3c3c3c;
		border-collapse: collapse;
		border-spacing: 0;
		table-layout: fixed;

	}

	.order_contain_head th {
		padding-top: 5px;
		padding-bottom: 5px;
	}

	/**
	 * 表格间距
	 */
	colgroup {
		display: table-column-group;
	}

	.order_head_1 {
		width: 38%;
	}

	.order_head_2 {
		width: 10%;
	}

	.order_head_3 {
		width: 5%;
	}

	.order_head_4 {
		width: 12%;
	}

	.order_head_5 {
		width: 12%;
	}

	.order_head_6 {
		width: 11%;
	}

	.order_head_7 {
		width: 12%;
	}

	/**
	 * 订单列表
	 */
	.order_list {
		margin: 10px 0;
		border: 1px solid lightgrey;
	}

	.order_list>table {
		width: 100%;
	}

	.orderNumber {
		text-align: left;
		width: 38%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.orderNumber_left {
		margin-left: 20px;
	}

	.orderNumber_time {
		margin-right: 10px;
		font-weight: 700;
	}

	.order_list>table>tbody>tr>td {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.order_title_number {
		background-color: #f1f1f1;
	}

	.delete_td {
		text-align: right;
		width: 12%;
	}

	.delete_icon {
		color: #3c3c3c;
		text-decoration: none;
		word-break: break-all;
		margin-right: 10px;
		visibility: hidden;
	}

	.delete_icon i {
		height: 17px;
		width: 1px;
		padding-left: 17px;
		overflow: hidden;
		vertical-align: middle;
		font-size: 0px;
		display: inline-block;
		visibility: visible;
		background: url(../../assets/icon2.png) no-repeat -239px -176px;
	}

	/**
	 * 订单页 图片那一行
	 */
	.order_product {
		margin-left: 20px;
		text-align: left;
	}

	.order_product_img {
		float: left;
		border: 1px solid lightgrey;
	}

	.order_product_img_right {
		margin-left: 90px;
	}

	.order_product_img_right p {
		margin-top: 8px;
		margin-bottom: 8px;
		line-height: 1;
	}

	.order_list_table {
		text-align: center;
	}

	/**
	 * 分页提示
	 */
	.page_p {
		text-align: right;
		padding-right: 15%;
	}
</style>
