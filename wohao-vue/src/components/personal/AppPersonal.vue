<template>
  <div class="app-personal">
      <app-personal-head></app-personal-head>
      <app-personal-foot></app-personal-foot>
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '../main/AppFooter'
import AppPersonalHead from './AppPersonalHead'
import AppPersonalFoot from './AppPersonalFoot'
export default {
    name:'app-personal',
    components:{
        AppFooter,AppPersonalHead,AppPersonalFoot
    }
}
</script>

<style lang="scss" scoped>

</style>
