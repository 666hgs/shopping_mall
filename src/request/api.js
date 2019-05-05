import { get, post } from './http'

//接口名 apiAddress   	参数为p         接口地址
export const apiAddress = p => post('/user/query_myself_2', p);
export const getHot =() =>post('/main/hot');
export const queryOrderList =p =>post('/order/orderList',p);
export const queryOrderAll =() =>post('/order/queryOrderAll');