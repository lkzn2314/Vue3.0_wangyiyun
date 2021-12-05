import {
    CHANGE_BANNERS
    // CHANGE_HOT_RECOMMEND,
    // CHANGE_NEW_DISC,
    // CHANGE_UP_RANKING,
    // CHANGE_NEW_RANKING,
    // CHANGE_ORIGIN_RANKING
} from '../mutation-types';
import {getBanners} from '@/network/discover';

export default {
    changeBanners(context: any) {
        getBanners().then((res: any) => {
            if(res.code === 200) {
                context.commit(CHANGE_BANNERS, res.banners);
            }
        });
    }
};