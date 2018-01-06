<template>
  <div class="app-good-list">
      <div class="good-list-nav">
          <ul>
              <li @click="clearClass(nav.id)" v-for="nav in navs" :key="nav.id" :class="{'active': nav.isShow}">{{nav.content}}</li>      
        </ul>
      </div>

      <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from "../main/AppFooter"
export default {
    name:'app-good-list',
    components:{
        AppFooter
    },
    methods:{
        clearClass(id){
            this.navs.forEach (function(element){
               element.isShow=false;
               if(element.id === id){
                   element.isShow =true
               }
            });
        }
    
    },
    data:function(){
        return{
            navs:[
                {id:0,content:'',name:'',isShow:false},
                {id:1,content:'食品酒水',name:'',isShow:false},
                {id:2,content:'家具生活',name:'',isShow:false},
                {id:3,content:'个人化妆',name:'',isShow:false},
                {id:4,content:'精品服饰',name:'',isShow:false},
                {id:5,content:'珠宝首饰',name:'',isShow:false},
                {id:6,content:'箱包鞋靴',name:'',isShow:false},
                {id:7,content:'汽车用品',name:'',isShow:false},
                {id:8,content:'数码产品',name:'',isShow:false},
                {id:9,content:'运动户外',name:'',isShow:false},
                {id:10,content:'家用电器',name:'',isShow:false},
                {id:11,content:'母婴玩具',name:'',isShow:false},
                {id:12,content:'酒店餐饮',name:'',isShow:false},
                {id:13,content:'医药保健',name:'',isShow:false},
                {id:14,content:'古董字画',name:'',isShow:false},
                {id:15,content:'电子音像',name:'',isShow:false}
            ]
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .app-good-list{
        width: 100%;
        background: #fff;
        .good-list-nav{
            width: 25%;
            ul{
                padding-bottom: 100px;
                overflow: scroll;
                li{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    background-color: #fff;
                    border-top: 1px solid #f4f4f4;
                    font-size: 16px;
                    overflow: hidden;
                    text-align: center;
                }
                .active{
                        color: #DE3535;
                        border-left: 2px solid #DE3535;
                        background: #f4f4f4;
                }
            }
        }
    }
</style>
