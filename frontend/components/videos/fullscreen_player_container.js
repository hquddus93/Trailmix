import {connect} from 'react-redux';
import FullscreenPlayer from './fullscreen_player';
import {fetchVideo, fetchAllVideos} from '../../actions/video';
import {withRouter} from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    fetchVideo: video => dispatch(fetchVideo(video)),
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default withRouter(connect(mSTP, mDTP)(FullscreenPlayer));