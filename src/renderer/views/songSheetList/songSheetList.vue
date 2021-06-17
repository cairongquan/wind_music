<template>
  <div id="main-out-songSheetList">
    <!--    头部筛选区域-->
    <div class="tag-name-title">歌单类型</div>
    <header class="sheet-list-head">
      <div class="tag-item" v-for="(item,index) in tagDataArray" :key="index">
        <span>{{ item.tagName }}</span>
        <img :src="item.emoji" alt="emoji">
      </div>
      <div class="tag-item">
        <span>全部</span>
      </div>
    </header>
  </div>
</template>

<script>
import songSheetListJs from "./songSheetList";

export default {
  ...songSheetListJs
}
</script>

<style lang="scss" scoped>
@import "songSheetList.scss";
</style>
