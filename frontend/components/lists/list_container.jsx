import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import List from './list';
import {addToList, deleteFromList} from '../../actions/list';

const mSTP = (state, ownProps) => ({
    list: state.entities.list,
    videos: state.entities.videos,
    currentUser: state.entities.users[state.session.id]
    // video: state.entities.videos[ownProps.match.params.videoId]

});

const mDTP = dispatch => ({
    addToList: (video, currentUser) => dispatch(addToList(video, currentUser)),
    deleteFromList: (videoId, currentUser) => dispatch(deleteFromList(videoId, currentUser))

});

export default withRouter(connect(mSTP, mDTP)(List));