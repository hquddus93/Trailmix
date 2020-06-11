import {connect} from 'react-redux';
import {fetchAllVideos} from '../../actions/video';
import Movies from './movies'

const mSTP = state => ({
    videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default connect(mSTP, mDTP)(Movies);
