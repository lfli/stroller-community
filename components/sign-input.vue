<template>
  <div>
     <div class="sign-input">
        <div class="sign-input-title">{{title}}</div>
        <div class="sign-input-box">
          <input
            type="text"
            class="sign-input-input"
            :placeholder="placeholder"
          />
          <span class="input-delete"></span>
        </div>
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
  margin-top: 20px;

  .sign-input-title {
    font-size: 18px;
    color: #000;
  }

  .sign-input-box {
    background: #f5f5f5;
    height: 50px;
    border-radius: 50px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sign-input-input {
      font-size: 14px;
      color: #000;
      height: 100%;
      width: 90%;
      border: 0;
      background: none;
    }

    .input-delete {
      width: 18px;
      height: 18px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      position: relative;
    }

    .input-delete::after {
      content: "";
      position: absolute;
      left: 50%;
      top:50%;
      margin-top: -5px;
      margin-left: -0.5px;
      width: 1px;
      height: 10px;
      background: #fff;
      border-radius: 2px;
      transform: rotate(45deg);
    }

      .input-delete::before{
      content: "";
      position: absolute;
      left: 50%;
      top:50%;
      margin-top: -5px;
      margin-left: -0.5px;
      width: 1px;
      height: 10px;
      background: #fff;
      border-radius: 2px;
      transform: rotate(135deg);
    }
  }
}

</style>