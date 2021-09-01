<template>
  <div id="playBox">
    <div class="musicInfo">
      <img :src="musicInfo.al.picUrl" />
      <div class="musicInfo_title">
        {{ musicInfo.al.name }}
      </div>
    </div>
    <div class="playBox-controllBox">
      <div class="controllBox-play controllBox" @click="playEvent">
        <i :class="['iconfont', isPlay ? 'icon-zanting' : 'icon-bofang']"></i>
      </div>
    </div>
    <audio ref="audioDom" :src="this.playPath"></audio>
  </div>
</template>

<script>
import playPageJS from "./playPage";
export default {
  ...playPageJS,
};
</script>

<style lang="scss" scoped>
@import "./playPage.scss";
</style>
