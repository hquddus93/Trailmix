import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';

import { fetchAllVideos, searchVideos } from '../../actions/video'
import VideoIndex from './video_index';
import { render } from 'react-dom';



const mSTP = (state) => ({
    videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    searchVideos: (keyword) => dispatch(searchVideos(keyword))
});

export default withRouter(connect(mSTP, mDTP)(VideoIndex));