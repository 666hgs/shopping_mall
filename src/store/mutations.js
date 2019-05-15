//提交Mutation是更改vuex状态得唯一合法方法
//mutations相当于 Java的service
export const query_nav_msg =(state, nav_msg)=>{ 
		state.nav_msg=nav_msg;		//把传递过来的参数 赋值给state
}

export const query_userAll =(state, userAll)=>{ 
	
		state.userAll=userAll;		//把传递过来的参数 赋值给state

}

export const gettoken =(state, token)=>{ 
	
		state.token = token;		//把传递过来的参数 赋值给state
}
export const getPicture =(state, picture)=>{ 
		state.picture=picture;	
}
export const getName =(state, name)=>{ 
		state.name=name;
}