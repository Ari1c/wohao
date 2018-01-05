<template>
  <div class="app-header">
      <router-link to=""><i class="fa fa-list"></i></router-link>
      <span>沃好商城</span>
      <router-link to=""><i class="fa fa-cart-plus"></i></router-link>
      <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from '../main/AppFooter'
export default {
    name:'app-header',
    components:{
        AppFooter
    }
}
</script>

<style lang="scss">
    .app-header{
        padding: 15px;
        background:red;
        color: #fff;
        width: 100%;
        height: 45px;
        font-size: 18px;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            font-size: 25px;
            color: #fff;
        }
    }
</style>
