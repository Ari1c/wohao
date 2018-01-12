<template>
  <div class="app-login-box">
      <div class="login-con">
          <div class="login">
          用户名：<input v-model="login.username" type="text" placeholder="请输入ID/邮箱/手机号">
      </div>
      <div class="login-password">
          密码：<input v-model="login.password" type="password" placeholder="密码">
      </div>
      <button class="login-btn" type="submit" @click="logins({username:login.username,password:login.password})">登&nbsp;录</button>
      <div class="auto">
          <span><input type="checkbox" checked>自动登录</span>
          <router-link to="app-register">免费注册</router-link>
      </div>
      </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import AppRegister from '../register/AppRegister'
import AppPersonal from '../personal/AppPersonal'
export default {
    name:'app-login-box',
    data(){
        return {
           login:{username:'',password:''} 
        }
    },
    methods:{
        logins(data){
            let that = this
            var user_info = JSON.parse(localStorage.user_info)
            setTimeout(()=>{
               if(user_info.username == data.username && user_info.password == data.password){
                   Toast('登陆成功')
                //    that.$router.push({name:'/'})
                        that.$router.replace({name:'main'})
                        // that.$router.replace({name:'app-personal'})
               }else{
                   Toast('登陆失败')
               }
            },500)
        }
    },
    components:{
        AppRegister,AppPersonal
    }
}
</script>

<style lang="scss" scoped>
    .app-login-box{

        width: 100%;
        .login-con{
            width: 90%;
            margin: auto;
        }
        .login,.login-password{
            color: #666;
            line-height: 32px;
            display: flex;
            padding: 15px;
            margin-top: 5px;
            justify-content: space-around;
            input{
                padding-left:5px;
                border: 1px solid #DFDFDF;
                height: 30px;
                width: 247px;
            }
        }
        button{
            display: block;
            height:40px;
            font-size: 16px;
            background: #FF2233;
            border: none;
            border-radius: 5px;
            color: #fff;
            width: 100%;
            line-height: 40px;
            margin: auto;
        }
        .auto{
            display: flex;
            justify-content: space-between;
            margin-top:20px;
            a{
                color: #5790bb;
            }
        }
        
    }

</style>
