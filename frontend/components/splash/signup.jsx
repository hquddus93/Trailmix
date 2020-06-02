import React from 'react';

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
        let user = this.state;
        e.preventDefault();
        this.props.signup(user);
        this.setState({ email: '', password: '', username: '' })
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
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
               
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
        )
    }
};

export default SignupForm;