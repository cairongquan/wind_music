<template>
  <div id="main-box">
    <div class="main-content">
      <banner-com></banner-com>
    </div>
  </div>
</template>

<script>
//组件注册区域
import bannerCom from '../../components/banner/banner.vue'
import homeJS from "./home";
export default {
  components:{
    "banner-com":bannerCom
  },
  ...homeJS,
};
</script>

<style lang="scss" scoped>
@import "./home.scss";
</style>
