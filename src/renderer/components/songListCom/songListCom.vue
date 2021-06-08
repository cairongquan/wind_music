<template>
  <div id="main-song-list-box">
    <!-- 标题 -->
    <header class="song-list-edit-box ht-box">
      <div class="emit-box-null ht-box">
        <i @click="changeMode" :class="['iconfont', modeIconnName]"></i>
      </div>
      <div class="song-title-header ht-box">音乐标题</div>
      <div class="song-author-header ht-box">歌手</div>
      <div class="cover-header ht-box">专辑</div>
      <div class="song-time-header ht-box">时长</div>
    </header>
    <div class="main-list-show-box">
      <div
        class="song-item-main-box"
        v-for="(item, index) in songListData"
        :key="index"
        :style="{ backgroundColor: index % 2 == 0 ? '' : '#2b2b2b' }"
      >
        <!-- 收藏按钮盒子 -->
        <div
          :style="{
            height: mode ? '40px' : '70px',
            lineHeight: mode ? '40px' : '70px',
          }"
          class="track-icon item-th-box"
        >
          <i class="iconfont icon-aixin1"></i>
        </div>
        <!-- 歌曲标题 -->
        <div
          class="song-title-box item-th-box"
          :style="{
            height: mode ? '40px' : '70px',
            lineHeight: mode ? '40px' : '70px',
          }"
        >
          <img
            :style="{
              height: mode ? '0px' : '45px',
              width: mode ? '0px' : '45px',
            }"
            :src="item.al.picUrl"
          />
          <span
            :style="{
              fontSize: mode ? '16px' : '12px',
            }"
            >{{ item.name }}</span
          >
        </div>
        <!--歌手名称  -->
        <div
          class="song-author-box item-th-box"
          :style="{
            height: mode ? '40px' : '70px',
            lineHeight: mode ? '40px' : '70px',
          }"
        >
          <span
            v-for="(songAItem, songAIndex) in item.ar"
            :key="songAIndex"
            class="song-author-item"
          >
            {{ songAItem.name
            }}{{ songAIndex == item.ar.length - 1 ? "" : " / " }}
          </span>
        </div>
        <!-- 专辑 -->
        <div
          class="song-cover-box item-th-box"
          :style="{
            height: mode ? '40px' : '70px',
            lineHeight: mode ? '40px' : '70px',
          }"
        >
          <span>
            {{ item.al.name }}
          </span>
        </div>
        <!-- 播放时长 -->
        <div
          class="song-time-box item-th-box"
          :style="{
            height: mode ? '40px' : '70px',
            lineHeight: mode ? '40px' : '70px',
          }"
        >
          {{ macthDateEvent(item.dt) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import songListComJs from "./songListCom.js";
export default {
  ...songListComJs,
};
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_2585248_ujlx4fam2xs.css");
@import "./songListCom.scss";
</style>
