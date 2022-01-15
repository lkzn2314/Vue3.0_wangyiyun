<template>
  <div class="musiclistWrapper wrap-v2">
    <div class="left">
      <MusicRanking />
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Musiclist',
};
</script>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import MusicRanking from './children/MusicRanking.vue';

const store = useStore();

onMounted(() => {
  store.dispatch('getToplistAction');
});
</script>

<style lang="less" scoped>
.musiclistWrapper {
  display: flex;

  .left {
    width: 240px;
    background-color: #f9f9f9;
  }

  .right {
    width: 740px;
    background-color: #fff;
  }
}
</style>
