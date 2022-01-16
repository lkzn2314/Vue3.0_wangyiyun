import * as actionTypes from '../mutation-types';

export default {
  [actionTypes.CHANGE_TOPLIST](state: Record<string, any>, toplist: Array<any>) {
    state.toplist = toplist;
  },

  [actionTypes.CHANGE_CURRENT_INDEX](state: Record<string, any>, index: number) {
    state.currentIndex = index;
  },

  [actionTypes.CHANGE_PLAYLIST](state: Record<string, any>, playlist: { [key: string]: any }) {
    state.playlist = playlist;
  },
};
