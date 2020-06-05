import React from 'react';
import DemoContainer from './demo_container';
import {Redirect, Link, Route} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.props.clearErrors();

        this.state = { email: "", password: ""},
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    };

    update(field) {
        return e => {
            this.props.clearErrors()
            this.setState({[field]: e.target.value})
        
        }
    };

handleSubmit(e) {

    e.preventDefault();
    this.props.clearErrors();
    let user = this.state;
    this.props.login(user);
    this.setState({email: "", password: ""})

};


    // handleDemo() {
    //     this.props.login(this.props.form)
    // }
    renderErrors() {

        if (this.props.errors.length > 0) {
            return (
                this.props.errors.map((error, i) => (   
                    <p id='errors'
                        key={`error-${i}`}>
                            {error}      
                    </p>
                ))
            )
        }

    };

    render() {
        return(

            <div className='login-background'>
                <nav className='login-nav'>
                    <a href="https://trailmix-aa.heroku-app.com.com/#/">
                    <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                        alt="netflix-font"
                        border="0"
                        id='logo' 
                    />
                </a>
                <ul className='buttons'>
                    <li>
                        <a href='https://github.com/hquddus93'>
                            <buton>
                                <img src={window.gitURL} width="45" height="45" className='icon' />
                            </buton>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/hira-quddus-94963413b/'>
                            <buton >
                                <img src={window.linkURL} width="55" height="45" className='icon' />
                            </buton>
                        </a>
                    </li>
                    <li>
                        <DemoContainer />
                    </li>
                </ul>
                </nav>
            
            <form onSubmit={this.handleSubmit} className='login-form'>
                <h2>Sign In</h2>
                <p className='errors'>{this.renderErrors()}</p>
                <input type="text" 
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.update('email')}/>
                <input type="password" 
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.update('password')}/>
                <button>Sign In</button>
               
            </form>

            </div>
        )

    };
};

export default LoginForm;



 