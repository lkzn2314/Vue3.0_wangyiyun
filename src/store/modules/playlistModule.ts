import playlistActions from '../actions/playlistActions';
import playlistMutations from '../mutations/playlistMutations';

const module = {
    state: () => ({
        hotPlaylistCategory: [],
    }),
    actions: playlistActions,
    mutations: playlistMutations
};

export default module;