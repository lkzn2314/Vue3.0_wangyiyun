import playerActions from '../actions/playerActions';
import playerMutations from '../mutations/playerMutations';

const module = {
    state: () => ({
        currentSong: {},
        playList: [],
        currentSongIndex: 0,
        sequence: 0,    //0 循环  1 随机  2 单曲
        lyric: [],
        lyricItemIndex: 0
    }),
    actions: playerActions,
    mutations: playerMutations
};

export default module;
