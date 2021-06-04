<template>
  <header class="header-title">
    <div class="main-title" @mouseover="isMoveTitle=true" @mouseleave="isMoveTitle=false">
      <slot></slot>
      <i :class="['iconfont','icon-jiantou',isMoveTitle?'rightMoveIcon':'leftMoveIcon']"></i>
    </div>
  </header>
</template>

<script>
import homeTitleJS from "./homeTitleCom.js"
export default {
  ...homeTitleJS
}
</script>

<style lang="scss" scoped>
@import "./homeTitleCom.scss";
</style>