import {connect} from 'react-redux';
import {fetchAllVideos} from '../../actions/video';
import Movies from './movies'
import {logout} from '../../actions/session'

const mSTP = state => ({
    videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    logout: () => dispatch(logout())

});

export default connect(mSTP, mDTP)(Movies);
