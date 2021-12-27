<template>
  <div class="my">
    <img
      :style="{ filter: isToTop ? 'blur(2px)' : '' }"
      class="my-background"
      src="http://source.unsplash.com/random/1000x600"
      alt=""
    />
    <div class="content-box" :style="{ height: isToTop ? '90%' : '' }">
      <div class="base-info">
        <img
          class="header"
          src="https://img1.baidu.com/it/u=4038164483,1275283985&fm=26&fmt=auto"
          alt=""
        />
        <div class="info">
          <div class="top">
            <div class="left">
              <span class="name">Joe Goodman</span>
              <span class="email">nevomuw@asa.an</span>
            </div>
            <span class="into">></span>
          </div>
          <div class="three-box">
            <div class="item">
              <span class="num">11.2w</span>
              <span class="title">{{ $t("my.fabulous") }}</span>
            </div>
            <div class="item">
              <span class="num">657</span>
              <span class="title">{{ $t("my.follow") }}</span>
            </div>
            <div class="item">
              <span class="num">3634</span>
              <span class="title">{{ $t("my.fans") }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="video-box">
        <div class="title-tabs">
          <div class="title-box">
            <span
              :style="{
                color: currentVideoTab === VideoTab.Works ? 'black' : '#999999',
              }"
              class="title"
              @click="change(VideoTab.Works)"
              >{{ $t("my.works") }}</span
            >
            <span
              :style="{
                color: currentVideoTab === VideoTab.Like ? 'black' : '#999999',
              }"
              class="title"
              @click="change(VideoTab.Like)"
              >{{ $t("my.like") }}</span
            >
          </div>
          <div
            :class="[
              'yellow-bar',
              currentVideoTab === VideoTab.Like ? 'yellow-bar-to-like' : '',
            ]"
          ></div>
        </div>

        <div
          v-show="currentVideoTab === VideoTab.Works"
          class="video-flow-box"
          v-reachTheBottom="reachTheBottomWorksHandle"
        >
          <div class="video-flow">
            <div class="half">
              <div
                class="video-item"
                v-for="(img, index) in worksLeftImgList"
                :key="index"
              >
                <img :src="img" alt="" />
                <PlayNum class="num" :num="12345" />
              </div>
            </div>
            <div class="half">
              <div
                class="video-item"
                v-for="(img, index) in worksRightImgList"
                :key="index"
              >
                <img :src="img" alt="" />
                <PlayNum class="num" :num="5123" />
              </div>
            </div>
          </div>
        </div>

        <div
          v-show="currentVideoTab === VideoTab.Like"
          class="video-flow-box"
          v-reachTheBottom="reachTheBottomLikeHandle"
        >
          <div class="video-flow">
            <div class="half">
              <div
                class="video-item"
                v-for="(img, index) in likeLeftImgList"
                :key="index"
              >
                <img :src="img" alt="" />
                <PlayNum class="num" :num="12345" />
                <img class="liked" src="@/assets/image/liked.png" alt="" />
              </div>
            </div>
            <div class="half">
              <div
                class="video-item"
                v-for="(img, index) in likeRightImgList"
                :key="index"
              >
                <img :src="img" alt="" />
                <PlayNum class="num" :num="5123" />
                <img class="liked" src="@/assets/image/liked.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { reachTheBottom } from "@/directive/ReachTheBottom";

enum VideoTab {
  Works = "Works",
  Like = "Like",
}

@Component({
  directives: {
    reachTheBottom,
  },
})
export default class My extends Vue {
  isToTop = false;

  VideoTab = VideoTab;

  currentVideoTab = VideoTab.Works;

  worksLeftImgList: string[] = [];
  worksRightImgList: string[] = [];
  worksLeftHeight = 0;
  worksRightHeight = 0;

  likeLeftImgList: string[] = [];
  likeRightImgList: string[] = [];
  likeLeftHeight = 0;
  likeRightHeight = 0;

  reachTheBottomWorksHandle = {
    isShowTrigger: true,
    callback: () => {
      this.worksLoadMore();
    },
    exceed: this.exceed,
    noExceed: this.noExceed,
  };

  reachTheBottomLikeHandle = {
    isShowTrigger: true,
    callback: () => {
      this.likeLoadMore();
    },
    exceed: this.exceed,
    noExceed: this.noExceed,
  };

  exceed() {
    this.isToTop = true;
  }

  noExceed() {
    this.isToTop = false;
  }

  created() {
    if (process.server) {
      return;
    }
    this.loadWorksImgList();
    this.loadLikeImgList();
  }

