<template>
  <div class="app-main">
      <AppHeader></AppHeader>
      <AppBanner></AppBanner>
  </div>
</template>

<script>
import AppHeader from '../header/AppHeader'
import AppBanner from './AppBanner'
export default {
    name:'app-main',
    components:{
        AppHeader,AppBanner
    }
}
</script>

<style>

</style>
