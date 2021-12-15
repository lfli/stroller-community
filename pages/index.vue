<template>
  <div class="home">
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ $t(`language.${lang}`) }}
      </option>
    </select> -->
    <div class="handle">
      <img
        @click="jump('search')"
        class="search"
        src="@/assets/image/search.png"
        alt=""
      />
      <div class="handle-right">
        <UserHeaderFollow />
        <Good />
        <Share />
      </div>

      <div class="info">
        <div class="title">滑板进阶技巧</div>
        <div class="author">@Emilie Palmer</div>
      </div>
    </div>

    <div class="video-box">
      <div
        ref="previousVideo"
        :class="['previous-video', isRestoreLocation ? 'restore-location' : '']"
      ></div>
      <div
        ref="currentVideo"
        :class="['current-video', isRestoreLocation ? 'restore-location' : '']"
        @touchstart="touchstart"
        @touchend="touchend"
        @touchmove="touchmove"
      ></div>
      <div
        ref="nextVideo"
        :class="['next-video', isRestoreLocation ? 'restore-location' : '']"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getMvUrlRequest } from "~/apis/requests/api";

@Component({
  computed: {
    userName() {
      return this.$store.state.auth.userName;
    },
  },
})
export default class Home extends Vue {
  langs = ["en", "zh"];

  imageList = [
    "https://pic1.zhimg.com/80/v2-90fd4da7000c0919bc78fe56e8f4ea80_720w.jpg?source=1940ef5c",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F2e%2Ffe%2Fa4%2F2efea460e5834f2596290cea1f8e6dd8.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642129603&t=2d0575189cb94b172f11124350658ff5",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F482d3ff44920c61edb3c8a7b390d3c1268f40f5619614-yV59l1_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642129406&t=9c916b6a94fa516aa0df27ac27e4668a",
  ];

  isRestoreLocation = false;

  async asyncData() {
    return { title: "你你你你将来肯定就发给" };
  }

  async mounted() {
    if (process.server) {
      return;
    }

    await this.$store.dispatch("video/getMvList");

    const mvUrlPromiseList = (this.$store.state.video.videoList as [])
      .slice(0, 3)
      .map((item: any) => getMvUrlRequest(item.id));

    this.imageList = await Promise.all(mvUrlPromiseList).then((result) =>
      result.map((item) => item.data.url)
    );

    this.loadVideo(this.imageList[1]).then((video) => {
      (this.$refs.currentVideo as HTMLElement).appendChild(video);
    });

    this.loadVideo(this.imageList[0]).then((video) => {
      (this.$refs.previousVideo as HTMLElement).appendChild(video);
    });

    this.loadVideo(this.imageList[2]).then((video) => {
      (this.$refs.nextVideo as HTMLElement).appendChild(video);
    });
  }

  loadVideo(src: string) {
    return new Promise<HTMLVideoElement>((resolve, reject) => {
      const video = document.createElement("video");
      video.src = src;
      video.addEventListener("loadedmetadata", function (e) {
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        const clientScale = clientWidth / clientHeight;
        const videoScale = video.videoWidth / video.videoHeight;
        if (videoScale >= clientScale) {
          // 视频过宽
          video.style.width = "100%";
          video.style.height = "unset";
        } else {
          // 视频过高
          video.style.height = "100%";
          video.style.width = "unset";
        }
        resolve(video);
      });
    });
  }

  jump(path: string) {
    this.$router.push({ path });
  }

  touchstartY = 0; // 手指按下的 Y 坐标
  touchstart(event: any) {
    this.touchstartY = event.clientY || event.changedTouches[0].clientY;
  }

  touchend(event: any) {
    const touchendY = event.clientY || event.changedTouches[0].clientY;

    const moveScale =
      (touchendY - this.touchstartY) / document.documentElement.clientHeight;

    if (moveScale < -0.2) {
      // 播放下一个视频
      this.playNextVideo();
    } else if (moveScale > 0.2) {
      // 播放上一个视频
      this.playPreviousVideo();
    } else {
      // 移动的距离小于屏幕高度的 1/5 ，不切换视频
      this.restoreLocation();
    }
  }

