import {connect} from 'react-redux';
import myList from './my_list';
import {fetchAllVideos} from '../../actions/video';
import {logout} from '../../actions/session'


const mSTP = state => ({
    videos: state.entities.videos,
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(myList);