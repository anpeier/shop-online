<template>
  <div id="app" class="container">
    <!-- <search /> -->
    <router-view/>
  </div>
</template>
<script>
// import Search from './components/Search'
export default {
  components:{
    // Search
  }
}
</script>
<style lang="scss">
@import './assets/scss/button.scss';
*{
  margin: 0;
  padding: 0;
}
#app{
  padding: 0 15px;
}
</style>
