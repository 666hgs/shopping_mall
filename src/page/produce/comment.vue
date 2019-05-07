<template>
	<div>
		<div class="cmmain">
			<h2 class="headline">用户评论</h2>
			<div class="comment_content">
				<div>
					<div class="header_left">
						<img src="../../assets/product/3.png">
						<span>轻垫精华粉底液（粉盒+粉芯）</span>
					</div>
					<div class="header_right">
						<div class="comment_product_title">轻垫精华粉底液（粉盒+粉芯）</div>
						<div class="allcomment">
							<span>总评论</span>
							<span>★★★★★</span>
						</div>
						<div class="comment_count"><span>共{{commentList.length}}条评论</span></div>
						<div class="addcomment"><button>添加评论</button></div>
					</div>
				</div>
				<div class="cm_list">
					<div v-for="(comment,index) in commentList">
						<div class="cmlist_line" v-if="index!=0&index<4"></div>
						<div class="cm_item" v-if="index<4">
							<div class="cm_item_left">
								<img src="../../assets/product/no-custom-image.png">
								<div>{{comment.u_id}}</div>
							</div>
							<div class="cm_item_middle">
								<div style="width: 100%;">
								<div class="comment_tags">
									<ul>
										<li class="comment_tag">{{comment.content}}</li>
										
									</ul>
								</div>
								</div>
								<div class="comment_info">
									<div>{{comment.buyon}}</div>
									<div>{{comment.time}}</div>
									<div style="margin:5px 0 0 0;font-size: 16px;">{{comment.star}}</div>
								</div>
							</div>
							<div class="cm_item_right">
								<div class="cmt_vote_statics">有{{comment.like_number}}位用户认为该评论有用.</div>
								<div class="cmt_vote_title">该评论：</div>
								<div class="cmt_vote_vole">
									<button  value="有用">有用</button>
								</div>
							</div>
						</div>
						<div class="cm_more" v-if="show&&index==commentList.length-1" @click="changeshow">
							<div>
								<button >更多评论</button>
							</div>
						</div>
					</div>

					
					<div v-if="!show" v-for="(comment,index) in commentList" >
						<div class="cmlist_line" v-if="index>=4"></div>
						<div class="cm_item" v-if="index>=4">
							<div class="cm_item_left">
								<img src="../../assets/product/no-custom-image.png">
								<div>{{comment.u_id}}</div>
							</div>
							<div class="cm_item_middle">
								<div style="width: 100%;">
								<div class="comment_tags">
									<ul>
										<li class="comment_tag">{{comment.content}}</li>
										
									</ul>
								</div>
								</div>
								<div class="comment_info">
									<div>{{comment.buyon}}</div>
									<div>{{comment.time}}</div>
									<div style="margin:5px 0 0 0;font-size: 16px;">{{comment.star}}</div>
								</div>
							</div>
							<div class="cm_item_right">
								<div class="cmt_vote_statics">有{{comment.like_number}}位用户认为该评论有用.</div>
								<div class="cmt_vote_title">该评论：</div>
								<div class="cmt_vote_vole">
									<button  value="有用">有用</button>
								</div>
							</div>
						</div>
						<div class="cm_more" v-if="!show&&index==commentList.length-1">
							<div>
								<button>更多评论</button>
								<button @click="changeshow">收起</button>
							</div>
						</div>
					</div>
				</div>
				<div class="cm_btline"> </div>
			</div>
		</div>
	</div>
</template>

<script>
import {queryComment} from '../../request/api.js'

export default{

	data(){
		return{
			show:true,
			commentList:[]
		}
		
	},
	

	methods:{
		changeshow(event){
			this.show=!this.show
		},
		queryComment(pid){
			queryComment(pid).then(res => {
                this.commentList = res;
            }).catch(err => console.log(err))
		}
	},
	mounted() {
        this.queryComment(1); //进入页面查询
    }

}
</script>

