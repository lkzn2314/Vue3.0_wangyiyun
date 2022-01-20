<template>
  <div class="playlistWrapper wrap-v2">
    <div class="head">
      <div class="left">
        <span>{{ '全部' }}</span>
        <span class="category">
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
  </div>
</template>

<script lang="ts">
export default {
  name: 'Playlist',
};
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SongsCover from '@/components/songs-cover/SongsCover.vue';
const store = useStore();
store.dispatch('getAllPlaylistAction', { offset: 1, limit: 50, cat: '全部' });
const allPlaylist = computed(() => store.state.playlist.allPlaylist);
</script>

<style lang="less" scoped>
.playlistWrapper {
  position: relative;
  padding: 40px 40px 80px 40px;
  background-color: #fff;

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
}
</style>
