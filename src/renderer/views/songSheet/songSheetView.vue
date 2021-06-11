<template>
  <div id="main-songSheet-box">
    <button @click="back">返回</button>
    <!--    专辑头部信-->
    <header id="main-header-songSheet-box">
      <!--      歌单封面region-->
      <div class="header-cover-image-box">
        <img :src="songSheetData.playlist.coverImgUrl" alt="专辑封面"/>
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
          <div style="display: flex; align-items: center">
            <div class="user-headPortrait-box">
              <img
                  :src="songSheetData.playlist.creator.avatarUrl"
                  alt="用户头像"
              />
            </div>
            <div class="user-info-main-box">
              <div class="user-name-main">
                <span>创建者:</span>
                <span> {{ songSheetData.playlist.creator.nickname }}</span>
              </div>
              <div class="upload-time-box">
                <span>创建时间:</span>
                <span>{{
                    DateFormatNumG(songSheetData.playlist.updateTime, "Y-M-D")
                  }}</span>
              </div>
            </div>
          </div>
          <!-- 操作栏 -->
          <div class="tool-group-box">
            <!-- 播放全部 -->
            <div class="tool-child-box play-icon">
              <i class="iconfont icon-play"></i>
            </div>
            <!-- 收藏 -->
            <div class="tool-child-box collection-icon">
              <i class="iconfont icon-shoucang"></i>
            </div>
            <!-- 分享 -->
            <div class="tool-child-box share-icon-box">
              <i class="iconfont icon-fenxiang"></i>
            </div>
            <!-- 下载 -->
            <div class="tool-child-box download-icon-box">
              <i class="iconfont icon-xiazai1"></i>
            </div>
          </div>
        </div>

        <!-- 歌单标签 -->
        <div class="main-song-tag-box">
          <div class="song-tags-box">
            <span>标签:</span>
            <div
                class="tag-item-box"
                v-for="(item, index) in songSheetData.playlist.tags"
                :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <!-- 简介 -->
        <div class="songSheet-intro-main-box">
          <span>简介:</span>
          <div
              ref="descriptionBox"
              class="content-box"
              :style="{ height: descriptionStrHeight + 'px' }"
          >
            {{ songSheetData.playlist.description }}
          </div>
          <i
              v-if="isShowPullIcon"
              @click="pullContentEvent"
              :class="['iconfont', pullIcon]"
          ></i>
        </div>
      </div>
    </header>
    <!-- 主内容区域 -->
    <div class="content-box-main">
      <tabs-com
          :style="{height:tabHeight}"
          @changeTabIndexHandle="changeTabIndexHandle"
          class="tab-box-left"
          :tabsData="[
          `歌曲(${songSheetData.playlist.trackCount}首)`,
          `评论(${unitChangeEvent(songSheetData.playlist.commentCount)})`,
        ]"
      >
        <!-- 页面 -->
        <!-- 歌单列表 -->
        <div :slot="0">
          <song-list-com ref="songListCom" :songListData="songDataList"></song-list-com>
        </div>
        <!-- 评论 -->
        <div :slot="1">
          <commit-com :commitData="commitArrayData"></commit-com>
        </div>
      </tabs-com>
      <!-- 收藏盒子 -->
      <div class="subscribers-box">
        <div class="sub-title-header">收藏者</div>
        <ul class="subscribers-box-mainUl">
          <li
              :key="index"
              v-for="(item, index) in songSheetData.playlist.subscribers"
          >
            <img :src="item.avatarUrl"/>
            <span>{{ item.nickname }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import songSheetJs from "./songSheetView.js";
import tabsCom from "../../components/tabsCom/tabsCom.vue";
import songListCom from "../../components/songListCom/songListCom.vue";
import commitCom from "../../components/commitCom/commitCom.vue"


export default {
  components: {
    "tabs-com": tabsCom,
    "song-list-com": songListCom,
    "commit-com": commitCom
  },
  ...songSheetJs,
};
</script>

<style lang="scss" scoped>
@import "./songSheetView.scss";
@import url("//at.alicdn.com/t/font_2585248_zlwl4kcb0r.css");
</style>
