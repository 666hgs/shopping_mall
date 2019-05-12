<template>
	<div>
		<div class="cmmain">
			<h2 class="headline">用户评论</h2>
			<div class="comment_content">
				<div>
					<div class="header_left">
						<img :src="picture">
						<span>{{name}}</span>
					</div>
					<div class="header_right">
						<div class="comment_product_title">{{name}}</div>
						<div class="allcomment">
							<span>总评论</span>
							<span v-for="stat in 5">★</span>
						</div>
						<div class="comment_count"><span>共{{commentList.length}}条评论</span></div>
						<div class="addcomment">
							<button @click="toaddcomment">添加评论</button>
						</div>
					</div>
				</div>
				<div class="cm_list">
					<div v-for="(comment,index) in commentList">
						<div class="cmlist_line" v-if="index!=0&index<4"></div>
						<div class="cm_item" v-if="index<4">
							<div class="cm_item_left">
								<img src="../../assets/product/no-custom-image.png">
								<div>{{comment.u_lastname}}</div>
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
									<div style="margin:5px 0 0 0;font-size: 16px;" >
										<span v-for="stat in comment.star">★</span>
									</div>
								</div>
							</div>
							<div class="cm_item_right">
								<div class="cmt_vote_statics">有{{comment.like_number}}位用户认为该评论有用.</div>
								<div class="cmt_vote_title">该评论：</div>
								<div class="cmt_vote_vole">
									<button  value="有用" @click.once="comment.like_number++">有用</button>
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
									<div style="margin:5px 0 0 0;font-size: 16px;">
										<span v-for="stat in comment.star">★</span>
									</div>
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
				<div class="cm_btline" id="cm_btline"> </div>
				
					<div v-if="addcommentflag">
						<h3>填写您的评论</h3>
						<div class="first">
							<div>
								<span class="contenttitle">内容</span>
								<input type="tex" class="content" v-model="content" placeholder="请输入评论内容">
							</div>
							<div style="margin-top: 20px">
								<span style="margin-right: 20px">购买途径</span>
								<select v-model="buyon">
									<option value="线上官网购买" selected="selected">线上官网购买</option>
									<option value="线下店铺购买">线下店铺购买</option>
									<option value="试用小样">试用小样</option>
									<option value="朋友赠送">朋友赠送</option>
								</select>
							</div>
							<div class="product_rating">
								<span style="float: left;">你的评价</span>
								<div style="margin-left: 25px;float: left;">
				                    <img v-for="(star,index) in stars" v-bind:src="star.src" v-on:click="rating(index)" />
				                    <span style="margin-left: 10px">{{starNum}}分</span>
				                </div>
							</div>
						</div>
						<div class="secondary">
							<div class="action">
								<button @click="addcomment">提交</button>
							</div>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import {queryComment} from '../../request/api.js'
import {addComment} from '../../request/api.js'
import {mapActions, mapGetters} from 'vuex'

