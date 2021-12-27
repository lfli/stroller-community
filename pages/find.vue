<template>
  <div>
    <div class="Title top30">
      {{ $t("links.find") }}
    </div>
    <div class="find-list">
      <div v-for="(item, index) in FindList" :key="index" class="find-list-item">
        <img :src="item.srcUrl" alt="" class="find-list-img" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Find extends Vue {
  FindList = [
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
    },
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
    },
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
    },
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
    },
    {
      srcUrl:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
    },
  ];
}
</script>

<style lang="less" scoped>
@media (min-width: 600Px) {
  .find-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 16Px 75Px;

  .find-list-item {
    width: 23.5%;
    padding-top: 35%;
    position: relative;
    margin-bottom: 14Px;
    margin-right: 2%;

    .find-list-img {
      width: 100%;
      height: 100%;
      border-radius: 12Px;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .find-list-item:nth-child(4n){
    margin-right: 0;
  }
}
}
@media screen and (max-width:599Px){
.find-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 16Px 75Px;

  .find-list-item {
    width: 48%;
    padding-top: 70%;
    position: relative;
    margin-bottom: 14Px;
    margin-right: 3%;

    .find-list-img {
      width: 100%;
      height: 100%;
      border-radius: 12Px;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .find-list-item:nth-child(2n){
    margin-right: 0;
  }
}
}


</style>