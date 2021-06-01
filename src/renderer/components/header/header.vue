<template>
  <div id="main-header">
    <div class="btns-show-box">
      <div class="close-btn btn" @click="ok">
        <!-- <i class="iconfont icon-quxiao"></i> -->
      </div>
      <div class="max-btn btn">
        <!-- <i class="iconfont icon-jiahao"></i> -->
      </div>
      <div class="min-btn btn">
        <!-- <i class="iconfont icon-suoxiao"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowMaxIcon: false,
      isShowMixIcon: false,
      isShowCloseICon: false,
    };
  },
  methods: {
    ok() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./header.scss";
@import url(//at.alicdn.com/t/font_2585248_8q19fz3hm56.css);
</style>
