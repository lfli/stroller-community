<template>
  <div class="page">
    <div class="go-back go-back-black"></div>
    <div class="Title">Sign in</div>
    <div class="content-box">
      <div class="sign-box content-img">
        <img
          src="https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto"
          alt=""
          class="sign-img"
        />
        <SignInput
          v-for="(item, index) in list"
          :key="index"
          :ploaceholder="item.placeholder"
          :title="item.title"
        />
        <button class="btn-common sign-in">Sign in</button>
        <button class="forget-password">Forget the password?</button>
      </div>
      <div class="register">
        <span>Don’t have an account?</span>
        <div class="sign-up" @click="signUp()">Sign up</div>
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
export default class SignIn extends Vue {
  list = [
    {
      title: "Account number",
      placeholder: "请输入您的账户",
    },
    {
      title: "Password",
      placeholder: "请输入您的密码",
    },
  ];

    signUp() {
    this.$router.push({ path: "sign-up" });
  }
}
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
  }

  .forget-password {
    width: 100%;
    border: none;
    margin-top: 10px;
    background: none;
    height: 30px;
  }

  .register {
    background: #fff;
    border-radius: 25px;
    margin-top: -30px;
    padding: 45px 20px 20px;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #999;
    justify-content: center;

    .sign-up {
      margin-left: 5px;
      color: #000;
    }
  }
}
</style>