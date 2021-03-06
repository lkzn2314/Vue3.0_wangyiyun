import { ActionContext } from 'vuex';
import * as actionTypes from '../mutation-types';
import {
  getHotPlaylistCategory,
  getAllPlaylistCategory,
  getAllPlaylist,
  allPlaylist,
} from '@/network/discover';
import { State } from '@popperjs/core';

export default {
  getHotPlaylistAction(context: any) {
    getHotPlaylistCategory().then((res: any) => {
      if (res.code === 200) {
        // console.log(res);
        context.commit(actionTypes.CHANGE_HOT_PLAYLIST_CATEGORY, res.tags);
      }
    });
  },

  getAllPlaylistAction(context: ActionContext<State, any>, params: allPlaylist) {
    getAllPlaylist(params).then((res: any) => {
      console.log('allPlaylist', res);
      if (res.code === 200) {
        context.commit(actionTypes.CHANGE_ALL_PLAYLIST, res.playlists);
        context.commit(actionTypes.CHANGE_TOTAL, res.total);
      }
    });
  },

  changeCurrentCatAction(context: ActionContext<State, any>, currentCat: string) {
    context.commit(actionTypes.CHANGE_CURRENT_CAT, currentCat);
  },

  getAllPlaylistCategoryAction(context: ActionContext<State, any>) {
    getAllPlaylistCategory().then((res: any) => {
      // console.log('category', res);
      if (res.code === 200) {
        const categories: { [key: string]: any } = Object.entries(res.categories).map(
          ([key, value]) => ({
            name: value,
            subs: [],
          }),
        );
        for (const item of res.sub) {
          categories[item.category].subs.push(item);
        }
        // console.log(222, categories);
        context.commit(actionTypes.CHANGE_ALL_PLAYLIST_CATEGORY, categories);
      }
    });
  },
};
