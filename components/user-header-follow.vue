<template>
  <div class="box">
    <img
      class="header"
      src="https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto"
      alt=""
    />
    <img class="follow" src="@/assets/image/icon_follow.png" alt="" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class UserHeaderFollow extends Vue {}
</script>

<style lang="less" scoped>
.box {
  position: relative;

  .header {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 2px solid white;
  }

  .follow {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 30%);
  }
}
</style>