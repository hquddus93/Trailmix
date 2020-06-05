import LoginContainer from './login_container';
import DemoContainer from "./demo_container";
import SignupContainer from './signup_container';
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignupForm from './signup';



const Splash = (props) => {
    return(
      <div className='splash'>
        {/* <div class='div'>
        </div> */}
        <div className='main'>
          <nav className='nav-bar'>
            <a href="https://fontmeme.com/netflix-font/">
              <img src="https://fontmeme.com/permalink/200604/3150eaf395337ebc34eca4aae8e3c0bf.png" 
              alt="netflix-font" 
              border="0"
                width='125'
                height='50'
                id='logo'/></a>
              <div className='buttons'>

              {/* <img src={window.gitURL} width="50" height="50" className='icon'/>

              <img src={window.linkURL} width="50" height="50" className='icon'/> */}


                <DemoContainer />
                <Link to='/login' className='signin-btn'>
                  <button id='signinbtn'>Sign In</button>
                </Link>
              </div>
          </nav>

          <div className='mid'>
          <h2>Unlimited movies, TV shows, and more.</h2>
          <h3>  Watch anywhere. Cancel anytime. </h3> 
          </div>
            <SignupContainer />
          <p className='signup-text'>Ready to watch? Enter your email to create or restart your membership.</p>
           

        </div>
        

          <div className='tv'>

          <div className='tv-text'>
            <h2>Enjoy on your TV.</h2>
            <br/>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>

            <img src={window.tvURL} width="500" height="500"/>

          </div>


          <div className='phone'>
            <div className='phone-text'>
            <h2> Download your shows to watch offline.</h2>
            <p> Save your favorites easily and always have something to watch.</p>
            </div>

          <img src={window.mobileURL} width="500" height="500" />

          </div>

        <div className='watch'>
          <div className='watch-text'>
            <h2>Watch everywhere.</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>

          <img src={window.deviceURL} width="500" height="500" />

        </div>




      </div>


    )
};

export default Splash;