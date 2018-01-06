import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/main/AppMain'
import AppRegister from '@/components/register/AppRegister'
import AppLogin from '@/components/login/AppLogin'
import AppGoodList from '@/components/goodlist/AppGoodList'

import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name:'main',component:AppMain},
    {path:'/app-login',name:'app-login',component:AppLogin},
    {path:'/app-register',name:'app-register',component:AppRegister},
    {path:'/app-good-list',name:'app-good-list',component:AppGoodList}
  ]
})