<style>
.cmmain{
		background: #eee;
	}
	.headline{
		text-align: center;
    	font-size: 24px;
    	padding-top: 62px;
	}
	.comment_content{
		font-size: 12px;
    	color: #666;
    	padding: 0 6.4% 0 7.95%;
	}
	.comment_content:after{
		
    	content: "";
    	display: table;
    	clear: both;
	}
	.header_left{
		width: 190px;
    	float: left;
    	margin-right: 60px;
    	text-align: center;
    	font-size: 16px;
    	font-weight: 700;
    	color: #000;
	}
	.header_left img{
		height: 190px;
    	width: 100%;
    	margin-bottom: 20px;
	}
	.header_right{
		height: 180px;
    	padding-left: 0;
    	margin-left: 250px;
    	padding-bottom: 50px;
    	border-bottom: 2px solid #000;
	}
	.comment_product_title {
    	padding: 50px 0 110px;
    	font-size: 16px;
    	font-weight: 700;
    	color: #000;
	}
	.allcomment{
		float: left;
		font-size: 16px;
    	font-weight: 700;
    	color: #000;
	}
	.comment_count{
		color: #000;
    	float: left;
    	font-size: 16px;
    	margin-left: 50px;
	}
	.addcomment{
		float:right;
	}
	.addcomment button{
		background: #fff;
    	color: #000;
    	width: 200px;
    	height: 35px;
    	border: 1px solid #000;
    	font-size: 14px;
	}
	.addcomment button:hover{
		background: #000;
    	color: #fff;
    	border: 1px solid #9f9f9f;
    	font-family: SimHei;
	}
	.cm_list{
		float: left;
    	width: 100%;
    	display: block;
	}
	.cm_item{
		min-height: 120px;
    	overflow: hidden;
    	padding-bottom: 20px;
    	padding-top: 50px;
	}
	.cm_item_left{
		width: 190px;
    	float: left;
    	text-align: center;
	}
	.cm_item_left img{
		height: 150px;
    	width: 150px;
    	margin: 0 0 10px 0;
	}
	.cm_item_middle{
		float: left;
    	margin-left: 60px;
    	width: 43%;
	}
	.comment_tags{
		padding-bottom: 7px;
		float: left;
	}
	.comment_tags ul{
		list-style: none;
		padding-left: 0;
		margin:0;

	}
	.comment_tag{
    	height: 23px;
    	line-height: 23px;
    	margin-right: 15px;
    	color: #000;
    	text-align: center;
    	float: left;
    	
	}
	.comment_info{
		    margin-top: 30px;
	}
	.cm_item_right{
		float: right;
    	width: 200px;
	}
	.cmt_vote_statics{
	    margin-bottom: 10px;
	}
	.cmt_vote_title{
		font-weight: 700;
    	margin-bottom: 20px;
    	color: #000;
	}
	.cmt_vote_vole button{
		width: 100%;
    	margin-bottom: 7px;
    	display: block;
    	background: #000;
    	color: #fff;
    	padding: 7px;
    	border: 1px solid #000;
    	border-radius: 0;
	}
	.cmt_vote_vole button:hover{
		background: #fff;
    	color: #070707;
    	border: 1px solid #9f9f9f;
	}
	.cmlist_line{
		border-bottom: 2px solid #e0e0e0;
    	font-size: 0;
    	line-height: 1px;
    	margin-left: 230px;
	}
	.hidden{
		display: none;
	}
	.cm_more{
		text-align: center;
	}
	.cm_more button{
		font-size: 14px;
    	color: #fff;
    	padding: 7px;
    	background: #000;
    	border: 1px solid #000;
    	width: 140px;
    	height: 35px;
	}
	.cm_more button:hover{
		background: #666;
    	border: 1px solid #333;
	}
	.cm_btline{
		border-top: 2px solid #000;
    	margin: 60px 0;
    	float: left;
    	width: 100%;
	}
</style>
