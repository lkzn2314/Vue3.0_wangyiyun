import request from './request';

// 轮播图
export function getBanners() {
  return request({
    url: '/banner'
  });
}

// 热门推荐
export function getHotRecommends(limit: number) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  });
}