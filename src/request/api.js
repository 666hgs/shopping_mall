import { get, post,post2 } from './http'

//接口名 apiAddress   	参数为p         接口地址
export const apiAddress = p => post('/user/query_myself_2', p);
export const getHot =() =>post('/main/hot');
export const queryOrderList =p =>post2('/order/orderList',p);
export const queryOrderAll =p =>post2('/order/queryOrderAll',p);
export const queryProduct =p =>post('/product/prodductList',p);
export const queryComment =p =>post('/product/comment',p);


