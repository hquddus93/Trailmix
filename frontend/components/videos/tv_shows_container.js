import { connect } from 'react-redux';
import { fetchAllVideos } from '../../actions/video';
import TvShows from './tv_shows'

const mSTP = state => ({
    videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default connect(mSTP, mDTP)(TvShows);
