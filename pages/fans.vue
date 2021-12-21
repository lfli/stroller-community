<template>
  <div>
    <div class="go-back" @click="goBack"></div>
    <div class="Title">
      {{ $t("links.fans") }}
    </div>
    <div class="safe-box">
      <FansList
        v-for="(item, index) in list"
        :key="index"
        :srcUrl="item.srcUrl"
        :name="item.name"
        :time="item.time"
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
export default class Fans extends Vue {
  // 返回按钮
  goBack() {
    this.$router.go(-1);
  }

  list = [
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      name: "Vernon Higgins",
      time: "11-22",
    },
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      name: "Vernon Higgins",
      time: "11-22",
    },
  ];
}
</script>

<style lang="less" scoped>
</style> 