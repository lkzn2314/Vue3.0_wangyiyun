<template>
  <DiscoverHeader />
  <router-view />
  <el-backtop :visibility-height="100">
    <div class="back-top sprite_top" />
  </el-backtop>
</template>

<script lang="ts">
import DiscoverHeader from './DiscoverHeader.vue';

export default {
  name: 'Discover',
  components: {
    DiscoverHeader,
  },
};
</script>

<style lang="less" scoped>
.el-backtop {
  visibility: hidden;
}
.back-top {
  visibility: visible;
  position: fixed;
  left: 50%;
  bottom: 160px;
  width: 49px;
  height: 44px;
  margin-left: 500px;
  background-position: -265px -47px;

  &:hover {
    background-position-x: -325px;
  }
}
</style>
