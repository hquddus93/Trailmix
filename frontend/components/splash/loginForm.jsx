import React from 'react';
import {Redirect, Link} from 'react-router-dom';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        let redirect  = false;
        this.state = {form: this.props.form},
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    };

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;
        this.props.login(user)
        // .then()
        // if (this.props.loggedIn) {
        //     return <Redirect to="/videos" />;
        // }
    };


    renderErrors() {
        if (this.props.errors) {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )};
    };

    render() {
       
        return(

            <div>
                <a href="/#/">
                    <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
                        alt="netflix-font"
                        border="0"
                        id='logo' /></a>
            
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

// class MyComponent extends React.Component {
//     state = {
//         redirect: false
//     }

    // handleSubmit() {
    //     axios.post(/**/)
    //         .then(() => this.setState({ redirect: true }));
    // }

    // render() {
    //     const { redirect } = this.state;

    //     if (redirect) {
    //         return <Redirect to='/somewhere' />;
    //     }

    //     return <RenderYourForm />;
    // }