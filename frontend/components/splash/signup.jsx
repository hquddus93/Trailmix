import React from 'react';
import { Redirect, Link, Route, withRouter } from 'react-router-dom';

// import CreateAccountContainer from '.'

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

    validEmail(email) {
        if (email.includes("@", '.com')) {
            return true
        }
        return false
    }

    handleSubmit(e) {
        
        e.preventDefault();
        this.props.clearErrors()
            
        if (this.validEmail(this.state.email)) {
            this.props.receiveEmail(this.state.email)
            this.props.history.push('/create_account')
        } else {
        //    return  <p className='signup-error'>Invalid Email</p>
        this.err = 'Invalid Email'
        }
            
    }
       
 
    render() {

        return (
            <div>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                {/* {this.renderErrors()} */}
                    <input type="text"
                        placeholder='    Email address'
                        value={this.state.email}
                        onChange={this.update('email')} 
                        />
                        <button> Try It Now </button>
                </form>
                    {this.err ? <p className='signup-error'>{this.err}</p> : null}
            </div>
        )
       
    }
};

export default withRouter(SignupForm);