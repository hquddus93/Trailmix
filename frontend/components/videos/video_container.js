import { connect } from 'react-redux';
import { logout } from '../../actions/session';

import { fetchAllVideos } from '../../actions/video'
import VideosIndex from './video';
import { render } from 'react-dom';



const mSTP = (state) => ({
    videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default connect(mSTP, mDTP)(VideosIndex)