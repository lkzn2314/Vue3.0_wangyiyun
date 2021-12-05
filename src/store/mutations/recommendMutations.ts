import {
    CHANGE_BANNERS
    // CHANGE_HOT_RECOMMEND,
    // CHANGE_NEW_DISC,
    // CHANGE_UP_RANKING,
    // CHANGE_NEW_RANKING,
    // CHANGE_ORIGIN_RANKING
} from '../mutation-types';

export default {
    [CHANGE_BANNERS](state: any, banners: any) {
        state.banners = banners;
    }
};