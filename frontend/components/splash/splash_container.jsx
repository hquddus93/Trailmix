import { connect } from 'react - redux';
import Splash from './loginForm';
import { login, signup } from '../../actions/session';
// import { Link } from 'react-router-dom';



const mSTP = (state) => ({
    errors: state.errors
    
});


const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)) 
})

export default connect(mSTP, mDTP)(Splash);