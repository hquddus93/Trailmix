import React from 'react';
import { Redirect, Link, Route } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.form;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    }

    handleSubmit(e) {
        this.path = null
        e.preventDefault();
        let user = this.state;
        this.props.signup(user)
        // .then(user => this.props.login(user))
        .then(this.path = true)
        // this.setState({ email: '', password: '', username: '' })
    }
    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }
    render() {


        if (this.path) {
            return (
                < Route path="/signup" >
                    <Redirect to="/videos" />
                </Route >
            )
        } else {
            return (
                <div>
                    <a href="/#/">
                        <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                            alt="netflix-font"
                            border="0"
                            id='logo' /></a>
                    <form onSubmit={this.handleSubmit} className='signup-form'>
                        <h1>Sign Up</h1>
                    {/* {this.renderErrors()} */}
                        <input type="text"
                            placeholder='Email'
                            onChange={this.update('email')} />
                        <input type="text"
                            placeholder='Username'
                            onChange={this.update('username')} />
                        <input type="password"
                            placeholder='Password'
                            onChange={this.update('password')} />
                        <button>Sign Up</button>
                    </form>
                </div>
            )
        }
    }
};

export default SignupForm;