import {connect} from 'react-redux';
import {logout} from '../../actions/session';
import Video from './video'

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mDTP)(Video)