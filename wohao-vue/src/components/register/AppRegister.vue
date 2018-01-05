<template>
  <div class="app-register">
      <mt-header title="会员注册">
            <router-link to="/app-login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
    </mt-header>
    <AppRegisterBox></AppRegisterBox>
  </div>
</template>

<script>
import AppRegisterBox from './AppRegisterBox'
export default {
    name:'app-register',
    components:{
        AppRegisterBox
    }
}
</script>

<style lang="scss" scoped>
    .app-register{
            .mint-header{
                    background: #F6F6F6;
                    color: #333;
                    font-size: 16px;
                    border-bottom: 1px solid #CCC;
            }
            .mintui-back{
                font-size:18px;
            }
    }
</style>
