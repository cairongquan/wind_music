<template>
  <div>
    <div id="main-header">
      <div class="logo-header-bxo">
        <!-- <img :src="headerLogo"/> -->
        <i class="iconfont icon-yinle"></i>
      </div>

      <!-- 路由导航区域 -->
      <div class="router-show-box">
        <!-- 返回按钮 -->
        <div class="arrow-box" @click="backArrowBtnEvent">
          <i style="font-size: 15px" class="iconfont icon-a-jiantou1"></i>
        </div>
        <div class="arrow-box" @click="preArrowBtnEvent">
          <i style="font-size: 15px" class="iconfont icon-a-jiantou"></i>
        </div>
      </div>
      <div
        class="seachbar"
        :style="{
          width: isFocus ? '270px' : '120px',
          borderRadius: isFocus ? '5.45px' : '2px',
        }"
      >
        <input
          @input="seachInputInputEvent"
          @blur="blurSeachEvent"
          @focus="focusSeachEvent"
          type="text"
          placeholder="搜点啥？"
          v-model="seachValue"
        />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <!-- 右侧操作栏 -->
      <div class="btns-show-box">
        <div class="min-btn btn" @click="miniWindowEvent">
          <i class="iconfont icon-suoxiao"></i>
        </div>
        <div class="close-btn btn" @click="closeWindowEvent">
          <i class="iconfont icon-quxiao"></i>
        </div>
      </div>
    </div>
    <div :class="[isShowSeachList ? 'seach-listbox' : 'seach-listbox-hide']">
      <ul>
        <li class="noseachdata" v-show="seachList.length === 0">暂无数据哦!</li>
        <li v-for="(item, index) in seachList" :key="index">
          <div :class="[index === 0 ? 'seach-first-item' : 'seach-item']">
            <img :src="item.al.picUrl" />
            <span>{{ item.al.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerJS from "./header.js";

export default {
  ...headerJS,
};
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_2585248_ob337blrsb.css");
@import "./header.scss";
</style>
