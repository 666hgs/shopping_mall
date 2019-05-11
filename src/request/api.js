import { get, post ,posts} from './http'

//接口名 apiAddress   	参数为p         接口地址
export const apiAddress = p => post('/user/query_myself_2', p);
export const getHot =() =>post('/main/hot');
export const queryOrderList =p =>post('/order/orderList',p);
export const queryOrderAll =() =>post('/order/queryOrderAll');

/* 产品详情 */
export const queryCommodity = id =>post('/Com/querySingerCom',id);

/* 购物车 */
export const  queryCart = u_id => post('/Com/queryCartList',u_id);  //查询购物车
export const  addCart = com_id => post('/Com/addCartList',com_id);  //添加到购物车
export const  delCart = (product_id,u_id) => posts('/Com/delCart',product_id,u_id); //删除购物车
export const  cleanCart = (u_id,key) => posts('/Com/cleanCart',u_id,key); //清空购物车
export const  partCart = (u_id,key) => posts('/Com/partCart',u_id,key); //部分删除