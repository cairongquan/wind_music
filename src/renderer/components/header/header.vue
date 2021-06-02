<template>
  <div id="main-header">
    <div class="btns-show-box">
      <div class="min-btn btn" @click="miniWindowEvent"></div>
      <div class="close-btn btn" @click="closeWindowEvent"></div>
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
@import url(//at.alicdn.com/t/font_2585248_8q19fz3hm56.css);
</style>
