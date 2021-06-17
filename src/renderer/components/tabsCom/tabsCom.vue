<template>
  <div id="main-tabs-com-box">
    <!-- 顶部滑动栏 -->
    <header class="main-tabs-com-header">
      <div
        ref="fatherItem"
        :class="[
          'tab-item-box',
          index == defaultIndex ? 'activeIndexColor' : '',
        ]"
        v-for="(item, index) in tabsData"
        :key="index"
        @click="changeItemIndex(index)"
      >
        {{ item }}
        <div ref="itemBox" class="none-position-box"></div>
      </div>
      <div
        class="scroll-box"
        :style="{ transform: `translateX(${offSetLeftArray[defaultIndex]}px)` }"
      ></div>
    </header>

    <!--内容主体区域  -->
    <div
      class="main-content-box"
      :style="{
        transform: `translateX(${defaultIndex * -50}%)`,
      }"
    >
      <div
        class="content-box-item"
        v-for="(item, index) in tabsData"
        :key="index"
      >
        <slot :name="index" ref="contentBox"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import tabsComTs from "./tabsCom.js";

export default {
  ...tabsComTs,
};
</script>

<style socped lang="scss">
@import "./tabsCom.scss";
</style>
