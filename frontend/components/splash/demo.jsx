import React from 'react';

class Demo extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {email: 'email', password: 'password', username: 'username'}
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }
    render(){
        return (
            <button onClick={this.handleSubmit} className='demo-btn'>Demo</button>
        )
    }
};

export default Demo;