  restoreLocation() {
    this.isRestoreLocation = true;
    this.clearStyle();
    setTimeout(() => {
      this.isRestoreLocation = false;
    }, 300);
  }

  touchmove(event: any) {
    event.preventDefault();

    const touchmoveY = event.clientY || event.changedTouches[0].clientY;
    const moveDistance = touchmoveY - this.touchstartY;

    (this.$refs.previousVideo as HTMLElement).style.transform = `translateY(${
      moveDistance - document.documentElement.clientHeight
    }px)`;
    (
      this.$refs.currentVideo as HTMLElement
    ).style.transform = `translateY(${moveDistance}px)`;
    (this.$refs.nextVideo as HTMLElement).style.transform = `translateY(${
      moveDistance + document.documentElement.clientHeight
    }px)`;
  }

  clearStyle() {
    (this.$refs.previousVideo as HTMLElement).style.transform = "";
    (this.$refs.currentVideo as HTMLElement).style.transform = "";
    (this.$refs.nextVideo as HTMLElement).style.transform = "";
  }

  playNextVideo() {
    this.isRestoreLocation = true;
    (this.$refs.currentVideo as HTMLElement).style.transform =
      "translateY(-100%)";
    (this.$refs.nextVideo as HTMLElement).style.transform = "translateY(0)";
    setTimeout(() => {
      this.isRestoreLocation = false;
      this.resetVideoBox("next");
    }, 300);
  }

  playPreviousVideo() {
    this.isRestoreLocation = true;
    (this.$refs.previousVideo as HTMLElement).style.transform = "translateY(0)";
    (this.$refs.currentVideo as HTMLElement).style.transform =
      "translateY(100%)";
    setTimeout(() => {
      this.isRestoreLocation = false;
      this.resetVideoBox("previous");
    }, 300);
  }

  resetVideoBox(who: "next" | "previous") {
    this.clearStyle();

    const currentVideo = (this.$refs.currentVideo as HTMLElement).childNodes[0];
    const previousVideo = (this.$refs.previousVideo as HTMLElement)
      .childNodes[0];
    const previousVideoClone = (
      this.$refs.previousVideo as HTMLElement
    ).childNodes[0].cloneNode(true);
    const nextVideo = (this.$refs.nextVideo as HTMLElement).childNodes[0];
    const nextVideoClone = (
      this.$refs.nextVideo as HTMLElement
    ).childNodes[0].cloneNode(true);

    if (who === "next") {
      (this.$refs.currentVideo as HTMLElement).replaceChild(
        nextVideoClone,
        currentVideo
      );

      (this.$refs.previousVideo as HTMLElement).replaceChild(
        currentVideo,
        previousVideo
      );

      (this.$refs.nextVideo as HTMLElement).replaceChild(
        previousVideo,
        nextVideo
      );
    } else {
      (this.$refs.currentVideo as HTMLElement).replaceChild(
        previousVideoClone,
        currentVideo
      );

      (this.$refs.previousVideo as HTMLElement).replaceChild(
        nextVideoClone,
        previousVideo
      );

      (this.$refs.nextVideo as HTMLElement).replaceChild(
        currentVideo,
        nextVideo
      );
    }

    ((this.$refs.currentVideo as HTMLElement).childNodes[0] as any).autoplay =
      true;
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: black;

  .handle {
    .search {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 16px;
      right: 16px;
    }

    .handle-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      right: 17px;
      top: 49.38%;
      height: 25vh;
      justify-content: space-between;
    }

    .info {
      position: absolute;
      left: 16px;
      top: 75%;
      color: white;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;

      .title {
        font-size: 17px;
      }

      .author {
        font-size: 16px;
        margin-top: 8px;
        opacity: 0.7;
      }
    }
  }
  .handle > * {
    z-index: 1;
  }

  .video-box {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .previous-video {
      transform: translateY(-100%);
    }

    .current-video {
    }

    .next-video {
      transform: translateY(100%);
    }

    .restore-location {
      transition: transform 0.3s;
    }
  }
  .video-box > * {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
