<template>
  <div id="app">
    <headerCom></headerCom>
    <router-view></router-view>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  /* border-bottom-left-radius: 6.45px;
  border-bottom-right-radius: 6.45px; */
  border-radius: 5.5px;
  overflow: hidden;
  overflow-y: hidden;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
}
</style>
