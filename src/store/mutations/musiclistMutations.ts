import * as actionTypes from '../mutation-types';

export default {
  [actionTypes.CHANGE_TOPLIST](state: Record<string, any>, toplist: Array<any>) {
    state.toplist = toplist;
  },
};
