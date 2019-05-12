import { get, post, post2 } from './http'

//接口名 apiAddress   	参数为p         接口地址
export const apiAddress = p => post('/user/query_myself_2', p);
export const login = p => post('/user/login', p); 
export const register = p => post('/user/register', p);
export const phoneverifyapi = p => post('/user/phoneverif', p);
export const phonecodverifyapi = p => post2('/user/phonecodverify', p);
export const sendphonecodeapi = p => post2('/user/sendphonecode', p);
// export const user_updateapi = p => post('/user/user_update', p);
export const pwdoldverifyapi = p => post2('/user/pwdoldverify', p);
export const user_updatepwdapi = p => post('/user/user_updatepwd', p);
export const address_delapi = p => post2('/user/address/del', p);
export const address_addapi = p => post('/user/address/add', p);
export const address_updapi = p => post('/user/address/upd', p);
export const userinfoupdateapi = p => post('/user/userinfoupdate', p);
export const morenaddrapi = p => post('/user/morenaddr', p);
