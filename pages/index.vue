<template>
  <div class="home">
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ $t(`language.${lang}`) }}
      </option>
    </select> -->
    <div class="leaflet" ref="leaflet">
      <img
        class="leaflet-release"
        src="@/assets/image/icon_release@2x.png"
        alt=""
      />
      <s-facebook
        :window-features="windowFeatures"
        :share-options="shareOptions"
      >
        <img
          class="leaflet-share"
          src="@/assets/image/icon_share@2x.png"
          alt=""
        />
      </s-facebook>

      <span class="tip" @click="start()">点击查看</span>
    </div>

    <div class="handle">
      <img
        class="leaflet-release"
        src="@/assets/image/icon_release@2x.png"
        alt=""
      />
      <img
        class="leaflet-share"
        src="@/assets/image/icon_share@2x.png"
        alt=""
      />

      <!-- <img
        class="mute"
        v-if="isMute"
        src="@/assets/image/icon_mute.png"
        alt=""
        @click="setNoMute()"
      />
      <img
        class="mute"
        v-else
        src="@/assets/image/icon_paly.png"
        alt=""
        @click="setMute()"
      />
      <img
        @click="jump('search')"
        class="search"
        src="@/assets/image/search.png"
        alt=""
      />
      <div class="handle-right">
        <UserHeaderFollow />
        <Good :title="'立刻决定是否了'" />
        <Share @share="share()" />
      </div>

      <div class="info">
        <div class="title">滑板进阶技巧</div>
        <div class="author">@Emilie Palmer</div>
      </div> -->
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
        @click="change()"
      >
        <video
          class="playing-video"
          :style="{ 'z-index': 1 }"
          autoplay
          loop
          muted
          playsinline
          ref="playingVideo"
        >
          <source type="video/mp4" />
          您的浏览器不支持音视频元素。
        </video>
      </div>
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
import { SFacebook, SFacebookCount } from "vue-socials";
// import { touch } from "@/directive/Touch";

@Component({
  layout: "notabs",
  components: { SFacebook, SFacebookCount },
  computed: {
    userName() {
      return this.$store.state.auth.userName;
    },
    isMute() {
      return this.$store.state.video.isMute;
    },
  },
  // directives: {
  //   touch,
  // },
})
export default class Home extends Vue {
  windowFeatures = {};
  shareOptions = {
    url: "https://github.com/",
    quote: "童车社群",
    hashtag: "#five童车社群",
  };

  $videojs!: any;
  $refs!: {
    previousVideo: HTMLElement;
    currentVideo: HTMLElement;
    nextVideo: HTMLElement;
    playingVideo: HTMLVideoElement;
    leaflet: HTMLElement;
  };
  isAndroid!: boolean;

  langs = ["en", "zh"];

  threeVideo: string[] = []; // 正在播放以及前后的 3 个视频地址

  videoList: string[] = []; // 视频地址列表

  playingVideoIndex!: number; // 当前播放视频指针

  isRestoreLocation = false;

  offset = 0; // 当前已有视频数量

  isFirst = true; // 是否第一次进入界面

  start() {
    this.$refs.leaflet.style.transform = `translateY(-100%)`;
    this.$refs.playingVideo.play();
    this.setNoMute();
  }

  async asyncData() {
    return { title: "你你你你将来肯定就发给" };
  }

  setNoMute() {
    this.$refs.playingVideo.muted = false;
    this.$store.dispatch("video/noMute");
  }

  setMute() {
    this.$refs.playingVideo.muted = true;
    this.$store.dispatch("video/mute");
  }

  activated() {
    if (!this.isFirst) {
      this.$refs.playingVideo.play();
    }
    this.isFirst = false;
  }

  async mounted() {
    this.isAndroid =
      navigator.userAgent
        .toLowerCase()
        .match(/android/i)
        ?.toString() == "android";

    await this.$store.dispatch("video/getMvList", {
      limit: 3,
      offset: this.offset,
    });
    this.offset = 3;
    await this.loadVideoList();

    this.playingVideoIndex = 1;
    this.rendererVideoBox(true);

    await this.$store.dispatch("video/getMvList", {
      limit: 20,
      offset: this.offset,
    });
    this.offset += 20;
    await this.loadVideoList();
  }

  async loadVideoList() {
    const mvUrlPromiseList = (this.$store.state.video.videoList as []).map(
      (item: any) => getMvUrlRequest(item.id)
    );
    this.videoList = await Promise.all(mvUrlPromiseList).then((result) =>
      result.map((item) => item.data.url)
    );
  }

