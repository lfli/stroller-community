<template>
  <div class="my-setting">
    <div class="go-back" @click="goBack()"></div>

    <div class="header-box">
      <img
        class="header"
        src="https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto"
        alt=""
      />
    </div>

    <div class="tip-box">
      <span class="tip">Click Change Avatar</span>
    </div>

    <div class="info-box">
      <InfoItem title="Name" :value="'Joe Goodman'" />
      <InfoItem title="Sex" :value="'female'" />
      <InfoItem title="Birthday" :value="'2001-12-12'" />
      <InfoItem title="Location" :value="'Washington'" />
      <InfoItem title="Home page background" :value="'replace'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  layout: "notabs",
})
export default class MySetting extends Vue {
  goBack() {
    this.$router.go(-1);
  }
}
</script> 

<style lang="less" scoped>
.my-setting {
  height: 100%;
  background-color: #F7F8FD;

  .header-box {
    text-align: center;

    .header {
      width: 85Px;
      height: 85Px;
      border-radius: 50%;
    }
  }
  
  .tip-box {
    text-align: center;
    margin-top: 19px;

    .tip {
      font-size: 14px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
    }
  }

  .info-box {
    padding: 15Px 16px;
  }

  .info-box > * {
    margin-top: 15Px;
  }
}
</style> 