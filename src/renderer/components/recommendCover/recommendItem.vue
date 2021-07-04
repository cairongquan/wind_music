<template>
  <div class="main-out-box">
    <home-title :pageUrl="'/allSongSheet'">每日推荐歌单</home-title>
    <div id="recommend">
      <div
        class="main-item-box"
        @click="jumpToSheetInfoEvent(item)"
        v-for="(item, index) in list"
        :key="index"
      >
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
  </div>
</template>
<script>
import homeTitleCom from "../homeTitleCom/homeTitleCom.vue";
import recommendJS from "./recommendItem";

export default {
  components: {
    "home-title": homeTitleCom,
  },
  ...recommendJS,
};
</script>
<style lang="scss" scoped>
@import "./recommendItem";
</style>
