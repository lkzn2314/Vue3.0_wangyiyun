import { ActionContext } from 'vuex';
import * as actionTypes from '../mutation-types';
import { getToplist } from '@/network/discover';
import { State } from '@popperjs/core';

export default {
  getToplistAction(context: ActionContext<State, any>) {
    getToplist().then((res: any) => {
      if (res.code === 200) {
        console.log(222, res);
        context.commit(actionTypes.CHANGE_TOPLIST, res.list);
      }
    });
  },
};
