<template>
  <div id="playBox">
    <div class="musicInfo">
      <img :src="musicInfo.al.picUrl" />
      <div class="musicInfo_titke">
        {{ musicInfo.al.name }}
      </div>
    </div>
    <div class="playBox-controllBox">
      <div class="controllBox-play controllBox">
        <i :class="['iconfont', isPlay ? 'icon-zanting' : 'icon-bofang']"></i>
      </div>
    </div>
  </div>
</template>

<script>
import playPageJS from "./playPage";
export default {
  ...playPageJS
}
</script>

<style lang="scss" scoped>
@import "./playPage.scss";
</style>