<template>
  <div class="hot-recommend-wrapper">
    <HeaderLine title="热门推荐" :tabs="hotPlaylistCategory.slice(0, 5)" toPath="playlist" />

    <div class="recommend-list">
      <SongsCover v-for="item in hotRecommends" :key="item" :info="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';
import HeaderLine from '@/components/header-line/HeaderLine.vue';
import SongsCover from '@/components/songs-cover/SongsCover.vue';

export default {
  name: 'HotRecommend',
  components: {
    HeaderLine,
    SongsCover,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch('getHotPlaylistAction');
      store.dispatch('getHotRecommendsAction', 8);
    });

    return {
      hotPlaylistCategory: computed(() => store.state.playlist.hotPlaylistCategory),
      hotRecommends: computed(() => store.state.recommend.hotRecommends),
    };
  },
};
</script>

<style lang="less" scoped>
.hot-recommend-wrapper {
  margin-bottom: 30px;

  .recommend-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
