import { connect } from 'react-redux';
import CreateAccount from './create_account';
import {signup, clearErrors} from '../../actions/session'


const mSTP = state => ({
    
    email: state.email,
    errors: Object.values(state.errors.session)

    
});

const mDTP = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(CreateAccount);