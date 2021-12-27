<template>
  <div>
    <div class="fans-list">
      <img :src="srcUrl" alt="" class="fans-list-img" />
      <div class="fans-list-center">
        <div class="fans-list-title">
          {{ name }}
        </div>
        <div class="fans-list-subtitle">
          {{ time }}
        </div>
      </div>
      <button
        class="btn-follow isActive"
      >
        <span v-if="isFollow">+ {{ $t("links.follow") }}</span>
        <span v-else>{{ $t("links.followed") }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    srcUrl: {
      type: String,
      default: "",
    },
    name: String,
    time: String,
  },
})
export default class FansList extends Vue {
  isFollow = 1;
}
</script>

<style lang="less" scoped>
.fans-list {
  background: #fff;
  border-radius: 12Px;
  box-shadow: 0 0 10Px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16Px;
  margin-top: 15Px;

  .fans-list-img {
    width: 40Px;
    height: 40Px;
    border-radius: 50%;
  }

  .fans-list-center {
    width: calc(100% - 140Px);
    padding-left: 15Px;
  }

  .fans-list-title {
    font-size: 16Px;
    font-weight: 500;
    width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
  }

  .fans-list-subtitle {
    font-size: 13Px;
    font-weight: 400;
    color: #999;
    margin-top: 8Px;
    line-height: 12Px;
  }

  .btn-follow {
    background: #000;
    border-radius: 10Px;
    width: 80Px;
    height: 32Px;
    color: #fff;
    border: 0;
  }

  .isActive {
    background: #999 !important;
  }
}
</style>