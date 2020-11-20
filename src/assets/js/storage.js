var Storage = {
    putValue(key,value){
        window.localStorage.setItem(key,value)
    },
    getValue(key){
        return window.localStorage.getItem(key)
    }
}
export default Storage
