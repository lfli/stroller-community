<template>
  <div>
    <div class="letter-list" @click="clickBtn()">
      <div class="inf-box">
        <div class="inf-left">
          <img :src="srcUrl" alt="" class="inf-head" />
          <img :src="iconUrl" alt="" class="inf-icon" />
        </div>
        <div class="inf-center" v-if="isComment">
          <div class="inf-name">{{ zanName }}</div>
          <div class="inf-text">赞了你的作品</div>
          <div class="inf-time">{{ zanTime }}</div>
        </div>
        <div class="inf-center" v-else>
          <div class="inf-name">{{ commentName }}</div>
          <div class="inf-text">{{ commentText }}</div>
          <div class="inf-time">
            评论了你的作品 <span>{{ commentTime }}</span>
          </div>
        </div>
        <div class="inf-right">
          <img :src="workUrl" alt="" class="inf-work" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    isComment: {
      type: Boolean,
      default: true,
    },
    srcUrl: {
      type: String,
      default: "",
    },
    workUrl: {
      type: String,
      default: "",
    },
     iconUrl: {
      type: String,
      default: "",
    },
    zanName: String,
    zanTime: String,
    commentName: String,
    commentText: String,
    commentTime: String,
  },
})
export default class AllMessagesList extends Vue {}
</script>

<style lang="less" scoped>
.inf-box {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  padding: 16px 12px;
  margin-top: 15px;

  .inf-left {
    width: 50px;
    height: 50px;
    position: relative;

    .inf-head {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .inf-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      right: -2px;
      bottom: -2px;
    }
  }

  .inf-center {
    width: calc(100% - 170px);

    .inf-name {
      font-size: 16px;
      font-weight: 500;
      width: 100%;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      word-wrap: break-word;
    }

    .inf-text {
      font-size: 13px;
      margin-top: 5px;
    }

    .inf-time {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
    }
  }

  .inf-right {
    width: 30%;
    padding-top: 20%;
    position: relative;

    .inf-work {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>