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
        :class="{ isActive: isFollow == index }"
        class="btn-follow"
        @click="follow(index)"
      >
        <span v-if="isFollow == -1">+ {{ $t("links.follow") }}</span>
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
  isFollow = -1;

  follow(index) {
    if (index != this.isFollow) {
      this.isFollow = index;
    } else {
      this.isFollow = -1;
    }
  }
}
</script>

<style lang="less" scoped>
.fans-list {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-top: 15px;

  .fans-list-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .fans-list-center {
    width: calc(100% - 140px);
    padding-left: 15px;
  }

  .fans-list-title {
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

  .fans-list-subtitle {
    font-size: 13px;
    font-weight: 400;
    color: #999;
    margin-top: 8px;
    line-height: 12px;
  }

  .btn-follow {
    background: #000;
    border-radius: 10px;
    width: 80px;
    height: 32px;
    color: #fff;
    border: 0;
  }

  .isActive {
    background: #999 !important;
  }
}
</style>