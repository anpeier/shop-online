<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancle')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType==2"
            @click="$emit('cancle')"
          >{{cancleText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('submit')">{{cancleText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    // 弹框类型 大large，中middle，小small，表单form
    modalType: {
      type: String,
      default: "form"
    },
    // 弹框标题
    title: String,
    // 按钮类型： 1：确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    // 按钮文本
    sureText: {
      type: String,
      default: "确定"
    },
    cancleText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.modal {
  z-index: 10;
  @include position(fixed);
  transition: all 0.5s;
  .mask {
    @include position(fixed);
    background-color: #000000;
    opacity: 0.5;
  }
  &.slide-enter-active {
    top: 0;
  }
  &.slide-leave-active {
    top: -100%;
  }
  &.slide-enter {
    top: -100%;
  }
  .modal-dialog {
    @include position(absolute, 40%, 50%, 560px, auto);
    background-color: #ffffff;
    transform: translate(-50%, -50%);
    .modal-header {
      height: 60px;
      background-color: #F5F5F5;
      padding: 0 25px;
      line-height: 60px;
      font-size: 16px;
      .icon-close {
        @include positionImg(absolute,23px,25px,14px,14px,"/static/img/icon-close.png");
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
    .modal-body {
      padding: 42px 40px 54px;
      font-size: 14px;
    }
    .modal-footer {
      height: 82px;
      line-height: 82px;
      text-align: center;
      background-color: #F5F5F5;
    }
  }
}

</style>