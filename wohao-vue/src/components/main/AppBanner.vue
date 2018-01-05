<template>
  <div class="app-banner swiper-container">
      
      <div class="swiper-wrapper">
            <div v-for="billboard in billboards" :key="billboard.id" class="swiper-slide">
                <img width="100%" height="153px" :src="billboard.imageUrl" :title="billboard.name" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
    name:'app-banner',
    data:function(){
        return {
            billboards:[]
        }
    },
    methods:{
        getDate(){
            let that = this;
            axios.get('/czm/v4/api/billboard/home',{
                params:{__t:Date.now()}
            }).then((response)=>{
                that.billboards = response.data.data.billboards
            })
        }
    },
    created(){
        this.getDate()
    },
    updated(){
        new Swiper ('.app-banner',{
            loop:true,
            autoplay:{
                delay:1500
            }
        })
    }
}
</script>

<style lang="scss">
    .app-banner{
        height: 153px;
    }
</style>
