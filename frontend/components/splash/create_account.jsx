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
        this.setState({email: this.props.email})
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
        this.setState({ email: "", password: "" })
    }

    render() {
        return (
            <div className='create-account'>
                <nav className='create-account-nav-bar'>
                <a href="https://fontmeme.com/netflix-font/">
                    <img src="https://fontmeme.com/permalink/200604/3150eaf395337ebc34eca4aae8e3c0bf.png"
                        alt="netflix-font"
                        border="0"
                        width='125'
                        height='50'
                        id='logo' /></a>
                <div className='buttons'>
                    <DemoContainer />
                    <Link to='/login' className='signin-btn'>
                        <button id='signinbtn'>Sign In</button>
                    </Link>
                </div>
                </nav>

                
                <form className='create-account-text' onSubmit={this.handleSubmit}>
                   {this.renderErrors()}
                <h2 className='cat-h2'> Create a password to start your membership.</h2>
                <h3 className='cat-h3'>Just a few more steps and you're done!
                We hate paperwork, too.</h3>

                    <input type='text' height='50' value={this.state.email} onChange={this.update('email')}/>
                    
               
                    <input type='text' height='50' value={this.state.username} placeholder='Username' onChange={this.update('username')}/>
                    
         
                    <input type='password' height='50' value={this.state.password} placeholder='Password' onChange={this.update('password')}/>
                     
              
                    
                    <button>CONTINUE</button>
       
                   
                    
                </form>

            </div>
        )
    }
};

export default withRouter(CreateAccount);