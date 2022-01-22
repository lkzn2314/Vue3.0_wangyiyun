import playlistActions from '../actions/playlistActions';
import playlistMutations from '../mutations/playlistMutations';

const module = {
  state: () => ({
    hotPlaylistCategory: [],
    allPlaylist: [],
    total: 0,
    allPlaylistCategory: [],
    currentCat: '全部',
  }),
  actions: playlistActions,
  mutations: playlistMutations,
};

export default module;
