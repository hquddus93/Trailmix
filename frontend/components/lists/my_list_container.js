import {connect} from 'react-redux';
import myList from './my_list';
import {fetchAllVideos} from '../../actions/video';


const mSTP = state => ({
    videos: state.entities.videos
})

const mDTP = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
})

export default connect(mSTP, mDTP)(myList);