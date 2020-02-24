<template>
  <div id="app" class="container">
    <search />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/form">Form</router-link>|
      <router-link to="/signup">SignUp</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Search from './components/Search'
export default {
  components:{
    Search
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  padding: 0 15px;
}
</style>