  loadWorksImgList() {
    for (let i = 0; i < 10; i++) {
      let img = "http://source.unsplash.com/random/";

      const random = Math.random();
      if (random < 0.2) {
        img += "400x600";
      } else if (random >= 0.2 && random < 0.4) {
        img += "600x400";
      } else if (random >= 0.4 && random < 0.6) {
        img += "400x800";
      } else if (random >= 0.6 && random < 0.8) {
        img += "300x400";
      } else {
        img += "400x700";
      }

      this.getImgHeight(img).then((height) => {
        if (this.worksLeftHeight <= this.worksRightHeight) {
          this.worksLeftHeight += height;
          this.worksLeftImgList.push(img);
        } else {
          this.worksRightHeight += height;
          this.worksRightImgList.push(img);
        }
      });
    }
  }

  loadLikeImgList() {
    for (let i = 0; i < 10; i++) {
      let img = "http://source.unsplash.com/random/";

      const random = Math.random();
      if (random < 0.2) {
        img += "400x600";
      } else if (random >= 0.2 && random < 0.4) {
        img += "600x400";
      } else if (random >= 0.4 && random < 0.6) {
        img += "400x800";
      } else if (random >= 0.6 && random < 0.8) {
        img += "300x400";
      } else {
        img += "400x700";
      }

      this.getImgHeight(img).then((height) => {
        if (this.likeLeftHeight <= this.likeRightHeight) {
          this.likeLeftHeight += height;
          this.likeLeftImgList.push(img);
        } else {
          this.likeRightHeight += height;
          this.likeRightImgList.push(img);
        }
      });
    }
  }

  getImgHeight(path: string) {
    return new Promise<number>((resolve, reject) => {
      const img = document.createElement("img");
      img.src = path;
      img.onload = () => {
        const height = img.height / img.width;
        resolve(height);
      };
    });
  }

  change(tab: VideoTab) {
    this.currentVideoTab = tab;
  }

  worksLoadMore() {
    this.reachTheBottomWorksHandle.isShowTrigger = false;

    setTimeout(() => {
      this.loadWorksImgList();
      this.reachTheBottomWorksHandle.isShowTrigger = true;
    }, 200);
  }

  likeLoadMore() {
    this.reachTheBottomLikeHandle.isShowTrigger = false;

    setTimeout(() => {
      this.loadLikeImgList();
      this.reachTheBottomLikeHandle.isShowTrigger = true;
    }, 200);
  }
}
</script>

<style lang="less" scoped>
.my {
  display: flex;
  flex-direction: column;
  background-color: black;

  .my-background {
    width: 100%;
    height: calc(28% + 30px);
  }

  .content-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 72%;
    background-color: white;
    border-radius: 30px 30px 0 0;
    display: flex;
    flex-direction: column;
    transition: 0.2s height;

    .base-info {
      display: flex;
      padding: 20px 20px 0 16px;

      .header {
        border-radius: 50%;
        width: 90Px;
        height: 90Px;
      }

      .info {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
        padding: 0 20px;

        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            display: flex;
            flex-direction: column;

            .name {
              font-size: 23Px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
            }
            .email {
              font-size: 14Px;
              font-family: PingFang-SC-Medium, PingFang-SC;
              font-weight: 500;
              color: #999999;
            }
          }
          .into {
            color: #999999;
          }
        }
        .three-box {
          display: flex;
          justify-content: space-between;
          margin-top: 16Px;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;

            .num {
              font-size: 14Px;
              font-family: BalooTamma-Regular, BalooTamma;
              font-weight: 600;
              color: #000000;
            }

            .title {
              font-size: 12Px;
              font-family: Baghdad;
              color: #999999;
            }
          }
        }
      }
    }

    .video-box {
      display: flex;
      flex-direction: column;
      margin-top: 36px;
      flex: 1;
      overflow-y: auto;

      .title-tabs {
        display: flex;
        flex-direction: column;

        .title-box {
          display: flex;
          justify-content: space-around;

          .title {
            font-size: 16Px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #999999;
          }
        }
        .yellow-bar {
          width: 21Px;
          height: 4Px;
          background: #FEDF4C;
          border-radius: 3Px;
          position: relative;
          left: 25%;
          margin-top: 6Px;
          transform: translateX(-30%);
          transition: 0.2s left;
        }
        .yellow-bar-to-like {
          left: 75% !important;
        }
      }

      .video-flow-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          margin-top: 12Px;

        .video-flow {
          display: flex;
          padding: 0 8Px;

          .half {
            flex: 1;
            padding: 0 8Px;

            .video-item {
              position: relative;

              img {
                width: 100%;
                margin-bottom: 14Px;
                border-radius: 8Px;
              }

              .num {
                position: absolute;
                top: 6px;
                right: 10px;
              }

              .liked {
                width: 25Px;
                height: 25Px;
                border-radius: 50%;
                position: absolute;
                bottom: 12px;
                right: 10px;
              }
            }            
          }
        }
      }
    }
  }
}
</style>