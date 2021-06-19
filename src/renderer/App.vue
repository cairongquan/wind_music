<template>
  <div id="app">
    <headerCom></headerCom>
    <div class="scroll-box-main">
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
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-user-drag: none; //禁止图片拖拽
}

#app {
  overflow-x: hidden;
  overflow: hidden;
  /* border-bottom-left-radius: 6.45px;
  border-bottom-right-radius: 6.45px; */
  border-radius: 5.5px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);

  .scroll-box-main {
    position: relative;
    height: 700px;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #2e2e2e;
  }

  .scroll-box-main::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #686868;
  }

  .scroll-box-main::-webkit-scrollbar {
    width: 11.5px;
    height: auto;
  }

  .router-box {
    background-color: #2e2e2e;
  }
}
</style>
