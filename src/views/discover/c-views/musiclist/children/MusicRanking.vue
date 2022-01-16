<template>
  <div class="musicRankingWrapper" v-if="toplist.length">
    <h2 class="special title">云音乐特色榜</h2>
    <MusiclistRankingCover
      v-for="(item, index) in toplist?.slice(0, 4)"
      :key="item.id"
      :info="item"
      :index="index"
    />
    <h2 className="media title">全球媒体榜</h2>
    <MusiclistRankingCover
      v-for="(item, index) in toplist?.slice(4)"
      :key="item.id"
      :info="item"
      :index="index + 4"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MusicRanking',
};
</script>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import MusiclistRankingCover from '@/components/musiclist-ranking-cover/MusiclistRankingCover';
const store = useStore();
const toplist = computed(() => store.state.musiclist.toplist);
</script>

<style lang="less" scoped>
.musicRankingWrapper {
  .title {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }

  .special {
    margin: 35px 0 10px 18px;
  }
  .media {
    margin: 15px 0 10px 18px;
  }
}
</style>