  async rendererVideoBox(isFirstRenderer?: boolean) {
    this.threeVideo = this.videoList.slice(
      this.playingVideoIndex - 1,
      this.playingVideoIndex + 2
    );

    await this.loadVideoCover(this.threeVideo[1]).then((img) => {
      const child = this.$refs.currentVideo.childNodes[1];
      if (child) {
        if (this.isAndroid) {
          (child as HTMLVideoElement).src = "";
          (child as HTMLVideoElement).load();
        }
        this.$refs.currentVideo.removeChild(child);
      }
      this.$refs.currentVideo.appendChild(img);

      this.$refs.playingVideo.src = this.threeVideo[1];
      this.$refs.playingVideo.load();

      if (isFirstRenderer) {
        // 刚进入网站时暂停播放
        this.$refs.playingVideo.pause();
      }

      // 当前要播放的视频加载完成时，将 currentVideo 移动到原本位置（屏幕中间），防止闪屏
      this.$refs.currentVideo.style.transform = "";
    });

    if (this.playingVideoIndex === 1) {
      const child = this.$refs.previousVideo.childNodes[0];
      if (child) {
        if (this.isAndroid) {
          (child as HTMLVideoElement).src = "";
          (child as HTMLVideoElement).load();
        }
        this.$refs.previousVideo.removeChild(child);
      }
    } else {
      await Promise.all([
        this.loadVideoCover(this.threeVideo[0]).then((img) => {
          const child = this.$refs.previousVideo.childNodes[0];
          if (child) {
            if (this.isAndroid) {
              (child as HTMLVideoElement).src = "";
              (child as HTMLVideoElement).load();
            }
            this.$refs.previousVideo.removeChild(child);
          }
          this.$refs.previousVideo.appendChild(img);
        }),
      ]);
    }

    await Promise.all([
      this.loadVideoCover(this.threeVideo[2]).then((img) => {
        const child = this.$refs.nextVideo.childNodes[0];
        if (child) {
          if (this.isAndroid) {
            (child as HTMLVideoElement).src = "";
            (child as HTMLVideoElement).load();
          }
          this.$refs.nextVideo.removeChild(child);
        }
        this.$refs.nextVideo.appendChild(img);
      }),
    ]);
  }

  /**
   * 加装视频封面（第一帧）
   */
  loadVideoCover(src: string) {
    return new Promise<any>((resolve, reject) => {
      const video = document.createElement("video");
      video.src = src;
      video.setAttribute("crossorigin", "anonymous");
      video.autoplay = true;
      video.pause();
      video.addEventListener("loadeddata", (e) => {
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        const clientScale = clientWidth / clientHeight;
        const videoScale = video.videoWidth / video.videoHeight;

        const img = document.createElement("img");

        if (videoScale >= clientScale) {
          // 视频过宽
          img.style.width = "100%";
          img.style.height = "unset";
          this.$refs.playingVideo.style.width = "100%";
          this.$refs.playingVideo.style.height = "unset";
          video.style.width = "100%";
          video.style.height = "unset";
        } else {
          // 视频过高
          img.style.height = "100%";
          img.style.width = "unset";
          this.$refs.playingVideo.style.width = "100%";
          this.$refs.playingVideo.style.height = "unset";
          video.style.height = "100%";
          video.style.width = "unset";
        }

        if (this.isAndroid) {
          resolve(video);
        } else {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas
            .getContext("2d")
            ?.drawImage(video, 0, 0, canvas.width, canvas.height);

          img.src = canvas.toDataURL("image/png");

          video.src = "";
          video.load();

          resolve(img);
        }
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
    } else if (moveScale > 0.2 && this.playingVideoIndex >= 2) {
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

    this.$refs.previousVideo.style.transform = `translateY(${
      moveDistance - document.documentElement.clientHeight
    }px)`;
    this.$refs.currentVideo.style.transform = `translateY(${moveDistance}px)`;
    this.$refs.nextVideo.style.transform = `translateY(${
      moveDistance + document.documentElement.clientHeight
    }px)`;
  }

  clearStyle() {
    this.$refs.previousVideo.style.transform = "";
    this.$refs.currentVideo.style.transform = "";
    this.$refs.nextVideo.style.transform = "";
  }

  playNextVideo() {
    this.isRestoreLocation = true;
    this.$refs.currentVideo.style.transform = "translateY(-100%)";
    this.$refs.nextVideo.style.transform = "translateY(0)";
    setTimeout(() => {
      this.isRestoreLocation = false;
      this.resetVideoBox("next");
    }, 300);
  }

  playPreviousVideo() {
    this.isRestoreLocation = true;
    this.$refs.previousVideo.style.transform = "translateY(0)";
    this.$refs.currentVideo.style.transform = "translateY(100%)";
    setTimeout(() => {
      this.isRestoreLocation = false;
      this.resetVideoBox("previous");
    }, 300);
  }

  async resetVideoBox(who: "next" | "previous") {
    this.playingVideoIndex += who === "next" ? 1 : -1;
    if (this.playingVideoIndex === 0) {
      this.playingVideoIndex = 1;
    }

    this.rendererVideoBox().then(() => {
      this.clearStyle();
    });

    if (this.playingVideoIndex + 5 > this.videoList.length) {
      await this.$store.dispatch("video/getMvList", {
        limit: 20,
        offset: this.offset,
      });
      this.offset += 20;
      await this.loadVideoList();
    }
  }

  share() {}

  change() {
    if (this.$refs.playingVideo.paused) {
      this.$refs.playingVideo.play();
    } else {
      this.$refs.playingVideo.pause();
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: black;

  .leaflet {
    position: absolute;
    top: 0;
    background-color: pink;
    width: 100%;
    height: 100%;
    z-index: 999;
    transition: transform .5s;

    .tip {
      position: absolute;
      bottom: 100Px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 20px;
      font-family: AlibabaPuHuiTiM;
      color: #FFFFFF;
    }

    .leaflet-release {
      width: 24Px;
      height: 24Px;
      position: absolute;
      right: 71Px;
      top: 24Px;
    }

    .leaflet-share {
      width: 24Px;
      height: 24Px;
      position: absolute;
      right: 24Px;
      top: 24Px;
    }
  }

  .handle {

    .leaflet-release {
      width: 24Px;
      height: 24Px;
      position: absolute;
      right: 71Px;
      top: 24Px;
    }

    .leaflet-share {
      width: 24Px;
      height: 24Px;
      position: absolute;
      right: 24Px;
      top: 24Px;
    }

    .mute {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 16px;
      right: 46px;
    }

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
    z-index: 2;
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
      .playing-video {
        position: absolute;
      }
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
