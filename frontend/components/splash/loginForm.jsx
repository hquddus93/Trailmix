import React from 'react';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.props.form;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;
        this.props.login(user);
        this.setState({email:'', password:''})
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign In</h1>
                <input type="text" 
                    placeholder='Email'
                    onChange={this.update('email')}/>
                <input type="password" 
                    placeholder='Password'
                    onChange={this.update('password')}/>
                <button>Sign In</button>
            </form>
        )
    }
};

export default LoginForm;