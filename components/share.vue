<template>
  <div @click="$emit('share')">
    <img src="@/assets/image/icon_share.png" alt="" />
    <span>1236</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Share extends Vue {}
</script>

<style lang="less" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
  }

  span {
    font-size: 14px;
    color: white;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
  }
}
</style>