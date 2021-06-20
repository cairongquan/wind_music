<template>
  <div id="main-out-songSheetList">
    <!--    头部筛选区域-->
    <div class="tag-name-title">歌单类型</div>
    <header class="sheet-list-head">
      <div
        @click="chooseTagEvent('全部')"
        class="tag-item"
        :style="{
          backgroundColor:
            '全部' === activeTag ? 'rgba(255, 255, 255, .3)' : '',
        }"
      >
        <span>全部</span>
      </div>
      <div
        @click="chooseTagEvent(item.tagName)"
        class="tag-item"
        v-for="(item, index) in tagDataArray"
        :key="index"
        :style="{
          backgroundColor:
            item.tagName === activeTag ? 'rgba(255, 255, 255, .3)' : '',
        }"
      >
        <span>{{ item.tagName }}</span>
        <img
          :src="item.emoji"
          alt="emoji"
          :class="[item.tagName === activeTag ? 'tagTanform' : '']"
        />
      </div>
    </header>

    <div class="main-conetnt-box">
      <!-- 页面主体内容 -->
      <div class="colunm-box" v-for="(item, index) in renderData" :key="index">
        <div
          @click="showSongSheetInfo(childItem.id)"
          class="sheet-item-main-box"
          v-for="(childItem, childIndex) in item"
          :key="childIndex"
        >
          <!-- 封面 -->
          <img
            :style="{ height: childItem.domHeight + 'px' }"
            :src="childItem.coverImgUrl"
            alt="歌单封面"
          />
          <div
            class="play-btn-box"
            :style="{ top: childItem.domHeight - 30 + 'px' }"
          >
            <i class="iconfont icon-play"></i>
          </div>
          <!-- 文字介绍 -->
          <div class="sheet-item-de-box">{{ childItem.name }}</div>
          <div class="create-date">{{ createDate(childItem.createTime) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import songSheetListJs from "./songSheetList";

export default {
  ...songSheetListJs,
};
</script>

<style lang="scss" scoped>
@import "songSheetList.scss";
</style>
