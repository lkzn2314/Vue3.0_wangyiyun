<template>
  <div class="ranking-wrapper">
    <HeaderLine title="榜单" toPath="musiclist" />
    <div class="ranking-list">
      <TopRanking :info="upRankings" currentIndex="{0}" />
      <TopRanking :info="newRankings" currentIndex="{1}" />
      <TopRanking :info="originRankings" currentIndex="{2}" />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderLine from '@/components/header-line/HeaderLine.vue';
import TopRanking from '@/components/top-ranking/TopRanking.vue';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Ranking',
  components: {
    HeaderLine,
    TopRanking,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      [19723756, 3779629, 2884035].map((index: number) => {
        store.dispatch('getRankingAction', index);
      });
    });

    return {
      upRankings: computed(() => store.state.recommend.upRankings),
      newRankings: computed(() => store.state.recommend.newRankings),
      originRankings: computed(() => store.state.recommend.originRankings),
    };
  },
};
</script>

<style lang="less" scoped>
.ranking-wrapper {
  .ranking-list {
    display: flex;
    height: 472px;
    margin: 30px 0;
    background: url('~@/assets/img/recommend-top-bg.png');
  }
}
</style>
