<template>
  <!-- 评论组件 -->
  <div id="main-comment-out-box">
    <!-- 精彩评论区域 -->
    <div class="hot-comment-box">
      <div class="title-box" style="padding-top: 0px">
        <span>精彩评论({{ commitData.hotComments.length }})</span>
        <div class="title-box-tag">hot</div>
      </div>
      <div class="hot-comment-list-box">
        <div
          class="none-comment-show-box"
          v-if="commitData.hotComments.length === 0"
        >
          暂无
        </div>
        <div
          v-show="item.beReplied.length == 0"
          class="hot-commit-item-noReplied"
          v-for="(item, index) in commitData.hotComments"
          :key="index"
        >
          <img :src="item.user.avatarUrl" alt="用户头像" />
          <div class="hot-comment-item-content">
            <!-- 评论内容 -->
            <div
              class="fn-conetnt-box"
              v-html="echoContent(item.content, item.user.nickname)"
            ></div>
            <!-- 评论其它 -->
            <div class="fn-content-other">
              <div class="comment-time">
                {{ dateFormat(item.time) }}
              </div>
              <div class="thumbs-up-box">
                <i class="iconfont icon-dianzan"></i>
                <span>{{ item.likedCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    最新评论-->
    <div class="new-comment-box">
      <div class="title-box">
        <span>最新评论({{ commitData.comments.length }})</span>
        <div class="title-box-tag">new</div>
      </div>
      <!-- 最新评论列表展示 -->
      <div class="hot-comment-list-box">
        <div
          class="none-comment-show-box"
          v-if="commitData.comments.length === 0"
        >
          暂无
        </div>
        <div v-for="(item, index) in commitData.comments" :key="index">
          <div
            v-show="item.beReplied.length == 0"
            class="hot-commit-item-noReplied"
          >
            <img :src="item.user.avatarUrl" alt="用户头像" />
            <div class="hot-comment-item-content">
              <!-- 评论内容 -->
              <div
                class="fn-conetnt-box"
                v-html="echoContent(item.content, item.user.nickname)"
              ></div>
              <!-- 评论其它 -->
              <div class="fn-content-other">
                <div class="comment-time">
                  {{ dateFormat(item.time) }}
                </div>
                <div class="thumbs-up-box">
                  <i class="iconfont icon-dianzan"></i>
                  <span>{{ item.likedCount }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            v-show="item.beReplied.length !== 0"
            class="hot-commit-item-replied"
          >
            <img :src="item.user.avatarUrl" alt="用户头像" />
            <div class="hot-comment-item-content">
              <!-- 评论内容 -->
              <div
                class="fn-conetnt-box"
                v-html="echoContent(item.content, item.user.nickname)"
              ></div>
              <!-- 回复内容区域 -->
              <div class="replied-conetnt-box">
                <div class="fn-conetnt-box">{{ item.beReplied.conetnt }}</div>
              </div>
              <!-- 评论其它 -->
              <div class="fn-content-other">
                <div class="comment-time">
                  {{ dateFormat(item.time) }}
                </div>
                <div class="thumbs-up-box">
                  <i class="iconfont icon-dianzan"></i>
                  <span>{{ item.likedCount }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commitComJs from "./commitCom";

export default {
  ...commitComJs,
};
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_2585248_izehd6db7fg.css");
@import "./commitCom.scss";
</style>
