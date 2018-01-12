<template>
  <div class="app-footer">
      <ul>
          <li>
              <i class="fa fa-home"></i>
             <router-link to="/">首页</router-link>  
          </li>
          <li>
              <i class="fa fa-map-pin"></i>
              <router-link to="">沃好客服</router-link>
          </li>
          <li>
            <i class="fa fa-list"></i>
            <router-link to="app-good-list">分类</router-link>
          </li>
          <li>
              <i class="fa fa-cart-plus"></i>
              <router-link to="">购物车</router-link>
          </li>
          <li>
              <i class="fa fa-user-o"></i>
             <!-- <router-link to="app-login">我的</router-link> -->
             <a @click="skip('app-login')">我的</a>
          </li>
      </ul>
  </div>
</template>

<script>
import AppRegister from '../register/AppRegister'
export default {
    name:'app-footer',
    components:{
        AppRegister
    },
    methods:{
        skip(name){
            this.$router.push('app-login')
            var name_info = JSON.parse(localStorage.user_info)
               console.log(name_info)
            name_info.username?this.$router.push('app-personal'):this.$router.push('app-login')
               console.log(name)
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-footer{
        width: 100%;
        height: 45px;
        background: #f5f5f5;
        border-top: 1px solid #f6f6f6;
        opacity: 0.8; 
        position: fixed;
        bottom: 0;left:0;
        ul{
            display: flex;
            justify-content: space-around;    
            li{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                height: 45px;             
                font-size: 13px;
                margin: auto;               
                color: #333;
                i{
                    color: #333;
                    font-size: 20px;
                    color: #333;
                }
                a{
                    font-size: 13px;
                    line-height: 13px;
                    height: 20px;
                }

            }
        }
    }
</style>
