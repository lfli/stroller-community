<template>
  <div class="page">
    <div class="go-back" @click="goBack"></div>
    <div class="safe-box">
      <InfList
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  layout: "notabs",
})
export default class PersonalData extends Vue {
  // 返回按钮
  goBack() {
    this.$router.go(-1);
  }

  list = [
    {
      title: "Name",
      subtitle: "Joe Goodman",
    },
     {
      title: "Sex",
      subtitle: "female",
    },
     {
      title: "Birthday",
      subtitle: "2001-12-12",
    },
     {
      title: "Location",
      subtitle: "Washington",
    },
    {
      title: "Home page background",
      subtitle: "replacen",
    }
  ];
}
</script>

<style lang="less" scoped>
.page{
  background: #F7F8FD;
  width: 100%;
  height: 100%;
}
</style> 