<template>
  <div id="app">
    <div class="scroll-box-main">
      <headerCom></headerCom>
      <router-view class="router-box"></router-view>
    </div>
  </div>
</template>

<script>
import headerCom from "./components/header/header.vue";
import playLayoutCom from "./mainComponents/playLayout.vue";
export default {
  components: {
    headerCom,
    "play-layout": playLayoutCom,
  },
  name: "wind_music",
};
</script>

<style lang="scss">
* {
  //字体库
  font-family: arlow, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei,
    Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif,
    microsoft uighur;
  margin: 0;
  padding: 0;
  -webkit-user-drag: none; //禁止图片拖拽
}

#app {
  overflow-x: hidden;
  overflow: hidden;
  overflow-y: hidden;
  /* border-bottom-left-radius: 6.45px;
  border-bottom-right-radius: 6.45px; */

  .scroll-box-main {
    background-color: #fff;
    position: relative;
    height: calc(100vh);
    overflow-x: hidden;
  }

  .scroll-box-main::-webkit-scrollbar-thumb {
    background-color: #e1e1e1;
  }

  .scroll-box-main::-webkit-scrollbar {
    width: 11.5px;
    height: auto;
  }

  .router-box {
    margin-top: 50px;
    width: 100%;
  }
}
</style>
