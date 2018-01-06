<template>
  <div class="app-main">
      <AppHeader></AppHeader>
      <AppBanner></AppBanner>
      <AppCon></AppCon>
  </div>
</template>

<script>
import AppHeader from '../header/AppHeader'
import AppBanner from './AppBanner'
import AppCon from '../content/AppCon'
export default {
    name:'app-main',
    components:{
        AppHeader,AppBanner,AppCon
    }
}
</script>

<style>

</style>
