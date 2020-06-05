
import React from "react";
import LoginContainer from './splash/login_container'
import DemoContainer from "./splash/demo_container";
import SignupContainer from './splash/signup_container'
import { AuthRoute, ProtectedRoute, SignRoute } from '../util/route_util';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import VideoContainer from './splash/video_container';
import CreateAccountContainer from './splash/create_account_container';
import Splash from './splash/splash';
import Complete from './splash/complete';
import MasterSignup from "./splash/pseudo-signup";

const App = () => (
    <div>
       
      
        <Switch>
            <AuthRoute exact path='/login' component={LoginContainer} />
            <SignRoute exact path='/signup' component={SignupContainer}/>
            <AuthRoute exact path='/create_account' component={CreateAccountContainer}/>
            <ProtectedRoute path='/videos' component={VideoContainer} />
            <Route exact path='/complete' component={Complete}/>
            <AuthRoute exact path='/' component={Splash} />
  
        </Switch>
    </div>
);

export default App;