export default{

	data(){
		return{
			show:true,
			commentList:[],
			//插入是否成功标记
			addComMsg:0,
			addcommentflag:false,
			content:'',
			buyon:'线上官网购买',
			//星星图片
			starOffImg : "../../../static/images/product/staroff.png",
            starOnImg : "../../../static/images/product/staron.png",
			stars: [{
                            src: "../../../static/images/product/staroff.png",
                            active: false
                        }, {
                            src: "../../../static/images/product/staroff.png",
                            active: false
                        }, {
                            src: "../../../static/images/product/staroff.png",
                            active: false
                        },
                        {
                            src: "../../../static/images/product/staroff.png",
                            active: false
                        }, {
                            src: "../../../static/images/product/staroff.png",
                            active: false
                        }
                    ],
                    starNum: 0,
		}
		
	},
	

	methods:{
		changeshow(event){
			this.show=!this.show
		},
		queryComment(pid){
			var comment={
        		"com_id":0,
        		"time":'',
        		"like_number":0,
        		"cosmetic_id":this.$route.query.id,
        		"pro_id":this.$route.query.pro_id,
        		"u_id":'1',
        		"content":this.content,
        		"star":this.starNum,
        		"buyon":this.buyon,
        		"u_lastname":'',
        		"pro_type":'',
        		"name":''
        	}
			queryComment(comment).then(res => {
                this.commentList = res;
            }).catch(err => console.log(err))
		},
		//评分
        rating: function(index) {
            var total = this.stars.length; //星星总数
            var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量
            //进入if说明页面为初始状态
            if(this.starNum == 0) {
                this.starNum = idx;
                for(var i = 0; i < idx; i++) {
                    this.stars[i].src = this.starOnImg;
                    this.stars[i].active = true;
                }
            } else {
                //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                if(idx == this.starNum) {
                    for(var i = index; i < total; i++) {
                        this.stars[i].src = this.starOffImg;
                        this.stars[i].active = false;
                    }
                }
                //如果小于当前最高星级，则直接保留当前星级
                if(idx < this.starNum) {
                    for(var i = idx; i < this.starNum; i++) {
                        this.stars[i].src = this.starOffImg;
                        this.stars[i].active = false;
                    }
                }
                //如果大于当前星级，则直接选到该星级
                if(idx > this.starNum) {
                    for(var i = 0; i < idx; i++) {
                        this.stars[i].src = this.starOnImg;
                        this.stars[i].active = true;
                    }
                }

                var count = 0; //计数器-统计当前有几颗星
                for(var i = 0; i < total; i++) {
                    if(this.stars[i].active) {
                        count++;
                    }
                }
                this.starNum = count;
            }
        },
        //添加评论
        addcomment(){
        	var comment={
        		"com_id":0,
        		"time":'',
        		"like_number":0,
        		"cosmetic_id":this.$route.query.id,
        		"pro_id":this.$route.query.pro_id,
        		"u_id":this.userAll.u_id,
        		"content":this.content,
        		"star":this.starNum,
        		"buyon":this.buyon,
        		"u_lastname":'',
        		"pro_type":'',
        		"name":''
        	}
        	addComment(comment).then(res => {
                this.addComMsg = res;if(this.addComMsg==1)alert("谢谢您的支持，您的评论提交成功。");
            }).catch(err => console.log(err))
        },
        //显示添加评论
        toaddcomment(){
        	 window.location.hash = '#cm_btline';
        	 this.addcommentflag=true;
        }
	},
	mounted() {
        this.queryComment(1); //进入页面查询
    },
    computed: {
        ...mapGetters(['picture','name','userAll']) 						
        // 动态计算属性，相当于this.$store.getters.resturantName
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
	.content{
		height: 23px;
    	width: 85%;
    	color: #666;
    	font-size: 14px;
    	padding: 6px 15px;
    	border: 1px solid #bfbfbf;
    	background: #fff;
	}
	.first{
	    float: left;
    	width: 50%;
    	margin-bottom: 60px;
	}
	.secondary{
		float: right;
    	width: 41%;
    	margin-bottom: 30px;
	}
	.contenttitle{
		margin: 10px 10px 0 0;
    	float: left;
	}
	form h3{
		padding-top: 60px;
    	padding-bottom: 20px;
    	margin-bottom: 30px;
    	border-bottom: 2px solid #e0e0e0;
    	font-size: 16px;
    	color: #000;
    	font-weight: 700;
	}
	select {
    	width: 117px;
    	height: 35px;
	}
	.product_rating{
		margin: 23px 0 30px;
	}
	.secondary button{
		font-size: 14px;
    	color: #fff;
    	padding: 7px;
    	background: #000;
    	border: 1px solid #000;
    	width: 140px;
    	height: 35px;
	}
	.secondary button:hover{
		background: #666;
    	border: 1px solid #333;
	}
	.action{
		width: 100%;
    	text-align: left;
    	margin-top: 100px;
	}
</style>
