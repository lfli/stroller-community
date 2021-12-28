<template>
  <div class="info-item">
    <span class="title">{{ title }}</span>
    <div>
      <span class="value">{{ value }}</span>
      <span class="right-icon">></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    title: String,
    value: String,
  },
})
export default class InfoItem extends Vue {}
</script>

<style lang="less" scoped>
.info-item {
    background: #FFFFFF;
    border-radius: 8px;
    padding: 21px 13px;
    display: flex;
    justify-content: space-between;

    .title {
        font-size: 16Px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: #999999;
    }

    .value {
        font-size: 16Px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
    }

    .right-icon {
        margin-left: 2Px;
    }
}
</style>