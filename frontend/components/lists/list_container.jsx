import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import List from './list';
import {addToList, deleteFromList} from '../../actions/list';

const mSTP = (state, ownProps) => ({
    list: state.entities.list,
    videos: state.entities.videos
    // video: state.entities.videos[ownProps.match.params.videoId]

});

const mDTP = dispatch => ({
    addToList: (video) => dispatch(addToList(video)),
    deleteFromList: (videoId) => dispatch(deleteFromList(videoId))

});

export default withRouter(connect(mSTP, mDTP)(List));