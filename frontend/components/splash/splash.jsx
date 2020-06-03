import LoginContainer from './login_container';
import DemoContainer from "./demo_container";
import SignupContainer from './signup_container';
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';



const Splash = (props) => {
    return(
      <div className='splash'>

        <div className='main'>
          <nav className='nav-bar'>
          <a href="http://trailmix-aa.herokuapp.com/">
            <img src="https://fontmeme.com/permalink/200602/b89239ba0483c23a0be252ebcabbe556.png"
              alt="netflix-font"
              border="0"
              id='logo' /></a>
            <Link to='/login' className='signin-btn'>
              <button id='signinbtn'>Sign In</button>
            </Link>
          </nav>

          <div className='mid'>
          <h2>Unlimited movies, TV shows, and more.</h2>
          <h3>  Watch anywhere. Cancel anytime. </h3> 
            <DemoContainer />
            <span className='span'>
              <p>Want to make an account?</p>
              <Link to="/signup" id='signup-link' > Sign Up </Link>
            </span>
          </div>
        </div>
        

          <div className='tv'>

          <div className='tv-text'>
            <h2>Enjoy on your TV.</h2>
            <br/>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>

            <img src={window.tvURL} width="150" height="150"/>

          </div>


          <div className='phone'>
            <div className='phone-text'>
            <h2> Download your shows to watch offline.</h2>
            <p> Save your favorites easily and always have something to watch.</p>
            </div>

          <img src={window.mobileURL} width="150" height="150" />

          </div>

        <div className='watch'>
          <div className='watch-text'>
            <h2>Watch everywhere.</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>

          <img src={window.deviceURL} width="150" height="150" />

        </div>




      </div>


    )
};

export default Splash;