import React from 'react';
import { Redirect, Link, Route } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        
        this.state = this.props.form;
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    update(field) {
        return e => {
            this.props.clearErrors()
            this.setState({ [field]: e.target.value })
            
        }
    }

    handleSubmit(e) {
        
        e.preventDefault();
        this.props.clearErrors()
        let user = this.state;
        this.props.signup(user);
        this.setState({ email: "", password: "", username: "" })
       
    }
    renderErrors() {
    
        return (
            this.props.errors.map((error, i) => (
                <p id='errors'
                    key={`error-${i}`}>
                        {error}
                </p>
                )
            )
        );
    }
    render() {

        return (
            <div>
                <a href="/#/">
                    <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                        alt="netflix-font"
                        border="0"
                        id='logo' /></a>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <h1>Sign Up</h1>
                {this.renderErrors()}
                    <input type="text"
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.update('email')} />
                    <input type="text"
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.update('username')} />
                    <input type="password"
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.update('password')} />
                    <button>Sign Up</button>
                </form>
            </div>
        )
       
    }
};

export default SignupForm;