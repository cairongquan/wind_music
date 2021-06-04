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
export default {
  components: {
    headerCom,
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
  overflow-y: hidden;
  overflow: hidden;
  /* border-bottom-left-radius: 6.45px;
  border-bottom-right-radius: 6.45px; */
  border-radius: 5.5px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);

  .scroll-box-main {
    height: 700px;
    overflow: auto;
    overflow-x: hidden;
    background-color: #2e2e2e;
  }

  .scroll-box-main::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #3f3f3f;
    box-shadow: 2px 2px 12px rgba(0,0,0,.1);
  }

  .scroll-box-main::-webkit-scrollbar{
    width: 8px;
    height:1px;
  }


  .router-box {
    background-color: #2e2e2e;
  }
}
</style>
