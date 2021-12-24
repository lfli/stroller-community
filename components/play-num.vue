<template>
  <div class="play-num">
    <canvas ref="playIcon" class="play-icon"></canvas>
    <span class="format-num">{{ formatNum }}</span>
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
export default class PlayNum extends Vue {
  $refs!: {
    playIcon: HTMLCanvasElement;
  };

  mounted() {
    const ctx = this.$refs.playIcon.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 75);
    ctx.moveTo(300, 75);
    ctx.lineTo(0, 150);
    ctx.moveTo(20, 150);
    ctx.lineTo(20, 0);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}
</script>

<style lang="less" scoped>
    .play-num {
        background: #000000;
        border-radius: 12Px;
        opacity: 0.3;
        padding: 4Px 9Px 3Px 9Px;
        display: flex;
        align-items: center;

        .play-icon {
          width: 7Px;
          height: 7Px;
        }

        .format-num {
          font-size: 12Px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          margin-left: 4Px;
        }
    }
</style>