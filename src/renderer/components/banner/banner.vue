<template>
  <div id="main-out-content">
    <!--   轮播图主显示区域 -->
    <div class="main-banner-show-box"  @mouseover="mouseOverEvent" @mouseleave="mouseLeveEvent">
      <!-- 轮播图元素 -->
      <div class='bgc-box' @click="showInfoEvent(index)" :class="setClassName(index)"  :style="changeItemBgc(item.imageUrl)" v-for="(item,index) in contentItemList" :key="index">
        <div class="bgc-box-tips">{{item.typeTitle}}</div>
      </div>
      <div class="arrow-left-box arrow-box" @click="preEvent" v-show="isShowArrow">
       <div class="filter-arrow-box">
         <i class="iconfont icon-jiantou1"></i>
       </div>
      </div>
      <div class="arrow-right-box arrow-box" @click="nextEvent" v-show="isShowArrow">
        <div class="filter-arrow-box">
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
  </div>
    <ul class="duto-main-box">
      <li class="duto-box" v-for="(item,index) in contentItemList.length" :key="index" :style="{backgroundColor:index === currIndex?'#ec4141':''}" @mouseover="mouseOverDuto(index)" @mouseleave="mouseLeaveDuto"></li>
    </ul>
  </div>
</template>

<script>
import bannerJS from "./banner";
export default {
  ...bannerJS
}
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_2585248_u15puv3eupe.css");
@import "src/renderer/components/banner/banner";
</style>