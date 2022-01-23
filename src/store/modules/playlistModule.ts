import playlistActions from '../actions/playlistActions';
import playlistMutations from '../mutations/playlistMutations';

const module = {
  state: () => ({
    hotPlaylistCategory: [],
    allPlaylistCategory: [],
    allPlaylist: [],
    total: 0,
    currentCat: '全部',
  }),
  actions: playlistActions,
  mutations: playlistMutations,
};

export default module;
