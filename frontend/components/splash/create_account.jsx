import React from 'react';
import DemoContainer from './demo_container';
import { Redirect, Link, Route, withRouter } from 'react-router-dom';


class CreateAccount extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // email: JSON.parse(localStorage.getItem('email')),
            email: this.props.email,
            password: '',
            username: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    componentDidMount() {
        this.props.clearErrors();
       
    }
    
   
handleEmailError() {
    if (this.props.errors.indexOf("Email can't be blank") > -1) {
        let input = document.getElementById('signup-input')
        input.className = 'input-error-signup'
        return "Please enter an email"
    }

}


handleGeneralError() {
    if (this.props.errors.indexOf("Username can't be blank") > -1) {
        let input = document.getElementById('signup-input-un')
        input.className = 'input-error-signup'
        return "Username can't be blank"
    }
}

handlePasswordError() {

    if (this.props.errors.indexOf("Password is too short (minimum is 6 characters)") > -1) {
        let input = document.getElementById('signup-input-pw')
        input.className = 'input-error-signup'
        return "Password is too short(minimum is 6 characters)"

    }
}

    

    update(field) {
        
        return e => {
            this.props.clearErrors()
            this.setState({ [field]: e.target.value })
        }
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


    handleSubmit(e) {
        
        e.preventDefault();
        this.props.clearErrors();
        let user = this.state;
        this.props.signup(user);
        this.setState({password: "" })
    }

    render() {
        return (
            <div className='create-account'>
                <nav className='create-account-nav-bar'>
                    <a href="https://trailmix-aa.heroku-app.com.com/#/">
                    <img src="https://fontmeme.com/permalink/200604/3150eaf395337ebc34eca4aae8e3c0bf.png"
                        alt="netflix-font"
                        border="0"
                        width='125'
                        height='50'
                        id='logo' /></a>
                <div className='ca-buttons'>
                    <DemoContainer />
                    <Link to='/signin' className='signin-link'>Sign In</Link>
                </div>
                </nav>

                
                <form className='create-account-text' onSubmit={this.handleSubmit}>
                   {/* {this.renderErrors()} */}
                <h2 className='cat-h2'> Create a password to start your membership.</h2>
                <h3 className='cat-h3'>Just a few more steps and you're done!
                We hate paperwork, too.</h3>

                    <input type='text' height='50' value={this.state.email} placeholder='Email' onChange={this.update('email')} id ='signup-input'/>
                   
                    <p className='ca-errors'>{this.handleEmailError()}</p>
               
                    <input type='text' height='50' value={this.state.username} placeholder='Username' onChange={this.update('username')} id='signup-input-un'/>
                    <p className='ca-errors'>{this.handleGeneralError()}</p>
         
                    <input type='password' height='50' value={this.state.password} placeholder='Password' onChange={this.update('password')} id='signup-input-pw'/>
                
                    <p className='ca-errors'>{this.handlePasswordError()}</p>
              
                    
                    <button>CONTINUE</button>
       
                   
                    
                </form>

            </div>
        )
    }
};

export default withRouter(CreateAccount);