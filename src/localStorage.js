const STORAGE_KEY='Cart'   //key值
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    },
	remove(){
		window.localStorage.removeItem(STORAGE_KEY);
	}
}