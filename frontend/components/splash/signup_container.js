import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session';
import SignupForm from './signup';

const mapStateToProps = state => ({
    errors: state.errors,
    navLink: <Link to="/login">log in instead</Link>,
    form: {
        email: "",
        password: '',
        username: ''
    }
});

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        // login: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);