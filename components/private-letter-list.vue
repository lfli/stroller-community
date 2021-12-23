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
  border-radius: 12Px;
  box-shadow: 0 0 10Px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16Px 20Px;
  margin-top: 15Px;

  .letter-list-img {
    width: 40Px;
    height: 40Px;
    border-radius: 50%;
  }

  .letter-list-center {
    flex: 1;
    padding-left: 15Px;
  }

  .letter-list-title {
    font-size: 16Px;
    font-weight: 500;
  }

  .letter-list-subtitle {
    font-size: 13Px;
    font-weight: 400;
    color: #999;
    margin-top: 8Px;
    line-height: 12Px;
  }

  .letter-list-subtitle-name {
    max-width: 35%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>