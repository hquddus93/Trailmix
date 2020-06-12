import {connect} from 'react-redux';
import FullscreenPlayer from './fullscreen_player';
import {fetchVideo} from '../../actions/video';

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    fetchVideo: video => dispatch(fetchVideo(video))
});

export default connect(mSTP, mDTP)(FullscreenPlayer);