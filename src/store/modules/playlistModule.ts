import playlistActions from '../actions/playlistActions';
import playlistMutations from '../mutations/playlistMutations';

const module = {
  state: () => ({
    hotPlaylistCategory: [],
    allPlaylist: [],
  }),
  actions: playlistActions,
  mutations: playlistMutations,
};

export default module;
