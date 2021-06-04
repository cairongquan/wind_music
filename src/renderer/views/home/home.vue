<template>
  <div id="main-box">
    <div class="main-content">
      <!-- 轮播图 -->
      <banner-com></banner-com>
      <!-- 推荐专辑 -->
      <re-cover></re-cover>
      <!-- 推荐音乐 -->
      <re-music></re-music>
      <!-- 独家放送 -->
      <exclusive-broad-cast></exclusive-broad-cast>
      <!-- 推荐MV -->
      <re-mv></re-mv>
    </div>
  </div>
</template>

<script>
//组件注册区域
import bannerCom from "../../components/banner/banner.vue";
import reMusic from "../../components/recommendedMusic/recommendedMusic.vue";
import reCover from "../../components/recommendCover/recommendItem.vue";
import exclusiveBroadCast from "../../components/exclusiveBroadcast/exclusiveBroadcast.vue";
import reMv from "../../components/recommendMv/recommendMv.vue";

import homeJS from "./home";
export default {
  components: {
    "banner-com": bannerCom,
    "re-music": reMusic,
    "re-cover": reCover,
    "exclusive-broad-cast": exclusiveBroadCast,
    "re-mv": reMv,
  },
  ...homeJS,
};
</script>

<style lang="scss" scoped>
@import "./home.scss";
</style>
