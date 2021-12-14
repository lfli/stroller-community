<template>
  <div class="home">
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ $t(`language.${lang}`) }}
      </option>
    </select> -->
    <div class="handle">
      <img @click="jump('search')" class="search" src="@/assets/image/search.png" alt="" />
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

    <img
      class="video-box"
      src="https://pic1.zhimg.com/80/v2-90fd4da7000c0919bc78fe56e8f4ea80_720w.jpg?source=1940ef5c"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  computed: {
    userName() {
      return this.$store.state.auth.userName;
    },
  },
})
export default class Home extends Vue {
  langs = ["en", "zh"];

  async asyncData() {
    return { title: "你你你你将来肯定就发给" };
  }

  jump(path: string) {
    this.$router.push({path});
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;

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
      top: 49.38vh;
      height: 25vh;
      justify-content: space-between;
    }

    .info {
      position: absolute;
      left: 16px;
      top: 75vh;
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

  .video-box {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
  }
}
</style>
