
import React from "react";
import LoginContainer from './splash/login_container'
import DemoContainer from "./splash/demo_container";
import SignupContainer from './splash/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import VideoContainer from './splash/video_container';
import Splash from './splash/splash';

const App = () => (
    <div>
       
      
        <Switch>
            <AuthRoute exact path='/login' component={LoginContainer} />
            <AuthRoute exact path='/demo' component={DemoContainer}/>
            <AuthRoute exact path='/signup' component={SignupContainer}/>
            <ProtectedRoute path='/videos' component={VideoContainer} />
            <Route exact path='/' component={Splash} />
        </Switch>
    </div>
);

export default App;