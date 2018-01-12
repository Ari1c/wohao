<template>
  <div class="app-con-nav">
      <div class="search-con"><input @click="toSerach" type="text" placeholder="请输入您所搜索的商品"><i class="fa fa-search"></i></div>
      <div class="nav-con">         
            <router-link to="">
                <i><img src="http://www.walhao.com/Template/mobile/new/Static/images/1440437165699930301.png" alt=""></i>
                <span>全部分类</span>
            </router-link>
            <router-link to="app-login">
                <i><img src="http://www.walhao.com/Template/mobile/new/Static/images/1440439335793850371.png" alt=""></i>
                <span>我的订单</span>
            </router-link>
            <router-link to="">
                <i><img src="http://www.walhao.com/Template/mobile/new/Static/images/1440439353048484531.png" alt=""></i>
                <span>购物车</span>
            </router-link>
            <router-link to="app-personal">
                <i><img src="http://www.walhao.com/Template/mobile/new/Static/images/1440439367001464442.png" alt=""></i>
                <span>个人中心</span>
            </router-link>
            <router-link to="">
                <i><img src="http://www.walhao.com/Template/mobile/new/Static/images/1440439257667525408.png" alt=""></i>
                <span>供应商入驻</span>
            </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'app-con-nav',
    methods: {
        toSerach () {
            this.$router.push({name: 'app-login'})
        }
    }
}
</script>

<style lang="scss" scoped>

    .app-con-nav{
        width: 100%;
        background: #fff;
        padding-bottom: 10px;
        .search-con{
            display: flex;
            height: 0.6rem;
            justify-content: center;
            padding-top:20px;
            
            input{
                border:none;
                height: 35px;
                width: 293px;
                padding-left:5px;
                border: 1px solid #CCC;
                border-radius: 5px 0 0 5px;
            }
            i{
              border: 1px solid #CCC;
              width: 35px;
              height: 35px;
              font-size: 30px; 
              border-left:none; 
              border-radius: 0 5px 5px 0;
              padding: 3px;
              color: #ccc;
            }
        }
        .nav-con{
            display: flex;
            justify-content: space-between;
            padding-top:5px;
            padding: 5px;
            a{
                display: flex;
                flex-flow: column;
                
                img{
                    width: 58px;
                    height: 58px;
                    margin-bottom:10px
                }
                span{
                    color: #616161;
                    font-size: 14px;
                }
            }
        }
    }
</style>
