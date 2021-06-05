<template>
  <div id="main-songSheet-box">
    <!--    专辑头部信息-->
    <header id="main-header-songSheet-box">
      <!--      歌单封面region-->
      <div class="header-cover-image-box">
        <img :src="songSheetData.playlist.coverImgUrl" alt="专辑封面">
      </div>
      <!--      歌单简介region -->
      <div class="song-sheet-introduction-box">
        <!--          歌单名称-->
        <div class="song-name-box">
          <div class="song-name-box-tag">歌单</div>
          <span>{{ songSheetData.playlist.name }}</span>
        </div>
        <!--        创建者名称-->
        <div class="song-name-creater-box">
            <div class="user-headPortrait-box"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import songSheetJs from './songSheetView.js';

export default {
  ...songSheetJs
}
</script>


<style lang="scss" scoped>
@import "./songSheetView.scss";
</style>