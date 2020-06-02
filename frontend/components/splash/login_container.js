import {connect} from 'react-redux';
// import Splash from './loginForm';
import { login } from '../../actions/session';
import LoginForm from './loginForm';
// import { Link } from 'react-router-dom';



const mSTP = (state) => ({
    errors: state.session.errors,
    formType: 'login',
    form: {
        email: "",
        password: ""
    },
    loggedIn: Boolean(state.session.id) 
    
});


const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    
});

export default connect(mSTP, mDTP)(LoginForm);