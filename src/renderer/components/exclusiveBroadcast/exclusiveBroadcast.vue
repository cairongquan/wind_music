<template>
  <div id="main-box-exB">
    <home-title-com>独家放送</home-title-com>
    <ul class="exclusive">
      <li @mouseover="itemMouseOver(index)" @mouseleave="itemMouseLeave(index)" v-for="(item,index) in list"
          class="exclusive-item"
          :style="{transform:transtionStr}" :key="index">
        <img :style="{ filter: item.isShowIcon ? 'blur(2px)' : ''}" :src="item.sPicUrl" alt="封面"/>
        <div class="play-icon-box" :style="{opacity: item.isShowIcon?1:0}">
          <i class="iconfont icon-play" style="font-size: 49px;"></i>
        </div>
        <div>
          <span>{{ item.copywriter }}</span>
        </div>
      </li>
    </ul>
    <div class="dot-box">
      <ul>
        <li :style="{backgroundColor:item-1 === currentIndex?'#ec4141':''}" @mouseover="jumpEvent(item)"
            @mouseleave="leaveEvent()" v-for="(item,index) in finalArrayLength" :key="index"></li>
      </ul>
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