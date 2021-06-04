<template>
  <div>
    <home-title-com>独家放送</home-title-com>
    <div class="exclusive">
      <div v-for="item in list" class="exclusive-item">
        <img :src="item.sPicUrl" alt="" />
        <div class="player-img"><i class="iconfont icon-video"></i></div>
        <div>
          <span>{{ item.copywriter }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeTitleCom from "../homeTitleCom/homeTitleCom.vue";
import exclusiveBroadcastJS from "./exclusiveBroadcast.js";
export default {
  components: {
    homeTitleCom,
  },
  ...exclusiveBroadcastJS,
};
</script>

<style lang="scss" scoped>
@import "../../public/style/public.scss";
@import "./exclusiveBroadcast.scss";
</style>