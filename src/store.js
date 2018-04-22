const STORAGE_KEY = "todos_vuejs";
export default{
    fetch(){
        return JSON.parse(localStorage.getItem(STORAGE_KEY)||[]);

    },
    save(items){
        localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
    }
}