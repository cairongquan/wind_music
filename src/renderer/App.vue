<template>
  <div id="app">
    <headerCom></headerCom>
    <router-view style="margin-top:48px;"></router-view>
  </div>
</template>

<script>
import headerCom from "./components/header/header.vue";
export default {
  components: {
    headerCom,
  },
  name: "my-project",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
