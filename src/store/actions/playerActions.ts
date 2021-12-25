import {
    CHANGE_CURRENT_SONG
} from '../mutation-types';

import { getSongDetail } from '@/network/player';

export default {
    getSongDetailAction(context: any, ids: string) {
        getSongDetail(ids).then((res: any) => {
            console.log(1,res);
        });
    }
};