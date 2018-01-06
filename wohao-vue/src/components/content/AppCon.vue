<template>
  <div class="app-con">
      <app-con-nav></app-con-nav>
      <app-con-list></app-con-list>
  </div>
</template>

<script>
import AppConNav from './AppConNav'
import AppConList from './AppConList'
export default {
    name:'app-con',
    components:{
        AppConNav,AppConList
    }
}
</script>

<style>

</style>
