<template>
  <div>
    <div class="go-back" @click="goBack()"></div>
    <div class="Title">
      {{ $t("links.allMessages") }}
    </div>
    <div class="safe-box">
      <AllMessagesList
        v-for="(item, index) in list"
        :key="index"
        :isComment="item.isComment"
        :iconUrl="item.iconUrl"
        :srcUrl="item.srcUrl"
        :zanName="item.zanName"
        :workUrl="item.workUrl"
        :zanTime="item.zanTime"
        :commentName="item.commentName"
        :commentTime="item.commentTime"
        :commentText="item.commentText"
      />
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
  // 返回按钮
  goBack() {
    this.$router.go(-1);
  }
  
  list = [
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      zanName: "Vernon Higgins",
      zanTime: "11-23",
      workUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      isComment: true,
      iconUrl: require("@/assets/image/icon_zan.png"),
    },
    {
      isComment: false,
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      commentName: "Vernon Higgins",
      commentTime: "11-23",
      commentText: "666~~",
      workUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      iconUrl: require("@/assets/image/icon_message.png"),
    },
  ];
}
</script>

<style lang="less" scoped>
</style> 