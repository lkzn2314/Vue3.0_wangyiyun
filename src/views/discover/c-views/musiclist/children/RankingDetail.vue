<template>
  <div class="rankingDetailWrapper" v-if="toplist.length">
    <div class="head">
      <div class="title">
        歌曲列表
        <span>{{ toplistDetail?.trackCount }}首歌</span>
      </div>
      <div>
        播放：<i class="playcount">{{ toplistDetail?.playCount }} </i>次
      </div>
    </div>

    <div class="body">
      <table>
        <thead>
          <tr class="thead-tr">
            <th class="index"></th>
            <th class="table-title">标题</th>
            <th class="duration">时长</th>
            <th class="songer">歌手</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in playlist"
            :class="['playlist-item', index < 3 ? 'playlist-item-prev' : '']"
            :key="item.id"
          >
            <td>{{ index + 1 }}</td>
            <td class="text-nowrap">
              <img v-if="index < 3" :src="formatImgSize(item.al.picUrl, 50)" alt="" />
              <i class="play sprite_table" @click="playMusic(item.id)" /> {{ item.name }}
            </td>
            <td>{{ moment(item.dt).format('mm:ss') }}</td>
            <td class="text-nowrap">{{ item.ar[0].name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RankingDetail',
};
</script>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { formatImgSize } from '@/utils/format';
import moment from 'moment';

const store = useStore();
const toplist = computed(() => store.state.musiclist.toplist);
const currentIndex = computed(() => store.state.musiclist.currentIndex);
const toplistDetail = computed(() => store.state.musiclist.toplist[currentIndex.value]);
const playlist = computed(() => store.state.musiclist.playlist);

const playMusic = (songId: number) => {
  store.dispatch('getCurrentSongAction', songId);
};

watch(toplist, (newValue) => {
  store.dispatch('getRankingDetailAction', newValue[0].id);
});
</script>

<style lang="less" scoped>
.rankingDetailWrapper {
  padding: 0 30px 40px 40px;
  .head {
    display: flex;
    justify-content: space-between;
    height: 35px;
    line-height: 35px;
    border-bottom: 2px solid #c20c0c;

    .title {
      font-size: 20px;

      span {
        margin-left: 20px;
        font-size: 12px;
      }
    }

    .playcount {
      color: #c20c0c;
    }
  }

  .body {
    table {
      width: 670px;
      table-layout: fixed;

      .thead-tr {
        height: 39px;
        color: #666;
        text-align: left;
        background-color: #fcfcfc;

        th {
          padding-left: 8px;
          border-right: 1px solid #e8e8e8;
        }

        .index {
          width: 78px;
        }

        .table-title {
          width: 327px;
        }

        .duration {
          width: 90.5px;
        }

        .songer {
          width: 173.5px;
        }
      }
    }

    tbody {
      .playlist-item:nth-child(odd) {
        background-color: #f7f7f7;
      }

      .playlist-item {
        height: 30px;
        line-height: 30px;

        td {
          padding-left: 8px;
        }

        .play {
          position: relative;
          top: 5px;
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-right: 8px;
          background-position: 0 -103px;

          &:hover {
            cursor: pointer;
            background-position-y: -128.5px;
          }
        }
      }

      .playlist-item-prev {
        height: 69px;
        line-height: 69px;

        img {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
