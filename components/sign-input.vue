<template>
  <div class="sign-input">
    <div class="sign-input-title">{{ title }}</div>
    <div class="sign-input-box">
      <input type="text" class="sign-input-input" :placeholder="placeholder" />
      <span class="input-delete"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    placeholder: {
      type: String,
      default: "请输入",
    },
    title: {
      type: String,
    },
  },
})
export default class SignInput extends Vue {}
</script>

<style lang="less" scoped>
.sign-input {
  margin-top: 20Px;

  .sign-input-title {
    font-size: 18Px;
    color: #000;
  }

  .sign-input-box {
    background: #f5f5f5;
    height: 50Px;
    border-radius: 50Px;
    padding: 0 16Px;
    display: flex;
    align-items: center;
    margin-top: 15Px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sign-input-input {
      font-size: 14Px;
      color: #000;
      height: 100%;
      width: 90%;
      border: 0;
      background: none;
    }

    .input-delete {
      width: 18Px;
      height: 18Px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      position: relative;
    }

    .input-delete::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -5Px;
      margin-left: -0.5Px;
      width: 1Px;
      height: 10Px;
      background: #fff;
      border-radius: 2Px;
      transform: rotate(45deg);
    }

    .input-delete::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -5Px;
      margin-left: -0.5Px;
      width: 1Px;
      height: 10Px;
      background: #fff;
      border-radius: 2Px;
      transform: rotate(135deg);
    }
  }
}
</style>