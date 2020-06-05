import {connect} from 'react-redux';
import {logout} from '../../actions/session';
import Videos from './video'

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mDTP)(Videos)