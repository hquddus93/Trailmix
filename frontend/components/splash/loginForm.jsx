import React from 'react';
import DemoContainer from './demo_container';
import {Redirect, Link, Route} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

     

        this.state = { email: "", password: ""},
        this.handleSubmit = this.handleSubmit.bind(this);
    
    };

    componentDidMount() {
        this.props.clearErrors();
    }

    resetInputClasses() {
     let input = document.getElementById('login-input')
        input.className = 'login-form-input-a';
        let input2 = document.getElementById('login-input-pw');
        input2.className = 'login-form-input-b';
        let input3 = document.getElementById('general-errors-login')
        input3.className = 'default';

    }
    

    update(field) {
        return e => {
            this.resetInputClasses();
            this.props.clearErrors();
            this.setState({[field]: e.target.value})
        
        }
    };

 handleEmailError(){
    if (this.props.errors.indexOf("Please enter an email") > -1) {
        let input = document.getElementById('login-input')
        input.className = 'input-error'
        return "Please enter an email"
    }

 }

 handlePasswordErr() {
     if (this.props.errors.indexOf("Please enter a password") > -1){
         let input = document.getElementById('login-input-pw')
         input.className = 'input-error'
         return "Please enter a password"

    }
}

handleGeneralError() {
    if (this.props.errors.indexOf('Invalid email/password combination') > -1) {
        let input = document.getElementById('general-errors-login')
        input.className = 'general-errors-login'
        return 'Invalid email/password combination'
    }
}


handleSubmit(e) {

    this.resetInputClasses();
    this.props.clearErrors();
    e.preventDefault();
    let user = this.state;
    this.props.login(user)
    // this.renderErrors();

    this.setState({email: "", password: ""})

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
         
                 <DemoContainer />
           

                </nav>
            
            <form onSubmit={this.handleSubmit} className='login-form'>
                <h2>Sign In</h2>
                    <p id='general-errors-login' className='default'>{this.handleGeneralError()}</p>
                <input type="text" 
                    placeholder='    Email'
                    value={this.state.email}
                    onChange={this.update('email')}
                    id='login-input'
                        className='login-form-input-a' />
                    {/* // onBlur={() => this.handleEmailError()}/> */}
                { <p className='errors'>{this.handleEmailError()}</p> }
                <input type="password" 
                    placeholder='    Password'
                    value={this.state.password}
                    onChange={this.update('password')}
                    id='login-input-pw'
                    className='login-form-input-b' />       
                     <p className='errors'>{this.handlePasswordErr()}</p> 
                <button>Sign In</button>
               
               <div className='login-form-text'>
                <h3>New to TrailMix?</h3>
                <Link to='/' id='signup-link-on-login-form'>Sign Up Now</Link>

               </div>
            </form>

                <footer className='login-footer'>
                    <ul className='buttons'>
                        <li id='splash-questions'>Questions?</li>
                        <li>
                            <a href='https://github.com/hquddus93'>
                                <i className="fab fa-github" id='splash-fab'></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/hira-quddus-94963413b/'>
                                <i className="fab fa-linkedin" id='splash-fab'></i>
                            </a>
                        </li>
                    </ul>


                </footer>

            </div>
        )

    };
};

export default LoginForm;



 