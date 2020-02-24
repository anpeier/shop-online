<template>
  <h3>{{keyword}}</h3>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  mounted() {
    this.keyword = this.$route.params.keyword;
    // console.log(this.$route.query.keyword)
  }
};
</script>

<style>
</style>