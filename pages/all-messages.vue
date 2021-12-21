<template>
  <div>
    <div class="go-back" @click="goBack"></div>
    <div class="Title">
      {{ $t("links.allMessages") }}
    </div>
    <div class="safe-box">
      <div class="inf-box" v-for="(item, index) in infList" :key="index">
        <div class="inf-left">
          <img :src="item.srcUrl" alt="" class="inf-head" />
          <img :src="item.isComment?messageUrl:zanUrl" alt="" class="inf-icon" />
          <!-- <img src="@/assets/image/icon_zan.png" alt="" class="inf-icon" /> -->
          <!-- @/assets/image/icon_message.png -->
        </div>
        <div class="inf-center" v-if="index == 0">
          <div class="inf-name">{{ item.name }}</div>
          <div class="inf-text">赞了你的作品</div>
          <div class="inf-time">{{ item.time }}</div>
        </div>
        <div class="inf-center" v-else>
          <div class="inf-name">{{ item.name }}</div>
          <div class="inf-text">{{ item.text }}</div>
          <div class="inf-time">
            评论了你的作品 <span>{{ item.time }}</span>
          </div>
        </div>
        <div class="inf-right">
          <img :src="item.workUrl" alt="" class="inf-work" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  layout: "notabs",
})
export default class AllMessages extends Vue {
  isComment=false;
  zanUrl = require("@/assets/image/icon_zan.png");
  messageUrl = require("@/assets/image/icon_message.png")
  infList = [
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      name: "Vernon Higgins",
      time: "11-23",
      workUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
    },
    {
      isComment:true,
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      name: "Vernon Higgins",
      time: "11-23",
      text: "666~~",
      workUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
    },

    
  ];

  goBack(){
      this.$router.go(-1)
    }
}
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