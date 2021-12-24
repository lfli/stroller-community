<template>
  <div class="play-num">
    <span>{{ formatNum }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    formatNum() {
      const w = this.$props.num / 10000;

      if (w >= 1) {
        return `${w.toFixed(1)} w`;
      }
      return this.$props.num;
    },
  },
})
export default class PlayNum extends Vue {}
</script>

<style lang="less" scoped>
    .play-num {
        background: #000000;
        border-radius: 12Px;
        opacity: 0.3;
        font-size: 12Px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        padding: 4Px 9Px 3Px 9Px;
    }
</style>