<template>
  <div>
    <button class="btn" @click="show">弹出</button>
    <modal
      title="小星星"
      sureText="确定"
      btnType="1"
      :showModal="showModal"
      @submit="go"
      @cancle="showModal=false"
    >
      <template v-slot:body>
        <p>给个小星星吧</p>
      </template>
    </modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    go() {
      alert("hello");
    },
    show() {
      this.showModal = true
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../assets/scss/mixin.scss';
.btn{
  @include position(absolute, 40%, 50%, 110px, auto);
}
</style>
