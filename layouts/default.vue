<template>
  <div class="default">
    <Nuxt class="content" />
    <div class="tabs-menu">
      <div class="add-ball">
        <img
          @click="setMenuIndex(4)"
          src="@/assets/image/ic_release.png"
          alt=""
        />
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
  height: 100vh;

  .content {
    flex: 1;
  }

  .tabs-menu {
    background: url(@/assets/image/Rectangle.png) no-repeat;
    background-size: 100% 15.89vh;
    width: 100%;
    height: 15.89vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;

    .add-ball {
      background-color: #fedf4c;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      transform: translateY(-30%);
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
      }
    }

    .list {
      display: flex;
      justify-content: space-around;

      .menu-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 24px;
          height: 24px;
        }

        span {
          font-size: 12px;
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