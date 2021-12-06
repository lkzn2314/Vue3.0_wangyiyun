import {
    CHANGE_HOT_RECOMMEND,
    // CHANGE_NEW_DISC,
    // CHANGE_UP_RANKING,
    // CHANGE_NEW_RANKING,
    // CHANGE_ORIGIN_RANKING
} from '../mutation-types';

export default {

    [CHANGE_HOT_RECOMMEND](state: any, hotRecommends: any) {
        state.hotRecommends = hotRecommends;
    }

};