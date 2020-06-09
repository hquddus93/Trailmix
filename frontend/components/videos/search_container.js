import { connect } from 'react-redux';
import { logout } from '../../actions/session';

import { withRouter } from 'react-router';

import { fetchAllVideos, searchVideos } from '../../actions/video'
import Search from './search';




const mSTP = (state) => ({
    videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    searchVideos: (keyword) => dispatch(searchVideos(keyword))
});

export default withRouter(connect(mSTP, mDTP)(Search));