import request from './request';

// 获取歌曲详情
export function getSongDetail(ids: string) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  });
}

// 获取歌词
export function getLyric(id: string) {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  });
}

// 获取歌单列表
export function getPlaylistDetail(id: string) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}

// 获取新碟详情
export function getDiscDetail(id: string) {
  return request({
    url: '/album',
    params: {
      id,
    },
  });
}
