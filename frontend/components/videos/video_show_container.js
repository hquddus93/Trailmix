import {connect} from 'react-redux';
import VideoShow from './video_show';
import {fetchVideo} from '../../actions/video'

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId]
});


const mDTP = dispatch => ({
    fetchVideo: (video) => dispatch(fetchVideo(video))

});


export default connect(mSTP, mDTP)(VideoShow);