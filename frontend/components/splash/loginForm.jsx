import React from 'react';
import {Redirect, Link, Route} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: ""},
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    };

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    };

    handleSubmit(e) {

        e.preventDefault();
        let user = this.state;
        if (this.props.login(user)) {
            this.setState({email: "", password: ""})
        } else {
            return this.renderErrors();
        }
        
      
       
    };


    // handleDemo() {
    //     this.props.login(this.props.form)
    // }
    renderErrors() {

        if (this.props.errors.length > 0) {

            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li 
                        id='errors'
                        key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        }

    };

    render() {
        return(

            <div>
                <a href="/#">
                    <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                        alt="netflix-font"
                        border="0"
                        id='logo' 
                    />
                </a>
            
            <form onSubmit={this.handleSubmit} className='login-form'>
                <h2>Sign In</h2>
                {this.renderErrors()}
                <input type="text" 
                    placeholder='Email'
                    onChange={this.update('email')}/>
                <input type="password" 
                    placeholder='Password'
                    onChange={this.update('password')}/>
                <button>Sign In</button>
                <span className='login-span'>
                    <p>New to Netflix?</p>
                        <Link to="/signup" id='span-link'> Sign Up Now.</Link>
                </span>
            </form>

            </div>
        )

    };
};

export default LoginForm;



 