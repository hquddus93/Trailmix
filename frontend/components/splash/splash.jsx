import LoginContainer from './login_container';
import DemoContainer from "./demo_container";
import SignupContainer from './signup_container';
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';



const Splash = (props) => {
    return(

        <div className='main'>
          <nav className='nav-bar'>
          <a href="/#/">
            <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
              alt="netflix-font"
              border="0"
              id='logo' /></a>
            <Link to='/login' className='signin-btn'>
              <button id='signinbtn'>Sign In</button>
            </Link>
          </nav>
          <section className='mid'>
          <h2>Unlimited movies, TV shows, and more.</h2>
          <h3>  Watch anywhere. Cancel anytime. </h3> 
            <DemoContainer />
            
            <span className='span'>
              <p>Want to make an account?</p>
              <Link to="/signup" id='signup-link' > Sign Up </Link>
            </span>
          </section>
        </div>
    )
};

export default Splash;