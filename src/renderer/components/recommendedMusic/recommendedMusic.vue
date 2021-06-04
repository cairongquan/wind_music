<template>
  <!-- 推荐音乐 -->
  <div id="main-box-reMusic">
  <home-title-com>最新音乐</home-title-com>
    <div class="content-show-list-box">
      <div class="main-content-show-box">
        <div
          @mousemove="item.isShowPlayIcon = true"
          @mouseleave="item.isShowPlayIcon = false"
          class="content-item-box"
          v-for="(item, index) in reMuisicData"
          :key="index"
        >
          <div class="music-cove-main-box">
            <img :src="item.picUrl" alt="歌曲封面" class="music-cover-box" />
            <div
              class="play-icon"
              :style="{
                backdropFilter: item.isShowPlayIcon ? 'blur(2px)' : '',
              }"
            >
              <i
                class="iconfont icon-play"
                :style="{ opacity: item.isShowPlayIcon ? 1 : 0 }"
              ></i>
            </div>
          </div>
          <!-- 歌曲简介 -->
          <div class="music-info-box">
            <div class="music-name">
              {{ item.song.name }}
              <span class="music-name-v">{{ item.realName }}</span>
            </div>
            <div class="music-artists">
              <span class="music-artists-text">{{ item.realArtistsName }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reMuisicJS from "./recommendedMusic";
import homeTitleCom from "../homeTitleCom/homeTitleCom.vue";
export default {
  components:{
    "home-title-com":homeTitleCom
  },
  ...reMuisicJS,
};
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_2585248_z7kzr75ewi.css");
@import "./recommendedMusic.scss";
</style>
