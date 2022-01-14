import {
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_DISC,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
} from '../mutation-types';

export default {
  [CHANGE_HOT_RECOMMEND](state: any, hotRecommends: Array<{ [key: string]: any }>) {
    state.hotRecommends = hotRecommends;
  },

  [CHANGE_NEW_DISC](state: any, newDiscs: Array<{ [key: string]: any }>) {
    state.newDiscs = newDiscs;
  },

  [CHANGE_UP_RANKING](state: any, upRankings: Array<{ [key: string]: any }>) {
    state.upRankings = upRankings;
  },

  [CHANGE_NEW_RANKING](state: any, newRankings: Array<{ [key: string]: any }>) {
    state.newRankings = newRankings;
  },

  [CHANGE_ORIGIN_RANKING](state: any, originRankings: Array<{ [key: string]: any }>) {
    state.originRankings = originRankings;
  },
};
