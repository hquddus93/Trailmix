import React from 'react';
import CreateAccount from './create_account';
import Complete from './complete';

class MasterSignup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            username: '',
            password: '',
            email: ''
        }
    }

    nextStep() {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    update(field) {
        return e => {
            this.props.clearErrors()
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        const { username, password, email} = this.state;
        const values = { username, password, email};
        switch (this.state.step) {
            case 1:
                return (
                <div>
                    <form className='signup-form'>
                        {/* {this.renderErrors()} */}
                        <input type="text"
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                        {/* <Link to='/create_account'> */}
                        <button onClick={this.handleSubmit}> Try It Now </button>
                        {/* </Link> */}
                        {/* {this.renderErrors} */}
                    </form>
                </div>
                )
                
            case 2:
                return <CreateAccount
                    nextStep={this.nextStep}
                    update={this.update}

                    values={values}
                />
            case 3:
                return <Complete
                    nextStep={this.nextStep}
                    update={this.update}

                    values={values}
                />
      
        }
    }
}

export default MasterSignup;