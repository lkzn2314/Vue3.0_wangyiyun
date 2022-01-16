import { ActionContext } from 'vuex';
import * as actionTypes from '../mutation-types';
import { getToplist, getRankings } from '@/network/discover';
import { State } from '@popperjs/core';

export default {
  getToplistAction(context: ActionContext<State, any>) {
    getToplist().then((res: any) => {
      if (res.code === 200) {
        console.log('toplist', res);
        context.commit(actionTypes.CHANGE_TOPLIST, res.list);
      }
    });
  },

  getRankingDetailAction(context: ActionContext<State, any>, playlistId: string) {
    getRankings(playlistId).then((res: any) => {
      console.log('ranking', res);
      context.commit(actionTypes.CHANGE_PLAYLIST, res?.playlist?.tracks);
    });
  },

  changeCurrentIndexAction(context: ActionContext<State, any>, index: number) {
    context.commit(actionTypes.CHANGE_CURRENT_INDEX, index);
  },
};
