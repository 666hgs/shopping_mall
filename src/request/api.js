import { get, post,post2 } from './http'


//接口名 apiAddress   	参数为p         接口地址
export const apiAddress = p => post('/user/query_myself_2', p);
export const getHot =() =>post('/main/hot');

/* 产品详情 */
export const queryCommodity = p =>post('/Com/querySingerCom',p);

/* 购物车 */
export const  queryCart = u_id => post('/Com/queryCartList',u_id);  //查询购物车
export const  addCart = com_id => post('/Com/addCartList',com_id);  //添加到购物车
export const  delCart = (product_id,u_id) => post2('/Com/delCart',product_id,u_id); //删除购物车
export const  cleanCart = (u_id,key) => post2('/Com/cleanCart',u_id,key); //清空购物车
export const  partCart = (u_id,key) => post2('/Com/partCart',u_id,key); //部分删除

export const queryOrderList =p =>post2('/order/orderList',p);
export const queryOrderAll =p =>post2('/order/queryOrderAll',p);
export const queryCosmetics =() =>post2('/cosmetics/cosmeticsList');
export const querySkinCare =() =>post2('/skinCare/skinCareList');
export const queryPerfume =() =>post2('/perfume/perfumeList');
export const queryComment =p =>post('/comment/getComment',p);
//添加评论
export const addComment =p =>post('/comment/addComment',p);
