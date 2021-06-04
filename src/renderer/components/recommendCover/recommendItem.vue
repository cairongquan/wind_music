<template>
  <div>
    <home-title>每日推荐歌单</home-title>
    <div id="recommend">
      <div v-for="(item, index) in list" style="height: 220px" :key="index">
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
@import url("//at.alicdn.com/t/font_2585248_z7kzr75ewi.css");
</style>
