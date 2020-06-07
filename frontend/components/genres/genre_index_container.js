import {connect} from 'react-redux';
import GenreIndex from './genre_index';
import {fetchGenres} from '../../actions/genres'
import {fetchAllVideos} from '../../actions/video';

const mSTP = state => ({
    genres: Object.keys(state.entities.genres),
    videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default connect(mSTP, mDTP)(GenreIndex);