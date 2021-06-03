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
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-user-drag: none;
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

  .router-box {
    background-color: #2e2e2e;
  }
}
</style>
