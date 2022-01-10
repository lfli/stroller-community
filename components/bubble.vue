<template>
  <div class="bubble-box" @click="openBubble()">
    <slot></slot>

    <div v-show="isOpenBubble" ref="topTriangle" class="top-triangle"></div>
    <div v-show="isOpenBubble" ref="bubble" class="bubble">
      <slot name="content"></slot>
    </div>
    <div
      v-show="isOpenBubble"
      class="mask"
      ref="mask"
      @click="close($event)"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Bubble extends Vue {
  $refs!: { bubble: HTMLElement; topTriangle: HTMLElement; mask: HTMLElement };

  isOpenBubble = false;

  close(event: Event) {
    event.stopPropagation();
    this.isOpenBubble = false;
  }

  openBubble() {
    this.isOpenBubble = true;
    this.$nextTick(() => {
      this.init();
    });
  }

  init() {
    const clientWidth = document.documentElement.clientWidth;

    let offsetLeft = (this.$slots.default as any)[0].elm.offsetParent
      .offsetLeft;
    offsetLeft += this.$refs.bubble.offsetWidth;

    // 如果超出右边界
    if (offsetLeft > clientWidth) {
      this.$refs.bubble.style.left = -(offsetLeft - clientWidth + 46) + "px"; // 距离屏幕最右边 46 px
    }
    this.$refs.bubble.style.top =
      (this.$slots.default as any)[0].elm.offsetHeight + 14 + "px"; // 距离 slot 14 px

    // 移动到 slot 正下方
    this.$refs.topTriangle.style.top =
      (this.$slots.default as any)[0].elm.offsetHeight + 10 + "px";
    this.$refs.topTriangle.style.left =
      (this.$slots.default as any)[0].elm.offsetWidth / 2 - 4 + "px";
  }
}
</script>

<style lang="less" scoped>
.bubble-box {
    .top-triangle {
        position: absolute;
        border-bottom: 4Px solid white;
        border-left: 4Px solid transparent;
        border-right: 4Px solid transparent;
        z-index: 999;
    }

    .bubble {
        background-color: white;
        min-width: 200Px;
        min-height: 100Px;
        border-radius: 7Px;
        position: absolute;
        z-index: 999;
    }

    .mask {
        width: 100vw;
        height: 100vh;
        z-index: 998;
        position: fixed;
        top: 0;
        left: 0;
    }
}
</style>