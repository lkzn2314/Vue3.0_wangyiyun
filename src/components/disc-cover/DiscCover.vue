<template>
  <div class="discCover-wrapper" :style="{ width: width, height: height }">
    <div class="cover">
      <img :src="formatImgSize(info.picUrl, 100)" :alt="info.name" />
      <i class="play sprite_icon" />
      <i class="cover2 sprite_cover" />
    </div>
    <div class="covber-bottom">
      <div class="disc-name text-nowrap">{{ info.name }}</div>
      <div class="disc-singer text-nowrap">{{ info.artist.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { formatImgSize } from '@/utils/format';
export default {
  name: 'DiscCover',
  props: {
    info: Object,
    width: String,
    height: String,
  },
  setup() {
    return {
      formatImgSize,
    };
  },
};
</script>

<style lang="less" scoped>
.discCover-wrapper {
  font-size: 12px;

  .cover {
    position: relative;
    width: 100%;
    // height: ${props => props.width === '118px' ? '100px' : '130px'};
    height: 100px;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);

    .cover2 {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      // background-position: ${props => props.width === '118px' ? '0 -570px' : '0 -845px'};
    }

    img {
      height: 100%;
    }

    &:hover {
      cursor: pointer;

      .play {
        background-position: 0 -60px;
      }
    }

    .play {
      position: absolute;
      right: 23px;
      bottom: 7px;
      width: 17px;
      height: 17px;
      z-index: 2;
      text-indent: -9999px;
    }
  }

  .covber-bottom {
    margin-top: 5px;

    & > div:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    .disc-name {
      // font-size: ${props => props.width === '118px' ? '12px' : '14px'};
      // font-weight: ${props => props.width === '118px' ? '400' : '500'};
      color: #000;
    }
    .disc-singer {
      color: #333;
    }
  }
}
</style>
