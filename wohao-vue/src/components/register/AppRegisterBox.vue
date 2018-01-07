<template>
  <div class="app-register-box">
      <form action="">
        <input v-model="register.tel" type="text" placeholder="手机号">
        <input v-model="register.email" type="text" placeholder="邮箱">
        <input v-model="register.password" type="password" placeholder="密码">
        <input v-model="register.qrpassword" type="password" placeholder="确认密码">
        <button @click="registers({username:register.tel,password:register.password})">注&nbsp;册</button>
      </form>
  </div>
</template>

<script>
import {mapMutations} from '../../vuex/store.js'
export default {
  name:'app-register-box',
  data(){
    return{
      register:{
        tel:'',email:'',password:'',qrpassword:''
      }
    }
  },
  methods:{
    registers(params){

      this.$store.commit('AppRegister',params)
      this.$router.push({name:'app-login'})
    }
  }
}
</script>

<style lang="scss" scoped>
    .app-register-box{
      form{
        width: 100%;
        margin-top:15px;
        padding: 15px;
        input{
          padding-left: 9px;
          display: block;
          height: 36px;
          width: 96%;
          margin: auto;
          border: solid 1px #DDD;
          color: #333333;
          font-size: 14px;
          background: #ffffff;
          margin-top: 20px;         
        }
        button{
          display: block;
          height: 40px;
          width: 96%;
          margin: auto;
          border: none;
          color: #fff;
          font-size: 16px;
          border-radius: 5px;
          background: #ffffff;
          margin-top: 40px;
          background: #FF2233;
        }
      }
      
    }
</style>
