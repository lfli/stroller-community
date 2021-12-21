<template>
  <div>
    <div class="go-back" @click="goBack"></div>
    <div class="Title">
      {{ $t("links.fans") }}
    </div>
    <div class="safe-box">
      <div class="fans-list" v-for="(item, index) in FansList" :key="index">
        <img :src="item.srcUrl" alt="" class="fans-list-img" />
        <div class="fans-list-center">
          <div class="fans-list-title">
            {{ item.name }}
          </div>
          <div class="fans-list-subtitle">
            {{ item.time }}
          </div>
        </div>
        <button :class="{isActive:isFollow == index}" class="btn-follow" @click="clickBtn(index)">
           <span v-if="isFollow == -1">+ {{$t("links.follow") }}</span>
           <span v-else>{{$t("links.followed") }}</span>
        </button>
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
export default class Fans extends Vue {
  FansList = [
    {
      srcUrl: "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      name: "Vernon Higgins",
      time: "11-22",
    },
  ];
  
  isFollow = -1;

  goBack(){
      this.$router.go(-1)
    }
}
</script>

<style lang="less" scoped>
.fans-list {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-top: 15px;

  .fans-list-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .fans-list-center {
    width: calc(100% - 140px);
    padding-left: 15px;
  }

  .fans-list-title {
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
  }

  .fans-list-subtitle {
    font-size: 13px;
    font-weight: 400;
    color: #999;
    margin-top: 8px;
    line-height: 12px;
  }

  .btn-follow {
    background: #000;
    border-radius: 10px;
    width: 80px;
    height: 32px;
    color: #fff;
    border: 0;
  }

  .isActive{
    background: #999 !important;
  }
}
</style> 