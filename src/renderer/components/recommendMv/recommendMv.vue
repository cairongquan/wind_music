<template>
  <div id="re-mv-box">
    <home-title>最新推荐MV</home-title>
    <div class="content-main-box">
      <div
        class="content-item-box"
        v-for="(item, index) in reMvDataList"
        :key="index"
      >
        <div
          @mousemove="item.isShowMask = true"
          @mouseleave="item.isShowMask = false"
          class="cover-box"
        >
          <img
            :src="item.picUrl"
            :style="{ filter: item.isShowMask ? 'blur(2px)' : '' }"
          />
          <div
            :class="[
              'tags-box',
              item.isShowMask ? 'downAnimation' : 'upAnimation',
            ]"
          >
            <div class="tags-box-child-box">
              {{ item.copywriter }}
            </div>
          </div>
        </div>
        <div class="mv-info-box">
          <span class="mv-name">{{ item.name }}</span>
          <span class="artistName-box">{{ item.artistName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recommendMvJS from "./recommendMv.js";
import homeTitleComVue from "../../components/homeTitleCom/homeTitleCom.vue";
export default {
  components: {
    "home-title": homeTitleComVue,
  },
  ...recommendMvJS,
};
</script>

<style lang="scss" scoped>
@import "./recommendMv.scss";
</style>
