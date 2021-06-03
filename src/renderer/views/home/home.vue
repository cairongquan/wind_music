<template>
  <div id="main-box">
    <div class="main-content">
      <!-- 轮播图 -->
      <banner-com></banner-com>
      <!-- 推荐音乐 -->
      <re-music></re-music>
    </div>
  </div>
</template>

<script>
//组件注册区域
import bannerCom from "../../components/banner/banner.vue";
import reMusic from "../../components/recommendedMusic/recommendedMusic.vue";

import homeJS from "./home";
export default {
  components: {
    "banner-com": bannerCom,
    "re-music": reMusic,
  },
  ...homeJS,
};
</script>

<style lang="scss" scoped>
@import "./home.scss";
</style>
