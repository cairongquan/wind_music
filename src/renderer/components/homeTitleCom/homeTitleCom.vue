<template>
  <header class="header-title" @click="jumpToPage">
    <div
      class="main-title"
      @mouseover="isMoveTitle = true"
      @mouseleave="isMoveTitle = false"
    >
      <slot></slot>
      <div class="arrow-change-box">
        <i
          class="iconfont icon-play"
          :style="{
            transform: isMoveTitle ? 'translateX(0px)' : 'translateX(-21px)',
          }"
        ></i>
        <i
          class="iconfont icon-jiantou"
          :style="{
            transform: isMoveTitle ? 'translateX(0px)' : 'translateX(-21px)',
          }"
        ></i>
      </div>
    </div>
  </header>
</template>

<script>
import homeTitleJS from "./homeTitleCom.js";
export default {
  ...homeTitleJS,
};
</script>

<style lang="scss" scoped>
@import "./homeTitleCom.scss";
</style>
