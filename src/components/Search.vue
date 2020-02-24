<template>
  <div class="about">
    <div class="container">
      <i-input class="search" size="large" v-model="searchData" placeholder="输入商品关键词">
        <Button class="searchButton" slot="append" icon="ios-search" @click="search" />
      </i-input>
      <Tag
        v-for="(item, idx) in promotionTags"
        :key="idx"
        checkable
        closable
        @on-change="selectTags(idx)"
        @on-close="handleClose(idx)"
      >{{ item }}</Tag>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      show: true,
      searchData: "",
      promotionTags: [
        "买二减一",
        "领200神券",
        "199减1000",
        "母婴5折抢",
        "充一百送200"
      ]
    };
  },
  methods: {
    search() {
      // console.log(this.searchData);
      this.$router.push(`/search/${this.searchData}`)
      // this.$router.push({
      //   path: '/search',
      //   query:{
      //     keyword: this.searchData
      //   }
      // })
    },
    selectTags(index) {
      console.log(index);
      this.searchData = this.promotionTags[index];
    },
    handleClose(name) {
      const index = this.promotionTags.indexOf(name);
      this.promotionTags.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.container {
  padding-top: 15px;
  margin: 0 auto;
  margin-bottom: 1px;
  width: 460px;
}
.search{
  margin: 5px 0;
}
</style>
