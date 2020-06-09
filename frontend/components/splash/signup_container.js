import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors, receiveEmail } from '../../actions/session';
import SignupForm from './signup';

const mapStateToProps = state => ({
    errors: Object.values(state.errors.session),
    form: {
        email: '',
        password: '',
        username: ''
    }
});

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        receiveEmail: (email) => dispatch(receiveEmail(email))
    };

    
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);