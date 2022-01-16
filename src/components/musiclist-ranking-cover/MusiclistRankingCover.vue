<template>
  <div
    :class="['wrapper', currentIndex === index ? 'active' : '']"
    @click="changeRankingClick(index, info?.id)"
  >
    <img :src="formatImgSize(info?.coverImgUrl, 40)" alt="" />
    <div>
      <div class="name">{{ info?.name }}</div>
      <div class="text">{{ info?.updateFrequency }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MusiclistRankingCover',
};
</script>

<script lang="ts" setup>
import { formatImgSize } from '@/utils/format';
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const props = defineProps({
  info: Object,
  index: Number,
});
const currentIndex = computed(() => store.state.musiclist.currentIndex);

const changeRankingClick = (index: number, playlistId: number) => {
  store.dispatch('changeCurrentIndexAction', index);
  store.dispatch('getRankingDetailAction', playlistId);
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  width: 240px;
  height: 62px;
  padding: 10px 0 10px 20px;
  box-sizing: border-box;

  &.active {
    background-color: #e6e6e6;
  }

  &:hover {
    cursor: pointer;
    background-color: #e6e6e6;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .name {
    color: #000;
    margin: 1px 0 4px 0;
  }
  .text {
    color: #b299b2;
  }
}
</style>
