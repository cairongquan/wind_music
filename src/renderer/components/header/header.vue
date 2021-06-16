<template>
  <div id="main-header">
    <div class="logo-header-bxo">
      <img :src="headerLogo" />
    </div>
    <div class="btns-show-box">
      <div class="min-btn btn" @click="miniWindowEvent">
        <i class="iconfont icon-suoxiao"></i>
      </div>
      <div class="close-btn btn" @click="closeWindowEvent">
        <i class="iconfont icon-quxiao"></i>
      </div>
    </div>
  </div>
</template>

<script>
import headerJS from "./header.js";
export default {
  ...headerJS,
};
</script>

<style lang="scss" scoped>
@import "./header.scss";
@import url(//at.alicdn.com/t/font_2585248_izehd6db7fg.css);
</style>
