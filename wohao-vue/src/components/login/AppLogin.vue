<template>
  <div class="app-login">
      <div>
          <router-link to="/"><i class="fa fa-angle-left"></i></router-link>
          <span>会员登录</span>
      </div>
      <app-login-box></app-login-box>
      
  </div>
</template>

<script>
import AppLoginBox from './AppLoginBox'
export default {
    name:'app-login',
    components:{
        AppLoginBox
    }
}
</script>

<style lang="scss" scoped>
    .app-login{
        width: 100%;
        height: 45px;
        background: #F6F6F6;
        top: 0;
        z-index: 9999;
        border: 0;
        border-bottom: 1px solid #CCC;
        text-align: center;
        i{
            float: left;
            font-size: 28px;
            padding:8px 0 10px 10px; 
            display: block;
            height: 15px;
            line-height: 30px;
        }
        span{
            font-size: 16px;
            line-height: 45px;
        }
    }
</style>
