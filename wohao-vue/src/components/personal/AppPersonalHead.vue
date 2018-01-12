<template>
  <div class="app-personal-head">
      <div class="com-top">
          <p><router-link to="">设置</router-link></p>
          <div>
              <img src="http://www.walhao.com/Template/mobile/new/Static/images/user68.jpg" title="头像" alt="">
              <span>注册会员</span>
          </div>
      </div>
      <div class="com-mid">
          <ul>
              <li>
                  <a href="">
                      <span>0</span>
                      <i>我的订单</i>
                  </a>
              </li>
              <li>
                  <a href="">
                      <span>0</span>
                      <i>我的收藏</i>
                  </a>
              </li>
              <li>
                  <a href="">
                      <span>0</span>
                      <i>我的评价</i>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
    name:'app-personal-head',
    
}
</script>

<style lang="scss" scoped>
    .app-personal-head{
        width: 100%;
        .com-top{
            width: 100%;
            height: 1.6rem;
            background: #EC8816;
            margin: 0;padding:0;
            position: relative;
            p{            
                overflow: hidden;
                margin: 0;
                a{
                    width: 50px;
                    display: block;
                    background-color: rgba(28,27,26,0.6);
                    font-size: 14px;
                    line-height: 30px;
                    color: #FFF;
                    margin-top: 8px;
                    float: right;
                    margin-right: 10px;
                    -webkit-border-radius: 10px;
                    -moz-border-radius: 10px;
                    border-radius: 20px;
                    text-align: center;
                    font-weight: normal;                   
                }
            }
            div{
                position: absolute;
                width: 100%;
                top:130px;
                img{
                display: block;
                width: 80px;
                height: 80px;
                margin-left: 15px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                float: left;
            }
            span{
                float: right;
                font-size: 14px;
                color: #fff;
                text-align: right;
                padding-right: 10px;
                margin-left: -10px;
                margin-top:10px;
            }
            }
        }
        .com-mid{
                width: 100%;
                height: 60px;
                background: #FFF;
                border-bottom: 1px solid #dddcdc;
            ul{
                width: 70%;
                height: 40px;
                padding-top: 10px;
                float: right;
                li{
                    width: 33%;
                    float: left;
                    line-height: 20px;
                    color: #666;
                    text-align: center;
                    a{
                        display: block;
                        width: 100%;
                        overflow: hidden;
                        font-size: 12px;
                        
                        
                        span{
                            display: block;
                            width: 100%;
                            height: 20px;
                            font-size: 16px;
                            line-height: 20px;
                            color: #666; 
                        }
                    }
                    
                }
                li:nth-child(2){border-right: 1px solid #eee;border-left: 1px solid #eee;}
            }
        }
    }
</style>
