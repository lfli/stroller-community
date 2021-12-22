<template>
  <div class="inf-list" @click="click">
    <div :class="{textColor:isBlack}" class="inf-list-left">{{ title }}</div>
    <div class="inf-list-right">
      <span class="" v-if="isSubtitle">{{ subtitle }}</span>
      <span class="arrow arrow-grey" v-if="isMore"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    isBlack:{
      type: Boolean,
      default: false,
    },
    title: String,
    isSubtitle: {
      type: Boolean,
      default: true,
    },
    subtitle: String,
    isMore: {
      type: Boolean,
      default: true,
    },
  },
})
export default class InfList extends Vue {}
</script>

<style lang="less" scoped>
.inf-list {
  background: #fff;
  border-radius: 8px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  .inf-list-left {
    color: #999;
  }

  .arrow {
    width: 8px;
    height: 8px;
  }

  .textColor{
  color: #000 !important;
}
}
</style>