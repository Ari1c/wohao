

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state= {
    user_info:{}

    
}

const mutations ={
    AppRegister(state,user_info){
        state.user_info = user_info
        localStorage.user_info = JSON.stringify(user_info)
    },
    changeUserInfo(state,user_info){
        state.user_info = user_info
        localStorage.user_info = JSON.stringify(user_info)

    },
    exit(state){
        state.user_info = {}
        localStorage.removeItem('user_info')
    }
}



const store = new Vuex.Store({
    state,mutations
})
export default store