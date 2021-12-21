<template>
  <div>
    <div class="letter-list" @click="clickBtn()">
      <img :src="srcUrl" class="letter-list-img" alt="" />
      <slot></slot>
      <span class="arrow arrow-grey" v-if="isShow"></span>
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
    isShow: {
      type: Boolean,
      default: true,
    },
    clickBtn: {
      type: String,
    },
  },
})
export default class PrivateLetterList extends Vue {
  srcUrl!: string;
  isShow!: boolean;
  clickBtn!: string;
}
</script>

<style lang="less" scoped>
.letter-list {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  margin-top: 15px;

  .letter-list-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .letter-list-center {
    flex: 1;
    padding-left: 15px;
  }

  .letter-list-title {
    font-size: 16px;
    font-weight: 500;
  }

  .letter-list-subtitle {
    font-size: 13px;
    font-weight: 400;
    color: #999;
    margin-top: 8px;
    line-height: 12px;
  }

  .letter-list-subtitle-name {
    width: 35%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>