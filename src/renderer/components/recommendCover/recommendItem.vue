<template>
  <div id="recommend">
    <div v-for="item in list">
      <div class="item">
        <div
          ref="musicBox"
          class="music"
          @mouseenter="showImgs(item)"
          @mouseleave="hiddenImgs(item)"
          @click="details"
        >
          <img :src="item.picUrl" alt="歌单封面" />
          <div class="btnImg" :style="{ opacity: item.isShowIcon ? 1 : 0 }">
            <i class="iconfont icon-play"></i>
          </div>
          <div
            :class="[
              'content-copy-writer',
              item.isShowIcon ? 'downAimation' : 'upAnimation',
            ]"
          >
            <div>{{ item.copywriter }}</div>
          </div>
        </div>

        <span @click="details">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import recommendJS from "./recommendItem";
export default {
  ...recommendJS,
};
</script>
<style lang="scss" scoped>
@import "./recommendItem";
@import url("//at.alicdn.com/t/font_2585248_z7kzr75ewi.css");
</style>