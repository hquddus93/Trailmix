import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addToList, deleteFromList } from '../../actions/list';


import { fetchAllVideos, searchVideos } from '../../actions/video'
import VideoRow from './video_row';




const mSTP = (state) => ({
    videos: Object.values(state.entities.videos),
    list: state.entities.list,
    video: state.entities.videos[ownProps.match.params.videoId]
});

const mDTP = dispatch => ({
    addToList: (video) => dispatch(addToList(video)),
    deleteFromList: (videoId) => dispatch(deleteFromList(videoId)),
    fetchAllVideos: () => dispatch(fetchAllVideos())
});

export default withRouter(connect(mSTP, mDTP)(VideoRow));