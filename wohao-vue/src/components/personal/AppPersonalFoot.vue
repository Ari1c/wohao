<template>
  <div class="app-personal-foot">
      <div class="empty"></div>
      <div class="mine">
          <router-link to="">
              <div class="all">
                  <i><img src="../../../static/images/pic_03.png" alt=""></i>
                 <span>全部订单</span>
              </div>
              <div class="look">
                  <span>查看订单</span>
                  <i class="fa fa-angle-right"></i>
              </div>
          </router-link>
            <router-link to="">
              <div class="all">
                  <i><img src="../../../static/images/pic_06.png" alt=""></i>
                 <span>我的收藏</span>
              </div>
              <div class="look">                 
                  <i class="fa fa-angle-right"></i>
              </div>
          </router-link>
      </div>
      <div class="mine">
          <router-link to="">
              <div class="all">
                  <i><img src="../../../static/images/pic_08.png" alt=""></i>
                 <span>地址管理</span>
              </div>
              <div class="look">
                  <span></span>
                  <i class=""></i>
              </div>
          </router-link>
            <router-link to="">
              <div class="all">
                  <i><img src="../../../static/images/pic_10.png" alt=""></i>
                 <span>售后服务</span>
              </div>
              <div class="look">                 
                  <i class=""></i>
              </div>
          </router-link>
      </div>
      <div class="destory">
        <router-link to="">
                <div class="all">
                    <i><img src="../../../static/images/pic_12.png" alt=""></i>
                    <span>注销登录</span>
                </div>
        </router-link>
      </div>
      <div class="perfoot">

      </div>
  </div>
</template>

<script>
export default {
    name:'app-personal-foot'
}
</script>

<style lang="scss" scoped>
    .app-personal-foot{
        width:100%;
        .empty{
           width: 100%;
            background: #FFF;
            overflow: hidden;
            border-bottom: 1px solid #dddcdc;
            margin-top: 10px;
            position: relative 
        }
        .mine{
            width: 100%;
            background: #FFF;
            overflow: hidden;
            border-bottom: 1px solid #dddcdc;
            margin-top: 10px;
            position: relative;
            a{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 0.46rem;
                padding: 10px;
                border-bottom: 1px solid #eeeeee;
                .all{
                    font-size: 16px;
                    color: #666;
                    display: flex;
                    align-items: center;
                    span{padding-left: 5px;}                   
                }
                .look{
                    font-size: 12px;
                    color: #aaaaaa;
                    i{
                        padding-left: 5px;
                    }
                }
            }
        }
        .destory{
            background: #FFF;
            margin-top: 10px;
            border-bottom: 1px solid #dddcdc;
            a{
               display: flex;
                justify-content: space-between;
                align-items: center;
                height: 0.46rem;
                padding: 10px;
                border-bottom: 1px solid #eeeeee;
                .all{
                    font-size: 16px;
                    color: #666;
                    display: flex;
                    align-items: center;
                    span{padding-left: 5px;}
                } 
            }
        }
        .perfoot{
            background: #fff;
            height: 1.5rem;
            overflow: hidden;
            
        }
    }
</style>
