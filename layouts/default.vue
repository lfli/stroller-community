<template>
  <div class="default">
    <Nuxt keep-alive class="content" />
    <div class="tabs-menu">
      <div class="add-ball">
        <img
          @click="setMenuIndex(4)"
          src="@/assets/image/ic_release.png"
          alt=""
        />
      </div>
      <!-- 
      <div class="tabs-bg">
        <div class="tabs-bg-left"></div>
        <div class="tabs-bg-center"></div>
        <div class="tabs-bg-right"></div>
      </div> -->

      <div class="tabs-bg">
         <img src="@/assets/image/Rectangle.png" alt="" class="tabs-bg-img" />
        <!--<div class="tabs-bg-block"></div> -->
      </div>

      <div class="list">
        <div class="menu-item" @click="setMenuIndex(0)">
          <img v-if="menuIndex === 0" src="@/assets/image/ic_home.png" alt="" />
          <img v-else src="@/assets/image/ic_home_select.png" alt="" />
          <span :class="[menuIndex === 0 ? 'activated' : 'un-activated']">{{
            $t("links.home")
          }}</span>
        </div>
        <div class="menu-item" @click="setMenuIndex(1)">
          <img
            v-if="menuIndex === 1"
            src="@/assets/image/ic_find_select.png"
            alt=""
          />
          <img v-else src="@/assets/image/ic_find.png" alt="" />
          <span :class="[menuIndex === 1 ? 'activated' : 'un-activated']">{{
            $t("links.find")
          }}</span>
        </div>
        <div style="width: 10%"></div>
        <div class="menu-item" @click="setMenuIndex(2)">
          <img
            v-if="menuIndex === 2"
            src="@/assets/image/ic_news_select.png"
            alt=""
          />
          <img v-else src="@/assets/image/ic_news.png" alt="" />
          <span :class="[menuIndex === 2 ? 'activated' : 'un-activated']">{{
            $t("links.privateLetter")
          }}</span>
        </div>
        <div class="menu-item" @click="setMenuIndex(3)">
          <img
            v-if="menuIndex === 3"
            src="@/assets/image/ic_profile_select.png"
            alt=""
          />
          <img v-else src="@/assets/image/ic_profile.png" alt="" />
          <span :class="[menuIndex === 3 ? 'activated' : 'un-activated']">{{
            $t("links.my")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  computed: {
    menuIndex() {
      return this.$store.state.tabMenu.menuIndex;
    },
  },
})
export default class Default extends Vue {
  tabsMenuList = ["/", "/find", "/private-letter", "/my", "/publish"];

  setMenuIndex(index: number) {
    this.$router.replace({ path: this.tabsMenuList[index] });
    this.$store.dispatch("tabMenu/setMenuIndex", index);
  }
}
</script>

<style lang="less" scoped>
.default {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    flex: 1;
  }

  .tabs-menu {
    width: 100%;
    height: 95Px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    z-index: 99;

    .tabs-bg{
      // background: url(@/assets/image/Rectangle.png) no-repeat center ;
      // background-size: cover;
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
      position: absolute;
      left: 0;
      bottom: 0;


      .tabs-bg-img{
        transform: translateX(-50%);
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }


    }


    .add-ball {
      background-color: #fedf4c;
      width: 58Px;
      height: 58Px;
      border-radius: 50%;
      transform: translate(-50%, -45%);
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      z-index: 2;

      img {
        width: 24Px;
        height: 24Px;
      }
    }

    .list {
      display: flex;
      margin-top: 10Px;
      justify-content: space-around;
      position: relative;
      z-index: 2;

      .menu-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 24Px;
          height: 24Px;
        }

        span {
          font-size: 13Px;
        }

        .un-activated {
          color: #908a87;
        }

        .activated {
          color: black;
        }
      }
    }
  }
}
</style>