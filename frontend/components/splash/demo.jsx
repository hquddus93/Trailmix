import React from 'react';
import {Redirect, Route, useHistory} from 'react-router-dom'

class Demo extends React.Component{
    constructor(props){
        super(props);
  
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: "email",
            password: 'password',
          
        }
    };

    handleSubmit(e) {
        this.path = null;
        e.preventDefault();
        this.props.login(this.state)
        .then(this.path = true)
            // .then(< Route path="/demo" >
            //     <Redirect to="/videos" />
            // </Route >)

    }
    render(){


        if (this.path) {
            return (
                < Route path="/demo" >
                    <Redirect to="/videos" />
                </Route >
            )
        } else {
            return (
                <button onClick={this.handleSubmit} className='demo-btn'>Demo</button>        
            )
        }
    
    }
};

export default Demo;