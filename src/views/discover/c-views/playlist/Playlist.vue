<template>
  <div class="playlistWrapper wrap-v2">
    <div class="head">
      <div class="left">
        <span>{{ currentCat }}</span>
        <span class="category" @click="selectCategoryClick">
          选择分类
          <i class="sprite_icon2" />
        </span>
      </div>
      <button>热门</button>
    </div>

    <div class="body" v-if="allPlaylist.length">
      <div class="all-playlist">
        <div class="item" v-for="item in allPlaylist" :key="item.id">
          <SongsCover :info="item" infoType="playlist" />
        </div>
      </div>
    </div>
    <el-pagination
      v-if="allPlaylist.length"
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="50"
      @current-change="pageChangeClick"
    />
    <CategoryPanel v-show="isShowPanel" @selectCategoryClick="selectCategoryClick" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import SongsCover from '@/components/songs-cover/SongsCover.vue';
import CategoryPanel from './children/CategoryPanel.vue';
const isShowPanel = ref(false);
const store = useStore();
const allPlaylist = computed(() => store.state.playlist.allPlaylist);
const total = computed(() => store.state.playlist.total);
const currentCat = computed(() => store.state.playlist.currentCat);
store.dispatch('getAllPlaylistCategoryAction');
store.dispatch('getAllPlaylistAction', { offset: 1, limit: 50, cat: currentCat });

const selectCategoryClick = () => {
  isShowPanel.value = !isShowPanel.value;
};

const pageChangeClick = (currentPage: number) => {
  store.dispatch('getAllPlaylistAction', { offset: currentPage, limit: 50, cat: currentCat });
};
</script>

<style lang="less" scoped>
.playlistWrapper {
  position: relative;
  padding: 40px 40px 80px 40px;
  background-color: #fff;
  box-sizing: border-box;

  .head {
    display: flex;
    justify-content: space-between;
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #c20c0c;

    .left {
      span:first-child {
        font-size: 24px;
      }

      .category {
        position: relative;
        bottom: 5px;
        display: inline-block;
        width: 91px;
        height: 31px;
        line-height: 31px;
        margin-left: 12px;
        background-color: #f9f9f9;
        color: #0c73c2;
        text-align: center;
        border: 1px solid #c4c4c4;

        &:hover {
          cursor: pointer;
          background-color: #fff;
        }

        i {
          display: inline-block;
          width: 8px;
          height: 5px;
          margin-left: 5px;
          background-position: -70px -543px;
        }
      }
    }

    button {
      width: 46px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      color: #fff;
      background-color: #a80909;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .body {
    position: relative;
    padding-bottom: 30px;

    .all-playlist {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 10px;

      .item {
        width: 140px;
        height: 188px;
        margin: 0 0 30px 30px;
      }
    }
  }

  .el-pagination {
    text-align: center;
  }

  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #c80c0e;
  }
}
</style>
