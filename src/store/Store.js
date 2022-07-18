import {makeAutoObservable} from "mobx";

class Store{

    logining = false

    menu = false

    constructor() {
        makeAutoObservable(this)
    }

    logIn(){
        this.logining = true
        console.log('выполнено')
    }

    menuHide(){
        this.menu = false
    }
    menuShow(){
        this.menu = true
    }

}

export default new Store();