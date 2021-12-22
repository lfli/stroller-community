<template>
  <div class="page">
    <div class="go-back go-back-black"></div>
    <div class="Title">
      Retrieve <br />
      password
    </div>
    <div class="content-box">
      <div class="sign-box content-img">
        <img
          src="https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto"
          alt=""
          class="sign-img"
        />
        <div class="send-inf">
          <p class="">The password will be sent to the binding mailbox</p>
          <p class="send-email">1501684493@qq.com</p>
        </div>

        <!-- <button class="btn-common sign-in">Confirm retrieval</button> -->

        <button class="btn-common sign-in">Go login</button>
        <button class="forget-password">Resend</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  layout: "notabs",
})
export default class RetrievePassword extends Vue {}
</script>

<style lang="less" scoped>
.page {
  background: #fedf4c;
  width: 100%;
  height: 100%;
}

.go-back-black::before {
  box-shadow: inset 3px -3px 0 0 #000 !important;
}

.go-back-black::after {
  box-shadow: inset 3px -3px 0 0 #000 !important;
}

.Title {
  color: #000;
  font-weight: 500;
}

.content-box {
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -45%);

  .content-img {
    padding-top: 55px !important;
  }

  .sign-box {
    background: #fff;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0px 2px 6px 5px rgba(228, 228, 228, 0.5);
    position: relative;
    z-index: 2;

    .sign-img {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      border: 3px solid #fff;
      position: absolute;
      left: 50%;
      top: -40px;
      transform: translateX(-50%);
      box-shadow: 0px 3px 9px 4px rgba(254, 223, 76, 0.29);
      margin-bottom: 55px;
    }
  }

  .sign-in {
    width: 100%;
    margin-top: 50px;
  }

  .forget-password {
    width: 100%;
    border: none;
    margin-top: 10px;
    background: none;
    height: 30px;
  }

  .send-inf {
    font-size: 14px;
    color: #999;
    margin-top: 60px;

    .send-email {
      color: #000;
      font-weight: 600;
      margin-top: 15px;
    }
  }
}
</style>