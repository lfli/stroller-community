<template>
  <div class="page">
    <div class="go-back" @click="goBack"></div>
    <div class="Title">Set</div>
    <div class="safe-box">
      <InfList
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :isSubtitle="false"
        :isBlack="true"
      />
      <button class="btn-common log-out">Log out</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  layout: "notabs",
})
export default class Set extends Vue {
  // 返回按钮
  goBack() {
    this.$router.go(-1);
  }

  list = [
    {
      title: "account number",
    },
    {
      title: "Privacy settings",
    },
    {
      title: "Notification settings",
    },
    {
      title: "General settings",
    },
    {
      title: "Background settings",
    },
    {
      title: "Switch account",
    },
  ];
}
</script>

<style lang="less" scoped>
.page {
  background: #f7f8fd;
  width: 100%;
  height: 100%;
}

.log-out {
  width: 100%;
  background: #000 !important;
  color: #fff !important;
  height: 50px;
  font-size: 15px;
  margin-top: 30px;
}
</style> 