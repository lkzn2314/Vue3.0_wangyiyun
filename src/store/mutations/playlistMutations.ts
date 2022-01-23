import * as actionTypes from '../mutation-types';

export default {
  [actionTypes.CHANGE_HOT_PLAYLIST_CATEGORY](state: any, hotPlaylistCategory: any) {
    state.hotPlaylistCategory = hotPlaylistCategory;
  },

  [actionTypes.CHANGE_ALL_PLAYLIST_CATEGORY](state: any, allPlaylistCategory: any) {
    state.allPlaylistCategory = allPlaylistCategory;
  },

  [actionTypes.CHANGE_ALL_PLAYLIST](state: any, allPlaylist: any) {
    state.allPlaylist = allPlaylist;
  },

  [actionTypes.CHANGE_TOTAL](state: any, total: number) {
    state.total = total;
  },

  [actionTypes.CHANGE_CURRENT_CAT](state: any, cat: string) {
    state.currentCat = cat;
  },
};
