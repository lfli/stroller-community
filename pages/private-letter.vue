<template>
  <div>
    <div class="Title top30">
      {{ $t("links.privateLetter") }}
    </div>
    <div class="safe-box">
      <PrivateLetterList :srcUrl="fansImg" :clickBtn="goFans">
        <slot>
          <div class="letter-list-center">
            <div class="letter-list-title">
              {{ $t("links.fans") }}
            </div>
            <div class="letter-list-subtitle">
              <span class="letter-list-subtitle-name">Vernon Higgins</span>
              {{ $t("links.concerned") }}
            </div>
          </div>
        </slot>
      </PrivateLetterList>
      <PrivateLetterList :srcUrl="messagesImg" :clickBtn="goMessages">
        <slot>
          <div class="letter-list-center">
            <div class="letter-list-title">
              {{ $t("links.interactive") }}
            </div>
            <div class="letter-list-subtitle">
              <span class="letter-list-subtitle-name"> Vernon Higgins</span>
              {{ $t("links.praised") }}
            </div>
          </div>
        </slot>
      </PrivateLetterList>
      <PrivateLetterList
        v-for="(item, index) in list"
        :key="index"
        :srcUrl="item.headList"
        :isShow="false"
      >
        <slot>
          <div class="letter-list-center">
            <div class="letter-list-title">{{ item.name }}</div>
            <div class="letter-list-subtitle">
              {{ item.messages }}·{{ item.time }}
            </div>
          </div>
        </slot>
      </PrivateLetterList>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class PrivateLetter extends Vue {
  fansImg = require("@/assets/image/list-icon.png");
  
  goFans() {
    this.$router.push({ path: "fans" });
  }
  messagesImg = require("@/assets/image/list-icon-interaction.png");
  goMessages() {
    this.$router.push({ path: "all-messages" });
  }
  list = [
    {
      headList:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      name: "Vernon Higgins",
      messages: "hello",
      time: "11-20",
    },
    {
      headList:
        "https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto",
      name: "Vernon Higgins",
      messages: "hello",
      time: "11-20",
    },
  ];
}
</script>

<style lang="less" scoped>
.letter-list {
  background: #fff;
  border-radius: 12Px;
  box-shadow: 0 0 10Px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  padding: 16Px 20Px;
  margin-top: 15Px;

  .letter-list-img {
    width: 40Px;
    height: 40Px;
    border-radius: 50%;
  }

  .letter-list-center {
    flex: 1;
    padding-left: 15Px;
  }

  .letter-list-title {
    font-size: 16Px;
    font-weight: 500;
  }

  .letter-list-subtitle {
    font-size: 13Px;
    font-weight: 400;
    color: #999;
    margin-top: 8Px;
    line-height: 12Px;
  }

  .letter-list-subtitle-name {
    width: 35%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>