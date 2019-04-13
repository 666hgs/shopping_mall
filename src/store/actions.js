
// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)

// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
/* export function modifyAName({commit}, name) { // commit 提交；name即为点击后传递过来的参数，此时是 'A'
    return commit ('modifyAName', name)
} */


/* export const query_nav_msg=({commit},uid)=> commit('query_nav_msg',uid) */
//action 相当于java中的controller
			//暴露给外面的接口名                         （执行mutation对应的函数名称，参数）
export const query_nav_msg=({commit},nav_msg)=> commit('query_nav_msg',nav_msg)