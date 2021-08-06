<template>
  <div id="main-out-songSheetList">
    <!--    头部筛选区域-->
    <div class="tag-name-title">歌单类型</div>
    <header class="sheet-list-head">
      <div
        @click="chooseTagEvent('全部')"
        class="tag-item"
        :style="{
          backgroundColor: '全部' === activeTag ? '#eaeffd' : '',
          color: '全部' === activeTag ? '#335eea' : '',
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
          backgroundColor: item.tagName === activeTag ? '#eaeffd' : '',
          color: item.tagName === activeTag ? '#335eea' : '',
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

    <!--    banner图片区域-->
    <div class="banner-box" :style="{ transform: tranlateStr }">
      <div
        @click="showSongSheetInfo(item.id)"
        v-for="(item, index) in bannerData"
        :key="index"
        class="main-item-banner-box"
        ref="bannerItemBox"
      >
        <img
          :src="item.coverImgUrl"
          alt="精品歌单封面(背景)"
          class="banner-bgc-box"
        />
        <div class="mask-box-banner">
          <div class="banner-cover-box">
            <img :src="item.coverImgUrl" alt="专辑封面" />
            <div class="banner-info-box">
              <!--              专辑标签-->
              <div class="banner-tag-box">
                <i class="iconfont icon-huangguan"></i>
                <span>精品歌单</span>
              </div>
              <!--              专辑标题-->
              <div class="banner-title-main-box">
                <span>{{ item.name }}</span>
              </div>

              <!--              专辑介绍 主编话-->
              <div class="banner-info-title">
                <span>{{ item.copywriter }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--      小按钮dot-->
    <ul class="dot-main-box">
      <li
        v-for="(item, index) in bannerData.length"
        @mouseover="jumpToBanner(index)"
        :key="index"
        :style="{
          backgroundColor: index === activeBannerIndex ? ' #ec4141' : '',
        }"
      ></li>
    </ul>

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
    <div
      class="show-more-btn"
      v-show="this.form.offset < this.totalSongListLength"
      @click="showMoreSongSheetBtnEvent"
    >
      <span>加载更多</span>
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
