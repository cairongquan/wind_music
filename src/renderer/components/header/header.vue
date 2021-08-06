<template>
  <div id="main-header">
    <div class="logo-header-bxo">
      <!-- <img :src="headerLogo"/> -->
      <i class="iconfont icon-yinle"></i>
    </div>

    <!-- 路由导航区域 -->
    <div class="router-show-box">
      <!-- 返回按钮 -->
      <div class="arrow-box" @click="backArrowBtnEvent">
        <i style="font-size:15px;" class="iconfont icon-a-jiantou1"></i>
      </div>
      <div class="arrow-box" @click="preArrowBtnEvent">
        <i style="font-size:15px;" class="iconfont icon-a-jiantou"></i>
      </div>
    </div>
    <!-- 右侧操作栏 -->
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
@import url("//at.alicdn.com/t/font_2585248_ob337blrsb.css");
@import "./header.scss";
</style>
