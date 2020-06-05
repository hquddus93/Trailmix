import React from 'react';
import DemoContainer from './demo_container';
import {Redirect, Link, Route} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

     

        this.state = { email: "", password: ""},
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    };

    componentDidMount() {
        this.props.clearErrors();
    }
    

    update(field) {
        return e => {
            this.props.clearErrors()
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
        return 'Invalid email/password combination'
    }
}


handleSubmit(e) {

    e.preventDefault();
    let user = this.state;
    this.props.login(user)
    // this.renderErrors();

    this.setState({email: "", password: ""})

};



    renderErrors() {
     

        let errs = this.props.errors;

        if (errs === ["Please enter an email", "Please enter a password"]) {
            
            this.emailErr = "Please enter an email" 
            this.passwordErr = "Please enter a password"
        } else if (errs === ["Please enter a password"]) {
            

            this.passwordErr = "Please enter a password"
        } else if (errs === ["Please enter an email"]) {
            
            this.emailErr = "Please enter an email"
        }
        else if (errs === ['Invalid email/password combination']) {
            
            this.generalErr = 'Invalid email/password combination'
        } else {
            
            this.generalErr = ""
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
                {/* <ul className='buttons'> */}
                    {/* <li>
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
                    </li> */}
                 <DemoContainer />
           

                </nav>
            
            <form onSubmit={this.handleSubmit} className='login-form'>
                <h2>Sign In</h2>
                    <p className='errors'>{this.handleGeneralError()}</p>
                <input type="text" 
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.update('email')}
                    id='login-input'
                    className='default'/>
                <p className='errors'>{this.handleEmailError()}</p>
                <input type="password" 
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.update('password')}
                    id='login-input-pw'
                    className='default'/>
                    <p className='errors'>{this.handlePasswordErr()}</p>
                <button>Sign In</button>
               
               <div className='login-form-text'>
                <h3>New to TrailMix?</h3>
                <Link to='/' id='signup-link-on-login-form'>Sign Up Now</Link>

               </div>
            </form>


            </div>
        )

    };
};

export default LoginForm;



 